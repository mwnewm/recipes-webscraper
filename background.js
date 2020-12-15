chrome.runtime.onMessage.addListener(
  function receiver(request, sender, response){
    if (request.msg == "valid website"){
      changeIcon();
    }
  }
);

function changeIcon(){
    chrome.browserAction.setIcon({
        path : {
          "64": "images/icon64.png",
          "72": "images/icon72.png"
        }
      }, () => {
    });
  }