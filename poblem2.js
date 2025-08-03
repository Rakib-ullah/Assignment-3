/** Problem -02 ( Cycle or Laptop ) */
var money = 24999;
//write your code here

if ( money >= 25000 && money <= 1000000000) {
    console.log("Laptop");
}
else if( money >= 10000 && money < 25000 ) {
    console.log("Cycle");
}
else if ( money < 10000 ) {
    console.log("Chocolate");
}
