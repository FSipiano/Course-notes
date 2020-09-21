//return length of the longest word


function longestWordLength (str){
    var cleanString = str.replace(/\W/g, ' ')
     var longestWord = ''
     var wordArray = cleanString.split(' ')
     for (let i = 0; i<wordArray.length; i++){
       if (wordArray[i].length > longestWord.length){
         longestWord = wordArray [i]
        }
     }
     return longestWord.length
   }
   
   
   
   
   
   console.log(longestWordLength('Hi, where is the airport?'))
   console.log(longestWordLength('Thanks for stopping by!'))