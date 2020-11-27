import React from 'react';
import {BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,} from 'recharts';

class Widget4 extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            monnaies : require('./donnees/monnaies.json'),
          }
    }

    render()
    {

        const data = [
            {
              name: 'AUD', valeur: this.state.monnaies.quotes.USDAUD,
            },
            {
              name: 'EUR', valeur: this.state.monnaies.quotes.USDEUR,
            },
            {
              name: 'GBP', valeur: this.state.monnaies.quotes.USDGBP,
            },
            {
              name: 'CHF', valeur: this.state.monnaies.quotes.USDCHF,
            },
            {
              name: 'CNY', valeur: this.state.monnaies.quotes.USDCNY,
            },
          ];

        return(

            <div class="Widget">
                <center><h1>Parité des Devises :</h1></center>
                <hr></hr>
                <center>
                    <h2>Monnaie de référence : USD</h2>
                    <BarChart width={500} height={300} data={data} margin={{top: 5, right: 0, left: 0, bottom: 5,}}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="valeur" fill="#3aad9f" />
                    </BarChart>
                </center>
            </div>
        );
    }
}

export default Widget4;