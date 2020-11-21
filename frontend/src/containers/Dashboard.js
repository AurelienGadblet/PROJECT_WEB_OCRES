import React from 'react';
import Widget1 from '../components/Widget1';
import Widget2 from '../components/Widget2';
import Widget3 from '../components/Widget3';
import Widget4 from '../components/Widget4';
import Widget5 from '../components/Widget5';
import Widget6 from '../components/Widget6';

class Dashboard extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
            <div class= "center">
                <Widget1/>
                <Widget2/>
                <Widget3/>
                <Widget4/>
            </div>
        );
    }
}

export default Dashboard;