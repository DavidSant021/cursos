let varA = 'A';
let varB = 'B';
let varC = 'C';

/*
const varATemp = varA
varA = varB;
varB = varC;
varC = varATemp;
*/

[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC);