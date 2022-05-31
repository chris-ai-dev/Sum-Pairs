var sp = require("./sumPairs");
var shallowEqualArrays = require('shallow-equal/arrays');

// Don't forget to add your tests :)
// console.log(shallowEqualArrays(arm.findArmstrongNumbers(createArrayOfNum(8)), [0, 1, 2, 3, 4, 5, 6, 7]));
console.log(shallowEqualArrays(sp.sumPairs([1,2,3,4,5], 9)),[ [4,5] ]);
console.log(shallowEqualArrays(sp.sumPairs([1,2,3,4,5], 7)),[ [2,5], [3,4] ]);
console.log(shallowEqualArrays(sp.sumPairs([3, 1, 5, 8, 2], 27)),'unable to find pairs');