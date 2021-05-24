libarray=[];
function Book(title,author,pages,read){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function GetBook(){
  const mainbook = document.querySelector('#BookContainer');
  var title = document.getElementById("BookTitle").value;
  var author = document.getElementById("BookAuthor").value;
  var pages = document.getElementById("BookPages").value;
  var read = document.getElementById("BookRead").value;
  const first = new Book(title, author, pages, read);
  console.log(first.title)
  libarray << first;
  console.log(libarray)
}

const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
  GetBook();
});