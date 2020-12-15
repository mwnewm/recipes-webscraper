tableData = [];

document.getElementById("scrapeButton").addEventListener("click", buttonClicked);

function buttonClicked(){
  console.log('Click!');
  
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, {msg: "scrape"}, (response) => {
      console.log('message recieved by frontend: ');
      console.log(response);
      updateTableData(response);
    });
  });
}

function updateTableData(ingredientsList){
  console.log('updating table with: ' + ingredientsList.ingredientNames);
  var text = "<ul>";
  for (var i = 0; i < ingredientsList.ingredientNames.length; ++i){
    tableData.push(ingredientsList.ingredientNames[i]);
    text += "<li> (" + ingredientsList.quantities[i] + ") " + ingredientsList.ingredientNames[i] + "</li>";
  }
  text += "</ul>";
  document.getElementById("ingredients").innerHTML = text;
}