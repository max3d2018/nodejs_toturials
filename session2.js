// path module  => allows to construct path that diffrenet operating systems can work with it
// const path = require("path");
// const { readFileSync, writeFileSync, readFile, writeFile } = require("fs");

const _ = require("lodash");

// const http = require("http");

// // // console.log(path.sep);
// // // const pathFile = path.join("./content", "subcontent", "text.txt");
// // // const baseName = path.basename(pathFile);

// // // // Importance of Absolute Path => our app will be running on different systems => so it will assure that our app is running on the correct path
// // // const absolutePath = path.resolve(
// // //   __dirname,
// // //   "content",
// // //   "subcontent",
// // //   "text.txt"
// // // );

// // // console.log(pathFile);

// // // console.log(baseName);

// // // console.log(absolutePath);

// // // FS module => allows to work with files in our directory
// // // has 2 types => 1- synchronous 2-asyncronous

// // // const content = readFileSync(
// // //   `${__dirname}/content/subcontent/text.txt`,
// // //   "utf8"
// // // );

// // // writeFileSync(
// // //   `${__dirname}/content/textCopy2.txt`,
// // //   `Here is our copied content : ${content}`
// // // );

// // console.log("Starting process");

// // readFile(`${__dirname}/content/subcontent/text.txt`, "utf-8", (err, result) => {
// //   if (err) return;

// //   console.log(result);
// //   console.log("Process Done ");

// //   writeFile(
// //     `${__dirname}/content/subcontent/textCopy2Async.txt`,
// //     result,
// //     { flag: "a" },
// //     (err) => {
// //       if (err) {
// //         console.log(err);
// //       }
// //     }
// //   );
// // });

// // console.log("After Process");

// const server = http.createServer((req, res) => {
//   //   console.log("server is running");

//   if (req.url === "/") {
//     res.end("<h1>welcome this is our homepage</h1>");
//   } else if (req.url === "/about") {
//     res.end("<h1>About page</h1>");
//   } else if (req.url === "/contact") {
//     res.end("<h1>contact page</h1>");
//   } else {
//     res.end("<h1>404 not found</h1>");
//   }
// });

// server.listen(5000);

// NPM => Node Package Manager => installed with node

const items = [1, [2, [2, [4, [5, [7]]]]]];

const newItems = _.flattenDeep(items);

console.log(newItems);
