/// il faut installer :

npm install axios

/// LIEN DU TRELLO \\\

https://trello.com/b/y2Nw5VQV/taches

/// MEMBRE \\\

Aurélien GADBLET - TD4A

/// A titre d'info et de rappel \\\

Palette couleur :

#264653 Bleu foncé
#2a9d8f Vert
#3aad9f Vert clair
#4abdaf Vert plus clair

/// LES API \\\

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

CURRENCYLAYER :

API KEY : 4880638d057b379bf2c9242943842af4
Requete pour obtenir 5 valeurs : http://api.currencylayer.com/live?access_key=4880638d057b379bf2c9242943842af4&currencies=AUD,EUR,GBP,CHF,CNY



____________________________________
                                   
           Journal de bord  :      
____________________________________

// 18/11 : Initiation du projet \\

- Fait le app.js
- Création des containers Dashboard, Nav, Page_Admin
- Création des components Widget 1 à 6
- Bouton cgt de page et barre de recherche de la barre de navigation
- Mise en service du bouton changement de page, qui switch la page afichée (dash / page admin)

// 19/11 : Deuxieme jour de code \\

- Creation du container Footer
- Mise en forme du site CSS :
    - Footer en bas de page
    - Couleurs sur le site
    - Diverses animations css
- Création du Widget 1
- Modification de la nav -> Barre de recherche retirée et ajoutée au Widget 1
- Création du 2e widget : LastFM

// 21/11 \\

- Création du Widget 3 --- Widget Fini
- Modification des Widget 1 & 2 pour faciliter l'utilisation des requêtes GET
- Création du Widget 4

// 26/11 \\

- Ajout des appels Axios pour les Widgets 1&2

// 27/11 \\

- Fix des appels API
- Activation des barres de recherche
- Optimisations diverses