import { Book } from './Book.js';
  
   const firstBook = new Book('Milkman','Anna Burns',100,'So when a local paramilitary known as the milkman begins pursuing her, she suddenly becomes “interesting,” ',80,false)
  
   const secondBook = new Book('Fairview','Jackie Sibblies Drury',200,'A glorious, scary reminder of the unmatched power of live theater to rattle, roil and shake us wide awake.',200,true,)
  
   const thirdBook = new Book ('The Overstory: A Novel','Richard Powers',300,'"The best novel ever written about trees, and really just one of the best novels, period.',250,false)

  const bookList = [firstBook,secondBook,thirdBook]


  export { bookList };

