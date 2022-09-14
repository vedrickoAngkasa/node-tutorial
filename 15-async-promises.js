//Example of async await promise
//This method is much more simple and become much more easier to read
// const { readFile, writeFile } = require("fs");
// const util = require("util");
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);
// const start = async () => {
    //   try {
    //     const first = await readFilePromise("./content/first.txt", "utf-8");
    //     const second = await readFilePromise("./content/second.txt", "utf-8");
    //     await writeFilePromise(
    //       "./content/result-mind-grenade.txt",
    //       `This is awesome :  ${first} and ${second}`
    //     );
    //     console.log(first);
    //     console.log(second);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // };
    
    // start();
    
//We can make a much more simpler import by using the following code
const { readFile, writeFile } = require("fs").promises;
const start = async () => {
    try {
      const first = await readFile("./content/first.txt", "utf-8");
      const second = await readFile("./content/second.txt", "utf-8");
      await writeFile(
        "./content/result-mind-grenade.txt",
        `This is awesomes :  ${first} and ${second}`
      );
      console.log(first);
      console.log(second);
    } catch (err) {
      console.log(err);
    }
  };
  
  start();
  

// 
//This is a method that we created from scratch, we can use a build in method from node to simplify it called promisify
//This is just to call the promise without using async or await
//To have multiple read or write file, we can use promise to encouter its
// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

// getText("./content/first.txt")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));
