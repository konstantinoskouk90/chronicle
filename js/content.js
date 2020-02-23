function scrapeDOM() {

    var id, ifrm_id, link, src, ytIDs = [],
        fb_links = document.querySelectorAll(".mbs._6m6._2cnj._5s6c a").length,
        o_links = document.querySelectorAll("a").length,
        b_links = document.querySelectorAll(".vrhdata").length,
        iframes = document.querySelectorAll("iframe").length,
        links;

    if (fb_links > 0) {
        links = fb_links;
    } else if (o_links > 0 && location.hostname !== "www.bing.com") {
        links = o_links;
    } else if (b_links > 0 && location.hostname === "www.bing.com") {
        links = b_links;
    }

    if (links > 0) {

        for (var i = 0; i < links; i++) {

            if (location.hostname === "www.facebook.com" && !!document.querySelectorAll(".mbs._6m6._2cnj._5s6c a").length) {
                // Facebook
                link = decodeURIComponent(document.querySelectorAll(".mbs._6m6._2cnj._5s6c a")[i].getAttribute("href"));
            } else if (!!document.querySelectorAll("a").length && location.hostname !== "www.bing.com" && !/yahoo\.com/.test(window.location.href)) {
                // Any <a> tags on any site
                link = document.querySelectorAll("a")[i].href;
            } else if (/yahoo\.com/.test(window.location.href)) {
                // Yahoo!
                link = document.querySelectorAll("a")[i].getAttribute("data-rurl");
            } else if (location.hostname === "www.bing.com") {
                // Bing
                link = JSON.parse(document.querySelectorAll(".vrhdata")[i].getAttribute("vrhm")).pgurl;
            }

            if (!!link) {

                if (location.hostname === "www.facebook.com" && (/\/watch\?v\=/.test(link)) && (!/attribution_link/.test(link))) {
                    id = (link.match(/\/watch\?v\=([^&]+)/)[1]).split('");')[0].replace(/\#$/, "");
                } else if (location.hostname === "www.facebook.com" && (/youtu\.be/.test(link)) && (!/feature/.test(link))) {
                    id = (link.match(/youtu([^&]+)/)[1].match(/.*/)[0].split("/")[1].split('");')[0].replace(/\#$/, ""));
                } else if (location.hostname === "www.facebook.com" && (/feature.*youtu\.be&v=/.test(link))) {
                    id = (link.match(/&v=([^&]+)/)[1].split('");')[0].replace(/\#$/, ""));
                } else if (location.hostname === "www.youtube.com" &&
                    /results\?search\_query\=/.test(location.href) &&
                    /\/watch\?v\=/.test(link)) {

                    if ((!/feature=player-title/.test(document.querySelectorAll("a")[i].getAttribute("data-sessionlink"))) &&
                        !/ytp-next-button/.test(document.querySelectorAll("a")[i].getAttribute("class"))) {
                        id = (link.match(/\/watch\?v\=([^&]+)/)[1]).replace(/\#$/, "");
                    }
                } else if ((location.hostname !== "www.facebook.com") && (location.hostname !== "www.bing.com") && (/\/watch\?v\=/.test(link))) {
                    id = (link.match(/\/watch\?v\=([^&]+)/)[1]).replace(/\#$/, "");
                } else if (location.hostname === "www.bing.com") {
                    id = link.split("watch?v=")[1];
                }

                if (id !== undefined) {
                    if (ytIDs.indexOf(id) < 0) {
                        ytIDs.push(id);
                    }
                }
            }
        }
    }

    if (iframes > 0) {
        // Any <iframe> on any site
        for (var x = 0; x < iframes; x++) {
            src = document.querySelectorAll("iframe")[x].src;

            if (/www\.youtube\.com\/embed/.test(src)) {
                ifrm_id = src.match(/embed\/([^&?]+)/)[1];
            }

            if (ifrm_id !== undefined) {
                if (ytIDs.indexOf(ifrm_id) < 0) {
                    ytIDs.push(ifrm_id);
                }
            }
        }
    }

    // Callback
    sendMessage(ytIDs);
}

function sendMessage(vids) {
    if (!!vids.length) {
        chrome.runtime.sendMessage({ from: "content", found: true, data: vids });
    } else {
        chrome.runtime.sendMessage({ from: "content", found: false });
    }
}

scrapeDOM();