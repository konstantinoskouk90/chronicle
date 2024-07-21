// Event listener for messages from content scripts or other parts of the extension
chrome.runtime.onMessage.addListener(async (message, _sender, _sendResponse) => {
    const send = message.send;

    console.log('message', message);

    if (message.from === "content") {
        if (!!message.found) {
            await chrome.storage.local.set({ 'playlist_scanned': send });
        } else {
            await chrome.storage.local.remove('playlist_scanned');
        }

        await chrome.runtime.sendMessage({ data: "VIDEOS_SCANNED" });
    }

    if (message.action === "activeTab") {
        chromeExtension.activeTab(send);
    }

    if (message.action === "updatePlaylist") {
        chromeExtension.updatePlaylist(send);
    }

    if (message.action === "createPlaylist") {
        chromeExtension.createPlaylist(send);
    }
});

const chromeExtension = {
    // Function to activate the extension in the active tab
    activeTab: (caller, callback) => {
        console.log('caller', caller);
        console.log('callback', callback);

        chrome.tabs.query({ active: true, currentWindow: true }, async (tabs) => {
            var tab = tabs[0];

            if (tabs.length > 0 && !tabs[0].url.startsWith("chrome://")) {
                console.log('tab', tab);
                
                await chrome.scripting.executeScript({
                    target: { tabId: tab.id },
                    files: ["js/content.js"],
                });
            } else {
                chrome.runtime.sendMessage({ data: "CANNOT_SCAN_PAGE" });
            }

            if (typeof callback === 'function') {
                callback();
            }
        });
    },
    // Function to construct and update playlist data
    constrObj: async (title, date_modified, description, status, lastAdded, count_plays, num_vids, thumbnails, img_src, link, action) => {
        let playlistData = await chrome.storage.local.get('playlist');
        playlistData = playlistData.playlist || {};

        playlistData[title] = {
            date_modified,
            description,
            status,
            lastAdded,
            plays: count_plays,
            videos: num_vids,
            thumbnails,
            image: img_src,
            link,
        };

        await chrome.storage.local.set({ 'playlist': playlistData });

        // Send message based on action
        switch (action) {
            case "ADD_VIDEO":
                chrome.runtime.sendMessage({ data: "ADDED_VIDEO" });
                break;
            case "PLAY_PLAYLIST":
                chrome.runtime.sendMessage({ data: "PLAYED_PLAYLIST" });
                break;
            case "CREATE_PLAYLIST":
                chrome.runtime.sendMessage({ data: "CREATED_PLAYLIST" });
                break;
            case "SAVE_PLAYLIST":
                chrome.runtime.sendMessage({ data: "SAVED_PLAYLIST" });
                break;
            case "SAVE_VIDEO_THUMB":
                chrome.runtime.sendMessage({ data: "SAVED_VIDEO_THUMB" });
                break;
            case "SAVE_VIDEO_POS_THUMB":
                chrome.runtime.sendMessage({ data: "SAVED_VIDEO_POS_THUMB" });
                break;
            case "DELETE_VIDEO":
                chrome.runtime.sendMessage({ data: "DELETED_VIDEO" });
                break;
            case "SCAN_ADD_VIDEO":
                chrome.runtime.sendMessage({ data: "SCANNED_ADDED_VIDEO" });
                break;
            default:
                break;
        }
    },
    // Function to update playlist with new videos
    updatePlaylist: (caller, callback) => {
        const { playlist_name, playlist_action, playlist_add_vid_by_url } = caller;
    
        chrome.tabs.query({ active: true, currentWindow: true }, async (tabs) => {
            console.log('tabs', tabs);
            
            const tab = tabs[0];
            const tabsURL = tab.url;
    
            console.log('queryResult', tab);
    
            if (playlist_action === "ADD_VIDEO" &&
                (/\/\/www\.youtube\.com\/watch.*v\=/.test(tabsURL) && playlist_add_vid_by_url === undefined) ||
                (playlist_add_vid_by_url !== undefined)) {
    
                let video_id;
    
                if (/\/\/www\.youtube\.com\/watch.*v\=/.test(tabsURL) && playlist_add_vid_by_url === undefined) {
                    video_id = tabsURL.match(/watch.*v\=([^&]+)/)[1];
                } else {
                    video_id = /\/\/www\.youtube\.com\/watch.*v\=/.test(playlist_add_vid_by_url) ?
                        playlist_add_vid_by_url.match(/watch.*v\=([^&]+)/)[1] :
                        undefined;
                }
    
                const playlistData = await new Promise((resolve) => {
                    chrome.storage.local.get('playlist', resolve);
                });
    
                const storedPlaylist = playlistData.playlist || {};
                const all_IDs = storedPlaylist[playlist_name]?.link || "";
                const numVids = storedPlaylist[playlist_name]?.videos || 0;
    
                if (!all_IDs.length) {
                    if (video_id !== undefined) {
                        caller.playlist = video_id;
                        await chromeExtension.createPlaylist(caller);
                    }
                } else {
                    if (video_id !== undefined) {
                        const prod = new RegExp(video_id);
                        if (!prod.test(all_IDs) && numVids < 50) {
                            caller.playlist = all_IDs.match(/video_ids=(.*)/)[1] + "," + video_id;
                            await chromeExtension.createPlaylist(caller);
                        } else if (numVids === 50) {
                            chrome.runtime.sendMessage({ data: "MAX_VIDEO" });
                        } else if (prod.test(all_IDs)) {
                            chrome.runtime.sendMessage({ data: "VIDEO_EXISTS" });
                        }
                    } else {
                        chrome.runtime.sendMessage({ data: "INVALID_LINK" });
                    }
                }
            } else {
                chrome.runtime.sendMessage({ data: "INVALID_PAGE" });
            }
    
            if (typeof callback === 'function') {
                callback();
            }
        });
    },    
    // Function to create a new playlist
    createPlaylist: async (caller) => {
        console.log('caller', caller);
        const { playlist_name, playlist_description, playlist_image, playlist, playlist_plays, thumbnails, playlist_action } = caller;
        const date_modified = new Date();
        const extract_ids = playlist || "";
        const count_plays = playlist_plays || "0";
        const lastAddedLink = extract_ids ? `https://www.youtube.com/oembed?url=${encodeURIComponent(`https://www.youtube.com/watch?v=${extract_ids.split(",")[extract_ids.split(",").length - 1]}`)}` : "";

        if (extract_ids) {
            let link = `https://www.youtube.com/watch_videos?&title=${playlist_name}&video_ids=${extract_ids}`;
            let status = "enabled";
            let num_vids = extract_ids.split(",").length;

            try {
                // Fetch last added video's title
                const response = await fetch(lastAddedLink);
                if (response.ok) {
                    const data = await response.json();
                    let lastAdded = data.title || "";

                    await chromeExtension.constrObj(playlist_name, date_modified, playlist_description, status, lastAdded, count_plays, num_vids, thumbnails, playlist_image, link, playlist_action);
                } else {
                    throw new Error("Failed to fetch last added video");
                }
            } catch (error) {
                console.error("Error fetching last added video:", error);
                if (caller.playlist_action === "ADD_VIDEO") {
                    chrome.runtime.sendMessage({ data: "VIDEO_UNAVAILABLE" });
                }
                if (caller.playlist_action === "PLAY_PLAYLIST") {
                    await chromeExtension.constrObj(playlist_name, date_modified, playlist_description, status, "", count_plays, num_vids, thumbnails, playlist_image, link, playlist_action);
                }
            }
        } else {
            await chromeExtension.constrObj(playlist_name, date_modified, playlist_description, "disabled", "", 0, 0, "", "", "", playlist_action);
        }
    },
};