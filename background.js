/* 
  background.js ~ the hub of the various scripts and stylesheets 
                  routing data from the boards to the extension.

******************************************************************/

chrome.browserAction.onClicked.addListener(
  function () {
    chrome.tabs.create({url: "http://board.okayplayer.com/okp.php?az=show_topics&forum=5"});
  }
);