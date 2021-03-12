// Printer Errors

function printerError(s) {
  // your code
  let valid = 0;
  let total = 0;
  s.split("").forEach((item) => {
    if (item >= "a" && item <= "m") {
      valid += 1;
    }
    total += 1;
  });
  return valid.toString() + "/" + total.toString();
}

console.log(printerError("abcdzzzzz"));
