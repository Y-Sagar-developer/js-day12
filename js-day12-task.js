// task:
// ------
// var aos = ["mom", "js", "malayalam", "html", "css", "dad"];

// // op=["mom","dad","malayalam"]

// using for/while and do-while loop

// Answer:


var aos = ["mom", "js", "malayalam", "html", "racecar", "css", "dad", "madam"];
output = [];

for (i = 0; i < aos.length; i++) {
  var x = aos[i];
  var y = "";
  for (j = x.length - 1; j >= 0; j--) {
    y += x[j];
  }
  if (x === y) {
    output.push(x);
  }
}
console.log(output);

// output
// [ 'mom', 'malayalam', 'racecar', 'dad', 'madam' ]