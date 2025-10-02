const prompt = require("prompt-sync")({ sigint: true });

// ---> In Library system we have three Array (Table):
// 1- Books management array .
let booksArray = [];
// 2- Subscriber management  array .
let subscribersArray = [];
// 3- Borowes management array .
let borrowesArray = [];
let ISBN = 1;
let subscriberID = 1;

// start the program by calling the start function.
start();
function start() {
  do {
    let managementNumber;
    managementNumber = chooseManagementType(menuOfAllManagementType());

    // Includes do while loop neither the type management was: (Books, Subscribers, Borrowes).
    chooseManagementTypeMenu(managementNumber);

    //isExist == true the program will exist.
    isExist = exitWholeProgram(managementNumber);
  } while (!isExist);
}

// Menu that appears when the program start.
function menuOfAllManagementType() {
  let menuInfo =
    " === Gestion d’une Bibliothèque  === \n 1. Gestion Des Livres \n 2. Gestion Des Abonnées \n 3. Gestion Des Emprunts \n 0. Quitter";
  console.log(menuInfo);
  return +prompt("Choisissez une option : ");
}

// Checks if the user choosen something dose not included in the options.
function chooseManagementType(managementNumber) {
  // If the user entre a number greather than 3, the system show him the process below, and reask him to entre a number between (1 & 4).
  if (isNaN(managementNumber)) {
    // If the user entre a speciel character, the system show him the process below, and reask him to entre a valid number.
    console.log("S'il te plait entre un nomber valide \n ");
    return;
  } else if (managementNumber > 3 || managementNumber < 0) {
    console.log("S'il te plait entre un nomber entre (1 et 4) \n ");
    return;
  }
  return managementNumber;
}

// Selects one of management type neither was (Books, Subscribers, Borrowes management).
function chooseManagementTypeMenu(managementNumber) {
  if (managementNumber == 1) {
    dealWithBooksManagement();
  } else if (managementNumber == 2) {
    dealWithSubscribersManagement();
  } else if (managementNumber == 3) {
    dealWithBorrowesManagement();
  }
}

/// These functions deal with one of management type neither was (Books, Subscribers, Borrowes management).
function dealWithBooksManagement() {
  let choose;
  do {
    choose = managementBooksMenu();
    toggleBetweenBooks(choose);

    isExist = exitBooksManagementProgram(choose);
  } while (!isExist);
}
function dealWithSubscribersManagement() {
  let choose;
  do {
    choose = managementSubscribersMenu();
    toggleBetweenSubscribers(choose);
    isExist = exitSubcribersManagementProgram(choose);
  } while (!isExist);
}
function dealWithBorrowesManagement() {
  let choose;
  do {
    choose = managementBorrowersMenu();
    toggleBetweenBorrows(choose);
    isExist = exitBorrowesManagementProgram(choose);
  } while (!isExist);
}

// Menus shows options of one of management type neither was (Books, Subscribers, Borrowes management).
function managementBooksMenu() {
  let menuInfo =
    " === Gestion des Lives === \n 1. Ajouter plusieurs livres \n 2. Afficher tous les livres \n 3. Trier les livres par titre (ascendant/descendant) \n 4. Trier les livres par année de publication \n 5. Afficher uniquement les livres disponibles \n 6. Rechercher un livre par ISBN \n 0. Quitter";
  console.log(menuInfo);
  return +prompt("Choisissez une option : ");
}
function managementSubscribersMenu() {
  let menuInfo =
    " === Gestion Des Abonnées  === \n 1. Ajouter un abonné (ID, Nom, Prénom, Email) \n 2. Afficher tous les abonnés \n 0. Quitter";
  console.log(menuInfo);
  return +prompt("Choisissez une option : ");
}
function managementBorrowersMenu() {
  let menuInfo =
    " === Gestion Des Emprunt === \n 1. Enregistrer un emprunt \n 2. Enregistrer un retour \n 3. Afficher les livres empruntés par un abonné donné \n 0. Quitter";
  console.log(menuInfo);
  return +prompt("Choisissez une option : ");
}
// Toggle between books options.
function toggleBetweenBooks(choose) {
  // If the user entre a number greather than 3, the system show him the process below, and reask him to entre a number between (1 & 4).
  if (isNaN(choose)) {
    // If the user entre a speciel character, the system show him the process below, and reask him to entre a valid number.
    console.log("S'il te plait entre un nomber valide \n ");
    return;
  } else if (choose > 6 || choose < 0) {
    console.log("S'il te plait entre un nomber entre (1 et 7) \n ");
    return;
  } else {
    switch (choose) {
      case 1:
        addBooks();
        break;
      case 2:
        showAllBooks();
        break;
      case 3:
        sortBookASCOrDESCByTitle();
        break;
      case 4:
        sortBookByPublicationYear();
        break;
      case 5:
        showAvailableBooks();
        break;
      case 6:
        finABookByISBN();
        break;
    }
  }
}

// Toggle between books options.
function toggleBetweenSubscribers(choose) {
  // If the user entre a number greather than 3, the system show him the process below, and reask him to entre a number between (1 & 4).
  if (isNaN(choose)) {
    // If the user entre a speciel character, the system show him the process below, and reask him to entre a valid number.
    console.log("S'il te plait entre un nomber valide \n ");
    return;
  } else if (choose > 2 || choose < 0) {
    console.log("S'il te plait entre un nomber entre (1 et 3) \n ");
    return;
  } else {
    switch (choose) {
      case 1:
        addASubscriber();
        break;
      case 2:
        showAllSubscriberss();
        break;
    }
  }
}

// Toggle between borrows options.
function toggleBetweenBorrows(choose) {
  // If the user entre a number greather than 3, the system show him the process below, and reask him to entre a number between (1 & 4).
  if (isNaN(choose)) {
    // If the user entre a speciel character, the system show him the process below, and reask him to entre a valid number.
    console.log("S'il te plait entre un nomber valide \n ");
    return;
  } else if (choose > 3 || choose < 0) {
    console.log("S'il te plait entre un nomber entre (1 et 4) \n ");
    return;
  } else {
    switch (choose) {
      case 1:
        addABorrowes();
        break;
      case 2:
        addAReturnedBook();
        break;
      case 3:
        showAllBooksBorrowByASubscriber();
        break;
    }
  }
}

//----> exit functions. for one of management type neither (Books, Subscribers, Borrowes management) <------

// 1 - exit the whole program.
function exitWholeProgram(number) {
  return number == 0 ? true : false;
}
// 2 - exit from the Books Management program.
function exitBooksManagementProgram(number) {
  return number == 0 ? true : false;
}
// 3 - exit from the Subcribers Management program.
function exitSubcribersManagementProgram(number) {
  return number == 0 ? true : false;
}
// 4 - exit from the Borrowes Management program.
function exitBorrowesManagementProgram(number) {
  return number == 0 ? true : false;
}

// Operations about Books management.
function addBooks() {
  let titre = prompt("Ajouter le titre de livre : ");
  let auteur = prompt("Ajouter l'auteur de livre : ");
  let annee = prompt("Ajouter l'année de publication de livre : ");
  // Book object
  let bookObject = {
    isbn: ISBN,
    titre: titre,
    auteur: auteur,
    annee: annee,
    disponible: "oui",
  };
  booksArray.push(bookObject);
  // incremenet Book 'ISBN' when ever the user add a book.
  ISBN++;
  console.log("Votre livre a été ajouté avec succée\n", bookObject);
}
function showAllBooks() {
  console.log("<----------- Les Livres ----------->");
  for (let index = 0; index < booksArray.length; index++) {
    let book = booksArray[index];
    console.log(book.isbn, "-> ", book);
  }
  console.log("<---------------------------------->");
}

function sortBookASCOrDESCByTitle() {
  let sorting = +prompt(
    " Si vous voulez trier les livre ascendant entre (1), descendant entrer (2) : "
  );
  let sortedArray = [];
  if (sorting > 2 || sorting < 1 || isNaN(sorting)) {
    console.log("S'il te plait entrer une choisir correct ");
    return;
  } else {
    if (sorting == 1) {
      //  ascending
      console.log("Ascending:");
      booksArray.sort( compareTitleAscending );
    } else if (sorting == 2) {
      // descending
      console.log("\nDescending:");
      booksArray.sort(compareTitleDescending);
    }
  }

  console.log(booksArray);
}

function sortBookByPublicationYear() {
  booksArray.sort((a, b) => a.annee - b.annee);
  console.log(booksArray);
}

function showAvailableBooks() {
  console.log("<----------- Les Livres Disponible ----------->");
  for (let index = 0; index < booksArray.length; index++) {
    let book = booksArray[index];
    if (book.disponible == "oui") {
      console.log(book.id, "-> ", book);
    }
  }
  console.log("<---------------------------------->");
}

function finABookByISBN() {
  let ISBN = +prompt(" Entre l'ISBN pour trouver un liver : ");
  console.log("isbn", ISBN);
  for (let index = 0; index < booksArray.length; index++) {
    let book = booksArray[index];
    if (book.isbn == ISBN) {
      console.log(book.isbn, "-> ", book);
      return;
    }
  }
  console.log(
    "<------------Le livre que vous chercher est introuvable !--------------->"
  );
}

// Operations about Subscribers management.
function addASubscriber() {
  let nom = prompt("Ajouter le nom de l'abonnée : ");
  let prénom = prompt("Ajouter le prénom de l'abonnée : ");
  let email = prompt("Ajouter l'email de l'abonnée : ");
  // subscriber object
  let subscriberObject = {
    id: subscriberID,
    nom: nom,
    prénom: prénom,
    email: email,
  };
  subscribersArray.push(subscriberObject);
  // incremenet Subscriber 'ID' when ever the user add a book.
  subscriberID++;
  console.log("L'abonnée a été ajouté avec succée", subscriberObject);
}
function showAllSubscriberss() {
  console.log("<----------- Les Aboonnées ----------->");
  for (let index = 0; index < subscribersArray.length; index++) {
    let subscriber = subscribersArray[index];
    console.log(subscriber.id, "-> ", subscriber);
  }
  console.log("<---------------------------------->");
}

// Operations about Borrowes management.
function addABorrowes() {
  let subscriberId = +prompt(
    "Entrer L'ID de personne qui voulait emprunter le live, Pour verifier c'est-il abonnée ou pas?: "
  );

  let subsciberObject = checkABorrowsIsASubscriberToBorrowABook(subscriberId);

  if (subsciberObject.isASubsciber == true) {
    let bookISBN = +prompt(
      "Entrer L'ISBN de book Pour verifier c'est-il disponible ou pas?: "
    );
    let bookObjecAvailability = checkAvailabiltyOfBookForBorrowing(bookISBN);
    if (bookObjecAvailability.isAvailable == true) {
      let borrower = {
        abonneId: subsciberObject.subscriberId,
        isbn: bookObjecAvailability.id,
        dateEmprunt: Date.now().toString(),
      };
      borrowesArray.push(borrower);
      // Show success message:
      console.log("L'emprunt a été ajouté avec succée\n", borrower);
    } else {
      console.log("Le livre est pas disponible maintenent !");
    }
  } else {
    console.log(
      "Ce emprunt peux pas emprunter parce que n'est pas abonnée ! \n"
    );
  }
}

function showAllBooksBorrowByASubscriber() {
  console.log("Afficher les livres empruntés par un abonné donné.");
  let emprunterId = +prompt("Entrer l'ID de l'emprunter : ");
  let isbnArray = [];
  // Looking for a books ISBN into [borrowesArray] belong to this [emprunterId]
  for (let borrowIndex = 0; borrowIndex < borrowesArray.length; borrowIndex++) {
    let borrower = borrowesArray[borrowIndex];
    if (emprunterId == borrower.abonneId) {
      isbnArray.push(borrower.isbn);
    }
  }

  if (isbnArray.length > 0) {
    console.log("<-----------------------Les lives------------------------->");
    for (let bookIndex = 0; bookIndex < booksArray.length; bookIndex++) {
      let book = booksArray[bookIndex];
      if (isbnArray.includes(book.isbn)) {
        console.log(book.isbn, "->", book);
      }
    }
    console.log("<-------------------------------------------------------->");
  }
}
function addAReturnedBook() {
  console.log("<------------------Le return de livre-------------------->");
  let bookISBN = +prompt("Entre le ISBN de livre que vous voulez returner :");
  let borrowersId = +prompt("Entre l'ID de l'abonnée pour le supprimer :");
  if (isNaN(bookISBN) || isNaN(borrowersId)) {
    console.log("Please entre a valide nomber");
    return;
  }
  bookReturnedAndDeleteTheBorrow(bookISBN, borrowersId);

  console.log(
    "<------------------Le return été bien enregistrer-------------------->"
  );
}

// Helpers Operation:
function checkABorrowsIsASubscriberToBorrowABook(subscriberId) {
  // Check if the brrowes is a subscriber or not
  for (let index = 0; index < subscribersArray.length; index++) {
    let subscriber = subscribersArray[index];
    if (subscriberId == subscriber.id) {
      return {
        isASubsciber: true,
        subscriberId: subscriber.id,
      };
    }
  }

  return { isASubsciber: false };
}

function checkAvailabiltyOfBookForBorrowing(bookISBN) {
  // Check if the book is a available or not
  for (let index = 0; index < booksArray.length; index++) {
    let book = booksArray[index];
    if (bookISBN == book.isbn) {
      // Change availability of book from 'oui' to 'non'
      updateAvailabiltyOfBook(book, "non");
      return {
        isAvailable: true,
        id: book.isbn,
      };
    }
  }

  return { isAvailable: false };
}

function updateAvailabiltyOfBook(book, availability) {
  book.disponible = availability;
}
// Check if the entred ISBN is found after update the state of book availability &
// remove the the borrower which borrowed that book which hold that ISBN else i'll show him a message.
function isIsbnFoundForReturningTheBook(book, bookISBN) {
  if (book.isbn == bookISBN) {
    updateAvailabiltyOfBook(book, "oui");
    return true;
  }
  return false;
}

function isBorrowerIDFoundForReturningTheBook(borrower, borrowersId, index) {
  if (borrower.abonneId == borrowersId) {
    borrowesArray.splice(1, index);
    return true;
  }
  return false;
}

function bookReturnedAndDeleteTheBorrow(bookISBN, borrowersId) {
  //  Make the book available.
  let isbnIsFound = false;
  let borrowerIsFound = false;
  for (let index = 0; index < booksArray.length; index++) {
    let book = booksArray[index];
    isbnIsFound = isIsbnFoundForReturningTheBook(book, bookISBN);
  }

  if (isbnIsFound == false) {
    console.log("Ce livre est introuvable !");
    return;
  }

  // Delete borrower  from [borrowesArray]
  for (let index = 0; index < borrowesArray.length; index++) {
    let borrower = borrowesArray[index];
    borrowerIsFound = isBorrowerIDFoundForReturningTheBook(
      borrower,
      borrowersId,
      index
    );
  }

  if (borrowerIsFound == false) {
    console.log("Ce emprunter est introuvable !");
    return;
  }
}

// These function sorting the books asc or desc.
function compareTitleAscending( a, b ) {
  if ( a.titre < b.titre ){
    return -1;
  }
  if ( a.titre > b.titre ){
    return 1;
  }
  return 0;
}
function compareTitleDescending( a, b ) {
  if ( b.titre < a.titre ){
    return -1;
  }
  if ( b.titre > a.titre ){
    return 1;
  }
  return 0;
}
