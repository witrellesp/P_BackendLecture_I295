import { Sequelize, Datatypes } from "sequelize";
import { BookModel } from "../models/books.mjs";
import { UserModel } from "../models/UserModel.mjs";
import bcrypt from "bcrypt";

///////////////////////////////////////À changer une fois la base de données soit créé/////////////////
const sequelize = new Sequelize("db_Web295", "root", "root", {
  host: "localhost",
  port: "XXXX",
  dialect: "mysql",
  logging: false,
});

import { books } from "./mock-books.mjs";
//Le modèle product
const Book = BookModel(sequelize, DataTypes);
let initDb = () => {
  return sequelize
    .sync({ force: true }) //Force la sychro => donc supprime les données également
    .then((_) => {
      importBooks();
      importUsers();
      console.log("La base de données db_Web295 a bien été synchronysé");
    });
};

const importBooks = () => {
  //import tous les produits présents dans le fichier db/mock-product
  books.map((book) => {
    Book.create({
      name: book.title,
      price: book.price,
    }).then((book) => console.log(book.toJson()));
  });
};

export { sequelize, initDb, Book };
