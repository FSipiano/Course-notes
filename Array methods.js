//Array methods
//concat - join two or more arrays
//reverse method - reverse order of elements
//sort method - sort alpha numeric
//slice method - returns but does not delete a section

var colours =['red','orange', 'blue', 'yellow',
             'green', 'indigo', 'violet']

var colours2 = ['teal', 'scarlett', 'turquoise']

var colours3 = colours.concat(colours2)
colours3

var colours4 = ['black', 'white', 'orange', 'purple']

var allcolours = colours3.concat(colours4)

var reversecolours = allcolours.reverse ()

var alphabetcolours = allcolours.sort ()
