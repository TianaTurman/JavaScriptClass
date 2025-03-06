//1. Create an array containing three colors and use array destructuring to extract them into variables.
 let colors = ['red', 'pink', 'blue'];
 const [colorRed,,colorBlue] = colors //['red', 'pink', 'blue'];

 console.log(colorRed)

 console.log(colorBlue)

 //2. Create an object representing a book with properties title, author, and year. Use object destructuring to extract the properties.
  const book = {
    title: 'cujo',
    author: 'Stephen King',
    year: '1980'
  };

  const {title,year} = book;
  console.log(title);
//   console.log(author);
  console.log(year);
  

  //3.Modify the destructuring so that the author property is stored in a variable called writer.
//   const {author:writer} = book;
//   console.log(writer)
