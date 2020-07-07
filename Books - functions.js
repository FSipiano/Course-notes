var book = {

    genre: 'factual',
    pages: 298,
    colour: 'green',
    illustrated: true,
    hardback: false

}
function Book (genre, pages, colour, illustrated, hardback) {
    this.genre = genre;
    this.pages = pages;
    this.colour = colour;
    this.illustrated = illustrated;
    this.hardback = hardback;

}

var Book1 = new Book ('romantic', 500, 'red and black', false, true);

var Book2 = new Book ('humour', 30, 'blue and purple', true, true)

var Book3 = new Book ('factual', 4000, 'green', true, false)