/// il faut installer :

/// LIEN DU TRELLO \\\

https://trello.com/b/y2Nw5VQV/taches

/// MEMBRES \\\

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



____________________________________
                                   
           Journal de bord  :      
____________________________________

/// 18/11 : Initiation du projet \\\

Aurélien :

- Fait le app.js
- Création des containers Dashboard, Nav, Page_Admin
- Création des components Widget 1 à 6
- Bouton cgt de page et barre de recherche de la barre de navigation
- Mise en service du bouton changement de page, qui switch la page afichée (dash / page admin)

/// 19/11 : Deuxieme jour de code \\\

Aurélien :

- Creation du container Footer
- Mise en forme du site CSS :
    - Footer en bas de page
    - Couleurs sur le site
    - Diverses animations css
- Création du Widget 1
- Modification de la nav -> Barre de recherche retirée et ajoutée au Widget 1
- Création du 2e widget : LastFM

/// 20/11 \\\

Repos

/// 21/11 \\\

Aurélien :

- Création du Widget 3 --- Widget Fini
- Modification des Widget 1 & 2 pour faciliter l'utilisation des requêtes GET
- Création du Widget 4
