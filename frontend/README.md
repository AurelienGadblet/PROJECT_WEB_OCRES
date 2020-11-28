___________________
il faut installer :
___________________

npm install axios

___________________
 LIEN DU TRELLO 
___________________

https://trello.com/b/y2Nw5VQV/taches

___________________
 MEMBRE
___________________

Aurélien GADBLET - TD4A

______________________________________
A titre d'info et de rappel
______________________________________

Palette couleur :

#264653 Bleu foncé
#2a9d8f Vert
#3aad9f Vert clair
#4abdaf Vert plus clair

___________________
 LES API
___________________

Pour trouver l'inspiration : https://github.com/public-apis/public-apis?fbclid=IwAR2vxjbMNR81BUZ57wk1v0ySm3Q_hRiakE-9T2AoR7jwqpV97xsNq0Pz7qk
_______________________________________________________________________

LASTFM :

Application name : 	School project
API key :	        4934f604a95406e95dea7ba0ace62d11
Shared secret : 	6c56040ff22ed3d708851d4b713097ff
Registered to :	    AureKun
https://www.last.fm/api/show/user.getTopTracks

Requêtes à faire :

Global :
Top Artistes : http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=4934f604a95406e95dea7ba0ace62d11&format=json
Top Titres : http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=4934f604a95406e95dea7ba0ace62d11&format=json
Personnel :
Top artistes : http://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=AureKun&api_key=4934f604a95406e95dea7ba0ace62d11&format=json
Top Titres : http://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=AureKun&api_key=4934f604a95406e95dea7ba0ace62d11&format=json
Données Utilisateur : http://ws.audioscrobbler.com/2.0/?method=user.getinfo&user=AureKun&api_key=4934f604a95406e95dea7ba0ace62d11&format=json

_______________________________________________________________________
_______________________________________________________________________

OPENWEATHERMAP :

Get la météo du jour : https://api.openweathermap.org/data/2.5/weather?q=Paris&units=metric&appid=4081444b7b90198136fefe6ed4ccf35b

_______________________________________________________________________
_______________________________________________________________________

Foreign exchange rates API  :

Requete pour obtenir 5 valeurs : https://api.exchangeratesapi.io/latest

_______________________________________________________________________
_______________________________________________________________________

Spoontacular :

key : 0dd0f2c6ba784c4fa54fb1f70cc3f1d0
Url : https://spoonacular.com/food-api/docs 
exemple de requête:
https://api.spoonacular.com/recipes/findByIngredients?ingredients=apples,+flour,+egg&number=2&apiKey=0dd0f2c6ba784c4fa54fb1f70cc3f1d0
_______________________________________________________________________



____________________________________
                                   
           Journal de bord  :      
____________________________________

____________________________________
18/11 : Initiation du projet
____________________________________

- Fait le app.js
- Création des containers Dashboard, Nav, Page_Admin
- Création des components Widget 1 à 6
- Bouton cgt de page et barre de recherche de la barre de navigation
- Mise en service du bouton changement de page, qui switch la page afichée (dash / page admin)

____________________________________
 19/11 : Deuxieme jour de code 
 ____________________________________

- Creation du container Footer
- Mise en forme du site CSS :
    - Footer en bas de page
    - Couleurs sur le site
    - Diverses animations css
- Création du Widget 1
- Modification de la nav -> Barre de recherche retirée et ajoutée au Widget 1
- Création du 2e widget : LastFM

____________________________________
21/11
____________________________________

- Création du Widget 3 --- Widget Fini
- Modification des Widget 1 & 2 pour faciliter l'utilisation des requêtes GET
- Création du Widget 4

____________________________________
 26/11
____________________________________

- Ajout des appels Axios pour les Widgets 1&2
____________________________________
 27/11 
____________________________________

- Fix des appels API
- Activation des barres de recherche
- Optimisations diverses

____________________________________
 28/11
____________________________________

- Recherche d'idée pour le 5e widget
- Création du Widget 5
- Widget 5 FINI
- Création du Widget 6