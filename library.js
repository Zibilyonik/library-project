libarray=[];
function Book(title,author,pages,read){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function printBook(data) {
  const bookcontainer = document.querySelector("#BookContainer");
  const book = document.createElement("div");
  book.classList.add("col row bookcontainer text-center");
  const title = data.title;
  const author = data.author;
  const pages = data.pages;
  const read = data.read;
  
  book.appendChild();
  book.appendChild();
  bookcontainer.appendChild(book);

}

function GetBook(){
  
  var title = document.getElementById("BookTitle").value;
  var author = document.getElementById("BookAuthor").value;
  var pages = document.getElementById("BookPages").value;
  var read = document.getElementById("BookRead").value;
  const first = new Book(title, author, pages, read);
  console.log(first.title)
  libarray.push(first);
  console.log(libarray)
}


