//use bind method x2 to be able to return the context
let person1 = {
    name: 'Alex'
}

let person2 = {
    name: 'Alexis'
}

function namer() 
{
return this.name
}

/////////////////////
let namerBind = namer.bind(person1)()

namerBind

namer.bind(person2)()
