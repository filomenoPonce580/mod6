//inputs: array of author objects & id number
//output: return author object with matching id
function findAuthorById(authors, id) {
  return authors.find(authorObj => authorObj.id === id)
}




//inputs: array of book objects & string ID of single bookObj
//output: return book object with matching ID
function findBookById(books, id) {
  return books.find(bookObj => bookObj.id === id)
}




//input: array ob book objects
//output: return two arrays nested within an array
         //1st array: currently checked out
         //2nd array: books that are currently returned

function partitionBooksByBorrowedStatus(books) {
  //create desired arrays
  const checkedOut = [];
  const availableBooks = [];
  
  //for/in loop that pushes objects into arrays
  for(const bookObj in books){
    const book = books[bookObj]
    //turnary. 
    //if returned = T/F, push into appropriate array
    book.borrows[0].returned === false ? checkedOut.push(book) : availableBooks.push(book)
  }
  
  //return nested arrays
  return [checkedOut, availableBooks]
}



//inputs: book object, array of account objects
//output: returns array of 10 or fewer account objects
        //accounts are the accounts in 'borrows array'
        //insert new property into account obj
            //returned: true/false
//

function getBorrowersForBook(book, accounts) {
  //create empty result array
  let result = [];
  
  //access borrowers of books. limit to 10 using .filter()
  let last10Borrows = book.borrows.filter((borrowObj, indx)=>{
    indx < 10
  })
  
  //loop through accounts, if id's match, push object into result
  accounts.forEach((account, indx) => {
    //for each account, loop through the last10Borrows array
    for(let i = 0; i < last10Borrows.length; i++){
      console.log(account[indx])
      console.log(last10Borrows[i])
      if(last10Borrows[i].id === account.id){
        result.push(account)
      }
    return result
    }
  })

  return result
}

console.log(getBorrowersForBook(books[1], accounts))
