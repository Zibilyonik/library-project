libarray=[];
function Book(title,author,pages,read){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function printBook(data) {
  var arr = Object.keys(data);
  var bookcontainer = document.querySelector("#BookContainer");
  var book = document.createElement("div");
  book.classList.add("col-12","my-5", "row", "bookcontainer", "text-center");
  for(var i = 0; i < 4; i++){
    var temp = document.createElement("div");
    temp.classList.add("titlegroup", "row");
    var temp2 = document.createElement("div");
    temp2.classList.add("col-sm-12", "col-lg-6");
    var temp2c = temp2.cloneNode(true);
    var temp3 = document.createElement("h3");
    temp3.classList.add("label", "h3");
    var temp3c = temp3.cloneNode(true);
    console.log(arr[i])
    console.log(data[arr[i]])
    temp3.innerHTML = arr[i] + " of the book:"
    temp3c.innerHTML = data[arr[i]]
    temp2.appendChild(temp3);
    temp2c.appendChild(temp3c);
    temp.appendChild(temp2);
    temp.appendChild(temp2c);
    book.appendChild(temp);
   
  }
  bookcontainer.appendChild(book);
}

function GetBook(){
  
  var title = document.getElementById("BookTitle").value;
  var author = document.getElementById("BookAuthor").value;
  var pages = document.getElementById("BookPages").value;
  var read = document.getElementById("BookRead").checked;
  var first = new Book(title, author, pages, read);
  console.log(first.title)
  libarray.push(first);
  printBook(first);
}

const btn = document.querySelector('#Btn');
btn.addEventListener('click', () => {
  GetBook();
});
