// /** Problem 04 - (Delete / Store) */
// var fileName= "#exprience.mp4";
// //write your code here

// var ext = fileName.split(".").pop();

// if (fileName.startsWith("#") || ext === "pdf" || ext === "docx") {
//     console.log("Store");
// }
// else {
//     console.log("Delete")
// }


/** Problem 04 - (Delete / Store) */
var fileName= "#exp.mp4";
//write your code here

if (fileName.startsWith("#") || fileName.endsWith(".pdf") || fileName.endsWith(".docx")) {
  console.log("Store");
} 
else {
  console.log("Delete");
}