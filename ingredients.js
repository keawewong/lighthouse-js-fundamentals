var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
console.log("While loop ascended list:")
var ii = 0;
while (ii < ingredients.length) {
  console.log(ingredients[ii]);
  ii++;
}

// Write a for loop that prints out the contents of ingredients:
console.log("\nFor loop ascended list:")
for (var i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
console.log("\nFor loop descended list:")
for (var iii = ingredients.length - 1; iii >-1 ; iii--) {
  console.log(ingredients[iii]);
}