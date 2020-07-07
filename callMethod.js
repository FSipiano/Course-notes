var myLanguages = function(lang1, lang2, lang3){
    console.log ('My name is'+ this.name 
    + 'and I know' + lang1 + ', ' + lang2 + ', and ' + lang3)
}
var person1 = {
    name: 'Yang'
}

var person2 = {
    name: 'Ying'
}



myLanguages.call(person1, 'Python', 'C,', 'JavaScript')
//////////

var languages = ['English', 'Spanish', 'German']

myLanguages.call(person2, languages[0], languages[1], languages[2])