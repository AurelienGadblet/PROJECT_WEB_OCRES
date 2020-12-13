import React from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';
import axios from 'axios';

class Widget4 extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            monnaies : undefined,
          }
    }

    getvalues()
    {
        axios.get(`https://api.exchangeratesapi.io/latest`)
        .then(res => {
          const resultat = res.data;
          this.setState({ monnaies: resultat});
        });
    }

    componentDidMount()
    {
      this.getvalues();
    }

    render=()=>
    {
        let data;
        !!this.state.monnaies && (data = [
            {
              name: 'AUD', valeur: this.state.monnaies.rates.CAD,
            },
            {
              name: 'USD', valeur: this.state.monnaies.rates.USD,
            },
            {
              name: 'GBP', valeur: this.state.monnaies.rates.GBP,
            },
            {
              name: 'CHF', valeur: this.state.monnaies.rates.CHF,
            },
            {
              name: 'CNY', valeur: this.state.monnaies.rates.CNY,
            },
          ]);

        return(

            <div className="Widget">
                <center><button onClick={()=>this.getvalues()} className ="btnRefresh"><h1>Parité des Devises :</h1></button></center>
                <hr></hr>
                <center>
                    <h2>Monnaie de référence : Euro</h2>
                    <div>
                      <BarChart width={300} height={200} data={data} margin={{top: 5, right: 0, left: 0, bottom: 5,}}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          <Bar dataKey="valeur" fill="#D64933" />
                      </BarChart>
                    </div> 
                    
                </center>
            </div>
        );
    }
}

export default Widget4;