chrome.runtime.onMessage.addListener(async (message, _sender, _sendResponse) => {
    console.log('Received message:', message);

    try {
        if (message.from === "content") {
            await chrome.storage.local.remove('playlist_scanned');

            if (message.found) {
                await chrome.storage.local.set({ 'playlist_scanned': message.send });
            }

            chrome.runtime.sendMessage({ data: "VIDEOS_SCANNED" });
        }

        if (message.action) {
            switch (message.action) {
                case "activeTab":
                    await chromeExtension.activeTab(message.send);

                    break;
                case "updatePlaylist":
                    chromeExtension.updatePlaylist(message.send);

                    break;
                case "createPlaylist":
                    await chromeExtension.createPlaylist(message.send);

                    break;
                default:
                    console.log('Unknown action:', message.action);
            }
        }
    } catch (error) {
        console.error('Error processing message:', error);
    }
});

const chromeExtension = {
    // Function to activate the extension in the active tab
    activeTab: async (_caller, callback) => {
        chrome.tabs.query({ active: true, currentWindow: true }, async (tabs) => {
            var tab = tabs[0];

            if (tabs.length > 0 && !tabs[0].url.startsWith("chrome://")) {
                if (tab.url.startsWith("http") || tab.url.startsWith("https")) {
                    try {
                        await chrome.scripting.executeScript({
                            target: { tabId: tab.id },
                            function: () => {
                                const ytIDs = [];

                                // Scrape links and iframes
                                const fbLinks = document.querySelectorAll(".mbs._6m6._2cnj._5s6c a");
                                const otherLinks = document.querySelectorAll("a");
                                const bingLinks = document.querySelectorAll(".vrhdata");
                                const iframes = document.querySelectorAll("iframe");

                                const links = fbLinks.length || (location.hostname !== "www.bing.com" ? otherLinks.length : bingLinks.length);

                                if (links > 0) {
                                    const allLinks = fbLinks.length ? fbLinks : (location.hostname !== "www.bing.com" ? otherLinks : bingLinks);

                                    allLinks.forEach(linkElement => {
                                        let link;

                                        if (location.hostname === "www.facebook.com") {
                                            link = decodeURIComponent(linkElement.getAttribute("href"));
                                        } else if (location.hostname === "www.bing.com") {
                                            link = JSON.parse(linkElement.getAttribute("vrhm")).pgurl;
                                        } else {
                                            link = linkElement.href || linkElement.getAttribute("data-rurl");
                                        }

                                        if (link) {
                                            let id;

                                            if (location.hostname === "www.youtube.com" && /\/watch\?v=/.test(link)) {
                                                id = link.match(/\/watch\?v=([^&]+)/)[1];
                                            } else if (location.hostname === "www.facebook.com" && (/\/watch\?v=/.test(link) || /youtu\.be/.test(link))) {
                                                id = link.match(/(?:\/watch\?v=|youtu\.be\/)([^&]+)/)[1];
                                            } else if (location.hostname === "www.bing.com" && /watch\?v=/.test(link)) {
                                                id = link.split("watch?v=")[1];
                                            }

                                            if (id && !ytIDs.includes(id)) {
                                                ytIDs.push(id);
                                            }
                                        }
                                    });
                                }

                                if (iframes.length > 0) {
                                    iframes.forEach(iframeElement => {
                                        const src = iframeElement.src;

                                        if (/www\.youtube\.com\/embed/.test(src)) {
                                            const ifrm_id = src.match(/embed\/([^&?]+)/)[1];
                                            if (ifrm_id && !ytIDs.includes(ifrm_id)) {
                                                ytIDs.push(ifrm_id);
                                            }
                                        }
                                    });
                                }

                                chrome.runtime.sendMessage({ from: "content", found: ytIDs.length > 0, send: ytIDs });
                            }
                        }, function (_res) {
                            console.log('Script executed successfully');
                        });
                    } catch (error) {
                        console.error('Script execution failed: ', error);
                    }
                }
            } else {
                chrome.runtime.sendMessage({ data: "CANNOT_SCAN_PAGE" });
            }

            if (typeof callback === 'function') {
                await callback();
            }
        });
    },
    // Function to construct and update playlist data
    constrObj: (title, date_modified, description, status, lastAdded, count_plays, num_vids, thumbnails, img_src, link, action) => {
        chrome.storage.local.get('playlist', function (data) {
            var objConstr = {},
                objStored = data.playlist,
                objKeys = Object.keys(objStored);

            if (!objKeys.length) {
                objConstr[title] = {};
                objConstr[title].date_modified = date_modified.toISOString();
                objConstr[title].description = description;
                objConstr[title].status = status;
                objConstr[title].lastAdded = lastAdded;
                objConstr[title].plays = count_plays;
                objConstr[title].videos = num_vids;
                objConstr[title].thumbnails = thumbnails;
                objConstr[title].image = img_src;
                objConstr[title].link = link;
            } else {
                objStored[title] = {};
                objStored[title].date_modified = date_modified.toISOString();
                objStored[title].description = description;
                objStored[title].status = status;
                objStored[title].lastAdded = lastAdded;
                objStored[title].plays = count_plays;
                objStored[title].videos = num_vids;
                objStored[title].thumbnails = thumbnails;
                objStored[title].image = img_src;
                objStored[title].link = link;
            }

            chrome.storage.local.set({ 'playlist': !objKeys.length ? objConstr : objStored }, function () {
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
            });
        });
    },
    // Function to update playlist with new videos
    updatePlaylist: (caller, callback) => {
        const { playlist_name, playlist_action, playlist_add_vid_by_url } = caller;

        chrome.tabs.query({ active: true, currentWindow: true }, async (tabs) => {
            const tab = tabs[0];
            const tabsURL = tab.url;

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

                const playlistData = await chrome.storage.local.get('playlist');

                const storedPlaylists = playlistData.playlist;

                const storedPlaylist = storedPlaylists[playlist_name];

                const all_IDs = storedPlaylist.link || "";
                const numVids = storedPlaylist.videos || 0;

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
    createPlaylist: async function (caller) {
        var title, description, img_src, link, num_vids, thumbnails, count_plays, extract_ids;

        if (caller.playlist !== undefined) {
            extract_ids = caller.playlist;
        } else {
            extract_ids = "";
        }

        if (caller.playlist_plays !== undefined) {
            count_plays = caller.playlist_plays;
        } else {
            count_plays = "0";
        }

        if (caller.thumbnails !== undefined) {
            thumbnails = caller.thumbnails;
        } else {
            thumbnails = "";
        }

        title = caller.playlist_name;
        description = caller.playlist_description;
        img_src = caller.playlist_image;
        var date_modified = new Date();

        if (!!extract_ids.length) {
            link = "https://www.youtube.com/watch_videos?&title=" + title + "&video_ids=" + extract_ids;
            var lastAddedLink = "https://www.youtube.com/oembed?url=" + encodeURIComponent("https://www.youtube.com/watch?v=" + extract_ids.split(",")[(extract_ids.split(",").length) - 1]);
            var status = "enabled";
            num_vids = extract_ids.split(",").length;

            await fetch(lastAddedLink)
                .then(response => response.json())
                .then(data => {
                    if (data.title !== undefined) {
                        chromeExtension.constrObj(title, date_modified, description, status, encodeURIComponent(data.title), count_plays, num_vids, thumbnails, img_src, link, caller.playlist_action);
                    } else {
                        if (caller.playlist_action === "ADD_VIDEO") {
                            chrome.runtime.sendMessage({ data: "VIDEO_UNAVAILABLE" });
                        }
                        if (caller.playlist_action === "PLAY_PLAYLIST") {
                            chromeExtension.constrObj(title, date_modified, description, status, encodeURIComponent(data.title), count_plays, num_vids, thumbnails, img_src, link, caller.playlist_action);
                        }
                    }
                })
                .catch(error => {
                    console.error('Error fetching last added video data:', error);
                });
        } else {
            link = "";
            status = "disabled";
            num_vids = 0;
            thumbnails = "";
            var lastAdded = "";
            this.constrObj(title, date_modified, description, status, lastAdded, count_plays, num_vids, thumbnails, img_src, link, caller.playlist_action);
        }
    },
};