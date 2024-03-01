CREATE TABLE t_utilisateur(
   idUser INT AUTO_INCREMENT,
   nomUser VARCHAR(50) NOT NULL,
   prenomUser VARCHAR(50) NOT NULL,
   pseudoUser VARCHAR(35) NOT NULL,
   dateEntree DATE,
   nbrCommentaires INT,
   nbrAppreciation INT,
   PRIMARY KEY(idUser),
   UNIQUE(pseudoUser)
);

CREATE TABLE t_ecrivan(
   idEcrivan INT AUTO_INCREMENT,
   nomEcrivan VARCHAR(50) NOT NULL,
   prenomEcrivan VARCHAR(50),
   PRIMARY KEY(idEcrivan)
);

CREATE TABLE t_categorie(
   idCategorie INT AUTO_INCREMENT,
   nomCategorie VARCHAR(50) NOT NULL,
   PRIMARY KEY(idCategorie)
);

CREATE DATABASE db_passionLecture;
USE db_passionLecture;

CREATE TABLE t_ouvrage(
   idOuvrage INT AUTO_INCREMENT,
   titre VARCHAR(120) NOT NULL,
   extraitLien VARCHAR(2000),
   nbrPages INT,
   sypnopsis VARCHAR(450) NOT NULL,
   editeur VARCHAR(50) NOT NULL,
   dateEdition DATE,
   appreciationMoyenne TINYINT,
   couvertureLien VARCHAR(150),
   idEcrivan INT NOT NULL,
   idCategorie INT,
   PRIMARY KEY(idOuvrage),
   UNIQUE(titre),
   FOREIGN KEY(idEcrivan) REFERENCES t_ecrivan(idEcrivan),
   FOREIGN KEY(idCategorie) REFERENCES t_categorie(idCategorie)
);

CREATE TABLE t_acceder(
   idOuvrage INT,
   idUser INT,
   PRIMARY KEY(idOuvrage, idUser),
   FOREIGN KEY(idOuvrage) REFERENCES t_ouvrage(idOuvrage),
   FOREIGN KEY(idUser) REFERENCES t_utilisateur(idUser)
);

CREATE TABLE t_commenter(
   idOuvrage INT,
   idUser INT,
   commentaire VARCHAR(350),
   PRIMARY KEY(idOuvrage, idUser),
   FOREIGN KEY(idOuvrage) REFERENCES t_ouvrage(idOuvrage),
   FOREIGN KEY(idUser) REFERENCES t_utilisateur(idUser)
);

CREATE TABLE t_noter(
   idOuvrage INT,
   idUser INT,
   appreciation TINYINT NOT NULL,
   PRIMARY KEY(idOuvrage, idUser),
   FOREIGN KEY(idOuvrage) REFERENCES t_ouvrage(idOuvrage),
   FOREIGN KEY(idUser) REFERENCES t_utilisateur(idUser)
);
