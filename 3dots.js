const ages = [12, 13, 14, 17, 16];
const ages2 = [23, 18, 15, 19, 11];
const allages = ages.concat(ages2);
console.log(allages);


/**ES6 way */
const ages = [12, 13, 14, 17, 16];
const ages2 = [23, 18, 15, 19, 11];
const allages = [...ages, ...ages2];
console.log(allages);

const takaPoisha = [650, 454, 345, 464, 898];
console.log(Math.max(...takaPoisha));