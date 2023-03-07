//set up helper function to get counts.
function arrayTotal(arrayToBeCounted){
  return arrayToBeCounted.length
}

//input: array of book objects
//output: number, represents the # of book objects in the array
function getTotalBooksCount(books) {
  return arrayTotal(books)
}


/*------------------------------------------------------------------------------------------------*/


//input: array of account objects
//output: # of account objects in the array
function getTotalAccountsCount(accounts) {
  return arrayTotal(accounts)
}


/*------------------------------------------------------------------------------------------------*/



//input: array of book objects
//output: number of books currently checked out
function getBooksBorrowedCount(books) {
  //filter books array. target: "returned":false
  let filtered = books.filter(bookObj => bookObj.borrows[0].returned === false);
  
  //count using helper function
  return arrayTotal(filtered)
}




/*--------------------------------------------------------------------------------*/




//input: array of book objects
//output: array containing max. 5 objects that represents the most common genre's
      //ordered. most common first
      //objects will have name and count keys

function getMostCommonGenres(books) {
  //reduce books array into object genre's as keys
  const genreObj = books.reduce((result, element)=>{
    //if genre undefined. create key with value of 1
    if(result[element.genre] === undefined){
      result[element.genre] = 1
    }else{
      //if key already defined, +=1
      result[element.genre] += 1
    }
    return result
  },{})

  //rework into array with desired format
  const genreArr = [];
  for(const genre in genreObj){
    genreArr.push({
      "name": genre,
      "count": genreObj[genre]
    })
  }

  //sort array by largest to smallest
  genreArr.sort((elementA,elementB)=>{
    return elementB.count - elementA.count
  })
  
  //return with splice(first 5 elements)
  return genreArr.splice(0,5)
}

// console.log(getMostCommonGenres(books))




/*------------------------------------------------------------------------------------------------*/


//input: array of book objects
//output: returns array of 5 most popular books objects
        //objects= {name: "title", count: #borrowed}
        //popularity represented by amount of times book is borrowed
        //
function getMostPopularBooks(books) {
  //access book.title and book.borrows.length
  let reformattedBooks = books.map((book)=>{
    return book = {
      "name": book.title,
      "count": book.borrows.length
    }
  })

  //sort, splice, and return
  return reformattedBooks.sort((bookA, bookB) => {return bookB.count - bookA.count}).splice(0,5)
}

console.log(getMostPopularBooks(books))


/*------------------------------------------------------------------------------------------------*/

//input: array of book objects, array of author objects
//output: array containing 5 or fewer objects of most popular authors
          //popularity: add up all borrows for all books by author
          //object: {"name": `${firstname} ${lastname}`, "count": #totalBorrows}
function getMostPopularAuthors(books, authors) {
  //create function that loops through books and counts borrows for each author
  function borrowCounter(booksArr, author){
    let result = 0;
    books.forEach(book => {
      if(book.authorId === author.id){
        return result += book.borrows.length
      }
    });
    return result
  }

  //reformat authors: add count to authors, combine name properties, remove id
  let authorsWithCount = authors.map((author) => {
    return author = {
      "name": `${author.name.first} ${author.name.last}`,
      "count": borrowCounter(books, author)
    }
  })

  //sort, splice, return
  return authorsWithCount.sort((authorA, authorB)=>{return authorB.count - authorA.count}).splice(0,5)
}
