import React from 'react';
import Footer from './Footer';

class Page_Admin extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            nom: '',
            jour: '',
            mois: '',
            annee: '',
            type: '',
            description :'Entrer une description de l evenement'
        }
    }

    upNom(e)
    {
      this.setState({nom: e.target.value})
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
    updescription(e)
    {
      this.setState({description: e.target.value})
    }

    render()
    {
        return(
            <div className="center">
                <div>
                    <h1>Ajouter un devoir</h1>
                    <p>Nom : </p>
                    <input type="text" className="inputAdmin" value = {this.state.nom} onChange={(e)=>this.upNom(e)} ></input>
                    <p>Jour: </p>
                    <input type="text" className="inputAdmin" value = {this.state.jour} onChange={(e)=>this.upJour(e)} ></input>
                    <p>Mois : </p>
                    <input type="text" className="inputAdmin" value = {this.state.mois} onChange={(e)=>this.upMois(e)} ></input>
                    <p>Année : </p>
                    <input type="text" className="inputAdmin" value = {this.state.annee} onChange={(e)=>this.upAnnee(e)} ></input>
                    <p>Type : </p>
                    <div className="conteneur2">
                        <button className="boutonAdmin">Projet</button>
                        <button className="boutonAdmin">Devoir</button>
                        <button className="boutonAdmin">Examen</button>
                    </div>
                    <p>Description : </p>
                    <textarea className="inputAdmin2" value = {this.state.description} onChange={(e)=>this.updescription(e)}></textarea>
                    
                </div>
                <div className="footerBas">
                </div>
                
            </div>
        );
    }
}

export default Page_Admin;