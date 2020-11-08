chrome.runtime.onMessage.addListener(receiver);

window.ingredientList = {};

function receiver(request, sender, response){
  console.log(request);
  window.ingredientList = request;
}
