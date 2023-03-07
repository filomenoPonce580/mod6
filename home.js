//set up helper function to get counts.
function arrayTotal(arrayToBeCounted){
  return arrayToBeCounted.length
}


//input: array of book objects
//output: number, represents the # of book objects in the array
function getTotalBooksCount(books) {
  return arrayTotal(books)
}


/*--------------------------------------------------------------------------------*/

//input: array of account objects
//output: # of account objects in the array
function getTotalAccountsCount(accounts) {
  return arrayTotal(accounts)
}


/*--------------------------------------------------------------------------------*/


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

/*--------------------------------------------------------------------------------*/



function getMostPopularBooks(books) {}

function getMostPopularAuthors(books, authors) {}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
