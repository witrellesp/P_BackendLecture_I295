let books = [
  {
    id: 1,
    title: "Illuminate apparition",
    Number_of_pages: 150,
    Price: 19.99,
    Excerpt: "https://lien/relatif/vers/un/fichier/pdf/d_une/page/de/l_ouvrage",
    Summary:
      "Ce livre écrit par John Doe, décrit l'histoire d'un jeune homme...",
    Writter: "John Doe",
    Publisher: "Sushi Productions",
    Year_of_publication: "02-02-2024",
    Average_user_rating: 4,
    Comments: ["Je rien compris", "C'est incroyable", "a"],
  },
  {
    id: 2,
    title: "Illuminate desapparition",
    Number_of_pages: 152,
    Price: 19.99,
    Excerpt: "https://lien/relatif/vers/un/fichier/pdf/d_une/page/de/l_ouvrage",
    Summary:
      "Ce livre écrit par John Doe, décrit l'histoire d'une jeune femme...",
    Writter: "John Doe",
    Publisher: "Sushi Productions",
    Year_of_publication: "02-02-2025",
    Average_user_rating: 5,
    Comments: ["Wow", ":)", "a"],
  },
];

const getBook = (bookId) => {
  return books.find((book) => book.id == bookId);
};

const updateBook = (bookId, updatedBook) => {
  books = books.map((book) => (book.id == bookId ? updatedBook : book));
};

const removeBook = (bookId) => {
  books = books.filter((book) => book.id != bookId);
};

export { books, getBook, updateBook, removeBook };
