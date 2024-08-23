import { clear } from "console";
import path from "path";

const data = path.parse("C:/Users/admin/OneDrive/Desktop/BACKEND/practice node/path.js");


const data2 = path.basename("C:/Users/admin/OneDrive/Desktop/BACKEND/practice node/path.js");

// console.log(data);
// console.log(data2);


const resolve = path.resolve("oneDrive","Desktop","BACKEND","practice","node","path.js")

const pwd = path.dirname("C:/Users/admin/OneDrive/Desktop/BACKEND/practice node/path.js")

console.log(resolve);
