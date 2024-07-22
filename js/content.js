function scrapeDOM() {
    console.log('entered scrapeDOM');

    const ytIDs = [];

    // Scrape links and iframes
    const fbLinks = document.querySelectorAll(".mbs._6m6._2cnj._5s6c a");
    const otherLinks = document.querySelectorAll("a");
    const bingLinks = document.querySelectorAll(".vrhdata");
    const iframes = document.querySelectorAll("iframe");

    const links = fbLinks.length || (location.hostname !== "www.bing.com" ? otherLinks.length : bingLinks.length);

    console.log('links', links);

    if (links > 0) {
        const allLinks = fbLinks.length ? fbLinks : (location.hostname !== "www.bing.com" ? otherLinks : bingLinks);

        console.log('allLinks', allLinks);

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

chrome.runtime.onMessage.addListener(function messageListener(message, _sender, _sendResponse) {
    console.log('Received message in content.js:', message);

    var action = message.action;

    if (action === "RUN_CONTENT_SCRIPT") {
        scrapeDOM();
    }
});
