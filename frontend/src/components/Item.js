import React from 'react';

class Item extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
            <div>
                <h2>{this.props.data.titre}</h2>
                <p>{this.props.data.type} à rendre le {this.props.data.date.jour} /{this.props.data.date.mois} /{this.props.data.date.annee}</p>
                <p>Matière : {this.props.data.matiere}</p>
                <p>Description : {this.props.data.description}</p>
            </div>
        );
    }
}

export default Item;