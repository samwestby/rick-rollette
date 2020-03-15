'use strict';

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({'percentage': 0.30}, function() {
      console.log("The percentage is 0.30")
  })
});
