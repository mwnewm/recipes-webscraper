console.log(scrape());

function scrape(){
  let list = document.getElementsByClassName("ingredients-item-name");
  let numIngredients = list.length;
  let quantitiesArr = [];
  let ingredArr = [];

  let i = 0;
  while(i < list.length){
    let item = list.item(i);
    let name = item.innerHTML;
    let ingred = name.substr(1, name.length);
    ingred = ingred.trim();
    //ingred = ingred.substr(0, ingred.length-1);
    ingredArr.push(ingred);

    i++;
  }
  return {
    "numIngredients": numIngredients,
    "quantities": quantitiesArr,
    "ingredientNames": ingredArr
  }
}
