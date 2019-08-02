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
  }