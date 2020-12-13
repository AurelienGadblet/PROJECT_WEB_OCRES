import React from 'react';
import axios from 'axios';

class PageAjout extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            jour: '',
            mois: '',
            annee: '2020',
            titre: '',
            description :'',
            matiere: '',
            type: '',   
        }         
    }

    upJour(e)
    {
      this.setState({jour: e.target.value})
    }
    upMois(e)
    {
      this.setState({mois: e.target.value})
    }
    upAnnee(e)
    {
      this.setState({annee: e.target.value})
    }
    upTitre(e)
    {
      this.setState({titre: e.target.value})
    } 
    upDescription(e)
    {
      this.setState({description: e.target.value})
    }
    upMatiere(e)
    {
      this.setState({matiere: e.target.value})
    }
    upType(e)
    {
      this.setState({type: e.target.value})
    }

    requete()
    {
        const devoir = {
            jour: this.state.jour, 
            mois: this.state.mois,
            annee: this.state.annee,
            titre: this.state.titre,
            description: this.state.description,
            matiere: this.state.matiere,
            type: this.state.type
        };

        axios.post('http://localhost:3001/devoirs/ajout', devoir)
            .then(console.log("test"))
            .catch((err) => {
                console.log(err);
              }) 
    }


    render=()=>
    {
        return(
            <div className="Formulaire">
                <div className="pageAjout">
                    <center>
                        <div className="champAjout">
                            <h1 className="couleurTitre">Ajouter un devoir</h1>                            
                        </div>

                        <div className="champAjout">
                            <input type="text" className="inputAdmin" value = {this.state.jour} onChange={(e)=>this.upJour(e)} placeholder="Entrer le Jour"></input>
                        </div>

                        <div className="champAjout">
                            <input type="text" className="inputAdmin" value = {this.state.mois} onChange={(e)=>this.upMois(e)} placeholder="Entrer le Mois"></input>
                        </div>

                        <div className="champAjout">
                            <input type="text" className="inputAdmin" value = {this.state.annee} onChange={(e)=>this.upAnnee(e)} placeholder="Entrer l'Année"></input>
                        </div>

                        <div className="champAjout">
                            <input type="text" className="inputAdmin" value = {this.state.titre} onChange={(e)=>this.upTitre(e)} placeholder="Entrer le Titre"></input>
                        </div>
                        <div className="champAjout">
                            <textarea className="inputAdmin2" value = {this.state.description} onChange={(e)=>this.upDescription(e)} placeholder="Entrer la Description de l'évènement"></textarea>
                        </div>

                        <div className="champAjout">
                            <input type="text" className="inputAdmin" value = {this.state.nom} onChange={(e)=>this.upMatiere(e)} placeholder="Entrer le Cours"></input>
                        </div>

                        <div className="typeDevoir">
                            <button className="boutonAdmin" value = "Projet" onClick={(e)=>this.upType(e)}>Projet</button>
                            <button className="boutonAdmin" value = "Devoir" onClick={(e)=>this.upType(e)}>Devoir</button>
                            <button className="boutonAdmin" value = "Examen" onClick={(e)=>this.upType(e)}> Examen</button>
                        </div>
                        <div className="champAjout">
                            <button className="boutonAdmin" onClick={()=>this.requete()}>Ajouter</button> 
                        </div> 
                    </center>  
                </div>                
            </div>
        );
    }
}

export default PageAjout;