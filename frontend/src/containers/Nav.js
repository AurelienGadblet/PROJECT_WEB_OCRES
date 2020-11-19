import React from 'react';

class Nav extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    afficherBouton(etat)
    {
        if(etat==false)
            return "Afficher Dashboard";
        else
            return "Afficher Page Admin";
    }


    render()
    {
        return(
            <div class = "nav">
                <div class="element">
                    LOGO
                </div>
                <div class="conteneur2">
                    <p class="element">Recherche :</p>
                    <input type="search" class="barreRech"></input>  
                </div>
                <div class="element">
        <button class="bouton" onClick={this.props.changer}>{this.afficherBouton(this.props.etat)}</button>
                </div>                 
            </div>
         );
    }
}

export default Nav;