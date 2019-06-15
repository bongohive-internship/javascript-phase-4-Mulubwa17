//(1)
var recipe = {
    'title': 'Mole',
    'servings': 2,
    'ingredients': ['cumin', 'cinnamon', 'cocoa']
};

console.log(recipe.title);
console.log('Servings: ' + recipe.servings);
console.log('Ingredients:');
for (var i = 0; i < recipe.ingredients.length; i++) {
    console.log(recipe.ingredients[i]);
}
//(2)
// your solution should go here
var books = [{
        title: 'Splinter cell',
        author: 'Tom Clancy',
        alreadyRead: false
    },
    {
        title: 'The Alchemist',
        author: 'Paul Coelho',
        alreadyRead: true
    }
];

for (var i = 0; i < books.length; i++) {
    var book = books[i];
    var bookInfo = book.title + '" by ' + book.author;
    if (book.alreadyRead) {
        console.log('You already read "' + bookInfo);
    } else {
        console.log('You still need to read "' + bookInfo);
    }
}
// for demo purposes use the console for any out you will need.