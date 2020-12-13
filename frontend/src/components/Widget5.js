import React from 'react';
import Ingredients from './Ingredients';
import axios from 'axios';

class Widget5 extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            recettes: undefined,
            igt1: 'apples',
            igt2: 'egg',
        }
    }
    termeRecherche1(e)
    {
      this.setState({igt1: e.target.value})
    }
    termeRecherche2(e)
    {
      this.setState({igt2: e.target.value})
    }
    termeRecherche3(e)
    {
      this.setState({igt3: e.target.value})
    }

    getRecette()
    {
      axios.get(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${this.state.igt1},+${this.state.igt2}&number=2&apiKey=0dd0f2c6ba784c4fa54fb1f70cc3f1d0`)
      .then(res => {
        const nvRecette = res.data;
        this.setState({ recettes: nvRecette });
      })
    }

    afficherIngredients(a)
    {
        let liste = [];
        for(let i = 0; i<this.state.recettes[a].usedIngredientCount;i++)
        {
            liste.push(<Ingredients key ={2000+i} text={this.state.recettes[a].usedIngredients[i].original}/>);
        }
        for(let i = 0; i<this.state.recettes[a].missedIngredientCount;i++)
        {
            liste.push(<Ingredients key ={i} text={this.state.recettes[a].missedIngredients[i].original}/>);
        }
        return (<div>{liste}</div>);
    }

    componentDidMount()
    {
      this.getRecette();
    }

    render=()=>
    {
        return(
            <div className="Widget">
                <center><h1>Idées de recettes</h1></center>
                <div className="divWidget">
                    <input type="text" className="barreRech2" value = {this.state.igt1} onChange={(e)=>this.termeRecherche1(e)} ></input>
                    <input type="text" className="barreRech2" value = {this.state.igt2} onChange={(e)=>this.termeRecherche2(e)} ></input>
                    <button className ="btnRech2" onClick={()=>this.getRecette()}>Rechercher</button>
                </div>
                <hr></hr>
                <div className="divWidget">
                    <h2>Recette 1</h2>
                </div>
                <div className="divWidget">
                    <div className="subDiv50 bordureD">
                        {!!this.state.recettes && (<>
                            <center><h3>{this.state.recettes[0].title}</h3>
                            <img src={this.state.recettes[0].image} className="imgRecette"></img></center>
                        </>)}
                    </div>
                    <div className="subDiv50">
                        <center><h3>Liste des ingrédients</h3></center>
                        {!!this.state.recettes && (<>
                        {this.afficherIngredients(0)}
                        </>)}
                    </div>
                </div>
                <hr></hr>
                <div className="divWidget">
                    <h2>Recette 2</h2>
                </div>
                <div className="divWidget">
                    <div className="subDiv50 bordureD">
                        {!!this.state.recettes && (<>
                            <center><h3>{this.state.recettes[1].title}</h3>
                            <img src={this.state.recettes[1].image} className="imgRecette"></img></center>
                        </>)}
                    </div>
                    <div className="subDiv50">
                        <center><h3>Liste des ingrédients</h3></center>
                        {!!this.state.recettes && (<>
                            {this.afficherIngredients(1)}
                        </>)}    
                    </div>
                </div>
            </div>
        );
    }
}

export default Widget5;