import axios from "axios";
import * as cheerio from "cheerio";
import fs from "fs";
import path from "path";
import XLSX from "xlsx";

let filePath = "amazon-mobile.txt";
let outputFilePath = "mobile-info.xlsx";

async function scrape() {
  
//   const response = await axios.get("https://www.amazon.in/s?k=iphone");

//   fs.writeFile(filePath, response.data, (err) => {
//       if (err) {
//           console.log('there is some error');
//       }
//       else {
//           console.log("file added successfully");
//       }
//   });

  const data = fs.readFileSync(filePath, "utf-8");

  const mobileInfo = [];

  const $ = cheerio.load(data);

  $(".a-price-whole").each((index, tag) => {
          mobileInfo[index] = {};
    mobileInfo[index].price = $(tag).text();
  });

  $(".a-size-medium.a-color-base.a-text-normal").each((index, tag) => {
        mobileInfo[index].name = $(tag).text();
  });

  $(".a-icon-alt").each((index, tag) => {
    if (!mobileInfo[index]) {
      mobileInfo[index] = {};
    }
    
      mobileInfo[index].rating = $(tag).text();          
  });

  console.log(mobileInfo);
  console.log(mobileInfo.length);

    // convert the json data to worksheet

    const ws = XLSX.utils.json_to_sheet(mobileInfo);

    // add a workbook and append worksheet into it

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Mobile information");

    // make a file and give it to the workbook

    XLSX.writeFile(wb, outputFilePath);

}

scrape();
