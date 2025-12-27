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

chrome.action.onClicked.addListener(() => {
  chrome.tabs.create({ url: 'https://verbshift.com' });
});
