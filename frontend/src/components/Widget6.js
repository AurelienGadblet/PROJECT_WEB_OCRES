import React from 'react';
import axios from 'axios';
import Item from './Item';

class Widget6 extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            liste : undefined,
        }
        
    }

    getDevoir()
    {
      axios.get(`http://localhost:3001/devoirs/liste/devoir`)
      .then(res => {
        const nvliste = res.data;
        this.setState({ liste: nvliste });
      });
    }
    
    getProjet()
    {
      axios.get(`http://localhost:3001/devoirs/liste/projet`)
      .then(res => {
        const nvliste = res.data;
        this.setState({ liste: nvliste });
      });
    }

    getExamen()
    {
      axios.get(`http://localhost:3001/devoirs/liste/examen`)
      .then(res => {
        const nvliste = res.data;
        this.setState({ liste: nvliste });
      });
    }

    affichage()
    {
        let liste = [];
        let taille;
        !!this.state.liste && (taille = this.state.liste.length);
        for(let i=0;i<taille;i++)
        {
            !!this.state.liste && (liste.push(<Item key ={i} data={this.state.liste[i]}/>));
        }
        return(<div>{liste}</div>);
    }

    componentDidMount()
    {
        this.getProjet();
    }

    render()
    {
        return(
            <div className="Widget">
                <center><h1>Tâches à réaliser</h1></center>
                <div className="divWidget wrap">
                    <button className ="btnRech2" onClick={()=>this.getDevoir()}>Devoirs</button>
                    <button className ="btnRech2" onClick={()=>this.getProjet()}>Projets</button>
                    <button className ="btnRech2" onClick={()=>this.getExamen()}>Examens</button>
                </div>
                <hr></hr>
                <div className="divWidget">
                    {this.affichage()}
                </div>
            </div>
        );
    }
}

export default Widget6;