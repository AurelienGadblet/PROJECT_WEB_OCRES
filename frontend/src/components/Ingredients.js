import React from 'react';

class Ingredients extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
            <p>
                - {this.props.text}
            </p>
        );
    }
}

export default Ingredients;