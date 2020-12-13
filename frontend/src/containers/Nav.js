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
            <div className = "nav">
                <div className="element">
                    ダスボド
                </div>
                <div className="element">
                    <button className="bouton" onClick={this.props.changer}>{this.afficherBouton(this.props.etat)}</button>
                </div>                 
            </div>
         );
    }
}

export default Nav;