// ## Array Cardio Day 2

const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 },
];

let comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 },
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const year = new Date().getFullYear();
const olderThanNineteen = (person) => year - person.year >= 19;
console.log(`One person over 19: ${people.some(olderThanNineteen)}`);
// Array.prototype.every() // is everyone 19 or older?
console.log(`Everyone over 19: ${people.every(olderThanNineteen)}`);
// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const selectedComment = comments.find((comment) => comment.id === 823423);
console.log(`Comment with id of 823423: ${selectedComment.text}`);
// Array.prototype.findIndex()
// Find the comment with this ID
const selectedCommentIndex = comments.findIndex(
  (comment) => comment.id === 823423
);
// delete the comment with the ID of 823423
// Using filter
const commentRemoved = comments.filter((value, index, comments) => {
  return index !== selectedCommentIndex;
});
console.log(commentRemoved);
