const libarray = [];
// Object creator
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
// Main function that processes the provided data and prints it on a card
function printBook(data) {
  const arr = Object.keys(data);
  const bookcontainer = document.querySelector('#BookContainer');
  const book = document.createElement('div');
  book.id = libarray.length;
  book.classList.add('col-12', 'my-2', 'row', 'bookcontainer', 'text-center');
  for (let i = 0; i < 4; i++) {
    const temp = document.createElement('div');
    temp.classList.add('titlegroup', 'row', arr[i]);
    const temp2 = document.createElement('div');
    temp2.classList.add('col-sm-12', 'col-lg-6');
    const temp2c = temp2.cloneNode(true);
    const temp3 = document.createElement('h3');
    temp3.classList.add('label', 'h3');
    const temp3c = temp3.cloneNode(true);
    temp3.innerHTML = `${arr[i].replace(/^\w/, (c) => c.toUpperCase())}:`;
    temp3c.innerHTML = data[arr[i]];
    temp2.appendChild(temp3);
    temp2c.appendChild(temp3c);
    temp.appendChild(temp2);
    temp.appendChild(temp2c);
    book.appendChild(temp);
  }
  const btncontainer = document.createElement('div');
  btncontainer.classList.add('btngroup', 'row');
  const btnread = document.createElement('button');
  if (data.read === false) {
    btnread.classList.add('btn', 'btn-primary', 'col-3', 'mx-auto', 'btnread');
    btnread.innerHTML = 'Finished Reading';
  } else {
    btnread.classList.add('btn', 'btn-primary', 'col-3', 'mx-auto', 'btnread');
    btnread.disabled = true;
    btnread.innerHTML = 'Already Finished';
  }
  const btndelete = document.createElement('button');
  btndelete.classList.add('btn', 'btn-danger', 'col-3', 'mx-auto', 'btndelete');
  btndelete.innerHTML = 'Delete Book';
  btncontainer.appendChild(btnread);
  btncontainer.appendChild(btndelete);
  btnread.addEventListener('click', () => {
    const readline = book.querySelector('.read');
    readline.childNodes[1].childNodes[0].innerHTML = 'True';
    libarray[book.id - 1].read = true;
    btnread.disabled = true;
  });
  btndelete.addEventListener('click', () => {
    const container = btndelete.parentElement.parentElement;
    container.remove();
    libarray.splice(book.id - 1, 1);
  });
  book.appendChild(btncontainer);
  bookcontainer.appendChild(book);
}
// Gets the data from the input form to feed into the "PrintBook" function.
function GetBook() {
  const title = document.getElementById('BookTitle').value;
  const author = document.getElementById('BookAuthor').value;
  const pages = document.getElementById('BookPages').value;
  const read = document.getElementById('BookRead').checked;
  const first = new Book(title, author, pages, read);
  libarray.push(first);
  printBook(first);
}
// Button listeners to trigger certain events
const btnsubmit = document.querySelector('#Btn');
btnsubmit.addEventListener('click', () => {
  GetBook();
});