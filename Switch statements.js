function randomNum(){
     return Math.ceil(Math.random()*6)
}


var diceRoll = randomNum().toString()

switch (diceRoll){
    case '1':
    console.log('You rolled number' + diceRoll)
    break;

    case '2':
    console.log('You rolled number 2!')
    break;
    
    case '3':
    console.log('You rolled number 3!')
    break;

    case '4':
    console.log('You rolled number 4!')
    break;

    case '5':
    console.log('You rolled number 5!')
    break;

    default:
    console.log('You rolled number 6!')
}