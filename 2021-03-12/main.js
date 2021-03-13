// Sum Mixed Array

function sumMix(x) {
  let sum = x.reduce((acc, curr) => (acc += Number(curr)), 0);
  return sum;
}
