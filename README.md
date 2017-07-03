# Conferences challenge
CRUD avec la stack MEAN

## How to

1- yarn install

2- yarn run server

3- yarn start

4- yarn test

npm peut être également utilisé

## Variable d'environnement

Le fichier `server-start.js` contient les variables d'environnement à ajuster si besoin

par defaut en développement :
 - le serveur est lancé sur http://localhost:3001
 - le client est lancé sur http://localhost:8080


## Arborescence
```
Projet
+-app
+-public
+-server
--package.json
--webpack.config.babel.js
-- server.js
```
* app contient les sources angular du client de l'application
* public contient les fichiers static de l'application
* server contient les sources du server de l'application
* package.json fichier de configuration npm
* webpack.config.babel.js fichier de configuration webpack
* server.js point d'entrée su serveur

## frameworks utilisés
- angularJS
- express
- moongoose

CSS : [bulma](http://bulma.io/)

La partie client est construite grâce à webpack

## Guide de style

Utilisation du guide de style [airbnb](https://github.com/airbnb/javascript) via leur plugin eslint

## TODO

* Ajouter des tests unitaire sur tous les controllers de l'application angular
* Ajouter des tests unitaire sur le server
* Ajouter l'intégration continue - test - eslint
* Gestion propre des erreurs
* Gestion des images
