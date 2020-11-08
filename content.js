scrape();

function scrape(){
  let list = document.getElementsByClassName("ingredients-item");
  //let list = document.getElementsByTagName("*");
  console.log("Number of ingredients...")
  console.log(list.length);
  var i = 0;
  while(i < list.length){
    console.log(list.item(i));
    i++;
  }
}
