class Book {
  constructor(title, author, pages, description, currentPage = 1, read) {
          this.title = title;
          this.author = author;
          this.pages = pages;
          this.description = description;
          this.currentPage = currentPage;
          this.read = read;

          if (this.currentPage == this.pages) {
              this.read = true;
          }

  }
  readBook(pageNumber) {
      if (pageNumber > this.pages || pageNumber < 1) {
          alert('invalid page number')
      } else {
          this.currentPage = pageNumber;
          if (this.currentPage == this.pages) {
              this.read = true;
          }
      }
  }
}

export { Book };

