/* jshint esnext: true */
$(document).ready(function () {

  //CONSTANTS
  const ACTIVE_ELEMENT = ".active-element",
    ACTIVE_PLAYLIST_VIDEO = ".active-playlist-video",
    ACTIVE_PLAYLIST_VIDEOS = ".active-playlist-videos",
    ACTIVE_PLAYLIST_VIDEOS_FIRST = ".active-playlist-videos:nth(0)",
    ACTIVE_PLAYLIST_VIDEO_PLAYLIST_FAVORITE = ".active-playlist-video .video-playlist-favorite",
    ACTIVE_VIDEO_IMAGE_NAME = ".active-playlist-video .video-image-name",
    ADD_VIDS = "#add-videos",
    APP_LOGO = ".app-logo",
    APP_NAME = "#app-name",
    APP_POPUP = ".app-popup",
    ARROW_FIRST = ".arrow-bb",
    ARROW_LAST = ".arrow-ff",
    ARROW_NEXT = ".arrow-f",
    ARROW_PREV = ".arrow-b",
    BACK_TO_WELCOME_CREATE = ".app-popup .header-app-popup .popup-video-back",
    BACK_TO_WELCOME_HOW_TO = ".preview-popup-how-to-wrapper .header-preview-popup-video .popup-video-back",
    CHARACTER_DESCRIPTION_LENGTH = "#character-description-length",
    CHARACTER_DESCRIPTION_POPUP_WRAPPER = ".main-popup-character-description-wrapper",
    CHARACTER_NAME_LENGTH = "#character-name-length",
    CLOSE_HOW_TO_POPUP = ".header-preview-popup-video .popup-video-close",
    CLOSE_WELCOME_POPUP = ".welcome-popup .header-welcome .popup-video-close",
    CONTROLS_WRAPPER = ".controls-wrapper",
    COPIED_LINK = "#copied-link",
    DELETE_APP_POPUP = ".delete-app-popup",
    DELETE_CANCEL = "#delete-cancel",
    DELETE_DELETE = "#delete-delete",
    DELETE_PLAYLIST = "#delete-playlists",
    DELETE_TITLE = "#delete-title",
    DELETE_VIDEO = "#delete-videos",
    DELETE_WRAPPER = ".delete-wrapper",
    DESCRIPTION_DETAILS_WRAPPER = ".description-details-wrapper",
    DESCRIPTION_POPUP_TITLE = ".main-popup-description",
    DESCRIPTION_VIDEOS = "#playlist-description",
    DETAILS_WRAPPER = ".details-wrapper",
    DOWN_LIST = "#down-list",
    EDIT_PLAYLIST_TEXT = "#edit-playlist-text",
    EDIT_PLAYLIST_WRAPPER = ".edit-playlist-wrapper",
    EDIT_VIDEO_TEXT = "#edit-video-text",
    HEADER_RIGHT = ".header-right",
    HOW_TO = ".how-to-wrapper",
    HOW_TO_BG_IMG = "#how-to-bg-image",
    HOW_TO_PLAY_VIDEO = "#how-to-play-video",
    IMAGE_POPUP_WRAPPER = ".main-popup-image-wrapper",
    IMG_NAME = ".image-name",
    IMG_WRAPPER = ".image-wrapper",
    LINK_PLAYLIST_TEXT = "#link-playlist-text",
    LINK_PLAYLIST_WRAPPER = ".link-playlist-wrapper",
    LINK_VIDEO_TEXT = "#link-video-text",
    MAIN_DELETE = ".main-delete",
    MAIN_POPUP_CANCEL = "#main-popup-cancel",
    MAIN_POPUP_CREATE = "#main-popup-create",
    MAIN_POPUP_ERROR_MESSAGE = "#main-popup-error-message",
    MAIN_POPUP_POSITION = ".main-popup-position",
    MAIN_POPUP_POSITION_WRAPPER = ".main-popup-position-wrapper",
    MAIN_POPUP_PREVIEW_BOX_IMG = ".main-popup-preview-box img",
    MENU_BACK_IMG = ".menu-back img",
    MODIFIED_VIDEOS = "#updated-text",
    NAME_POPUP_WRAPPER = ".main-popup-character-name-wrapper",
    NAVIGATION_WRAPPER = ".navigation-wrapper",
    NEW_PLAYLIST = "#new-playlist",
    NEW_PLAYLIST_DESCRIPTION = "#new-playlist-description",
    NEW_PLAYLIST_IMAGE = "#new-playlist-image",
    NEW_PLAYLIST_LOGO = "#new-playlist-logo",
    NEW_PLAYLIST_NAME = "#new-playlist-name",
    NON_ACTIVE_ELEMENT = ".non-active-element.ellipsis",
    NUM_VIDEOS = "#videos-text",
    OVERLAY = ".overlay",
    OVERLAY_AJAX_LOADING = ".overlay-ajax-loading",
    PAGE_CURRENT = "#page-current",
    PAGE_OUT_OF = "#page-out-of",
    PAGE_TOTAL = "#page-total",
    PLAYLIST = ".playlist-favorite",
    PLAYLIST_ACTIVE = ".playlist-favorite.active-playlist",
    PLAYLIST_DETAILS_UPDATED = ".playlist-updated",
    PLAYLIST_DETAILS_VIDEOS = ".playlist-videos",
    PLAYLIST_FIRST = ".playlist-favorite:nth(0)",
    PLAYLIST_NOT_ACTIVE = ".playlist-favorite:not(active-playlist)",
    PLAYLIST_NUM_VIDEOS = ".playlist-num-videos",
    PLAYLIST_PLAYER = "#playlist-player",
    PLAYLIST_POPUP_PREVIEW = ".main-popup-playlist-preview",
    PLAYS_VIDEOS = "#plays-text",
    PLAY_BUTTON_WRAPPER = "#play-button-wrapper",
    PLAY_PLAYLIST_VIDEO = "#play-playlist-video",
    PLAY_YOUTUBE_VIDEO = "#play-youtube-video",
    POPUP_AUTHOR_WRAPPER = ".popup-author-wrapper",
    POPUP_BG = "#popup-bg",
    POPUP_IMAGE_IMPORT = "#main-popup-image-import",
    POPUP_SELECT_WRAPPER = ".popup-select-wrapper",
    POSITION_ACTIVE = "#position-active",
    POSITION_PLAY = ".pos-play",
    POSITION_TOTAL = "#position-total",
    POSITION_WRAPPER = ".position-wrapper",
    PREVIEW_PLAYLIST_TEXT = "#preview-playlist-text",
    PREVIEW_PLAYLIST_WRAPPER = ".preview-playlist-wrapper",
    PREVIEW_POPUP_HOW_TO = ".preview-popup-how-to",
    PREVIEW_POPUP_HOW_TO_WRAPPER = ".preview-popup-how-to-wrapper",
    PREVIEW_POPUP_VIDEO = ".preview-popup-video",
    PREVIEW_VIDEO_TEXT = "#preview-video-text",
    RESET_APP_WRAPPER = ".reset-app-wrapper",
    RESULTS = ".results",
    RESULTS_ACTIVE = ".results.activepage",
    RESULTS_FIRST = ".results:nth(0)",
    RESULTS_HEADER = ".results-header",
    RESULTS_WRAPPER = ".results-wrapper",
    SCANNED_VIDEO_SELECT = ".scanned-video-select",
    SCANNED_VIDEO_TITLE = ".scanned-video-title",
    SCAN_CANCEL = "#scan-cancel",
    SCAN_ERROR_MESSAGE = "#scan-error-message",
    SCAN_FOUND_AUTHOR = "#scan-found-author",
    SCAN_FOUND_SELECT = "#scan-found-select",
    SCAN_FOUND_TITLE = "#scan-found-title",
    SCAN_NUM_FOUND = "#scan-num-found",
    SCAN_NUM_TEXT = "#scan-num-text",
    SCAN_PAGE_GIF = ".scan-page-gif",
    SCAN_PAGE_MAIN = ".scan-page-main",
    SCAN_PAGE_POPUP = ".scan-page-popup",
    SCAN_PAGE_WRAPPER = "#scan-page",
    SCAN_TOTAL_DYNAMIC = "#scan-total-dynamic",
    SCAN_TOTAL_STATIC = "#scan-total-static",
    SCAN_TOTAL_TEXT = "#scan-total-text",
    SCAN_UPDATE = "#scan-update",
    SEARCH_PLAY = "#search-playlist",
    SEARCH_VID = "#search-video",
    SELECT_ALL_WRAPPER = ".select-all-checkbox-wrapper",
    THUMBNAIL_POPUP = ".main-popup-thumbnail",
    THUMBNAIL_POPUP_WRAPPER = ".main-popup-thumbnail-wrapper",
    THUMB_FOUR = "#thumb-four",
    THUMB_ONE = "#thumb-one",
    THUMB_THREE = "#thumb-three",
    THUMB_TWO = "#thumb-two",
    TITLE_APP_POPUP = "#title-app-popup",
    TITLE_DETAILS_WRAPPER = ".title-details-wrapper",
    TITLE_VIDEOS = "#playlist-name",
    UP_LIST = "#up-list",
    VIDEO_DETAILS_WRAPPER = ".video-details-wrapper",
    VIDEO_IMAGE_TITLE = ".video-image-title",
    VIDEO_PLAYER = ".video-player",
    VIDEO_PLAYLIST = ".video-playlist-video",
    VIDEO_PLAYLIST_FIRST = ".video-playlist-video:nth(0)",
    VIDEO_PLAYLIST_NAME = "#playlist-name-video",
    VIDEO_PLAYLIST_NOT_ACTIVE = ".video-playlist-video:not(.active-playlist-video)",
    VIDEO_POPUP_PREVIEW = ".main-popup-video-preview",
    VIDEO_POSITION = "#video-position",
    VIDEO_TITLE_VIDEOS = "#video-title",
    VIDEO_TITLE_WRAPPER = ".video-title-wrapper",
    VID_IMG_NAME = ".video-image-name",
    VID_PAGE_CURRENT = "#vid-page-current",
    VID_PAGE_TOTAL = "#vid-page-total",
    VIEW_VIDS = "#view-videos",
    WELCOME_CHECKBOX = "#welcome-checkbox",
    WELCOME_CREATE_BUTTON = "#welcome-create-button",
    WELCOME_HOW_TO_BUTTON = "#welcome-how-to-button",
    WELCOME_POPUP = ".welcome-popup",
    WRAP_SEARCH = ".wrap-search",
    YOUTUBE_CHANNEL = "#youtube-channel";

  //GLOBALS
  var active_author_name = [],
    active_author_url = [],
    active_position = [],
    active_title = [],
    added, cur_add = 0,
    embedLinks = [],
    playlistDetails = {},
    redirect_urls = [],
    saveNum, scan_active_author_name = [],
    scan_active_author_url = [],
    scan_active_title = [],
    scan_not_found = [],
    scan_redirect_urls = [],
    scannedLinks = [],
    searchAnimation = false,
    storeNum, storeVidNum, temp, vid_added, vid_temp, videoDetails = {};

  //WINDOWS STYLING FIX
  if (/WIN/i.test(navigator.platform)) {
    $(PAGE_CURRENT).css("margin-top", "1px");
    $(VID_PAGE_CURRENT).css("margin-top", "1px");
    $(PAGE_OUT_OF).css("margin-top", "1px");
    $(PAGE_TOTAL).css("margin-top", "1px");
    $(VID_PAGE_TOTAL).css("margin-top", "1px");
    $(WELCOME_CHECKBOX).css("top", "1.05px");
    $(NEW_PLAYLIST).css("line-height", "41px");
  } else {
    $(PAGE_CURRENT).css("margin-top", "0px");
    $(VID_PAGE_CURRENT).css("margin-top", "0px");
    $(PAGE_OUT_OF).css("margin-top", "0px");
    $(PAGE_TOTAL).css("margin-top", "0px");
    $(VID_PAGE_TOTAL).css("margin-top", "0px");
    $(WELCOME_CHECKBOX).css("top", "2.05px");
    $(NEW_PLAYLIST).css("line-height", "39px");
  }

  //INITIALIZE PLAYLIST LS ITEM
  if (!localStorage.playlist) {
    localStorage.setItem("playlist", "{}");
  }

  //WELCOME POPUP CHECKBOX
  welcomeMsg();

  //INITIALIZE EXTENSION
  createPlaylist();

  //PLAYLIST VIEW
  function createPlaylist(msg, pg) {

    added = 0;
    temp = 0;

    var count = -1,
      objParse = JSON.parse(localStorage.playlist),
      playlists = Object.keys(JSON.parse(localStorage.playlist));

    playlists.sort();
    $(RESULTS_WRAPPER).text("");

    playlists.forEach(function (k, i) {

      count++;

      var s = objParse[k].status,
        p = objParse[k].image,
        n = Math.floor(count / 12);

      createDOM(n, k, p, s);

    });

    if (msg === "UPDATE") {

      $(RESULTS_ACTIVE).removeClass("active-page");
      $(RESULTS + ":nth(" + (pg - 1) + ")").addClass("active-page");
      $(RESULTS + ":nth(" + (pg - 1) + ")").css("visibility", "visible");
      $(PAGE_CURRENT).text(pg);

      if (storeNum !== undefined) {
        $(PLAYLIST + ":nth(" + storeNum + ")").next().next().css("border-color", "#bbb999");
        $(PLAYLIST + ":nth(" + storeNum + ")").next().next().children().css("color", "#bbb999");
        $(PLAYLIST + ":nth(" + storeNum + ")").parent().css("border-color", "#bbb999");
        $(PLAYLIST + ":nth(" + storeNum + ")").addClass("active-playlist");
        storeNum = undefined;
        playlistPrev(PLAYLIST + ".active-playlist");
      } else {
        playlistPrev();
      }

    } else {

      if (!!$(RESULTS_FIRST).length) {
        $(RESULTS_FIRST).addClass("active-page");
        $(RESULTS_FIRST).css("visibility", "visible");
      } else {
        $(PAGE_TOTAL).text("1");
      }

      $(PAGE_CURRENT).text("1");

      if (!!$(PLAYLIST_FIRST).length) {
        $(PLAYLIST_FIRST).next().next().css("border-color", "#bbb999");
        $(PLAYLIST_FIRST).next().next().children().css("color", "#bbb999");
        $(PLAYLIST_FIRST).parent().css("border-color", "#bbb999");
        $(PLAYLIST_FIRST).addClass("active-playlist");
        playlistPrev(PLAYLIST_ACTIVE);
      } else {
        playlistPrev();
      }
    }
  }

  //PLAYLIST VIEW SEARCH
  $(document).on("keyup", SEARCH_PLAY, debounce(function (ev, pg, pm, pt) {

    added = 0;
    temp = 0;

    var keys = [],
      count = -1,
      searchField = new RegExp($(SEARCH_PLAY).val(), "i");

    $.post(window.location.href, function () {

      var objParse = JSON.parse(localStorage.playlist),
        playlists = Object.keys(JSON.parse(localStorage.playlist));

      playlists.sort();
      $(RESULTS_WRAPPER).text("");

      playlists.forEach(function (k, i) {

        var decKey = decodeURIComponent(k.replace(/\+/g, " "));

        if (searchField.test(decKey)) {

          count++;

          var m = objParse[k],
            s = m.status,
            p = m.image,
            n = Math.floor(count / 12);

          createDOM(n, k, p, s);

          keys.push(k);
        }
      });

      if (pt !== undefined) {
        if (!!keys.length) {
          keys.sort();
          storeNum = keys.indexOf(pt);
          if (storeNum > -1) {
            pg = Math.floor(storeNum / 12) + 1;
          } else {
            storeNum = saveNum;
            saveNum = undefined;
            pg = parseValue($(PAGE_CURRENT).text());
          }
        } else {
          storeNum = undefined;
        }
      }

      if (pm === "DELETE") {

        var pgc = parseValue($(PAGE_CURRENT).text()),
          pgt = parseValue($(PAGE_TOTAL).text());

        if (pgc > pgt) {

          var keysLen = keys.length;

          if (keysLen > 11 && keysLen < 193 && keysLen % 12 === 0) {
            pg = pgc - 1;
          } else {
            pg = pgc;
          }

        } else {
          pg = pgc;
        }
      }

      if (pg > 1) {
        $(RESULTS_ACTIVE).removeClass("active-page");
        $(RESULTS + ":nth(" + (pg - 1) + ")").addClass("active-page");
        $(RESULTS + ":nth(" + (pg - 1) + ")").css("visibility", "visible");
        $(PAGE_CURRENT).text(pg);
      } else {
        if (!!$(RESULTS_FIRST).length) {
          $(RESULTS_FIRST).addClass("active-page");
          $(RESULTS_FIRST).css("visibility", "visible");
        } else {
          $(PAGE_TOTAL).text("1");
        }
        $(PAGE_CURRENT).text("1");
      }

      if (storeNum !== undefined) {
        $(PLAYLIST + ":nth(" + storeNum + ")").next().next().css("border-color", "#bbb999");
        $(PLAYLIST + ":nth(" + storeNum + ")").next().next().children().css("color", "#bbb999");
        $(PLAYLIST + ":nth(" + storeNum + ")").parent().css("border-color", "#bbb999");
        $(PLAYLIST + ":nth(" + storeNum + ")").addClass("active-playlist");
        storeNum = undefined;
        playlistPrev(PLAYLIST + ".active-playlist");
      } else {
        if (!!$(PLAYLIST_FIRST).length) {
          $(PLAYLIST_FIRST).next().next().css("border-color", "#bbb999");
          $(PLAYLIST_FIRST).next().next().children().css("color", "#bbb999");
          $(PLAYLIST_FIRST).parent().css("border-color", "#bbb999");
          $(PLAYLIST_FIRST).addClass("active-playlist");
          playlistPrev(PLAYLIST_FIRST);
        } else {
          playlistPrev();
        }
      }
      if (!!searchAnimation) {
        playlistMessage("added_video");
        searchAnimation = false;
      }
    });
  }, 250));

  //VIDEO VIEW SEARCH
  $(document).on("keyup", SEARCH_VID, debounce(function (ev, pg, pm, mp) {

    var lnk = [],
      ttl = [],
      aun = [],
      auu = [],
      vps = [],
      srv = new RegExp($(SEARCH_VID).val(), "i");

    $.post(window.location.href, function () {

      vid_added = 0;
      vid_temp = 0;

      var objParse = JSON.parse(sessionStorage.video),
        videos = Object.keys(objParse);

      videos.forEach(function (k, i) {

        if (srv.test(objParse[k].video_title)) {

          var m = objParse[k];

          lnk.push(k);
          ttl.push(m.video_title);
          aun.push(m.author_name);
          auu.push(m.author_url);
          vps.push(m.video_position);
        }
      });

      $(ACTIVE_PLAYLIST_VIDEOS).remove();

      for (var i = 0; i < lnk.length; i++) {
        var n = Math.floor(i / 12);
        createVidDOM(n, lnk[i], ttl[i], aun[i], auu[i], vps[i]);
      }

      if (mp !== undefined) {

        for (var x = 0; x < lnk.length; x++) {

          var allIDs = lnk[x].split("embed/")[1],
            actID = mp;

          if (allIDs === actID) {

            storeVidNum = x;

            pg = Math.floor(storeVidNum / 12) + 1;
          }
        }
      }

      if (pm === "DELETE") {

        if (parseValue($(VID_PAGE_CURRENT).text()) > parseValue($(VID_PAGE_TOTAL).text())) {

          var keysLen = videos.length;

          if (keysLen > 11 && keysLen < 193 && keysLen % 12 === 0) {
            pg = parseValue($(VID_PAGE_CURRENT).text()) - 1;
          } else {
            pg = parseValue($(VID_PAGE_CURRENT).text());
          }
        } else {
          pg = parseValue($(VID_PAGE_CURRENT).text());
        }
      }

      if (pg > 1) {
        $(ACTIVE_PLAYLIST_VIDEOS + ".active-playlist-page").removeClass("active-playlist-page");
        $(ACTIVE_PLAYLIST_VIDEOS + ":nth(" + (pg - 1) + ")").addClass("active-playlist-page");
        $(ACTIVE_PLAYLIST_VIDEOS + ":nth(" + (pg - 1) + ")").css("visibility", "visible");
        $(VID_PAGE_CURRENT).text(pg);
      } else {
        if (!!$(ACTIVE_PLAYLIST_VIDEOS_FIRST).length) {
          $(ACTIVE_PLAYLIST_VIDEOS_FIRST).addClass("active-playlist-page");
          $(ACTIVE_PLAYLIST_VIDEOS_FIRST).css("visibility", "visible");
        } else {
          $(VID_PAGE_TOTAL).text("1");
        }
        $(VID_PAGE_CURRENT).text("1");
      }

      if (storeVidNum !== undefined) {
        $(VIDEO_PLAYLIST + ":nth(" + storeVidNum + ")").addClass("active-playlist-video");
        $(VIDEO_PLAYLIST + ":nth(" + storeVidNum + ")").css("border-color", "#bbb999");
        $(VIDEO_PLAYLIST + ":nth(" + storeVidNum + ")").children().next().next().css("border-color", "#bbb999");
        storeVidNum = undefined;
        videoPrev(VIDEO_PLAYLIST + ACTIVE_PLAYLIST_VIDEO);
      } else {
        if (!!$(VIDEO_PLAYLIST_FIRST).length) {
          $(VIDEO_PLAYLIST_FIRST).addClass("active-playlist-video");
          $(VIDEO_PLAYLIST_FIRST).css("border-color", "#bbb999");
          $(VIDEO_PLAYLIST_FIRST).children().next().next().css("border-color", "#bbb999");
          videoPrev(VIDEO_PLAYLIST + ACTIVE_PLAYLIST_VIDEO);
        } else {
          videoPrev();
        }
      }
    });
  }, 250));

  //ACTIVE PLAYLIST PREVIEW
  function playlistPrev(sel) {

    if (sel !== undefined) {

      var hid = $(sel).attr("hidden_title"),
        ttl = decodeURIComponent(hid.replace(/\+/g, " ")),
        obj = JSON.parse(localStorage.playlist)[hid],
        dsc = decodeURIComponent(obj.description),
        dmo = obj.date_modified,
        img = obj.image,
        vid = obj.videos,
        pla = obj.plays,
        fld = new Date(dmo),
        dat = new Date(),
        crd = fld.getDate(),
        crm = fld.getMonth(),
        cry = fld.getFullYear(),
        dfd = dat.getDate() - crd,
        dfm = dat.getMonth() - crm,
        dfy = dat.getFullYear() - cry;

      //Set iframe playlist source
      if (vid > 0 && l !== $(PREVIEW_POPUP_VIDEO + " iframe").attr("src")) {

        var e = obj.link.match(/video_ids=(.*)/)[1],
          l = "https://www.youtube.com/embed?rel=0&amp;showinfo=0&amp;iv_load_policy=3&amp;controls=2&amp;fs=0&amp;loop=1&amp;color=white&amp;disablekb=1&amp;enablejsapi=1&amp;version=3&amp;autoplay=1&amp;playlist=" + e;

        $(PREVIEW_POPUP_VIDEO + " iframe").attr("src", l);
      } else {
        $(PREVIEW_POPUP_VIDEO + " iframe").attr("src", "");
      }

      $(PLAYLIST_PLAYER).css("background-image", "url(" + "'" + img + "'" + ")");
      $(PLAY_BUTTON_WRAPPER).attr("title", "Watch playlist on YouTube");
      $(TITLE_VIDEOS).text(ttl);
      $(TITLE_VIDEOS).attr("title", ttl.replace(/"/g, "''") + " - Playlist Name");
      $(DESCRIPTION_VIDEOS).text(dsc);
      $(DESCRIPTION_VIDEOS).attr("title", dsc.replace(/"/g, "''") + " - Playlist Description");

      if (crd.toString().length <= 1) {
        crd = "0" + crd;
      }

      if (crm.toString().length <= 1) {
        crm = "0" + (crm + 1);
      } else {
        crm = crm + 1;
      }

      if (fld.getDate() === dat.getDate() && fld.getMonth() === dat.getMonth() && fld.getFullYear() === dat.getFullYear()) {
        $(MODIFIED_VIDEOS).text("Updated Today");
      } else if ((dfd === 1 && fld.getMonth() === dat.getMonth() && fld.getFullYear() === dat.getFullYear()) || (dfd === -30 && dfm === -11 && dfy === 1)) {
        $(MODIFIED_VIDEOS).text("Updated Yesterday");
      } else {
        $(MODIFIED_VIDEOS).text("Updated " + crd + "/" + crm + "/" + fld.getFullYear().toString().substr(2, 2));
      }

      $(NUM_VIDEOS).text(vid);

      if (/\|/.test(pla)) {
        pla = pla.split("|")[1];
      }

      if (pla.toString() !== "1") {
        $(PLAYS_VIDEOS).text(pla + " Plays");
      } else {
        $(PLAYS_VIDEOS).text(pla + " Play");
      }

      var vid_len = vid.toString().split("").length;

      if (vid_len > 0 && vid_len < 2) {
        $(PLAYLIST_NUM_VIDEOS).css("width", "48.5px");
      }
      if (vid_len > 1 && vid_len < 3) {
        $(PLAYLIST_NUM_VIDEOS).css("width", "54.5px");
      }

      if (Object.keys(JSON.parse(localStorage.playlist)).length === 1) {
        toggleContent("FADE_IN");
      }

      $(SEARCH_PLAY).attr("disabled", false);
      $(PLAY_PLAYLIST_VIDEO).show();
      $(RESULTS_HEADER).css("background-image", "url(../assets/images/background-logo.png)");
      $(NEW_PLAYLIST).removeClass("animation-alert animated infinite");
      $(NEW_PLAYLIST_LOGO).removeClass("animation-alert-image animated infinite");
      $(EDIT_PLAYLIST_WRAPPER + "," + LINK_PLAYLIST_WRAPPER + "," + PREVIEW_PLAYLIST_WRAPPER + "," + PLAYLIST_NUM_VIDEOS).css("cursor", "pointer");
      $(PLAYLIST_PLAYER + "," + EDIT_PLAYLIST_WRAPPER + "," + LINK_PLAYLIST_WRAPPER + "," + PREVIEW_PLAYLIST_WRAPPER + "," + ADD_VIDS + "," + DELETE_PLAYLIST + "," + VIEW_VIDS + "," + SCAN_PAGE_WRAPPER + "," + ARROW_FIRST + "," + ARROW_PREV + "," + ARROW_NEXT + "," + ARROW_LAST).css("pointer-events", "auto");
      $(MODIFIED_VIDEOS + "," + PLAYS_VIDEOS).css("cursor", "default");
      $(COPIED_LINK).text(obj.link);
    } else {
      if (!Object.keys(JSON.parse(localStorage.playlist)).length) {

        if ($(SEARCH_PLAY).css("display") === "block") {
          toggleContent("FADE_OUT");
        }

        $(SEARCH_PLAY).attr("disabled", true);
        $(NEW_PLAYLIST).addClass("animation-alert animated infinite");
        $(NEW_PLAYLIST_LOGO).addClass("animation-alert-image animated infinite");
        $(SEARCH_PLAY).val("");
      } else {
        if (localStorage.playlist === "{}") {
          $(RESULTS_HEADER).css("background-image", "url(../assets/images/background-logo.png)");
        } else {
          $(RESULTS_HEADER).css("background-image", "url(../assets/images/no-results.png)");
        }
        $(PLAY_PLAYLIST_VIDEO).hide();
        $(PLAYLIST_PLAYER).css("background-image", "url()");
        $(TITLE_VIDEOS).text("Playlist Name");
        $(DESCRIPTION_VIDEOS).text("Playlist Description");
        $(MODIFIED_VIDEOS).text("Updated 00/00/00");
        $(NUM_VIDEOS).text("0");
        $(PLAYS_VIDEOS).text("0 Plays");
        $(PLAYLIST_NUM_VIDEOS).css("width", "48.5px");
        $(EDIT_PLAYLIST_WRAPPER + "," + LINK_PLAYLIST_WRAPPER + "," + PREVIEW_PLAYLIST_WRAPPER).css("cursor", "default");
        $(PLAYLIST_PLAYER + "," + TITLE_VIDEOS + "," + DESCRIPTION_VIDEOS + "," + MODIFIED_VIDEOS + "," + PLAYS_VIDEOS + "," + EDIT_PLAYLIST_WRAPPER + "," + LINK_PLAYLIST_WRAPPER + "," + PREVIEW_PLAYLIST_WRAPPER + "," + ADD_VIDS + "," + DELETE_PLAYLIST + "," + VIEW_VIDS + "," + SCAN_PAGE_WRAPPER + "," + ARROW_FIRST + "," + ARROW_PREV + "," + ARROW_NEXT + "," + ARROW_LAST).css("pointer-events", "none");
        $(DELETE_PLAYLIST).css("color", "#C0C0C0");
      }
    }
    resetArrowStyling($(PAGE_CURRENT));
  }

  //ACTIVE VIDEO PREVIEW
  function videoPrev(sel) {

    if (sel !== undefined) {

      var hid = $(sel).attr("href"),
        obj = JSON.parse(sessionStorage.video)[hid],
        len = Object.keys(JSON.parse(sessionStorage.video)).length,
        ttl = obj.video_title,
        aun = obj.author_name,
        auu = obj.author_url,
        pos = obj.video_position,
        l = hid + "?rel=0&amp;showinfo=0&amp;iv_load_policy=3&amp;controls=2&amp;fs=0&amp;loop=1&amp;color=white&amp;disablekb=1&amp;enablejsapi=1&amp;version=3";

      var n, data_tb = JSON.parse(localStorage.playlist)[$(PLAYLIST_ACTIVE).attr("hidden_title")].thumbnails,
        data_ps = obj.video_position,
        data_id = hid.split("embed/")[1];

      //Set iframe video source
      if (l !== $(PREVIEW_POPUP_VIDEO + " iframe").attr("src")) {
        $(PREVIEW_POPUP_VIDEO + " iframe").attr("src", l);
      }

      if (data_tb !== "") {

        n = data_tb.split(",")[data_ps - 1];

        if (n === 0) {
          n = "mqdefault";
        }
        if (n === 1) {
          n = "hqdefault";
        }
        if (n === 2) {
          n = "sddefault";
        }
        if (n === 3) {
          n = "maxresdefault";
        }
      } else {
        n = "mqdefault";
      }

      $(RESULTS_HEADER).css("background-image", "url(../assets/images/background-logo.png)");
      $(VIDEO_PLAYER).css("background-image", "url(https://img.youtube.com/vi/" + data_id + "/" + n + ".jpg");
      $(VIDEO_PLAYER).attr("title", "Watch video on YouTube");
      $(VIDEO_TITLE_VIDEOS).text(ttl);
      $(VIDEO_TITLE_VIDEOS).attr("title", ttl.replace(/"/g, "''") + " - Video Name");
      $(YOUTUBE_CHANNEL).text(aun);
      $(YOUTUBE_CHANNEL).attr({ "title": aun.replace(/"/g, "''") + " - YouTube Channel", href: auu });
      $(VIDEO_PLAYLIST_NAME).text($(TITLE_VIDEOS).text());
      $(VIDEO_PLAYLIST_NAME).attr("title", $(TITLE_VIDEOS).text().replace(/"/g, "''") + " - Playlist Name");
      $(DELETE_VIDEO).text("Delete Video");
      $(VIDEO_POSITION).text(pos + " of " + len);
      $(SEARCH_VID).attr("disabled", false);
      $(PLAY_YOUTUBE_VIDEO + "," + VIDEO_TITLE_VIDEOS + "," + DELETE_VIDEO).show();
      $(DELETE_VIDEO).css("pointer-events", "auto");
      $(EDIT_PLAYLIST_WRAPPER + "," + LINK_PLAYLIST_WRAPPER + "," + PREVIEW_PLAYLIST_WRAPPER).css("cursor", "pointer");
      $(EDIT_PLAYLIST_WRAPPER).attr("title", "Edit Video Details");
      $(LINK_PLAYLIST_WRAPPER).attr("title", "Copy Video Link");
      $(PREVIEW_PLAYLIST_WRAPPER).attr("title", "Preview Video");

      $(VIDEO_PLAYER + "," + VIDEO_TITLE_VIDEOS + "," + YOUTUBE_CHANNEL + "," + VIDEO_PLAYLIST_NAME + "," + DELETE_VIDEO + "," + VIDEO_POSITION + "," + EDIT_PLAYLIST_WRAPPER + "," + LINK_PLAYLIST_WRAPPER + "," + PREVIEW_PLAYLIST_WRAPPER + "," + ARROW_FIRST + "," + ARROW_PREV + "," + ARROW_NEXT + "," + ARROW_LAST).css("pointer-events", "auto");
      $(COPIED_LINK).text("https://www.youtube.com/watch?v=" + hid.split("embed/")[1]);
    } else {
      if (sessionStorage.video === "{}") {
        $(RESULTS_HEADER).css("background-image", "url(../assets/images/background-logo.png)");
      } else {
        $(RESULTS_HEADER).css("background-image", "url(../assets/images/no-results.png)");
      }

      $(VIDEO_PLAYER).css("background-image", "url()");
      $(PLAY_YOUTUBE_VIDEO).hide();
      $(VIDEO_TITLE_VIDEOS).text("Video Name");
      $(YOUTUBE_CHANNEL).text("YouTube Channel");
      $(VIDEO_POSITION).text("0 of 0");

      $(EDIT_PLAYLIST_WRAPPER + "," + LINK_PLAYLIST_WRAPPER + "," + PREVIEW_PLAYLIST_WRAPPER).css("cursor", "default");
      $(VIDEO_PLAYER + "," + VIDEO_TITLE_VIDEOS + "," + YOUTUBE_CHANNEL + "," + VIDEO_PLAYLIST_NAME + "," + DELETE_VIDEO + "," + VIDEO_POSITION + "," + EDIT_PLAYLIST_WRAPPER + "," + LINK_PLAYLIST_WRAPPER + "," + PREVIEW_PLAYLIST_WRAPPER + "," + ARROW_FIRST + "," + ARROW_PREV + "," + ARROW_NEXT + "," + ARROW_LAST).css("pointer-events", "none");
      $(DELETE_VIDEO).css("color", "#C0C0C0");

      if (!$(SEARCH_VID).val().length) {
        $(SEARCH_VID).attr("disabled", true);
        setTimeout(function () {
          $(MENU_BACK_IMG).trigger("click");
        }, 1000);
      }
    }
    resetArrowStyling($(PAGE_CURRENT));
  }

  //CREATE PLAYLIST UI
  function createDOM(n, k, p, s) {

    if (!$(RESULTS + ":nth(" + n + ")").length) {

      added = temp || 0;
      var pg = n + 1;

      $(RESULTS_WRAPPER).append('<div class="results"></div>');
      $(PAGE_TOTAL).text(pg);
    }

    if (/alphabet/.test(p)) {

      var f = p.split("alphabet/")[1].split(".png")[0],
        t = p.split("alphabet/")[0];

      p = t + "alphabet/" + f + 1 + ".png";
    }

    $(RESULTS + ":nth(" + n + ")").append('<div class="image-wrapper"></div>');
    $(IMG_WRAPPER + ":nth(" + added + ")").append('<img src="' + p + '" hidden_title="' + k + '" class="playlist-favorite ' + s + '" />');
    $(IMG_WRAPPER + ":nth(" + added + ")").append('<div class="image-title"></div>');
    $(IMG_WRAPPER + ":nth(" + added + ")").append('<div class="image-name"></div>');
    $(IMG_NAME + ":nth(" + added + ")").append('<span class="ellipsis">' + decodeURIComponent(k.replace(/\+/g, " ")) + ' </span>');

    added++;
    temp = added;
  }

  //CREATE VIDEO UI
  function createVidDOM(n, lk, tt, an, au, vp) {

    $(SEARCH_PLAY + "," + RESULTS + "," + PLAYLIST_PLAYER + "," + TITLE_VIDEOS + "," + DESCRIPTION_VIDEOS + "," + ADD_VIDS + "," + VIEW_VIDS + "," + DELETE_PLAYLIST + "," + SCAN_PAGE_WRAPPER + "," + NEW_PLAYLIST_DESCRIPTION + "," + CHARACTER_DESCRIPTION_POPUP_WRAPPER + "," + DESCRIPTION_POPUP_TITLE + "," + NAME_POPUP_WRAPPER + "," + PLAYLIST_POPUP_PREVIEW + "," + NEW_PLAYLIST_IMAGE + "," + POPUP_IMAGE_IMPORT + "," + IMAGE_POPUP_WRAPPER + "," + PAGE_CURRENT + "," + PAGE_TOTAL + "," + EDIT_PLAYLIST_TEXT + "," + LINK_PLAYLIST_TEXT + "," + PREVIEW_PLAYLIST_TEXT + "," + PLAYLIST_DETAILS_VIDEOS + "," + PLAYLIST_DETAILS_UPDATED + "," + PLAYLIST_NUM_VIDEOS + "," + MODIFIED_VIDEOS + "," + DELETE_PLAYLIST + "," + PLAYS_VIDEOS).hide();
    $(SEARCH_VID + "," + VIDEO_PLAYER + "," + VIDEO_TITLE_VIDEOS + "," + VIDEO_PLAYLIST_NAME + "," + YOUTUBE_CHANNEL + "," + DELETE_VIDEO + "," + MENU_BACK_IMG + "," + VIDEO_POSITION + "," + MAIN_POPUP_POSITION + "," + MAIN_POPUP_POSITION_WRAPPER + "," + VIDEO_POPUP_PREVIEW + "," + THUMBNAIL_POPUP + "," + THUMBNAIL_POPUP_WRAPPER + "," + VID_PAGE_CURRENT + "," + VID_PAGE_TOTAL + "," + EDIT_VIDEO_TEXT + "," + LINK_VIDEO_TEXT + "," + PREVIEW_VIDEO_TEXT + "," + MENU_BACK_IMG).show();
    $(APP_LOGO).hide();
    $(APP_NAME).text(decodeURIComponent($(PLAYLIST_ACTIVE).attr("hidden_title").toUpperCase().replace(/\+/g, " ")));
    $(HEADER_RIGHT).css("cursor", "not-allowed");
    $(RESET_APP_WRAPPER + " img").css("cursor", "not-allowed");

    var obj = JSON.parse(localStorage.playlist)[$(PLAYLIST_ACTIVE).attr("hidden_title")],
      thb = obj.thumbnails,
      vid = Number(obj.videos);

    if (!$(ACTIVE_PLAYLIST_VIDEOS + ":nth(" + n + ")").length) {
      vid_added = vid_temp || 0;
      var pg = n + 1;
      $(RESULTS_WRAPPER).append('<div class="active-playlist-videos">');
      $(VID_PAGE_TOTAL).text(pg);
    }

    var img;

    if (thb !== "") {
      var s = thb.split(",")[vp - 1];
      img = "https://img.youtube.com/vi/" + lk.split("embed/")[1] + "/" + s + ".jpg";
    } else {
      img = "https://img.youtube.com/vi/" + lk.split("embed/")[1] + "/mqdefault.jpg";
    }

    $(ACTIVE_PLAYLIST_VIDEOS + ":nth(" + n + ")").append('<div class="video-playlist-video" href="' + lk + '"></div>');
    $(VIDEO_PLAYLIST + ":nth(" + vid_added + ")").append('<img class="video-playlist-favorite" src="' + img + '" title="' + tt.replace(/"/g, "''") + '" hidden_title="' + encodeURIComponent(tt) + '" />');
    $(VIDEO_PLAYLIST + ":nth(" + vid_added + ")").append('<div class="video-image-title"></div>');
    $(VIDEO_PLAYLIST + ":nth(" + vid_added + ")").append('<div class="video-image-name"></div>');
    $(VID_IMG_NAME + ":nth(" + vid_added + ")").append('<span class="ellipsis">' + tt + ' </span>');

    vid_added++;
    vid_temp = vid_added;
  }

  //NAVIGATION ARROWS
  $(document).on("click", ARROW_LAST + "," + ARROW_NEXT + "," + ARROW_PREV + "," + ARROW_FIRST, function () {

    if ($(this).is(ARROW_LAST)) {
      direction = "LAST";
    }
    if ($(this).is(ARROW_NEXT)) {
      direction = "NEXT";
    }
    if ($(this).is(ARROW_PREV)) {
      direction = "PREV";
    }
    if ($(this).is(ARROW_FIRST)) {
      direction = "FIRST";
    }

    if (!/BLOCK/i.test($(MENU_BACK_IMG).css("display"))) {
      navArrows(RESULTS, "active-page", PAGE_CURRENT, direction);
      resetArrowStyling($(PAGE_CURRENT));
    } else {
      navArrows(ACTIVE_PLAYLIST_VIDEOS, "active-playlist-page", VID_PAGE_CURRENT, direction);
      resetArrowStyling($(VID_PAGE_CURRENT));
    }
  });

  //DETERMINE NAVIGATION
  function navArrows(r, ap, pg, d) {

    var n;

    for (var i = 0; i < $(r).length; i++) {
      if ($(r + ":nth(" + i + ")").hasClass(ap)) {
        $(r + ":nth(" + i + ")").removeClass(ap);
        $(r + ":nth(" + i + ")").css("visibility", "hidden");
        if (d === "NEXT") {
          n = i + 1;
        }
        if (d === "PREV") {
          if (i !== 0) {
            n = i - 1;
          } else {
            n = $(r).length - 1;
          }
        }
        if (d === "LAST") {
          n = $(r).length - 1;
        }
        if (!!$(r + ":nth(" + n + ")").length && d !== "FIRST") {
          $(r + ":nth(" + n + ")").addClass(ap);
          $(r + ":nth(" + n + ")").css("visibility", "visible");
          $(pg).text((n + 1));
          break;
        } else {
          n = 0;
          $(r + ":nth(" + n + ")").addClass(ap);
          $(r + ":nth(" + n + ")").css("visibility", "visible");
          $(pg).text((n + 1));
          break;
        }
      }
    }
  }

  //ADD VIDEO | PLAY PLAYLIST
  $(document).on("click", ADD_VIDS + "," + PLAY_BUTTON_WRAPPER, function () {

    if (navigator.onLine && $(this).css("cursor") !== "wait") {

      var pla, send = {},
        self = this,
        pg = parseValue($(PAGE_CURRENT).text()),
        obj = JSON.parse(localStorage.playlist)[$(PLAYLIST_ACTIVE).attr("hidden_title")],
        thb = obj.thumbnails,
        lnk = obj.link;

      if (/\|/.test(pla)) {
        pla = (obj.plays).split("|")[0];
      } else {
        pla = obj.plays;
      }

      send.playlist_name = ($(PLAYLIST_ACTIVE).attr("hidden_title")).replace(/%20/g, "+");
      send.playlist_description = obj.description;
      send.playlist_image = obj.image;

      if ($(self).is(ADD_VIDS)) {

        $(self).css("cursor", "wait");
        send.playlist_action = "ADD_VIDEO";
        send.playlist_plays = pla;

        if (thb !== "") {

          var temp = thb.split(","),
            tempLen = temp.length;

          temp.splice(tempLen, 0, "mqdefault");
          var tempString = temp.join(",");
          send.thumbnails = tempString;
        }
      }

      if ($(self).is(PLAY_BUTTON_WRAPPER) && lnk !== "" && !sessionStorage.playlist_num_videos_hover) {

        $(self).css("cursor", "wait");

        send.playlist_action = "PLAY_PLAYLIST";

        if (lnk !== "") {
          send.playlist = lnk.match(/video_ids=(.*)/)[1];
        }

        if (Number(pla) <= 998) {
          send.playlist_plays = (Number(pla) + 1).toString();
        }

        if ((Number(pla) >= 999 && Number(pla) <= 9998) || (Number(pla) >= 9999 && Number(pla) <= 99998) || (Number(pla) >= 99999 && Number(pla) <= 999998)) {

          var n, fd, sd, td, fud, inc = Number(pla) + 1,
            spl = inc.toString(),
            cnt = spl.length;

          if (cnt === 4) {
            fd = spl[0];
            sd = spl[1];
            if (sd !== "0") {
              n = fd + "." + sd + "K";
            } else {
              n = fd + "K";
            }
          }

          if (cnt === 5) {
            fd = spl[0];
            sd = spl[1];
            td = spl[2];
            if (td !== "0") {
              n = fd + sd + "." + td + "K";
            } else {
              n = fd + sd + "K";
            }
          }

          if (cnt === 6) {
            fd = spl[0];
            sd = spl[1];
            td = spl[2];
            fud = spl[3];
            if (fud !== "0") {
              n = firstDigit + sd + td + "." + fud + "K";
            } else {
              n = firstDigit + sd + td + "K";
            }
          }

          send.playlist_plays = inc + "|" + n;
        }

        if (Number(pla) === 999999) {
          var inc_one = Number(pla) + 1;
          send.playlist_plays = inc_one + "|" + "1M";
        }

        if (Number(pla) > 999999) {
          var inc_two = Number(pla) + 1;
          send.playlist_plays = inc_two + "|" + "1M+";
        }

        if (thb !== "") {
          send.thumbnails = thb;
        }
      }

      chrome.runtime.getBackgroundPage(function (bg) {

        if ($(self).is(ADD_VIDS)) {
          bg.chromeExtension.updatePlaylist(send);
        }

        if ($(self).is(PLAY_BUTTON_WRAPPER)) {
          if (!sessionStorage.playlist_num_videos_hover) {
            if (send.playlist !== undefined) {
              bg.chromeExtension.createPlaylist(send);
            } else {
              playlistMessage("empty_playlist");
            }
          }
        }
      });

      chrome.runtime.onMessage.addListener(function (message, messageSender, sendResponse) {

        chrome.runtime.onMessage.removeListener(arguments.callee);

        var data = message.data;

        if (data === "ADDED_VIDEO" || data === "PLAYED_PLAYLIST") {

          for (var i = 0; i < $(PLAYLIST).length; i++) {
            if ($(PLAYLIST + ":nth(" + i + ")").hasClass("active-playlist")) {
              storeNum = i;
            }
          }

          if (!!$(SEARCH_PLAY).val().length) {
            searchAnimation = true;
            $(SEARCH_PLAY).trigger("keyup", [pg]);
          } else {
            createPlaylist("UPDATE", pg);
          }

          if (data === "ADDED_VIDEO") {
            trackEvent("event", "Playlist", "add", "YouTube Video Page", 1);
          }

          if (data === "PLAYED_PLAYLIST") {
            if (send.playlist !== undefined) {
              trackEvent("event", "Playlist", "play", "Play", 1);
              chrome.tabs.create({
                url: lnk,
                active: true
              });
            }
          }

          if (data === "ADDED_VIDEO" && !$(SEARCH_PLAY).val().length) {
            playlistMessage(data.toLowerCase());
          }

          $(self).css("cursor", "pointer");
        }

        if (data === "MAX_VIDEO" || data === "VIDEO_EXISTS" || data === "INVALID_PAGE" || data === "VIDEO_UNAVAILABLE") {
          playlistMessage(data.toLowerCase());
          $(self).css("cursor", "pointer");
        }
      });
    }

    if (!navigator.onLine) {
      playlistMessage("offline_state");
    }
  });

  //PLAY VIDEO
  $(document).on("click", VIDEO_PLAYER, function () {

    if (navigator.onLine) {

      var a, self = this,
        vi = $(ACTIVE_PLAYLIST_VIDEO).attr("href").match(/embed\/(.*)/)[1],
        lnk = "https://www.youtube.com/watch?v=" + vi;

      if (lnk !== "") {
        trackEvent("event", "Video", "play", "Play", 1);
        chrome.tabs.create({
          url: lnk,
          active: true
        });
      }
    } else {
      playlistMessage("offline_state");
    }
  });

  //ACTIVE PLAYLIST | ACTIVE VIDEO
  $(document).on("click", IMG_WRAPPER + "," + VIDEO_PLAYLIST_NOT_ACTIVE, function () {

    if ($(this).is(IMG_WRAPPER)) {

      var index = $(IMG_WRAPPER).index(this),
        not_play_act = $(IMG_WRAPPER + ":nth(" + index + ")").children();

      if (!/active\-playlist/.test(not_play_act.attr("class"))) {

        $(PLAYLIST_ACTIVE).next().hide();
        $(PLAYLIST_ACTIVE).next().next().show();

        for (var i = 0; i < $(PLAYLIST).length; i++) {
          $(PLAYLIST + ":nth(" + i + ")").next().next().css("border-color", "#333333");
          $(PLAYLIST + ":nth(" + i + ")").next().next().children().css("color", "#C0C0C0");
          $(PLAYLIST + ":nth(" + i + ")").removeClass("active-playlist");
          $(PLAYLIST + ":nth(" + i + ")").parent().css("border-color", "#333333");
        }

        $(not_play_act).next().next().css("border-color", "#bbb999");
        $(not_play_act).next().next().children().css("color", "#bbb999");
        $(not_play_act).parent().css("border-color", "#bbb999");
        $(not_play_act).addClass("active-playlist");
        playlistPrev(not_play_act);
      }
    }

    if ($(this).is(VIDEO_PLAYLIST_NOT_ACTIVE)) {

      var not_vid_act = $(this).attr("class");

      $(VIDEO_IMAGE_TITLE).hide();

      for (var x = 0; x < $(VIDEO_PLAYLIST).length; x++) {
        $("." + not_vid_act + " " + VID_IMG_NAME).css("border-color", "#333333");
        $(VIDEO_PLAYLIST + ":nth(" + x + ")").removeClass("active-playlist-video");
        $(VIDEO_PLAYLIST + ":nth(" + x + ")").css("border-color", "#333333");
      }

      $(this).addClass("active-playlist-video");
      $(this).css("border-color", "#bbb999");
      $(ACTIVE_VIDEO_IMAGE_NAME).css("border-color", "#bbb999");
      videoPrev(this);
    }
  });

  //RETURN TO MAIN MENU
  $(document).on("click", MENU_BACK_IMG, function () {

    delete sessionStorage.video;

    $(ACTIVE_PLAYLIST_VIDEOS).remove();
    $(SEARCH_VID).val("");
    $(APP_LOGO).show();
    $(APP_NAME).text("CHRONICLE");
    $(EDIT_PLAYLIST_WRAPPER).attr("title", "Edit Playlist Details");
    $(LINK_PLAYLIST_WRAPPER).attr("title", "Copy Playlist Link");
    $(PREVIEW_PLAYLIST_WRAPPER).attr("title", "Preview Playlist");
    $(HEADER_RIGHT).css("cursor", "pointer");
    $(RESET_APP_WRAPPER + " img").css("cursor", "pointer");
    $(SEARCH_VID + "," + MENU_BACK_IMG + "," + VIDEO_PLAYER + "," + VIDEO_TITLE_VIDEOS + "," + VIDEO_PLAYLIST_NAME + "," + YOUTUBE_CHANNEL + "," + DELETE_VIDEO + "," + VIDEO_POSITION + "," + MAIN_POPUP_POSITION + "," + MAIN_POPUP_POSITION_WRAPPER + "," + VIDEO_POPUP_PREVIEW + "," + THUMBNAIL_POPUP + "," + THUMBNAIL_POPUP_WRAPPER + "," + VID_PAGE_CURRENT + "," + VID_PAGE_TOTAL + "," + EDIT_VIDEO_TEXT + "," + LINK_VIDEO_TEXT + "," + PREVIEW_VIDEO_TEXT).hide();
    $(SEARCH_PLAY + "," + RESULTS + "," + PLAYLIST_PLAYER + "," + TITLE_VIDEOS + "," + DESCRIPTION_VIDEOS + "," + ADD_VIDS + "," + VIEW_VIDS + "," + DELETE_PLAYLIST + "," + SCAN_PAGE_WRAPPER + "," + NEW_PLAYLIST_DESCRIPTION + "," + DESCRIPTION_POPUP_TITLE + "," + CHARACTER_DESCRIPTION_POPUP_WRAPPER + "," + NAME_POPUP_WRAPPER + "," + PLAYLIST_POPUP_PREVIEW + "," + NEW_PLAYLIST_IMAGE + "," + POPUP_IMAGE_IMPORT + "," + IMAGE_POPUP_WRAPPER + "," + PAGE_CURRENT + "," + PAGE_TOTAL + "," + EDIT_PLAYLIST_TEXT + "," + LINK_PLAYLIST_TEXT + "," + PREVIEW_PLAYLIST_TEXT + "," + PLAYLIST_DETAILS_VIDEOS + "," + PLAYLIST_DETAILS_UPDATED + "," + PLAYLIST_NUM_VIDEOS + "," + MODIFIED_VIDEOS + "," + DELETE_PLAYLIST + "," + PLAYS_VIDEOS).show();

    if (!!$(SEARCH_PLAY).val().length) {
      $(SEARCH_PLAY).focus();
    }

    var pg = parseValue($(PAGE_CURRENT).text());

    for (var i = 0; i < $(PLAYLIST).length; i++) {
      if ($(PLAYLIST + ":nth(" + i + ")").hasClass("active-playlist")) {
        storeNum = i;
      }
    }

    if (!!$(SEARCH_PLAY).val().length) {
      $(SEARCH_PLAY).trigger("keyup", [pg]);
    } else {
      createPlaylist("UPDATE", pg);
    }

    trackVPage("playlist");
  });

  //SCAN PAGE
  $(document).on("click", SCAN_PAGE_WRAPPER, function () {

    $("#select-all-checkbox").prop("checked", false);
    $("#select-all-status").text("Select All");

    if (navigator.onLine && $(this).css("cursor") !== "wait") {

      var self = this;

      $(self).css("cursor", "wait");

      chrome.runtime.getBackgroundPage(function (bg) {
        bg.chromeExtension.activeTab();
      });

      chrome.runtime.onMessage.addListener(function (message, messageSender, sendResponse) {

        if (message.data === "VIDEOS_SCANNED") {

          chrome.runtime.onMessage.removeListener(arguments.callee);

          $(APP_POPUP + "," + DELETE_APP_POPUP + "," + WELCOME_POPUP + "," + PREVIEW_POPUP_HOW_TO_WRAPPER).hide();

          $(OVERLAY).fadeIn("normal");
          $(SCAN_PAGE_POPUP).show();

          var idlst;

          if (localStorage.playlist_scanned !== undefined) {
            idlst = (localStorage.playlist_scanned).split(",");
          } else {
            idlst = "";
          }

          if (idlst !== "") {

            for (var i = 0; i < idlst.length; i++) {
              var ru = "https://www.youtube.com/watch?v=" + idlst[i];
              scannedLinks.push(ru);
            }

            //RESET STYLING STATE
            $(SCAN_NUM_TEXT).css("left", "230px");
            $(SCAN_TOTAL_TEXT).css("left", "441px");
            $(SCAN_TOTAL_DYNAMIC).css("left", "517px");

            scanAPI(scannedLinks.length, 0);
          } else {
            if ($(SCAN_FOUND_TITLE).length < 9) {
              $(SCAN_PAGE_MAIN).css("border-bottom", "1px solid #404040");
            }

            $(SCAN_NUM_FOUND).text("Sorry, no YouTube videos found..");
            $(SCAN_PAGE_GIF).hide("fast");
          }

          $(self).css("cursor", "pointer");
        }

        if (message.data === "CANNOT_SCAN_PAGE") {
          $(self).css("cursor", "pointer");
        }
      });
    }

    if (!navigator.onLine) {
      playlistMessage("offline_state");
    }
  });

  //API CALL TO GET SCANNED DETAILS
  function scanAPI(cnt, num) {

    var tv, obj = JSON.parse(localStorage.playlist)[encodeURIComponent($(TITLE_VIDEOS).text()).replace(/%20/g, "+")],
      lnk = obj.link;

    if (lnk !== "") {
      tv = lnk.split("video_ids=")[1].split(",").length;
    } else {
      tv = 0;
    }

    if (tv >= 0 && tv < 10) {
      tv = "0" + tv;
    }

    $(SCAN_TOTAL_TEXT).html("Playlist Total&nbsp;");
    $(SCAN_TOTAL_DYNAMIC).html(":&nbsp;" + tv);
    $(SCAN_TOTAL_STATIC).html("of&nbsp;&nbsp;50");

    var temp = num;

    if (temp >= 0 && temp < 10) {
      temp = "0" + temp;
    }

    $(SCAN_NUM_FOUND).text(temp);
    $(SCAN_NUM_TEXT).text("YouTube Videos Found : ");

    var txt = $(SCAN_NUM_TEXT).text();

    var s_link = scannedLinks[num];

    if (num < cnt) {
      num++;
    } else {
      return;
    }

    $.getJSON("https://noembed.com/embed", { format: "json", url: s_link })
      .done(function (response) {

        if (response.error === undefined) {
          scan_active_title.push(response.title);
          scan_active_author_name.push(response.author_name);
          scan_active_author_url.push(response.author_url);
          scan_redirect_urls.push(s_link);
        } else {
          scan_not_found.push(response.error);
        }

        scanAPI(scannedLinks.length, num);

        var sat = scan_active_title.length,
          ded = scan_not_found.length;

        if (sat === (cnt - ded)) {

          $(SCAN_FOUND_TITLE).html("");
          $(SCAN_FOUND_AUTHOR).html("");
          $(SCAN_FOUND_SELECT).html("");

          for (var i = 0; i < scannedLinks.length; i++) {
            if (scan_active_title[i] !== undefined) {
              renderScannedUI(i, scan_redirect_urls[i], scan_active_title[i], scan_active_author_name[i], scan_active_author_url[i]);
            }
          }

          for (var x = 0; x < $(SCANNED_VIDEO_SELECT).length; x++) {
            if ($(SCANNED_VIDEO_SELECT + ":nth(" + x + ")").attr("data-class") === "exists") {
              $(SCANNED_VIDEO_SELECT + ":nth(" + x + ")").text("EXISTS");
              $(SCANNED_VIDEO_SELECT + ":nth(" + x + ")").parent().css("pointer-events", "none");
            }
          }

          if ($(SCANNED_VIDEO_TITLE).length < 9) {
            $(SCAN_PAGE_MAIN).css("border-bottom", "1px solid #404040");
          }

          $(SCAN_PAGE_GIF).hide("fast");

          delete localStorage.playlist_scanned;

          scan_active_title = [];
          scan_active_author_name = [];
          scan_active_author_url = [];
          scan_redirect_urls = [];
          scannedLinks = [];
          scan_not_found = [];
        }
      });
  }

  //CREATE SCANNED UI
  function renderScannedUI(num, link, title, author, author_url) {

    var len,
      state = "add",
      plIDs = JSON.parse(localStorage.playlist)[encodeURIComponent($(TITLE_VIDEOS).text()).replace(/%20/g, "+")].link,
      ytID = link.match(/watch\?v\=([^&]+)/)[1];

    if (plIDs !== "") {

      len = plIDs.split("video_ids=")[1].split(",");

      for (var i = 0; i < len.length; i++) {
        if (ytID !== len[i]) {
          state = "add";
        } else {
          state = "exists";
          break;
        }
      }
    }

    $(SCAN_FOUND_TITLE).append('<div class="video-title-wrapper">');
    $(VIDEO_TITLE_WRAPPER + ":nth(" + num + ")").append('<div title="' + title.replace(/"/g, "''") + '" class="scanned-video-title ellipsis">' + title + '</div>');

    $(SCAN_FOUND_AUTHOR).append('<div class="popup-author-wrapper">');
    $(POPUP_AUTHOR_WRAPPER + ":nth(" + num + ")").append('<div title="' + author.replace(/"/g, "''") + '" class="scanned-video-author ellipsis">' + author + '</div>');

    $(SCAN_FOUND_SELECT).append('<div class="popup-select-wrapper"></div>');
    $(POPUP_SELECT_WRAPPER + ":nth(" + num + ")").append('<div class="scanned-video-select" data-id="' + ytID + '" data-class="' + state + '">ADD</div>');

    $(SELECT_ALL_WRAPPER).show();
  }

  //SELECT SCANNED RESULT
  $(document).on("click", SCANNED_VIDEO_SELECT, function () {

    if (!$(this).hasClass("selected") && $(this).parent().css("cursor") !== "not-allowed") {
      $(this).addClass("selected");
      $(this).text("ADDED");
      $(this).css("color", "#bbb999");
      cur_add = cur_add + 1;
    } else {
      if ($(this).text() === "REMOVE") {
        $(this).text("ADD");
        $(this).removeClass("selected");
        $(this).css("color", "#bbb999");
        cur_add = cur_add - 1;
      }
    }

    if ($(this).parent().css("cursor") !== "not-allowed") {

      var tv, obj = JSON.parse(localStorage.playlist)[encodeURIComponent($(TITLE_VIDEOS).text()).replace(/%20/g, "+")];

      if (obj.link !== "") {
        tv = (obj.link).split("video_ids=")[1].split(",").length;
      } else {
        tv = 0;
      }

      var sum = (Number(tv) + cur_add);

      if (sum >= 0 && sum < 10) {
        sum = "0" + sum;
      }

      $(SCAN_TOTAL_DYNAMIC).html(":&nbsp;" + sum);

      //WINDOWS STYLING FIX
      if (/WIN/i.test(navigator.platform) && parseValue($(SCAN_TOTAL_DYNAMIC).text()) >= 10 && parseValue($(SCAN_TOTAL_DYNAMIC).text()) <= 19) {
        $(SCAN_TOTAL_TEXT).css("left", "444px");
        $(SCAN_TOTAL_DYNAMIC).css("left", "522px");
      } else {
        $(SCAN_TOTAL_TEXT).css("left", "441px");
        $(SCAN_TOTAL_DYNAMIC).css("left", "517px");
      }
    }
  });

  //MOUSEENTER SCANNED RESULT
  $(document).on("mouseenter", POPUP_SELECT_WRAPPER, function () {

    if ($(this).children().hasClass("selected")) {
      $(this).children().text("REMOVE");
      $(this).css("cursor", "pointer");
    } else {
      if (parseValue($(SCAN_TOTAL_DYNAMIC).text()) < 50) {
        $(this).css("pointer-events", "auto");
        $(this).children().css("color", "#bbb999");
        $(this).css("cursor", "pointer");
      } else {
        $(this).children().css("color", "#c0c0c0");
        $(this).css("cursor", "not-allowed");
      }
    }
  });

  //MOUSELEAVE SCANNED RESULT
  $(document).on("mouseleave", POPUP_SELECT_WRAPPER, function () {

    if ($(this).children().hasClass("selected")) {
      $(this).children().text("ADDED");
    } else {
      $(this).children().css("color", "#c0c0c0");
    }
    $(this).css("cursor", "default");
  });

  //CANCEL SCAN POPUP
  $(SCAN_CANCEL).click(function () {
    hideScanner();
    cur_add = 0;
  });

  //UPDATE SCAN POPUP
  $(document).on("click", SCAN_UPDATE, function () {

    var tv, active_obj = JSON.parse(localStorage.playlist)[$(PLAYLIST_ACTIVE).attr("hidden_title")];

    if (active_obj.link !== "") {
      tv = active_obj.link.split("video_ids=")[1].split(",").length;
    } else {
      tv = 0;
    }

    if (navigator.onLine && tv < 50 && $(this).css("cursor") !== "wait") {

      var pla, send = {},
        self = this,
        pg = parseValue($(PAGE_CURRENT).text()),
        obj = JSON.parse(localStorage.playlist)[$(PLAYLIST_ACTIVE).attr("hidden_title")],
        ttl = $(PLAYLIST_ACTIVE).attr("hidden_title"),
        dsc = obj.description,
        thb = obj.thumbnails,
        lnk = obj.link,
        img = obj.image,
        len = $(SCANNED_VIDEO_SELECT + ".selected").length,
        lst = "",
        ntb = ",mqdefault";

      if (/\|/.test(pla)) {
        pla = (obj.plays).split("|")[0];
      } else {
        pla = obj.plays;
      }

      if (!!len) {

        send.playlist_name = ttl;
        send.playlist_description = dsc;
        send.playlist_image = img;
        send.playlist_action = "SCAN_ADD_VIDEO";
        send.playlist_plays = pla;

        $(self).css("cursor", "wait");

        for (var i = 0; i < len; i++) {
          if (!lst.length) {
            lst += $(SCANNED_VIDEO_SELECT + ".selected:nth(" + i + ")").attr("data-id");
          } else {
            lst += "," + $(SCANNED_VIDEO_SELECT + ".selected:nth(" + i + ")").attr("data-id");
          }
          ntb += ",mqdefault";
        }

        if (thb !== "") {
          send.thumbnails = thb + ntb;
        } else {
          send.thumbnails = ntb.replace(/,/, "");
        }

        var cl;

        if (lnk !== "") {
          cl = lnk.match(/video_ids=(.*)/)[1].split(",");
          send.playlist = cl + "," + lst;
        } else {
          cl = "";
          send.playlist = lst;
        }

        chrome.runtime.getBackgroundPage(function (bg) {
          bg.chromeExtension.createPlaylist(send);
        });

        chrome.runtime.onMessage.addListener(function (message, messageSender, sendResponse) {

          chrome.runtime.onMessage.removeListener(arguments.callee);

          if (message.data === "SCANNED_ADDED_VIDEO") {

            for (var x = 0; x < $(PLAYLIST).length; x++) {
              if ($(PLAYLIST + ":nth(" + x + ")").hasClass("active-playlist")) {
                storeNum = x;
              }
            }

            trackEvent("event", "Playlist", "add", "Scanned Page", len);

            if (!!$(SEARCH_PLAY).val().length) {
              hideScanner();
              $(self).css("cursor", "pointer");
              cur_add = 0;
            }

            setTimeout(function () {
              if (!!$(SEARCH_PLAY).val().length) {
                searchAnimation = true;
                $(SEARCH_PLAY).trigger("keyup", [pg]);
              } else {
                createPlaylist("UPDATE", pg);
                setTimeout(function () {
                  playlistMessage("added_video");
                }, 50);
              }
            }, 100);

            setTimeout(function () {
              if (!$(SEARCH_PLAY).val().length) {
                hideScanner();
                $(self).css("cursor", "pointer");
                cur_add = 0;
              }
            }, 100);
          }
        });
      } else {
        hideScanner();
        cur_add = 0;
      }
    } else if (!navigator.onLine) {
      if ($(IMAGE_TITLE).css("display") !== "block") {
        $(SCAN_ERROR_MESSAGE).text("YOU ARE OFFLINE");
        $(SCAN_ERROR_MESSAGE).fadeIn("normal").delay(3000).fadeOut("normal");
      }
    } else if (tv === 50) {
      hideScanner();
      cur_add = 0;
    }
  });

  //DOUBLE CLICK VIEW PLAYLIST CONTENTS
  $(document).on("dblclick", IMG_WRAPPER, function () {
    if ($(this).is(IMG_WRAPPER) && $(this).children().hasClass("active-playlist") && $(this).children().hasClass("enabled")) {
      trackEvent("event", "Playlist", "view", "View", 2);
      $(VIEW_VIDS).trigger("click");
    } else {
      playlistMessage("empty_playlist");
    }
  });

  //VIEW PLAYLIST VIDEOS
  $(document).on("click", VIEW_VIDS, function (event) {

    if (navigator.onLine && $(this).css("cursor") !== "wait") {

      vid_added = 0;
      vid_temp = 0;

      var lst, lnk = JSON.parse(localStorage.playlist)[$(PLAYLIST_ACTIVE).attr("hidden_title")].link;

      $(this).css("cursor", "wait");

      if (lnk !== "") {
        lst = lnk.match(/video_ids=(.*)/)[1].split(",");
      } else {
        lst = "";
      }

      if (lst !== "") {

        $(OVERLAY_AJAX_LOADING).show("fast");

        $(ACTIVE_PLAYLIST_VIDEOS).text("");

        for (var i = 0; i < lst.length; i++) {
          var ru = "https://www.youtube.com/embed/" + lst[i];
          embedLinks.push(ru);
        }

        viewAPI(embedLinks.length, 0);

        if (event.isTrigger === undefined) {
          trackEvent("event", "Playlist", "view", "View", 1);
        }
      } else {
        $(this).css("cursor", "pointer");
        playlistMessage("empty_playlist");
      }
    } else {
      playlistMessage("offline_state");
    }
  });

  //API CALL TO GET VIDEO DETAILS
  function viewAPI(cnt, num) {

    var lnk = embedLinks[num];

    if (num < embedLinks.length) {
      num++;
    } else {
      return;
    }

    $.getJSON("https://noembed.com/embed", { format: "json", url: lnk })
      .done(function (res) {

        delete sessionStorage.video;

        if (res.title === undefined) {
          res.title = "This video is unavailable";
        }

        if (res.author_name === undefined) {
          res.author_name = "This video is unavailable";
        }

        if (res.author_url === undefined) {
          res.author_url = "https://www.youtube.com/watch?v=" + lnk.split("embed/")[1];
        }

        active_title.push(res.title);
        active_author_name.push(res.author_name);
        active_author_url.push(res.author_url);
        active_position.push(num);
        redirect_urls.push(lnk);

        //Recursive call to tackle async ajax issue
        viewAPI(embedLinks.length, num);

        if (cnt === num) {

          var n, obj = {};

          for (var i = 0; i < cnt; i++) {

            n = Math.floor(i / 12);

            createVidDOM(n, redirect_urls[i], active_title[i], active_author_name[i], active_author_url[i], active_position[i]);

            obj[redirect_urls[i]] = {};
            obj[redirect_urls[i]].video_title = active_title[i];
            obj[redirect_urls[i]].author_name = active_author_name[i];
            obj[redirect_urls[i]].author_url = active_author_url[i];
            obj[redirect_urls[i]].video_position = active_position[i];
          }

          sessionStorage.setItem("video", JSON.stringify(obj));

          active_title = [];
          active_author_name = [];
          active_author_url = [];
          redirect_urls = [];
          active_position = [];
          active_not_found = [];
          embedLinks = [];

          if (!!$(ACTIVE_PLAYLIST_VIDEOS_FIRST).length) {
            $(ACTIVE_PLAYLIST_VIDEOS_FIRST).addClass("active-playlist-page");
            $(ACTIVE_PLAYLIST_VIDEOS_FIRST).css("visibility", "visible");
          } else {
            $(VID_PAGE_TOTAL).text("1");
          }

          $(VID_PAGE_CURRENT).text("1");

          if (!!$(VIDEO_PLAYLIST_FIRST).length) {
            $(VIDEO_PLAYLIST_FIRST).addClass("active-playlist-video");
            $(VIDEO_PLAYLIST_FIRST).css("border-color", "#bbb999");
            $(VIDEO_PLAYLIST_FIRST).children().next().next().css("border-color", "#bbb999");
            videoPrev(ACTIVE_PLAYLIST_VIDEO);
          } else {
            videoPrev();
          }

          $(OVERLAY_AJAX_LOADING).hide("fast");
          $(VIEW_VIDS).css("cursor", "pointer");

          trackVPage("video");
        }
      });
  }

  //DELETE PLAYLIST
  $(DELETE_DELETE).click(function () {
    if (navigator.onLine) {

      if ($(this).css("cursor") !== "wait" && $(DELETE_TITLE).text() === "Delete Playlist") {

        var self = this;
        $(self).css("cursor", "wait");

        $(PLAYLIST_ACTIVE).next().next().fadeOut("normal");

        $(PLAYLIST_ACTIVE).fadeOut("normal", function () {

          var pg, temp = JSON.parse(localStorage.playlist);

          delete temp[encodeURIComponent($(TITLE_VIDEOS).text()).replace(/%20/g, "+")];
          localStorage.setItem("playlist", JSON.stringify(temp));

          for (var i = 0; i < $(PLAYLIST).length; i++) {
            if ($(".playlist-favorite:nth(" + i + ")").hasClass("active-playlist")) {
              if (i !== ($(PLAYLIST).length - 1)) {
                storeNum = i;
              } else if (i > 0) {
                storeNum = i - 1;
              } else {
                storeNum = undefined;
              }
            }
          }
          if (!!$(SEARCH_PLAY).val().length) {
            $(SEARCH_PLAY).trigger("keyup", [pg, "DELETE"]);
          } else {
            if (parseValue($(PAGE_CURRENT).text()) >= parseValue($(PAGE_TOTAL).text())) {

              var keysLen = Object.keys(JSON.parse(localStorage.playlist)).length;

              if (keysLen > 11 && keysLen < 193 && keysLen % 12 === 0) {
                pg = parseValue($(PAGE_CURRENT).text()) - 1;
              } else {
                pg = parseValue($(PAGE_CURRENT).text());
              }
            } else {
              pg = parseValue($(PAGE_CURRENT).text());
            }
            createPlaylist("UPDATE", pg);
          }
          $(self).css("cursor", "pointer");
          trackEvent("event", "Playlist", "delete", "Delete", 1);
        });
      }
    } else {
      playlistMessage("offline_state");
    }
  });

  //DELETE PLAYLIST VIDEO
  $(DELETE_DELETE).click(function () {

    if (navigator.onLine) {

      if ($(this).css("cursor") !== "wait" && $(DELETE_TITLE).text() === "Delete Video") {

        var self = this,
          send = {},
          pg = parseValue($(PAGE_CURRENT).text()),
          obj = JSON.parse(localStorage.playlist)[$(PLAYLIST_ACTIVE).attr("hidden_title")],
          dsc = obj.description,
          img = obj.image,
          pla = obj.plays,
          thb = obj.thumbnails,
          lnk = obj.link;

        $(self).css("cursor", "wait");

        send.playlist_name = $(PLAYLIST_ACTIVE).attr("hidden_title");
        send.playlist_description = dsc;
        send.playlist_image = img;
        send.playlist_plays = pla;
        send.playlist_action = "DELETE_VIDEO";

        var arr_id, index;

        if (lnk !== "") {
          arr_id = lnk.match(/video_ids=(.*)/)[1].split(",");
        } else {
          arr_id = "";
        }

        if (arr_id !== "") {
          index = arr_id.indexOf($(ACTIVE_PLAYLIST_VIDEO).attr("href").split("embed/")[1]);
        }

        if (arr_id !== "" && index > -1) {

          $(ACTIVE_PLAYLIST_VIDEO).children().next().next().fadeOut("normal");

          $(ACTIVE_PLAYLIST_VIDEO).fadeOut("normal", function () {

            arr_id.splice(index, 1);
            send.playlist = arr_id.join(",");

            if (thb !== "") {
              var temp = thb.split(",");
              temp.splice(index, 1);
              send.thumbnails = temp.join(",");
            }

            chrome.runtime.getBackgroundPage(function (bg) {
              bg.chromeExtension.createPlaylist(send);
            });

            chrome.runtime.onMessage.addListener(function (message, messageSender, sendResponse) {

              chrome.runtime.onMessage.removeListener(arguments.callee);

              if (message.data === "DELETED_VIDEO") {

                var temp = JSON.parse(sessionStorage.video);
                delete temp[$(ACTIVE_PLAYLIST_VIDEO).attr("href")];
                var tempKeys = Object.keys(temp);

                for (var x = index; x < tempKeys.length; x++) {
                  temp[tempKeys[x]].video_position = Number(temp[tempKeys[x]].video_position) - 1;
                }

                sessionStorage.setItem("video", JSON.stringify(temp));

                for (var i = 0; i < $(VIDEO_PLAYLIST).length; i++) {

                  if ($(VIDEO_PLAYLIST + ":nth(" + i + ")").hasClass("active-playlist-video")) {

                    if (i !== ($(VIDEO_PLAYLIST).length - 1)) {
                      storeVidNum = i;
                    } else if (i > 0) {
                      storeVidNum = i - 1;
                    } else {
                      storeVidNum = undefined;
                    }
                  }
                }
                $(SEARCH_VID).trigger("keyup", [pg, "DELETE"]);
                $(self).css("cursor", "pointer");

                trackEvent("event", "Video", "delete", "Delete", 1);
              }
            });
          });
        } else {
          $(self).css("cursor", "pointer");
        }
      }
    } else {
      videoMessage("offline_state");
    }
  });

  //CREATE PLAYLIST | EDIT PLAYLIST
  $(MAIN_POPUP_CREATE).click(function () {

    if (navigator.onLine) {

      var sortAll, send = {},
        act = $(PLAYLIST_ACTIVE).attr("hidden_title"),
        storeObj = JSON.parse(localStorage.playlist),
        objKeys = Object.keys(storeObj),
        cur_pos;

      if ($(MENU_BACK_IMG).css("display") !== "block") {
        send.playlist_name = encodeURIComponent($(NEW_PLAYLIST_NAME).val().replace(/\s+$/g, "")).replace(/%20/g, "+");
        send.playlist_description = encodeURIComponent($(NEW_PLAYLIST_DESCRIPTION).val().replace(/\s+$/g, ""));
        send.playlist_image = $(MAIN_POPUP_PREVIEW_BOX_IMG).attr("src");
      } else {
        send.playlist_name = act;
        send.playlist_description = storeObj[act].description;
        send.playlist_image = storeObj[act].image;
      }

      send.playlist_action = "CREATE_PLAYLIST";

      if ($(ACTIVE_ELEMENT).attr("position") !== undefined) {
        cur_pos = Number($(ACTIVE_ELEMENT).attr("position"));
      }

      if ($(MAIN_POPUP_CREATE).text() === "SAVE" && send.playlist_name !== "") {

        var storeThumb, storePosition,
          storageActive = storeObj[act],
          storageThumbs = storageActive.thumbnails,
          storageVideos = storageActive.videos,
          storageLink = storageActive.link,
          storagePlays = storageActive.plays,
          active_cur_pos = Number($(ACTIVE_ELEMENT).attr("position")),
          createStr = "";

        if ($(ACTIVE_PLAYLIST_VIDEO).attr("href") !== undefined) {
          storePosition = (JSON.parse(sessionStorage.video)[$(ACTIVE_PLAYLIST_VIDEO).attr("href")].video_position - 1);
        }

        if ($(MAIN_POPUP_PREVIEW_BOX_IMG).attr("src").match(/\/([^/]*).jpg$/)) {
          storeThumb = $(MAIN_POPUP_PREVIEW_BOX_IMG).attr("src").match(/\/([^/]*).jpg$/)[1];
        }

        if ($(MENU_BACK_IMG).css("display") === "block" && storageLink !== "" && (Number($(ACTIVE_ELEMENT).attr("position")) + 1) === JSON.parse(sessionStorage.video)[$(ACTIVE_PLAYLIST_VIDEO).attr("href")].video_position) {
          send.playlist = storageActive.link.match(/video_ids=(.*)/)[1];
        } else if ($(MENU_BACK_IMG).css("display") === "block" && storageLink !== "" && (Number($(ACTIVE_ELEMENT).attr("position")) + 1) !== JSON.parse(sessionStorage.video)[$(ACTIVE_PLAYLIST_VIDEO).attr("href")].video_position) {

          var obj = JSON.parse(localStorage.playlist)[$(PLAYLIST_ACTIVE).attr("hidden_title")],
            lnk = obj.link;

          var arr_id = lnk.match(/video_ids=(.*)/)[1].split(","),
            index = arr_id.indexOf($(ACTIVE_PLAYLIST_VIDEO).attr("href").split("embed/")[1]),
            arrThumb = storageThumbs.split(","),
            sThumb = Number($(THUMBNAIL_POPUP + " li[style*='background-color: rgb(187, 185, 153)']").text() - 1).toString();

          if (index > -1) {

            var linkArr = [],
              titleArr = [],
              author_nameArr = [],
              author_urlArr = [],
              vid_posArr = [],
              objVid = JSON.parse(sessionStorage.video),
              objVidKeys = Object.keys(objVid);

            objVidKeys.forEach(function (key, index) {
              linkArr.push(key);
              titleArr.push(objVid[objVidKeys[index]].video_title);
              author_nameArr.push(objVid[objVidKeys[index]].author_name);
              author_urlArr.push(objVid[objVidKeys[index]].author_url);
              vid_posArr.push(objVid[objVidKeys[index]].video_position);
            });

            var item = arr_id[index],
              item2 = linkArr[index],
              item3 = titleArr[index],
              item4 = author_nameArr[index],
              item5 = author_urlArr[index];

            arr_id.splice(index, 1);
            linkArr.splice(index, 1);
            titleArr.splice(index, 1);
            author_nameArr.splice(index, 1);
            author_urlArr.splice(index, 1);

            var num = Number($(ACTIVE_ELEMENT).attr("position"));

            arr_id.splice(num, 0, item);
            linkArr.splice(num, 0, item2);
            titleArr.splice(num, 0, item3);
            author_nameArr.splice(num, 0, item4);
            author_urlArr.splice(num, 0, item5);

            if (storageThumbs !== "" && $(MENU_BACK_IMG).css("display") === "block") {
              arrThumb.splice(index, 1);
              arrThumb.splice(num, 0, sThumb);
              storeObj[act].thumbnails = arrThumb.join(",");
            }

            send.playlist = arr_id.join(",");

            var cnt = linkArr.length,
              vo = {};

            for (var i = 0; i < cnt; i++) {
              vo[linkArr[i]] = {};
              vo[linkArr[i]].video_title = titleArr[i];
              vo[linkArr[i]].author_name = author_nameArr[i];
              vo[linkArr[i]].author_url = author_urlArr[i];
              vo[linkArr[i]].video_position = vid_posArr[i];
            }
            sessionStorage.setItem("video", JSON.stringify(vo));
          }
        } else {
          if (storageLink !== "") {
            send.playlist = storageLink.match(/video_ids=(.*)/)[1];
          }
        }

        if (storageThumbs !== "" && $(MENU_BACK_IMG).css("display") !== "block") {
          //PLAYLIST VIEW WITH THUMBNAILS
          send.thumbnails = storeObj[act].thumbnails;
        } else if (storageThumbs === "" && $(MENU_BACK_IMG).css("display") === "block") {
          //VIDEO VIEW WITHOUT THUMBNAILS
          var num_vids = storageVideos;

          for (var q = 0; q < num_vids; q++) {
            if ((num_vids - q) > 1) {
              createStr += "mqdefault,";
            } else {
              createStr += "mqdefault";
            }
          }
        } else if (storageThumbs !== "" && $(MENU_BACK_IMG).css("display") === "block") {
          //VIEO VIEW WITH THUMBNAILS
          createStr = storeObj[act].thumbnails;
        }

        var array, new_strArray, pos_thumb = false;

        //THUMBNAIL & POSITION CHANGE
        if ($(MENU_BACK_IMG).css("display") === "block" && active_cur_pos !== storePosition) {
          array = createStr.split(",");
          array[active_cur_pos] = storeThumb;
          new_strArray = array.join(",");
          send.thumbnails = new_strArray;
          pos_thumb = true;
        }

        //THUMBNAIL CHANGE
        if ($(MENU_BACK_IMG).css("display") === "block" && active_cur_pos === storePosition) {
          array = createStr.split(",");
          array[storePosition] = storeThumb;
          new_strArray = array.join(",");
          send.thumbnails = new_strArray;
        }

        send.playlist_plays = storagePlays;

        if ($(MENU_BACK_IMG).css("display") !== "block") {

          send.playlist_action = "SAVE_PLAYLIST";

          var temp = JSON.parse(localStorage.playlist);

          if (!temp[send.playlist_name]) {
            delete temp[act];
            localStorage.setItem("playlist", JSON.stringify(temp));
          }
        } else if ($(MENU_BACK_IMG).css("display") === "block") {

          if (pos_thumb === true) {
            send.playlist_action = "SAVE_VIDEO_POS_THUMB";
          } else {
            send.playlist_action = "SAVE_VIDEO_THUMB";
          }
        }
      }

      //CONDITIONAL CHECKS
      var permit, active = $(PLAYLIST_ACTIVE).attr("hidden_title"),
        playlistNum = Object.keys(JSON.parse(localStorage.playlist)).length;

      if ($(TITLE_APP_POPUP).text() === "Create Playlist") {

        if (!!objKeys.length) {

          for (var x = 0; x < objKeys.length; x++) {

            if (objKeys[x] === send.playlist_name) {
              popupErrorMessage("PLAYLIST ALREADY EXISTS");
              permit = "EXISTS";
              break;
            } else {
              permit = "UPDATE";
            }
          }
        }

        if (!objKeys.length) {
          permit = "UPDATE";
        }

        if (playlistNum === 200) {
          popupErrorMessage("MAXIMUM NUMBER OF PLAYLISTS REACHED");
          permit = "MAX NUMBER";
        }

        if (send.playlist_name === "") {
          popupErrorMessage("NO PLAYLIST TITLE");
          permit = "NO TITLE";
        }
      }

      if ($(TITLE_APP_POPUP).text() === "Edit Details" && $(LINK_PLAYLIST_TEXT).is(":visible")) {

        if ($(NEW_PLAYLIST_NAME).val() === JSON.parse(sessionStorage.playlist_details).title && $(NEW_PLAYLIST_DESCRIPTION).val() === JSON.parse(sessionStorage.playlist_details).description && $(MAIN_POPUP_PREVIEW_BOX_IMG).attr("src") === JSON.parse(sessionStorage.playlist_details).image) {
          permit = "DO NOT UPDATE";
        }

        if (send.playlist_name !== active) {

          for (var k = 0; k < objKeys.length; k++) {
            if (objKeys[k] === send.playlist_name) {
              popupErrorMessage("PLAYLIST ALREADY EXISTS");
              permit = "EXISTS";
              break;
            } else {
              permit = "UPDATE";
            }
          }
        }

        if ($(NEW_PLAYLIST_NAME).val() === JSON.parse(sessionStorage.playlist_details).title && ($(NEW_PLAYLIST_DESCRIPTION).val() !== JSON.parse(sessionStorage.playlist_details).description || $(MAIN_POPUP_PREVIEW_BOX_IMG).attr("src") !== JSON.parse(sessionStorage.playlist_details).image)) {
          permit = "UPDATE";
        }

        if (send.playlist_name === "") {
          popupErrorMessage("NO PLAYLIST TITLE");
          permit = "NO TITLE";
        }
      }

      if ($(TITLE_APP_POPUP).text() === "Edit Details" && $(LINK_VIDEO_TEXT).is(":visible")) {

        if ($(POSITION_TOTAL + " " + ACTIVE_ELEMENT).attr("position") === JSON.parse(sessionStorage.video_details).position && $(MAIN_POPUP_PREVIEW_BOX_IMG).attr("src") === JSON.parse(sessionStorage.video_details).image) {
          permit = "DO NOT UPDATE";
        } else {
          permit = "UPDATE";
        }

        if (/\.\.\/assets\/images.*(NoThumbOne|NoThumbTwo|NoThumbThree|NoThumbFour).*png/.test($(MAIN_POPUP_PREVIEW_BOX_IMG).attr("src"))) {
          popupErrorMessage("THUMBNAIL NOT AVAILABLE");
          permit = "INVALID THUMBNAIL";
        }
      }

      if (permit === "UPDATE") {

        $(OVERLAY).hide("normal", function () {

          chrome.runtime.getBackgroundPage(function (bg) {
            bg.chromeExtension.createPlaylist(send);
          });

          chrome.runtime.onMessage.addListener(function (message, messageSender, sendResponse) {

            chrome.runtime.onMessage.removeListener(arguments.callee);

            if ((message.data === "CREATED_PLAYLIST" || message.data === "SAVED_PLAYLIST") && !$(SEARCH_PLAY).val().length) {
              sortAll = Object.keys(JSON.parse(localStorage.playlist)).sort();
            }

            if (message.data === "CREATED_PLAYLIST" && !$(SEARCH_PLAY).val().length) {
              $(SEARCH_PLAY).val("");
              storeNum = sortAll.indexOf(send.playlist_name.replace(/%20/g, "+"));
              createPlaylist("UPDATE", Math.floor(storeNum / 12) + 1);
            }

            if (message.data === "CREATED_PLAYLIST" && !!$(SEARCH_PLAY).val().length) {

              var pg = parseValue($(PAGE_CURRENT).text());

              $(SEARCH_PLAY).trigger("keyup", [pg, undefined, send.playlist_name.replace(/%20/g, "+")]);
            }

            if (message.data === "CREATED_PLAYLIST") {
              trackEvent("event", "Playlist", "create", "Create", 1);
            }

            if (message.data === "SAVED_PLAYLIST") {

              if (!!$(SEARCH_PLAY).val().length) {

                for (var t = 0; t < $(PLAYLIST).length; t++) {
                  if ($(PLAYLIST + ":nth(" + t + ")").hasClass("active-playlist")) {
                    saveNum = t;
                  }
                }

                $(SEARCH_PLAY).trigger("keyup", [undefined, "SAVE_CHANGES", send.playlist_name.replace(/%20/g, "+")]);
              } else {
                storeNum = sortAll.indexOf(send.playlist_name.replace(/%20/g, "+"));
                createPlaylist("UPDATE", Math.floor(storeNum / 12) + 1);
              }

              trackEvent("event", "Playlist", "save", "Save", 1);
            }

            if (message.data === "SAVED_VIDEO_THUMB") {

              var pg_save_thumb = parseValue($(VID_PAGE_CURRENT).text());

              if (!!$(SEARCH_VID).val().length) {

                for (var z = 0; z < $(VIDEO_PLAYLIST).length; z++) {

                  if ($(VIDEO_PLAYLIST + ":nth(" + z + ")").hasClass("active-playlist-video")) {
                    if (!!$(VIDEO_PLAYLIST).length) {
                      storeVidNum = z;
                    }
                  }
                }
              } else {
                storeVidNum = cur_pos;
              }

              $(SEARCH_VID).trigger("keyup", [pg_save_thumb]);

              trackEvent("event", "Video", "save", "Save", 1);
            }

            if (message.data === "SAVED_VIDEO_POS_THUMB") {

              var pg_save_pos_thumb;

              if (!!$(SEARCH_VID).val().length) {
                pg_save_pos_thumb = parseValue($(VID_PAGE_CURRENT).text());
                $(SEARCH_VID).trigger("keyup", [pg_save_pos_thumb, undefined, $(ACTIVE_PLAYLIST_VIDEO).attr("href").split("embed/")[1]]);
              } else {
                storeVidNum = cur_pos;
                pg_save_pos_thumb = Math.floor(cur_pos / 12) + 1;
                $(SEARCH_VID).trigger("keyup", [pg_save_pos_thumb]);
              }

              trackEvent("event", "Video", "save", "Save", 1);
            }
          });
        });
      }

      if (permit === "DO NOT UPDATE") {
        $(OVERLAY).hide("normal");
      }
    } else {
      $(MAIN_POPUP_ERROR_MESSAGE).text("YOU ARE OFFLINE");
      $(MAIN_POPUP_ERROR_MESSAGE).fadeIn("normal").delay(3000).fadeOut("normal");
    }
  });

  //CREATE PLAYLIST POPUP | EDIT PLAYLIST POPUP | EDIT VIDEO POPUP
  $(document).on("click", HEADER_RIGHT + "," + EDIT_PLAYLIST_WRAPPER, function (e) {

    var img, rep, fit;

    if (e.originalEvent !== undefined) {
      $(".app-popup .popup-video-back").hide();
    } else {
      $(".app-popup .popup-video-back").show();
    }

    if ($(this).is(HEADER_RIGHT) && $(MENU_BACK_IMG).css("display") !== "block") {

      if ($(this).is(HEADER_RIGHT)) {

        img = "../assets/images/alphabet/n.png";
        fit = "cover";

        $(TITLE_APP_POPUP).text("Create Playlist");
        $(NEW_PLAYLIST_NAME).val("New Playlist");
        $(NEW_PLAYLIST_NAME).attr("disabled", false);
        $(NEW_PLAYLIST_DESCRIPTION).val("");
        $(MAIN_POPUP_CREATE).text("CREATE");
      }
    }

    if (($(this).is(EDIT_PLAYLIST_WRAPPER)) && $(EDIT_PLAYLIST_TEXT).is(":visible")) {

      var obj = JSON.parse(localStorage.playlist)[$(PLAYLIST_ACTIVE).attr("hidden_title")];

      img = obj.image;
      rep = $(PLAYLIST_ACTIVE).attr("hidden_title").replace(/\+/g, " ");
      fit = "cover";

      $(TITLE_APP_POPUP).text("Edit Details");
      $(NEW_PLAYLIST_NAME).val(decodeURIComponent(rep));
      $(NEW_PLAYLIST_NAME).attr("disabled", false);
      $(NEW_PLAYLIST_DESCRIPTION).val(decodeURIComponent(obj.description));
      $(MAIN_POPUP_CREATE).text("SAVE");

      //Store active playlist details
      playlistDetails.title = $(NEW_PLAYLIST_NAME).val();
      playlistDetails.description = $(NEW_PLAYLIST_DESCRIPTION).val();
      playlistDetails.image = img;

      sessionStorage.setItem("playlist_details", JSON.stringify(playlistDetails));
    }

    if (($(this).is(EDIT_PLAYLIST_WRAPPER)) && $(EDIT_VIDEO_TEXT).is(":visible")) {

      img = $(ACTIVE_PLAYLIST_VIDEO_PLAYLIST_FAVORITE).attr("src");
      rep = $(ACTIVE_PLAYLIST_VIDEO_PLAYLIST_FAVORITE).attr("hidden_title").replace(/\+/g, " ");
      fit = "fill";

      $(TITLE_APP_POPUP).text("Edit Details");
      $(NEW_PLAYLIST_NAME).val(decodeURIComponent(rep));
      $(NEW_PLAYLIST_NAME).attr("disabled", true);
      $(POSITION_ACTIVE).html("");
      $(POSITION_TOTAL).html("");

      var vid_posArr = [],
        objVid = JSON.parse(sessionStorage.video),
        objVidKeys = Object.keys(objVid);

      objVidKeys.forEach(function (key, index) {
        vid_posArr.push(objVid[key].video_title);
      });

      if (vid_posArr.length === 1) {
        vid_posArr.push("");
        vid_posArr.push("");
      }

      if (vid_posArr.length === 2) {
        vid_posArr.push("");
      }

      for (var x = 0; x < vid_posArr.length; x++) {

        $(POSITION_ACTIVE).append('<li class="pos-play">' + (x + 1) + '</div>');

        if (decodeURIComponent(rep) === vid_posArr[x]) {
          $(POSITION_TOTAL).append('<li class="active-element" title="' + vid_posArr[x].replace(/"/g, "''") + '" position="' + x + '">' + vid_posArr[x] + '</li>');
        } else {
          $(POSITION_TOTAL).append('<li class="non-active-element" title="' + vid_posArr[x].replace(/"/g, "''") + '">' + vid_posArr[x] + '</li>');
        }

        $(POSITION_TOTAL + " li").addClass("ellipsis");
      }

      $(MAIN_POPUP_POSITION_WRAPPER).append('<div id="down-list"></div>');
      $(MAIN_POPUP_POSITION_WRAPPER).append('<div id="up-list"></div>');

      setTimeout(function () {
        if (!$(POSITION_TOTAL + " li:last").hasClass("active-element")) {
          scrollTo(Number($(ACTIVE_ELEMENT).attr("position")));
        } else {
          var num_pos = Number($(ACTIVE_ELEMENT).attr("position"));
          scrollTo(num_pos - 1);
        }
      }, 0);

      var thumbNum = $(ACTIVE_PLAYLIST_VIDEO_PLAYLIST_FAVORITE).attr("src").match(/\/([^/]*).jpg$/)[1];

      if (thumbNum === "mqdefault") {
        thumbNum = "-one";
      }
      if (thumbNum === "hqdefault") {
        thumbNum = "-two";
      }
      if (thumbNum === "sddefault") {
        thumbNum = "-three";
      }
      if (thumbNum === "maxresdefault") {
        thumbNum = "-four";
      }

      for (var i = 0; i < $(THUMBNAIL_POPUP + " li").length; i++) {
        $(THUMBNAIL_POPUP + " li:nth(" + i + ")").css("background-color", "");
      }

      $("#thumb" + (thumbNum)).css("background-color", "#bbb999");

      $(MAIN_POPUP_CREATE).text("SAVE");

      //Store active video details
      videoDetails.position = $(POSITION_TOTAL + " " + ACTIVE_ELEMENT).attr("position");
      videoDetails.image = $(ACTIVE_PLAYLIST_VIDEO_PLAYLIST_FAVORITE).attr("src");

      sessionStorage.setItem("video_details", JSON.stringify(videoDetails));
    }

    if (!!showPopup(this)) {

      $(WELCOME_POPUP + "," + DELETE_APP_POPUP + "," + PREVIEW_POPUP_HOW_TO_WRAPPER).hide();

      $(CHARACTER_NAME_LENGTH).text($(NEW_PLAYLIST_NAME).val().length);

      if ($(NEW_PLAYLIST_NAME).val().length >= 10) {
        $(CHARACTER_NAME_LENGTH).css("margin-left", "9.5px");
      } else {
        $(CHARACTER_NAME_LENGTH).css("margin-left", "15px");
      }

      $(CHARACTER_DESCRIPTION_LENGTH).text($(NEW_PLAYLIST_DESCRIPTION).val().length);

      if ($(NEW_PLAYLIST_DESCRIPTION).val().length >= 10) {
        $(CHARACTER_DESCRIPTION_LENGTH).css("margin-left", "4.5px");
      } else {
        $(CHARACTER_DESCRIPTION_LENGTH).css("margin-left", "10px");
      }

      $(MAIN_POPUP_PREVIEW_BOX_IMG).css("object-fit", fit);

      resetImageState($(NEW_PLAYLIST_IMAGE), $(POPUP_IMAGE_IMPORT), $(MAIN_POPUP_PREVIEW_BOX_IMG), img, "CREATE");

      $(OVERLAY).fadeIn("normal");
      $(APP_POPUP).fadeIn("normal");
    }
  });

  //CHANGE VIDEO POSITION ARROWS
  $(document).on("click", UP_LIST + "," + DOWN_LIST, function () {

    var element, active = $("li" + ACTIVE_ELEMENT),
      position = Number($(active).attr("position")),
      listLength = $(POSITION_TOTAL + " li").length;

    if ($(this).is(UP_LIST)) {
      if (position > 0) {
        element = position - 1;
        active.attr("position", element);
        active.after($(POSITION_TOTAL + " li:nth(" + element + ")"));
        scrollTo(element);
      }
    }
    if ($(this).is(DOWN_LIST)) {
      if (position < listLength - 1 && $("li" + ACTIVE_ELEMENT).next().text() !== "") {
        element = position + 1;
        active.attr("position", element);
        active.before($(POSITION_TOTAL + " li:nth(" + element + ")"));
        scrollTo(element);
      }
    }
  });

  //YOUTUBE CHANNEL - NEW TAB
  $(document).on("click", YOUTUBE_CHANNEL, function () {
    if (navigator.onLine) {

      trackEvent("event", "Video", "channel", "YouTube Channel", 1);

      chrome.tabs.create({
        url: $(this).attr("href"),
        active: false
      });
    }
  });

  //CANCEL POPUP BUTTON
  $(MAIN_POPUP_CANCEL).click(function () {
    $(MAIN_POPUP_ERROR_MESSAGE).hide();
    $(OVERLAY).fadeOut("normal");
  });

  //SEARCH ON FOCUS
  $(SEARCH_PLAY + "," + SEARCH_VID).focus(function () {
    $(this).css("background-color", "#181818");
  });

  //SEARCH ON BLUR
  $(SEARCH_PLAY + "," + SEARCH_VID).blur(function () {
    $(this).css("background-color", "#131313");
  });

  //PLAYLIST NAME | PLAYLIST DESCRIPTION - INPUT FIELDS
  $(NEW_PLAYLIST_NAME + "," + NEW_PLAYLIST_DESCRIPTION).on("input propertychange", function () {
    if ($(this).is(NEW_PLAYLIST_NAME)) {
      if ($(this).val().length >= 0 && $(this).val().length <= 9) {
        $(CHARACTER_NAME_LENGTH).text($(this).val().length);
        $(CHARACTER_NAME_LENGTH).css("margin-left", "15px");
      } else {
        $(CHARACTER_NAME_LENGTH).text($(this).val().length);
        $(CHARACTER_NAME_LENGTH).css("margin-left", "9.5px");
      }
      if (/assets\/images\/alphabet.*\.png/.test($(MAIN_POPUP_PREVIEW_BOX_IMG).attr("src"))) {
        $(MAIN_POPUP_PREVIEW_BOX_IMG).attr("src", alphabet($(NEW_PLAYLIST_NAME).val()));
      }
    }
    if ($(this).is(NEW_PLAYLIST_DESCRIPTION)) {
      if ($(this).val().length >= 0 && $(this).val().length <= 9) {
        $(CHARACTER_DESCRIPTION_LENGTH).text($(this).val().length);
        $(CHARACTER_DESCRIPTION_LENGTH).css("margin-left", "10px");
      } else {
        $(CHARACTER_DESCRIPTION_LENGTH).text($(this).val().length);
        $(CHARACTER_DESCRIPTION_LENGTH).css("margin-left", "4.5px");
      }
    }
  });

  //IMPORT IMAGE
  $(document).on("click", POPUP_IMAGE_IMPORT, function () {

    if (navigator.onLine) {

      var newImg, previewImg = $(MAIN_POPUP_PREVIEW_BOX_IMG);

      if ($(this).text() === "IMPORT") {

        if (!!$(NEW_PLAYLIST_IMAGE).val().trim().length) {

          var getImage = $(NEW_PLAYLIST_IMAGE).val().trim();

          $.ajax({
            type: "HEAD",
            url: getImage,
            error: function (caller) {
              if (caller === "SMALL_SIZE") {
                popupErrorMessage("IMAGE IS TOO SMALL");
              } else if (caller === "BIG_SIZE") {
                popupErrorMessage("IMAGE IS TOO BIG");
              } else if (caller === "TYPE") {
                popupErrorMessage("MUST BE A GIF/JPEG/JPG/PNG LINK");
              } else {
                popupErrorMessage("INVALID IMAGE URL");
              }
              if ($(MAIN_POPUP_CREATE).text() === "CREATE") {
                newImg = alphabet($(NEW_PLAYLIST_NAME).val());
              } else {
                if (/\/assets\/images\/alphabet/.test($(PLAYLIST_ACTIVE).attr("src"))) {
                  newImg = alphabet($(NEW_PLAYLIST_NAME).val());
                } else {
                  newImg = $(PLAYLIST_ACTIVE).attr("src");
                }
              }
              resetImageState($(NEW_PLAYLIST_IMAGE), $(POPUP_IMAGE_IMPORT), $(MAIN_POPUP_PREVIEW_BOX_IMG), newImg, "REMOVE");
            },
            success: function (message, text, response) {

              var self = this,
                imageType = response.getResponseHeader("Content-Type"),
                imageSize = response.getResponseHeader("Content-Length");

              if (/(gif|jpeg|jpg|png)$/i.test(imageType)) {

                $(NEW_PLAYLIST_IMAGE).attr("disabled", true);
                $(NEW_PLAYLIST_IMAGE).css("opacity", "0.75");
                $(POPUP_IMAGE_IMPORT).text("REMOVE");
                $(POPUP_IMAGE_IMPORT).css({ "background-color": "#161616", "color": "#bbb999" });

                if (imageSize < 1000) {
                  self.error("SMALL_SIZE");
                } else if (imageSize >= 1000 && imageSize <= 300000) {
                  $(MAIN_POPUP_PREVIEW_BOX_IMG).attr("src", getImage);
                } else {
                  self.error("BIG_SIZE");
                }
              } else {
                self.error("TYPE");
              }
            }
          });
        }
      }
      if ($(this).text() === "REMOVE" && $(MAIN_POPUP_CREATE).text() === "CREATE") {
        resetImageState($(NEW_PLAYLIST_IMAGE), $(POPUP_IMAGE_IMPORT), $(MAIN_POPUP_PREVIEW_BOX_IMG), alphabet($(NEW_PLAYLIST_NAME).val()), "REMOVE");
      }
      if ($(this).text() === "REMOVE" && $(MAIN_POPUP_CREATE).text() === "SAVE") {
        var source;
        if (/\/assets\/images\/alphabet/.test($(PLAYLIST_ACTIVE).attr("src"))) {
          source = alphabet($(NEW_PLAYLIST_NAME).val());
        } else {
          source = $(PLAYLIST_ACTIVE).attr("src");
        }
        resetImageState($(NEW_PLAYLIST_IMAGE), $(POPUP_IMAGE_IMPORT), $(MAIN_POPUP_PREVIEW_BOX_IMG), source, "REMOVE");
      }
    } else {
      popupErrorMessage("YOU ARE OFFLINE");
    }
  });

  //THUMBNAIL SELECTION
  $(document).on("click", THUMB_ONE + "," + THUMB_TWO + "," + THUMB_THREE + "," + THUMB_FOUR, function () {

    if (navigator.onLine) {

      var link, self = this,
        video_id = "https://img.youtube.com/vi/" + $(ACTIVE_PLAYLIST_VIDEO).attr("href").split("embed/")[1];

      for (var i = 0; i < $(THUMBNAIL_POPUP + " li").length; i++) {
        $(THUMBNAIL_POPUP + " li:nth(" + i + ")").css("background-color", "");
      }

      $(self).css("background-color", "#bbb999");
      $(self).css("color", "#242424");

      if ($(self).is(THUMB_ONE)) {
        link = video_id + "/mqdefault.jpg";
      }
      if ($(self).is(THUMB_TWO)) {
        link = video_id + "/hqdefault.jpg";
      }
      if ($(self).is(THUMB_THREE)) {
        link = video_id + "/sddefault.jpg";
      }
      if ($(self).is(THUMB_FOUR)) {
        link = video_id + "/maxresdefault.jpg";
      }

      $.get(link, function () { })
        .fail(function () {

          var id = $(self).attr("id");

          if (id === "thumb-one") {
            $(MAIN_POPUP_PREVIEW_BOX_IMG).attr("src", "../assets/images/NoThumbOne.png");
          }
          if (id === "thumb-two") {
            $(MAIN_POPUP_PREVIEW_BOX_IMG).attr("src", "../assets/images/NoThumbTwo.png");
          }
          if (id === "thumb-three") {
            $(MAIN_POPUP_PREVIEW_BOX_IMG).attr("src", "../assets/images/NoThumbThree.png");
          }
          if (id === "thumb-four") {
            $(MAIN_POPUP_PREVIEW_BOX_IMG).attr("src", "../assets/images/NoThumbFour.png");
          }
        })
        .done(function () {
          $(MAIN_POPUP_PREVIEW_BOX_IMG).attr("src", link);
        });
    } else {
      popupErrorMessage("YOU ARE OFFLINE");
    }
  });

  //DELETE CONFIRMATION POPUP
  $(document).on("click", DELETE_DELETE + "," + DELETE_CANCEL + "," + DELETE_PLAYLIST + "," + DELETE_VIDEO, function () {
    if ($(this).is(DELETE_DELETE) || $(this).is(DELETE_CANCEL)) {
      $(OVERLAY).hide("normal");
      $(DELETE_APP_POPUP).fadeOut("normal");
    }
    if ($(this).is(DELETE_PLAYLIST) || $(this).is(DELETE_VIDEO)) {
      if ($(this).is(DELETE_PLAYLIST)) {
        $(DELETE_TITLE).text("Delete Playlist");
        $(MAIN_DELETE + " span").text("Do you want to delete the selected playlist? Warning: This action cannot be undone.");
      }
      if ($(this).is(DELETE_VIDEO)) {
        $(DELETE_TITLE).text("Delete Video");
        $(MAIN_DELETE + " span").text("Do you want to delete the selected video? Warning: This action cannot be undone.");
      }
      $(WELCOME_POPUP + "," + APP_POPUP + "," + PREVIEW_POPUP_HOW_TO_WRAPPER).hide();
      $(OVERLAY).fadeIn("normal");
      $(DELETE_APP_POPUP).show();
    }
  });

  //CLOSE POPUP ON BACKGROUND CLICK
  $(document).on("click", POPUP_BG, function () {
    if ($(PREVIEW_POPUP_HOW_TO_WRAPPER).css("display") === "block") {
      $(APP_POPUP + "," + DELETE_APP_POPUP + "," + WELCOME_POPUP).hide();
      $(OVERLAY).fadeOut("normal", function () {
        if (!!$(PREVIEW_POPUP_HOW_TO + " iframe").length) {
          $(PREVIEW_POPUP_HOW_TO + " iframe")[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        }
      });
    }
    if ($(WELCOME_POPUP).css("display") === "block") {
      $(APP_POPUP + "," + DELETE_APP_POPUP + "," + PREVIEW_POPUP_HOW_TO_WRAPPER).hide();
      $(OVERLAY).fadeOut("normal");
    }
    if ($(SCAN_PAGE_POPUP).css("display") === "block") {
      hideScanner();
      cur_add = 0;
    }
    if ($(APP_POPUP).css("display") === "block") {
      $(MAIN_POPUP_ERROR_MESSAGE).hide();
      $(OVERLAY).fadeOut("normal");
    }
    if ($(DELETE_APP_POPUP).css("display") === "block") {
      $(OVERLAY).fadeOut("normal");
      $(DELETE_APP_POPUP).fadeOut("normal");
    }
    if ($(PREVIEW_POPUP_VIDEO).css("display") === "block") {
      $(OVERLAY).fadeOut("normal");
      $(PREVIEW_POPUP_VIDEO).fadeOut("normal", function () {
        if (!!$(PREVIEW_POPUP_VIDEO + " iframe").length) {
          $(PREVIEW_POPUP_VIDEO + " iframe")[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        }
      });
    }
  });

  //EMBED VIDEO IN IFRAME
  $(document).on("click", PREVIEW_PLAYLIST_WRAPPER + "," + HOW_TO + " img", function (e) {

    if (navigator.onLine) {

      $(APP_POPUP + "," + DELETE_APP_POPUP + "," + WELCOME_POPUP).hide();

      if ($(this).is(HOW_TO + " img")) {

        if (e.originalEvent !== undefined) {
          $(BACK_TO_WELCOME_HOW_TO).hide();
        } else {
          $(BACK_TO_WELCOME_HOW_TO).show();
        }

        $(PREVIEW_POPUP_VIDEO).hide();

        $(OVERLAY).fadeIn("normal");
        $(PREVIEW_POPUP_HOW_TO + " iframe").fadeIn();
        $(PREVIEW_POPUP_HOW_TO_WRAPPER).fadeIn("normal");
      }

      if ($(this).is(PREVIEW_PLAYLIST_WRAPPER)) {
        if ($(PREVIEW_POPUP_VIDEO + " iframe").attr("src") !== "") {
          if ($(PREVIEW_PLAYLIST_TEXT).css("display") === "block") {
            trackEvent("event", "Playlist", "preview", "Preview", 1);
          } else {
            trackEvent("event", "Video", "preview", "Preview", 1);
          }
          $(PREVIEW_POPUP_HOW_TO_WRAPPER).hide();
          $(PREVIEW_POPUP_HOW_TO + " iframe").hide();

          $(PREVIEW_POPUP_VIDEO + " iframe").fadeIn("normal");
          $(OVERLAY).fadeIn("normal");
          $(PREVIEW_POPUP_VIDEO).fadeIn("normal");

          if ($(PREVIEW_POPUP_VIDEO + " iframe").attr("src") !== sessionStorage.playlist_preview_play) {
            $(PREVIEW_POPUP_VIDEO + " iframe")[0].contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
            sessionStorage.setItem("playlist_preview_play", $(PREVIEW_POPUP_VIDEO + " iframe").attr("src"));
          }
        } else {
          if ($(PREVIEW_PLAYLIST_TEXT).css("display") === "block") {
            playlistMessage("empty_playlist");
          }
        }
      }
    } else {
      if ($(PREVIEW_PLAYLIST_TEXT).css("display") === "block") {
        playlistMessage("offline_state");
      } else {
        videoMessage("offline_state");
      }
    }
  });

  //COPY PLAYLIST | VIDEO LINK
  $(document).on("click", ".link-playlist-wrapper", function () {
    copyToClipboard($(COPIED_LINK)[0]);
  });

  function copyToClipboard(elem) {

    var target, targetId = "hidden-copy-text",
      isInput = elem.tagName === "INPUT" || elem.tagName === "TEXTAREA",
      start, end;

    if (isInput) {
      target = elem;
      start = elem.selectionStart;
      end = elem.selectionEnd;
    } else {

      target = document.getElementById(targetId);

      if (!target) {
        target = document.createElement("textarea");
        target.style.position = "absolute";
        target.style.left = "-9999px";
        target.style.top = "0";
        target.id = targetId;
        document.body.appendChild(target);
      }
      target.textContent = elem.textContent;
    }

    var currentFocus = document.activeElement;

    target.focus();
    target.setSelectionRange(0, target.value.length);

    if (target.value.length > 0) {

      if ($(PREVIEW_PLAYLIST_TEXT).css("display") === "block") {
        playlistMessage("copied_link");
        trackEvent("event", "Playlist", "copy", "Copy", 1);
      } else {
        videoMessage("copied_link");
        trackEvent("event", "Video", "copy", "Copy", 1);
      }
    } else {

      if ($(PREVIEW_PLAYLIST_TEXT).css("display") === "block") {
        playlistMessage("empty_playlist");
      }
    }

    var succeed;

    try {
      succeed = document.execCommand("copy");
    } catch (e) {
      succeed = false;
    }

    if (currentFocus && typeof currentFocus.focus === "function") {
      currentFocus.focus();
    }

    if (isInput) {
      elem.setSelectionRange(start, end);
    } else {
      target.textContent = "";
    }

    return succeed;
  }

  // Do not show the welcome popup again
  $(document).on("change", WELCOME_CHECKBOX, function () {
    if ($(this).is(":checked")) {
      localStorage.setItem("welcome_box", 1);
    } else {
      delete localStorage.welcome_box;
    }
  });

  // Select all scanned videos - TODO
  $(document).on("change", "#select-all-checkbox", function () {
    if ($(this).is(":checked")) {
      for (var i = 0; i < $(".scanned-video-select").length; i++) {
        if ($(".scanned-video-select:nth(" + i + ")").attr("data-class") === "add") {
          if ($(".scanned-video-select:nth(" + i + ")").parent().css("pointer-events") === "auto") {
            if (Number($("#scan-total-dynamic").text().split(":")[1].trim()) < 50 && !$(".scanned-video-select:nth(" + i + ")").hasClass("selected")) {
              $(".scanned-video-select:nth(" + i + ")").trigger("mouseover");
              $(".scanned-video-select:nth(" + i + ")").trigger("click");
              $(".scanned-video-select:nth(" + i + ")").trigger("mouseleave");
            }
          }
        }
      }
      $("#select-all-status").text("Unselect All");
    } else {
      for (var i = 0; i < $(".scanned-video-select").length; i++) {
        if ($(".scanned-video-select:nth(" + i + ").selected").attr("data-class") === "add") {
          $(".scanned-video-select:nth(" + i + ").selected").trigger("mouseover");
          $(".scanned-video-select:nth(" + i + ").selected").trigger("click");
          $(".scanned-video-select:nth(" + i + ")").trigger("mouseleave");
        }
      }
      $("#select-all-status").text("Select All");
    }
  });

  $(document).on("click", WELCOME_HOW_TO_BUTTON + "," + WELCOME_CREATE_BUTTON + "," + CLOSE_WELCOME_POPUP + "," + CLOSE_HOW_TO_POPUP + "," + BACK_TO_WELCOME_HOW_TO + "," + BACK_TO_WELCOME_CREATE, function () {
    if ($(this).is(WELCOME_HOW_TO_BUTTON)) {
      $(WELCOME_POPUP).fadeOut("normal", function () {
        $(HOW_TO + " img").trigger("click");
      });
    }
    if ($(this).is(WELCOME_CREATE_BUTTON)) {
      $(WELCOME_POPUP).fadeOut("normal", function () {
        $(HEADER_RIGHT).trigger("click");
      });
    }
    if ($(this).is(CLOSE_WELCOME_POPUP)) {
      $(APP_POPUP + "," + DELETE_APP_POPUP).hide();
      $(WELCOME_POPUP).fadeOut("normal");
      $(OVERLAY).fadeOut("normal");
    }
    if ($(this).is(CLOSE_HOW_TO_POPUP)) {
      $(APP_POPUP + "," + DELETE_APP_POPUP).hide();
      $(PREVIEW_POPUP_HOW_TO_WRAPPER).fadeOut("normal");
      $(OVERLAY).fadeOut("normal");
    }
    if ($(this).is(BACK_TO_WELCOME_HOW_TO)) {
      $(PREVIEW_POPUP_HOW_TO_WRAPPER).fadeOut("normal", function () {
        $(WELCOME_POPUP).fadeIn("normal");
        if (!!$(PREVIEW_POPUP_HOW_TO + " iframe").length) {
          $(PREVIEW_POPUP_HOW_TO + " iframe")[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        }
      });
    }
    if ($(this).is(BACK_TO_WELCOME_CREATE)) {
      $(APP_POPUP).fadeOut("normal", function () {
        $(WELCOME_POPUP).fadeIn("normal");
      });
    }
  });

  $(document).on("click", HOW_TO_BG_IMG + "," + HOW_TO_PLAY_VIDEO, function () {
    var iframe = document.createElement("iframe");
    var embed = "https://www.youtube.com/embed/IrmgbdDA3yY?rel=0&amp;showinfo=0&amp;iv_load_policy=3&amp;controls=2&amp;fs=0&amp;loop=1&amp;color=white&amp;disablekb=1&amp;enablejsapi=1&amp;version=3&amp;autoplay=1";
    $(iframe).attr("width", "426");
    $(iframe).attr("height", "240");
    $(iframe).attr("src", embed);
    $(iframe).attr("frameborder", "0");
    $(HOW_TO_BG_IMG).hide();
    $(HOW_TO_PLAY_VIDEO).hide();
    $(HOW_TO_BG_IMG).replaceWith(iframe);
    trackEvent("event", "Playlist", "how", "How", 1);
  });

  //ON MOUSEOVER
  $(document).on("mouseover", EDIT_PLAYLIST_WRAPPER + "," + LINK_PLAYLIST_WRAPPER + "," + PREVIEW_PLAYLIST_WRAPPER + "," + MENU_BACK_IMG + "," + YOUTUBE_CHANNEL + "," + DELETE_VIDEO + "," + DELETE_PLAYLIST + "," + SCAN_PAGE_WRAPPER + "," + THUMB_ONE + "," + THUMB_TWO + "," + THUMB_THREE + "," + THUMB_FOUR + "," + POPUP_IMAGE_IMPORT + "," + UP_LIST + "," + DOWN_LIST + "," + PLAY_PLAYLIST_VIDEO + "," + VIDEO_PLAYER + "," + IMG_WRAPPER + "," + VIDEO_PLAYLIST_NOT_ACTIVE + "," + PLAY_BUTTON_WRAPPER + "," + PLAYLIST_NUM_VIDEOS + "," + HOW_TO_BG_IMG + "," + HOW_TO_PLAY_VIDEO, function () {
    if ($(this).is(EDIT_PLAYLIST_WRAPPER)) {
      if ($(EDIT_PLAYLIST_TEXT).is(":visible")) {
        $(EDIT_PLAYLIST_TEXT).css("color", "#bbb999");
      }
      if ($(EDIT_VIDEO_TEXT).is(":visible")) {
        $(EDIT_VIDEO_TEXT).css("color", "#bbb999");
      }
      $(EDIT_PLAYLIST_WRAPPER + " img").attr("src", "../assets/images/edit-playlist-hover.png");
    }
    if ($(this).is(LINK_PLAYLIST_WRAPPER)) {
      if ($(LINK_PLAYLIST_TEXT).is(":visible")) {
        $(LINK_PLAYLIST_TEXT).css("color", "#bbb999");
      }
      if ($(LINK_VIDEO_TEXT).is(":visible")) {
        $(LINK_VIDEO_TEXT).css("color", "#bbb999");
      }
      $(LINK_PLAYLIST_WRAPPER + " img").attr("src", "../assets/images/link-playlist-hover.png");
    }
    if ($(this).is(PREVIEW_PLAYLIST_WRAPPER)) {
      if ($(PREVIEW_PLAYLIST_TEXT).is(":visible")) {
        $(PREVIEW_PLAYLIST_TEXT).css("color", "#bbb999");
      }
      if ($(PREVIEW_VIDEO_TEXT).is(":visible")) {
        $(PREVIEW_VIDEO_TEXT).css("color", "#bbb999");
      }
      $(PREVIEW_PLAYLIST_WRAPPER + " img").attr("src", "../assets/images/preview-playlist-hover.png");
    }
    if ($(this).is(YOUTUBE_CHANNEL + "," + DELETE_VIDEO + "," + DELETE_PLAYLIST + "," + SCAN_PAGE_WRAPPER)) {
      $(this).css("color", "#bbb999");
    }
    if ($(this).is(SCAN_PAGE_WRAPPER)) {
      $(SCAN_PAGE_WRAPPER).css("color", "#bbb999");
    }
    if ($(this).is(UP_LIST) && !!$(NON_ACTIVE_ELEMENT).text()) {
      $(this).css("background-image", "url(../assets/images/position-up-hover.png)");
    }
    if ($(this).is(DOWN_LIST) && !!$(NON_ACTIVE_ELEMENT).text()) {
      $(this).css("background-image", "url(../assets/images/position-down-hover.png)");
    }
    if ($(this).is(THUMB_ONE + "," + THUMB_TWO + "," + THUMB_THREE + "," + THUMB_FOUR)) {
      if ($(this).css("background-color") !== "rgb(187, 185, 153)") {
        $(this).css("background-color", "#C0C0C0");
        $(this).css("color", "#242424");
      }
    }
    if ($(this).is(POPUP_IMAGE_IMPORT)) {
      if ($(this).text() === "IMPORT") {
        $(this).css("background-color", "#bbb999");
        $(this).css("color", "#161616");
      }
      if ($(this).text() === "REMOVE") {
        $(this).css("background-color", "#161616");
        $(this).css("color", "#bbb999");
      }
    }
    if ($(this).is(PLAYLIST_NUM_VIDEOS)) {
      if ($(this).is(PLAYLIST_NUM_VIDEOS)) {
        sessionStorage.setItem("playlist_num_videos_hover", 1);
        $(PLAY_PLAYLIST_VIDEO).css("background-image", "url(../assets/images/play-video-hover.png)");
      }
    }
    if ($(this).is(HOW_TO_BG_IMG) || $(this).is(HOW_TO_PLAY_VIDEO)) {
      $(HOW_TO_PLAY_VIDEO).attr("src", "../assets/images/play-video-hover.png");
    }
    if ($(this).is(PLAY_BUTTON_WRAPPER) && !sessionStorage.playlist_num_videos_hover) {
      $(PLAY_PLAYLIST_VIDEO).css("background-image", "url(../assets/images/play-video-hover.png)");
    }
    if ($(this).is(VIDEO_PLAYER)) {
      $(PLAY_YOUTUBE_VIDEO).css("background-image", "url(../assets/images/play-video-hover.png)");
    }
    if ($(this).is(IMG_WRAPPER)) {

      var index_play = $(IMG_WRAPPER).index(this),
        not_play_act = $(IMG_WRAPPER + ":nth(" + index_play + ")").children();

      if (!/active\-playlist/.test(not_play_act.attr("class"))) {

        $(not_play_act).parent().css("border-color", "#C0C0C0");
        $(not_play_act).next().next().css("border-color", "#C0C0C0");
        $(not_play_act).parent().css("cursor", "pointer");
      }
    }
    if ($(this).is(VIDEO_PLAYLIST_NOT_ACTIVE)) {

      var index_vid = $(VIDEO_PLAYLIST_NOT_ACTIVE).index(this);

      $(VIDEO_PLAYLIST_NOT_ACTIVE + ":nth(" + index_vid + ")").css("border-color", "#C0C0C0");
      $(VIDEO_PLAYLIST_NOT_ACTIVE + ":nth(" + index_vid + ")").children().next().next().css("border-color", "#C0C0C0");
      $(VIDEO_PLAYLIST_NOT_ACTIVE + ":nth(" + index_vid + ")").css("cursor", "pointer");
    }
  });

  //ON MOUSELEAVE
  $(document).on("mouseleave", EDIT_PLAYLIST_WRAPPER + "," + LINK_PLAYLIST_WRAPPER + "," + PREVIEW_PLAYLIST_WRAPPER + "," + MENU_BACK_IMG + "," + YOUTUBE_CHANNEL + "," + DELETE_VIDEO + "," + DELETE_PLAYLIST + "," + SCAN_PAGE_WRAPPER + "," + THUMB_ONE + "," + THUMB_TWO + "," + THUMB_THREE + "," + THUMB_FOUR + "," + POPUP_IMAGE_IMPORT + "," + UP_LIST + "," + DOWN_LIST + "," + PLAY_PLAYLIST_VIDEO + "," + VIDEO_PLAYER + "," + IMG_WRAPPER + "," + VIDEO_PLAYLIST_NOT_ACTIVE + "," + PLAY_BUTTON_WRAPPER + "," + PLAYLIST_NUM_VIDEOS + "," + HOW_TO_BG_IMG + "," + HOW_TO_PLAY_VIDEO, function () {
    if ($(this).is(EDIT_PLAYLIST_WRAPPER)) {
      if ($(EDIT_PLAYLIST_TEXT).is(":visible")) {
        $(EDIT_PLAYLIST_TEXT).css("color", "#C0C0C0");
      }
      if ($(EDIT_VIDEO_TEXT).is(":visible")) {
        $(EDIT_VIDEO_TEXT).css("color", "#C0C0C0");
      }
      $(EDIT_PLAYLIST_WRAPPER + " img").attr("src", "../assets/images/edit-playlist.png");
    }
    if ($(this).is(LINK_PLAYLIST_WRAPPER)) {
      if ($(LINK_PLAYLIST_TEXT).is(":visible")) {
        $(LINK_PLAYLIST_TEXT).css("color", "#C0C0C0");
      }
      if ($(LINK_VIDEO_TEXT).is(":visible")) {
        $(LINK_VIDEO_TEXT).css("color", "#C0C0C0");
      }
      $(LINK_PLAYLIST_WRAPPER + " img").attr("src", "../assets/images/link-playlist.png");
    }
    if ($(this).is(PREVIEW_PLAYLIST_WRAPPER)) {
      if ($(PREVIEW_PLAYLIST_TEXT).is(":visible")) {
        $(PREVIEW_PLAYLIST_TEXT).css("color", "#C0C0C0");
      }
      if ($(PREVIEW_VIDEO_TEXT).is(":visible")) {
        $(PREVIEW_VIDEO_TEXT).css("color", "#C0C0C0");
      }
      $(PREVIEW_PLAYLIST_WRAPPER + " img").attr("src", "../assets/images/preview-playlist.png");
    }
    if ($(this).is(YOUTUBE_CHANNEL + "," + DELETE_VIDEO + "," + DELETE_PLAYLIST)) {
      $(this).css("color", "#C0C0C0");
    }
    if ($(this).is(SCAN_PAGE_WRAPPER)) {
      $(SCAN_PAGE_WRAPPER).css("color", "white");
    }
    if ($(this).is(UP_LIST) && !!$(NON_ACTIVE_ELEMENT).text()) {
      $(this).css("background-image", "url(../assets/images/position-up.png)");
    }
    if ($(this).is(DOWN_LIST) && !!$(NON_ACTIVE_ELEMENT).text()) {
      $(this).css("background-image", "url(../assets/images/position-down.png)");
    }
    if ($(this).is(THUMB_ONE + "," + THUMB_TWO + "," + THUMB_THREE + "," + THUMB_FOUR)) {
      if ($(this).css("background-color") !== "rgb(187, 185, 153)") {
        $(this).css("background-color", "#FFFFFF");
        $(this).css("color", "#242424");
      }
    }
    if ($(this).is(POPUP_IMAGE_IMPORT)) {
      $(this).css("background-color", "#C0C0C0");
      $(this).css("color", "#1f1f1f");
    }
    if ($(this).is(PLAYLIST_NUM_VIDEOS)) {
      delete sessionStorage.playlist_num_videos_hover;
    }
    if ($(this).is(HOW_TO_BG_IMG) || $(this).is(HOW_TO_PLAY_VIDEO)) {
      $(HOW_TO_PLAY_VIDEO).attr("src", "../assets/images/play-video.png");
    }
    if ($(this).is(PLAY_BUTTON_WRAPPER)) {
      $(PLAY_PLAYLIST_VIDEO).css("background-image", "url(../assets/images/play-video.png)");
    }
    if ($(this).is(VIDEO_PLAYER)) {
      $(PLAY_YOUTUBE_VIDEO).css("background-image", "url(../assets/images/play-video.png)");
    }
    if ($(this).is(IMG_WRAPPER)) {

      var index_play = $(IMG_WRAPPER).index(this),
        not_play_act = $(IMG_WRAPPER + ":nth(" + index_play + ")").children();

      if (!/active\-playlist/.test(not_play_act.attr("class"))) {

        $(not_play_act).parent().css("border-color", "#333333");
        $(not_play_act).next().next().css("border-color", "#333333");
        $(not_play_act).parent().css("cursor", "pointer");
      }
    }
    if ($(this).is(VIDEO_PLAYLIST_NOT_ACTIVE)) {

      var index_vid = $(VIDEO_PLAYLIST_NOT_ACTIVE).index(this);

      $(VIDEO_PLAYLIST_NOT_ACTIVE + ":nth(" + index_vid + ")").css("border-color", "#333333");
      $(VIDEO_PLAYLIST_NOT_ACTIVE + ":nth(" + index_vid + ")").children().next().next().css("border-color", "#333333");
      $(VIDEO_PLAYLIST_NOT_ACTIVE + ":nth(" + index_vid + ")").css("cursor", "pointer");
    }
  });

  /* HELPER FUNCTIONS */

  //PREVIEW THUMBNAIL STATE
  function resetImageState(image, import_img, preview, defaultImg, msg) {
    image.removeAttr("disabled");
    image.css("opacity", "1.0");
    import_img.text("IMPORT");
    import_img.css({ "background-color": "#C0C0C0", "color": "#161616", "box-shadow": "1px 1px 0.5px 1px black" });
    preview.attr("src", defaultImg);
    if (msg === "REMOVE") {
      import_img.css("background-color", "#bbb999");
      image.focus();
    } else {
      image.val("");
    }
  }

  //POSITION SCROLLING
  function scrollTo(active) {
    if (active > 0) {
      var position = active - 1;
      $(POSITION_TOTAL + " li:nth(" + position + ")")[0].scrollIntoView(true);
      $(POSITION_PLAY + ":nth(" + position + ")")[0].scrollIntoView(true);
    } else {
      $(POSITION_TOTAL + " li:nth(0)")[0].scrollIntoView(true);
      $(POSITION_PLAY + ":nth(0)")[0].scrollIntoView(true);
    }
    $(ACTIVE_ELEMENT).css("background-color", "#bbb999");
  }

  //HIDE SCANNER POPUP
  function hideScanner() {
    $(SCAN_ERROR_MESSAGE).hide();
    $(SCAN_PAGE_GIF).hide();
    $(OVERLAY).fadeOut("normal", function () {
      $(SCAN_FOUND_TITLE).html("");
      $(SCAN_FOUND_AUTHOR).html("");
      $(SCAN_FOUND_SELECT).html("");
    });
    $(SCAN_PAGE_POPUP).fadeOut("normal", function () {
      $(SCAN_PAGE_GIF).show();
    });
  }

  //SHOW PLAYLIST MESSAGE
  function playlistMessage(src) {
    if ($(PLAYLIST_ACTIVE).next().css("display") !== "block") {
      $(PLAYLIST_ACTIVE).next().next().fadeOut("fast");
      $(PLAYLIST_ACTIVE).next().css("background-image", "url(../assets/images/" + src + ".png)");
      $(PLAYLIST_ACTIVE).next().next().fadeOut("normal").delay(2300).fadeIn("normal");
      $(PLAYLIST_ACTIVE).next().fadeIn("normal").delay(2000).fadeOut("normal");
    }
  }

  //SHOW VIDEO MESSAGE
  function videoMessage(src) {
    if ($(ACTIVE_PLAYLIST_VIDEO_PLAYLIST_FAVORITE).next().css("display") === "none") {
      $(ACTIVE_VIDEO_IMAGE_NAME).fadeOut("fast");
      $(ACTIVE_PLAYLIST_VIDEO_PLAYLIST_FAVORITE).next().css("background-image", "url(../assets/images/" + src + ".png)");
      $(ACTIVE_VIDEO_IMAGE_NAME).fadeOut("normal").delay(2300).fadeIn("normal");
      $(ACTIVE_PLAYLIST_VIDEO_PLAYLIST_FAVORITE).next().fadeIn("normal").delay(2000).fadeOut("normal");
    }
  }

  //SHOW POPUP ERROR MESSAGE
  function popupErrorMessage(msg) {
    if ($(MAIN_POPUP_ERROR_MESSAGE).css("display") === "none") {
      $(MAIN_POPUP_ERROR_MESSAGE).text(msg);
      $(MAIN_POPUP_ERROR_MESSAGE).fadeIn("normal").delay(3000).fadeOut("normal");
    }
  }

  //PARSE VALUE
  function parseValue(text) {
    return Number(text.match(/\d+/)[0]);
  }

  //SET A 250MS TIMEOUT TO SEARCH
  function debounce(fn, delay) {
    var timer = null;
    return function () {
      var context = this,
        args = arguments;
      clearTimeout(timer);
      timer = setTimeout(function () {
        fn.apply(context, args);
      }, delay);
    };
  }

  //DISABLE CREATE PLAYLIST POPUP WHEN ON VIDEO VIEW
  function showPopup(self) {
    if ($(MENU_BACK_IMG).css("display") === "block") {
      if ($(self).attr("class") !== "header-right") {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  }

  //NEW USER WELCOME POPUP
  function welcomeMsg() {
    if (localStorage.playlist === "{}") {
      toggleContent("HIDE");
    }
    if (!localStorage.welcome_box && localStorage.playlist === "{}") {
      setTimeout(function () {
        $(APP_POPUP).hide();
        $(OVERLAY).fadeIn("slow");
        $(WELCOME_POPUP).fadeIn("slow");
      }, 50);
    }
  }

  //TOGGLE VISIBILITY
  function toggleContent(action) {
    if (action === "FADE_IN") {
      $(WRAP_SEARCH + "," + RESULTS_HEADER + "," + NAVIGATION_WRAPPER + "," + EDIT_PLAYLIST_WRAPPER + "," + LINK_PLAYLIST_WRAPPER + "," + PREVIEW_PLAYLIST_WRAPPER + "," + PLAYLIST_PLAYER + "," + DETAILS_WRAPPER).fadeIn("normal");
    }
    if (action === "FADE_OUT") {
      $(WRAP_SEARCH + "," + RESULTS_HEADER + "," + NAVIGATION_WRAPPER + "," + EDIT_PLAYLIST_WRAPPER + "," + LINK_PLAYLIST_WRAPPER + "," + PREVIEW_PLAYLIST_WRAPPER + "," + PLAYLIST_PLAYER + "," + DETAILS_WRAPPER).fadeOut("normal");
    }
    if (action === "HIDE") {
      $(WRAP_SEARCH + "," + RESULTS_HEADER + "," + NAVIGATION_WRAPPER + "," + EDIT_PLAYLIST_WRAPPER + "," + LINK_PLAYLIST_WRAPPER + "," + PREVIEW_PLAYLIST_WRAPPER + "," + PLAYLIST_PLAYER + "," + DETAILS_WRAPPER).hide();
    }
  }

  //RESET ARROW STYLING
  function resetArrowStyling(element) {
    if (element.text().split("").length > 1) {
      element.css("left", "66.5px");
    } else {
      element.css("left", "74.5px");
    }
  }

  //DETERMINE DEFAULT IMAGE
  function alphabet(name) {

    var n = name.trim();

    if (n !== "") {

      var r, v = (name.split("")[0]).toLowerCase();

      switch (v) {
        case "a":
          r = "a";
          break;
        case "b":
          r = "b";
          break;
        case "c":
          r = "c";
          break;
        case "d":
          r = "d";
          break;
        case "e":
          r = "e";
          break;
        case "f":
          r = "f";
          break;
        case "g":
          r = "g";
          break;
        case "h":
          r = "h";
          break;
        case "i":
          r = "i";
          break;
        case "j":
          r = "j";
          break;
        case "k":
          r = "k";
          break;
        case "l":
          r = "l";
          break;
        case "m":
          r = "m";
          break;
        case "n":
          r = "n";
          break;
        case "o":
          r = "o";
          break;
        case "p":
          r = "p";
          break;
        case "q":
          r = "q";
          break;
        case "r":
          r = "r";
          break;
        case "s":
          r = "s";
          break;
        case "t":
          r = "t";
          break;
        case "u":
          r = "u";
          break;
        case "v":
          r = "v";
          break;
        case "w":
          r = "w";
          break;
        case "x":
          r = "x";
          break;
        case "y":
          r = "y";
          break;
        case "z":
          r = "z";
          break;
        default:
          r = "other";
      }
      return "../assets/images/alphabet/" + r + ".png";
    } else {
      return "../assets/images/alphabet/no_name.png";
    }
  }

  //GA TRACK PAGE
  function trackVPage(sn) {
    ga("set", "page", sn);
    ga("send", "pageview", { "title": sn });
  }

  //GA EVENTS
  function trackEvent(ht, ec, ea, el, ev) {
    ga("send", { hitType: ht, eventCategory: ec, eventAction: ea, eventLabel: el, eventValue: ev });
  }

  //GA TRACKING CODE
  (function (i, s, o, g, r, a, m) {
    i.GoogleAnalyticsObject = r;
    i[r] = i[r] || function () {
      (i[r].q = i[r].q || []).push(arguments);
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
      m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m);
  })(window, document, "script", "https://www.google-analytics.com/analytics.js", "ga");

  ga("create", "UA-93572423-3", "auto");
  ga("set", "checkProtocolTask", function () { });
  ga("require", "displayfeatures");
  trackVPage("playlist");

  //CALCULATE USED LS SPACE
  function getUsedLocalStorageSpace() {
    return Object.keys(window.localStorage).map(function (key) {
      return localStorage[key].length / 1000000 + " MBs";
    }).reduce(function (a, b) {
      return a + b;
    });
  }

  var lsSpace = getUsedLocalStorageSpace();

  //console.log(lsSpace);
});