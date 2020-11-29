import React from 'react';

class Widget6 extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            liste :{
                "nom": "ProjetIOT",
                "id": 0,
                "dateRendu":{
                    "jour": 3,
                    "mois": "decembre",
                    "année": 2020
                },
                "cours": "IOT",
                "type":"Projet",
                "description":"Réaliser un tutoriel montrant les étapes de la création d'un objet connecté, puis en faire un post LinkedIn",
            },
            jour: 3,
            mois: 'decembre',
            annee: 2020,
        }
        
    }

    render()
    {
        return(
            <div class="Widget">
                <center><h1>Tâches à réaliser</h1></center>
                <div className="divWidget wrap">
                    <input type="text" className="barreRech2" value = {this.state.jour}  ></input>
                    <input type="text" className="barreRech2" value = {this.state.mois}  ></input>
                    <input type="text" className="barreRech2" value = {this.state.annee}  ></input>
                    <button className ="btnRech2">Rechercher</button>
                </div>
                <hr></hr>
                <center><h2>{this.state.liste.nom}</h2></center>
                <div className="divWidget">
                    <div className="subDiv50">
                        <p>{this.state.liste.type} à rendre pour le {this.state.liste.dateRendu.jour} {this.state.liste.dateRendu.mois} {this.state.liste.dateRendu.année}.</p>
                        <p>Pour le cours : {this.state.liste.cours}</p>
                        <p>Description : {this.state.liste.description}</p>
                    </div>
                        
                </div>
            </div>
        );
    }
}

export default Widget6;