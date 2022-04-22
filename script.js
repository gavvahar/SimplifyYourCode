const textArr = [
  "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
  "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...",
  "Curabitur iaculis, nisl ut tristique fringilla, orci purus rutrum arcu, sed pharetra lectus tortor eget orci."
];


function countTheVowels(text)
{
  vowel_list = 'aeiouAEIOU';
  vcount = 0;

  for(let x = 0; x < text.length ; x++)
  {
    if (vowel_list.indexOf(text[x]) !== -1)
    {
      vcount += 1;
    }
  }
  console.log('The vouwel number is', vcount);
  return vcount;
}

function findTheLongestWord(text)
{
  array1 = text.match(/\w[a-z]{0,}/gi);
  let longest_word = array1[0];

  for(let x = 1 ; x < array1.length ; x++)
  {
    if(longest_word.length < array1[x].length)
    {
    longest_word = array1[x];
    } 
  }
  return longest_word;
}

function convertFirstLetterToUpperCase(text)
{
  let array1 = text.split(' ');
  let newarray1 = [];
  
  for(let x = 0; x < array1.length; x++)
  {
    newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  let bigText = newarray1.join(' ');
  return bigText;
}

for (let i = 0; i < textArr.length; i++)
{
  const text = textArr[i];
  console.log(`The original string was:\n${text}\nCapitalizing each word looks like:\n${convertFirstLetterToUpperCase(text)}\nThe longest word is ${findTheLongestWord(text)}\nThere are ${countTheVowels(text)} vowels`);
  
  console.log('==========================\n')
}