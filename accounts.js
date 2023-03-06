//accounts is an array of objects
//function goes through array and finds matching id
function findAccountById(accounts, id) {
  return accounts.find((accountObj)=>{
    return accountObj.id === id
  })
}


//sorts accounts by last name
function sortAccountsByLastName(accounts) {
  //account array->accountObj->nameObj->last property
  //use sort method
  return accounts.sort((a,b) => {
      //access last name, sort A ascending to Z
      return a.name.last < b.name.last ? -1 : 1
  })
}


//find how many times an account has borrowed books
//books is one big array containing book objects
//iterate through the books array and match the account id
function getTotalNumberOfBorrows(account, books) {
  //create a tally;
  let borrowTally = 0;
  
  //destructure account to use clean id variable
  const {id} = account;
  
  //for loop to iterate through each book.
  for(let i = 0; i < books.length; i++){
    //for loop to iterate through borrows within each book
    for(let j = 0; j < books[i].borrows.length; j++){
      //conditional, if id's match: +1 on the tally
      if(books[i].borrows[j].id === id){
        borrowTally += 1
      }
    }
  }
  
  //return tally
  return borrowTally
}

//input: account(obj), books(array), authors(array)
//find what books are checked out by the account
  //return an array of said books, add new key:value pair into the book object
    //new key:value is the author object of the book

function getBooksPossessedByAccount(account, books, authors) {
  //id is all that is needed from account
  const {id} = account
    
  //create empty array to push books into
  let checkedOutBooks = [];
    
  //filter? for loop? book->borrows->id matches && returned:false
  //for loop, iterate through books
  for(let i = 0; i < books.length; i++){
    //for loop to iterate through borrows within each book
    for(let j = 0; j < books[i].borrows.length; j++){
      //conditional, if id's match&&returned:false
        //push book into checkedOutBooks
      if(books[i].borrows[j].id === id && books[i].borrows[j].returned === false){
        checkedOutBooks.push(books[i])
      }
    }
  }
 
  

  //now we need to get the authors object into the corresponding book
  //iterate through checkedOutBooks
  for(let i = 0; i < checkedOutBooks.length; i++){
    //iterate through authors
    for(let j = 0; j < authors.length; j++){
      //if id's match, create new key in checked out book object
      //console.log(authors[j])
       if(checkedOutBooks[i].authorId === authors[j].id){
         checkedOutBooks[i].author = authors[j];
      }
    }
      
  }

  //return checkedOutBooks
  return checkedOutBooks
}
  
module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
