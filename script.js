let text = "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
let text2 = "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...";
let text3 = "Curabitur iaculis, nisl ut tristique fringilla, orci purus rutrum arcu, sed pharetra lectus tortor eget orci."


function countTheVowels(text)
{
  vowel_list = 'aeiouAEIOU';
  vcount = 0;

  for(let x = 0; x < text2.length ; x++)
  {
    if (vowel_list.indexOf(text2[x]) !== -1)
    {
      vcount += 1;
    }
  }
  console.log('The vouwel number is', vcount);
  return vcount;
}
//convert the first letter of each word to upper case
let array1 = text.split(' ');
let newarray1 = [];
  
for(let x = 0; x < array1.length; x++){
    newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
}
let bigText = newarray1.join(' ');

//find the longest word
array1 = text.match(/\w[a-z]{0,}/gi);
let longest_word = array1[0];

for(let x = 1 ; x < array1.length ; x++)
{
  if(longest_word.length < array1[x].length)
  {
  longest_word = array1[x];
  } 
}

//count number of vowels
let vowel_list = 'aeiouAEIOU';
let vcount = 0;

for(let x = 0; x < text.length ; x++)
{
  if (vowel_list.indexOf(text[x]) !== -1)
  {
    vcount += 1;
  }
}

console.log(`The original string was:\n${text}\nCapitalizing each word looks like:\n${bigText}\nThe longest word is ${longest_word}\nThere are ${vcount} vowels`);

//convert the first letter of each word to upper case
array1 = text2.split(' ');
newarray1 = [];
  
for(let x = 0; x < array1.length; x++){
    newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
}
bigText = newarray1.join(' ');

//find the longest word
array1 = text2.match(/\w[a-z]{0,}/gi);
longest_word = array1[0];

for(let x = 1 ; x < array1.length ; x++)
{
  if(longest_word.length < array1[x].length)
  {
  longest_word = array1[x];
  } 
}

//count number of vowels


console.log(`The original string was:\n${text}\nCapitalizing each word looks like:\n${bigText}\nThe longest word is ${longest_word}\nThere are ${vcount} vowels`);

//convert the first letter of each word to upper case
array1 = text3.split(' ');
newarray1 = [];
  
for(let x = 0; x < array1.length; x++){
    newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
}
bigText = newarray1.join(' ');

//find the longest word
array1 = text3.match(/\w[a-z]{0,}/gi);
longest_word = array1[0];

for(let x = 1 ; x < array1.length ; x++)
{
  if(longest_word.length < array1[x].length)
  {
  longest_word = array1[x];
  } 
}

//count number of vowels
vowel_list = 'aeiouAEIOU';
vcount = 0;

for(let x = 0; x < text3.length ; x++)
{
  if (vowel_list.indexOf(text3[x]) !== -1)
  {
    vcount += 1;
  }
}

console.log(`The original string was:\n${text}\nCapitalizing each word looks like:\n${bigText}\nThe longest word is ${longest_word}\nThere are ${vcount} vowels`);