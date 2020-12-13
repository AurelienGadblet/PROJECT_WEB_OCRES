___________________
il faut installer :


npm install axios

___________________
LIEN DU TRELLO 


https://trello.com/b/y2Nw5VQV/taches

LIEN DE LA WIREFRAME :

https://www.figma.com/proto/JCBXgF79QugzdAAUSyHFX3/Wireframe?node-id=1%3A88&scaling=scale-down 

Modifier la WF :
https://www.figma.com/file/JCBXgF79QugzdAAUSyHFX3/Wireframe?node-id=0%3A1

___________________
MEMBRE

Aurélien GADBLET - TD4A

______________________________________
A titre d'info et de rappel

Palette couleur :

#EEE5E9 couleur boutons hover / lignes / texte
#D64933 couleur nav / footer 
#2B303A couleur widget/bouton:hover

___________________
LES API


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

OPENWEATHERMAP :

Get la météo du jour : https://api.openweathermap.org/data/2.5/weather?q=Paris&units=metric&appid=4081444b7b90198136fefe6ed4ccf35b


_______________________________________________________________________

Foreign exchange rates API  :

Requete pour obtenir 5 valeurs : https://api.exchangeratesapi.io/latest


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


18/11 : Initiation du projet


- Fait le app.js
- Création des containers Dashboard, Nav, Page_Admin
- Création des components Widget 1 à 6
- Bouton cgt de page et barre de recherche de la barre de navigation
- Mise en service du bouton changement de page, qui switch la page afichée (dash / page admin)

____________________________________
19/11 : Deuxieme jour de code 


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

- Création du Widget 3 --- Widget Fini
- Modification des Widget 1 & 2 pour faciliter l'utilisation des requêtes GET
- Création du Widget 4

____________________________________
 26/11


- Ajout des appels Axios pour les Widgets 1&2
____________________________________
 27/11 


- Fix des appels API
- Activation des barres de recherche
- Optimisations diverses

____________________________________
 28/11


- Recherche d'idée pour le 5e widget
- Création du Widget 5
- Widget 5 FINI
- Création du Widget 6
- Widget6 fini
- Création de la structure page admin -> fini
- Utilisation des medias queries pour rendre responsive
- Wireframe faite

___________________________________
29/11

- Ajout d'un screenshot de la wireframe
- Ajout des fichiers stories
- Quelques bugfix

____________________________________
13/12

- API finie
- BDD finie
- Lien bdd / front fait
- Correction de bugs
- Aider les camarades

___________________________________
14/12

- Ajout de blindages sur le Widget 2 pour eviter les bugs
- Pre-remplissage de certains champs dans la page admin
