// When the button is clicked, inject setPageBackgroundColor into current page
document.getElementById("addBorder").addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({
    active: true,
    currentWindow: true
  });
  chrome.scripting.executeScript({
    target: {
      tabId: tab.id
    },
    function: setTagOutline,
  });
});

function setTagOutline() {
  var tagList = ['div', 'a', 'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'img', 'hr']
  var color = ['blue', 'red', 'red', 'green', 'green', 'green', 'green', 'green', 'green', 'yellow', 'cyan', 'red']


  for (let i = 0; i < tagList.length; i++) {

    var tagl = document.getElementsByTagName(tagList[i]);
    for (let j = 0; j < tagl.length; j++) {
      tagl[j].style.outline = "1px solid " + color[i];
    }

  }


}