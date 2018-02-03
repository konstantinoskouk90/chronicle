/*jshint esnext: true */

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if ((message.from === "content")) {
        if (!!message.found) {
            delete localStorage.playlist_scanned;
            localStorage.setItem("playlist_scanned", message.data);
        } else {
            delete localStorage.playlist_scanned;
        }
        chrome.runtime.sendMessage({ data: "VIDEOS_SCANNED" });
    }
});

var chromeExtension = {

    activeTab: function () {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            if (!/^chrome\:\/\//.test(tabs[0].url)) {
                chrome.tabs.executeScript(tabs[0].id, {
                    file: "js/content.js"
                });
            } else {
                chrome.runtime.sendMessage({ data: "CANNOT_SCAN_PAGE" });
            }
        });
    },
    constrObj: function (title, date_modified, description, status, lastAdded, count_plays, num_vids, thumbnails, img_src, link, action) {

        var msg, objConstr = {},
            objStored = JSON.parse(localStorage.playlist),
            objKeys = Object.keys(objStored);

        if (!objKeys.length) {
            objConstr[title] = {};
            objConstr[title].date_modified = date_modified;
            objConstr[title].description = description;
            objConstr[title].status = status;
            objConstr[title].lastAdded = lastAdded;
            objConstr[title].plays = count_plays;
            objConstr[title].videos = num_vids;
            objConstr[title].thumbnails = thumbnails;
            objConstr[title].image = img_src;
            objConstr[title].link = link;
            localStorage.setItem("playlist", JSON.stringify(objConstr));
        } else {
            objStored[title] = {};
            objStored[title].date_modified = date_modified;
            objStored[title].description = description;
            objStored[title].status = status;
            objStored[title].lastAdded = lastAdded;
            objStored[title].plays = count_plays;
            objStored[title].videos = num_vids;
            objStored[title].thumbnails = thumbnails;
            objStored[title].image = img_src;
            objStored[title].link = link;
            localStorage.setItem("playlist", JSON.stringify(objStored));
        }

        switch (action) {
            case "ADD_VIDEO":
                msg = "ADDED_VIDEO";
                break;
            case "PLAY_PLAYLIST":
                msg = "PLAYED_PLAYLIST";
                break;
            case "CREATE_PLAYLIST":
                msg = "CREATED_PLAYLIST";
                break;
            case "SAVE_PLAYLIST":
                msg = "SAVED_PLAYLIST";
                break;
            case "SAVE_VIDEO_THUMB":
                msg = "SAVED_VIDEO_THUMB";
                break;
            case "SAVE_VIDEO_POS_THUMB":
                msg = "SAVED_VIDEO_POS_THUMB";
                break;
            case "DELETE_VIDEO":
                msg = "DELETED_VIDEO";
                break;
            case "SCAN_ADD_VIDEO":
                msg = "SCANNED_ADDED_VIDEO";
                break;
        }

        if (action !== undefined) {
            chrome.runtime.sendMessage({ data: msg });
        }
    },
    updatePlaylist: function (caller) {

        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {

            var video_id,
                all_IDs = JSON.parse(localStorage.playlist)[caller.playlist_name].link || "",
                numVids = JSON.parse(localStorage.playlist)[caller.playlist_name].videos;

            if (caller.playlist_action === "ADD_VIDEO" 
                && (/\/\/www\.youtube\.com\/watch.*v\=/.test(tabs[0].url) 
                && caller.playlist_add_vid_by_url === undefined) 
                || (caller.playlist_add_vid_by_url !== undefined)) {

                if (/\/\/www\.youtube\.com\/watch.*v\=/.test(tabs[0].url) 
                    && caller.playlist_add_vid_by_url === undefined) {
                    video_id = tabs[0].url.match(/watch.*v\=([^&]+)/)[1];
                } else {
                    video_id = /\/\/www\.youtube\.com\/watch.*v\=/.test(caller.playlist_add_vid_by_url)
                        ? caller.playlist_add_vid_by_url.match(/watch.*v\=([^&]+)/)[1]
                        : undefined;
                }

                if (!all_IDs.length) {
                    if (video_id !== undefined) {
                        caller.playlist = video_id;
                        chromeExtension.createPlaylist(caller);
                    }
                } else {
                    if (video_id !== undefined) {
                        var prod = new RegExp(video_id);
                        if (!prod.test(all_IDs) && numVids < 50) {
                            caller.playlist = all_IDs.match(/video_ids=(.*)/)[1] + "," + video_id;
                            chromeExtension.createPlaylist(caller);
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
        });
    },
    createPlaylist: function (caller) {

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
            var lastAddedLink = "https://www.youtube.com/embed/" + extract_ids.split(",")[(extract_ids.split(",").length) - 1];
            status = "enabled";
            num_vids = extract_ids.split(",").length;
            xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    if (JSON.parse(xhr.responseText).title !== undefined) {
                        chromeExtension.constrObj(title, date_modified, description, status, encodeURIComponent(JSON.parse(xhr.responseText).title), count_plays, num_vids, thumbnails, img_src, link, caller.playlist_action);
                    } else {
                        if (caller.playlist_action === "ADD_VIDEO") {
                            chrome.runtime.sendMessage({ data: "VIDEO_UNAVAILABLE" });
                        }
                        if (caller.playlist_action === "PLAY_PLAYLIST") {
                            chromeExtension.constrObj(title, date_modified, description, status, encodeURIComponent(JSON.parse(xhr.responseText).title), count_plays, num_vids, thumbnails, img_src, link, caller.playlist_action);
                        }
                    }
                }
            };
            xhr.open("GET", "https://noembed.com/embed?format=json&url=" + encodeURIComponent(lastAddedLink));
            xhr.send();
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