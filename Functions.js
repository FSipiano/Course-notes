//Functions - changing an element on a function
function goodMorningNeighbour() {
    return 'Good morning, neighbour!';
}


function goodEveningNeighbour() {

    return 'Good evening neighbour, thanks for everything!'
}

//Adding in a name, rather than 'neighbour'
function goodMorningNeighbour (name) {
    return 'Good morning ' + name +'!';
   
}

function goodEveningNeighbour (name) {
    return 'Good evening' + name + 'thanks for everything'


}

//call the changed element in ('')
goodMorningNeighbour('Bob')

//change 2 parameters - name and include the task we are thanking them for
function goodEveningNeighbour (name, task) {
    return 'Good evening ' + name + ', thanks for ' + task + '!'

}

goodEveningNeighbour ('Bob', 'watering the flowers')