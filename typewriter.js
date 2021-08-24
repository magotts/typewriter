const sentence = "hello there from lighthouse labs";

let x = 500; // start typing at 1000ms
for (const char of sentence) {

  setTimeout(() => { // first letter starts at x = 500 and add x + 105 every next letter.
    process.stdout.write(char);
  }, x);

  x += 105; // add 105ms after each letter.
  
}

setTimeout(() => {
  process.stdout.write("\n"); // put next line after the above code is finished running at x+= 105.
}, x);