// Function to fetch book data
function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
    .then((resp) => resp.json())
    .then((json) => renderBooks(json)) 
    .catch((error) => {
      console.error("Error fetching books:", error);
    });
}

// Function to render fetched books 
function renderBooks(books) {
  const bookList = document.getElementById("book-list");

  // Error Handling (in case bookList is still not found)
  if (!bookList) {
    console.error("Book list element not found!");
    return;
  }

  books.forEach((book) => {
    const listItem = document.createElement("li");
    listItem.textContent = book.name;
    bookList.appendChild(listItem);
  });
}
