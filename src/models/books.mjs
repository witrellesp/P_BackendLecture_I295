const BookModel = (sequelize, Datatypes) => {
  return sequelize.define(
    "Book",
    {
      id: {
        type: Datatypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: Datatypes.STRING,
        allowNull: false,
        unique: {
          msg: "Ce nom est déjà pris.",
        },
        validate: {
          is: {
            args: /^[A-Za-z\s]*$/,
            msg: "Seules les lettres et les espaces sont autorisées.",
          },
          notEmpty: {
            msg: "Le titre du livre ne peut pas être vide.",
          },
          notNull: {
            msg: "Le titre du livre est une propriété obligatoire",
          },
        },
      },
      Number_of_pages: {
        type: Datatypes.INTEGER,
        allowNull: false,
        validate: {
          isInteger: {
            msg: "Utilisez uniquement des nombres pour le nombre de pages.",
          },
          notEmpty: {
            msg: "Le nombre de pages ne peut pas être vide.",
          },
          notNull: {
            msg: "Le nombre de pages est une propriété obligatoire",
          },
          min: {
            args: [10.0],
            msg: "Le nombre de pages doit être supérieur à 10 pages",
          },
          max: {
            args: [1000.0],
            msg: "Le nombre de pages doit être inférieur à 1000 pages",
          },
        },
      },
      price: {
        type: Datatypes.FLOAT,
        allowNull: false,
        validate: {
          isFloat: {
            msg: "Utilisez uniquement des nombres pour le prix.",
          },
          notEmpty: {
            msg: "Le prix ne peut pas être vide.",
          },
          notNull: {
            msg: "Le prix est une propriété obligatoire",
          },
          min: {
            args: [1.0],
            msg: "Le prix doit être supérieur à 1 CHF",
          },
          max: {
            args: [200.0],
            msg: "Le prix doit être inférieur à 200 CHF",
          },
        },
      },
      Excerpt: {
        type: Datatypes.STRING,
        allowNull: false,
        unique: {
          msg: "Ce lien appartient déjà à un livre.",
        },
        validate: {
          notEmpty: {
            msg: "Le lien de l'extrait du livre ne peut pas être vide.",
          },
          notNull: {
            msg: "Le lien de l'extrait du livre est une propriété obligatoire",
          },
        },
      },
      Summary: {
        type: Datatypes.STRING,
        allowNull: false,
        unique: {
          msg: "Ce résumé appartient déjà à un livre.",
        },
        validate: {
          is: {
            args: /^[A-Za-z\s]*$/,
            msg: "Seules les lettres et les espaces sont autorisées.",
          },
          notEmpty: {
            msg: "Le résumé du livre ne peut pas être vide.",
          },
          notNull: {
            msg: "Le résumé du livre est une propriété obligatoire",
          },
        },
      },
      Writter: {
        type: Datatypes.STRING,
        allowNull: false,
        validate: {
          is: {
            args: /^[A-Za-z\s]*$/,
            msg: "Seules les lettres et les espaces sont autorisées.",
          },
          notEmpty: {
            msg: "L'écrivant du livre ne peut pas être vide.",
          },
          notNull: {
            msg: "L'écrivant du livre est une propriété obligatoire",
          },
        },
      },
      Publisher: {
        type: Datatypes.STRING,
        allowNull: false,
        validate: {
          is: {
            args: /^[A-Za-z\s]*$/,
            msg: "Seules les lettres et les espaces sont autorisées.",
          },
          notEmpty: {
            msg: "L'éditeur du livre ne peut pas être vide.",
          },
          notNull: {
            msg: "L'éditeur du livre est une propriété obligatoire",
          },
        },
      },
      Year_of_publication: {
        type: Datatypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "L'année d'édition du livre ne peut pas être vide.",
          },
          notNull: {
            msg: "L'année d'édition est une propriété obligatoire",
          },
        },
      },
      Average_user_rating: {
        type: Datatypes.INTEGER,
        allowNull: false,
        validate: {
          isInteger: {
            msg: "Utilisez uniquement des nombres pour la moyenne des appréciaton des utilisateurs.",
          },
          notNull: {
            msg: "La moyenne des appréciaton des utilisateurs est une propriété obligatoire",
          },
          min: {
            args: [0.0],
            msg: "La moyenne des appréciaton des utilisateurs doit être supérieur à 0",
          },
          max: {
            args: [6.0],
            msg: "La moyenne des appréciaton des utilisateurs doit être inférieur à 6",
          },
        },
      },
      Comments: {
        type: Datatypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Les commantaires du livre est une propriété obligatoire",
          },
        },
      },
    },
    {
      timestamps: true,
      createdAt: "created",
      updatedAt: false,
    }
  );
};
export { BookModel };
