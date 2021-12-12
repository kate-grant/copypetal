function sanitizeInput(input) {
  return input.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
}

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['ct.js']
  });
});

chrome.commands.onCommand.addListener((command, tab) => {
  console.log(`Command "${command}" triggered`);
  if (command == 'petal-script'){
    console.log("hello2");
    chrome.scripting.executeScript({
      target: {tabId: tab.id},
      files: ["ct.js"]
    });
  }

})