//Girilen bir cümledeki her harfin kaç kez tekrarlandığını bulun ve konsola yazdırın.

const sentence = prompt("Give me a sentence");

let letterCount = {};

for (let i = 0; i < sentence.length; i++) {
  let char = sentence[i].toLowerCase();

  if (char >= `a` && char <= `z`) {
    if (letterCount[char]) {
      letterCount[char]++;
    } else {
      letterCount[char] = 1;
    }
  }
}

for (let char in letterCount) {
  console.log(`${char}: ${letterCount[char]}`);
}
