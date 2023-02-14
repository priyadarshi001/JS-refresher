//* Higher Order Function: It does at least one of the following:
//? Takes one or more functions as an argument. e.g., forEach(), filter(), map()
//? Returns a function as the result.

//! Few things to note before while using module (i.e., using import-export):
   //! use type="module" attribute in <script> tag
   //! Open file using live-server as well as from its source file (go to the folder then open the html file as well)
   //! import with ".js" extension.
     //! no need to add extension while using CommonJS (used in Node.js when "require" is used) -

import { posts } from "./posts.js";

//? forEach()
posts.forEach((post) => {
  console.log(post);
});
console.clear(); // to clear the console.

//? filter()
const filteredPosts = posts.filter((post) => {
  return post.userId === 5;
});
console.log(filteredPosts);

//? map()
const mappedPosts = filteredPosts.map((post) => {
  return post.id * 10;
});
console.log(mappedPosts); // multiplied id 10

//? reduce()--> returns accumulative value
const reducedPostsValue = mappedPosts.reduce((sum, post) => {
  return sum + post;
});
console.log(reducedPostsValue);
