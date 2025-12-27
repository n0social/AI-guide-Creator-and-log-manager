// background.js - Chrome Extension Service Worker for Verbshift Bridge

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: 'verbshift-generate',
    title: 'Generate Verbshift Guide',
    contexts: ['selection']
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === 'verbshift-generate' && info.selectionText) {
    const encoded = encodeURIComponent(info.selectionText);
    chrome.tabs.create({ url: `https://verbshift.com/generate?content=${encoded}` });
  }
});


// Listen for messages from content script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'VERBSHIFT_GUIDE_ME_OPTION') {
    // Open the extension popup with selected text and option as query params
    console.log('Received message in background.js:', message);
    chrome.windows.create({
      url: chrome.runtime.getURL(`popup.html?text=${encodeURIComponent(message.text)}&option=${encodeURIComponent(message.option)}`),
      type: 'popup',
      width: 400,
      height: 500
    }, function(window) {
      console.log('Popup window created:', window);
    });
    sendResponse({status: 'popup_opened'});
  }
});
