import React from 'react';

class Widget2 extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            topTitle : require('./donnees/toptitresperso.json'),
            topArtist : require('./donnees/topartistperso.json'),
            utilisateur : require('./donnees/utilisateur.json')
        }
    }
    
    render()
    {
        return(
            <div class="Widget">
                <center><h1>LastFM - Personnel</h1></center>
                <div class="divWidget">
                    <p>Rechercher un utilisateur :</p>
                    <input type="search" class="barreRech"></input>
                </div>
                <hr></hr>
                <div class="divWidget">
                  <div class="subDiv30"><center>
                    <img src={this.state.utilisateur.user.image[2]["#text"]}></img>
                    <h1>{this.state.utilisateur.user.name}</h1>
                        <p>Nombre d'écoutes : {this.state.utilisateur.user.playcount}</p>
                  </center></div>

                  <div class="subDiv30 bordureDG">
                    <center><h2>Top 5 Titres :</h2></center>
                    <h4>- {this.state.topTitle.toptracks.track[0].name}</h4>
                    <p>{this.state.topTitle.toptracks.track[0].artist.name}<br></br>{this.state.topTitle.toptracks.track[0].playcount} écoutes</p>
                    <h4>- {this.state.topTitle.toptracks.track[1].name}</h4>
                    <p>{this.state.topTitle.toptracks.track[1].artist.name}<br></br>{this.state.topTitle.toptracks.track[1].playcount} écoutes</p>
                    <h4>- {this.state.topTitle.toptracks.track[2].name}</h4>
                    <p> {this.state.topTitle.toptracks.track[2].artist.name}<br></br>{this.state.topTitle.toptracks.track[2].playcount} écoutes</p>
                    <h4>- {this.state.topTitle.toptracks.track[3].name}</h4>
                    <p>{this.state.topTitle.toptracks.track[3].artist.name}<br></br>{this.state.topTitle.toptracks.track[3].playcount} écoutes</p>
                    <h4>- {this.state.topTitle.toptracks.track[4].name}</h4>
                    <p>{this.state.topTitle.toptracks.track[4].artist.name}<br></br>{this.state.topTitle.toptracks.track[4].playcount} écoutes</p>
                  </div>

                  <div class="subDiv30">
                      
                  <center><h2>Top 5 Artistes :</h2></center>
                    <h4>- {this.state.topArtist.topartists.artist[0].name}</h4>
                    <p>{this.state.topArtist.topartists.artist[0].playcount} écoutes</p>
                    <h4>- {this.state.topArtist.topartists.artist[1].name}</h4>
                    <p>{this.state.topArtist.topartists.artist[1].playcount} écoutes</p>
                    <h4>- {this.state.topArtist.topartists.artist[2].name}</h4>
                    <p>{this.state.topArtist.topartists.artist[2].playcount} écoutes</p>
                    <h4>- {this.state.topArtist.topartists.artist[3].name}</h4>
                    <p>{this.state.topArtist.topartists.artist[3].playcount} écoutes</p>
                    <h4>- {this.state.topArtist.topartists.artist[4].name}</h4>
                    <p>{this.state.topArtist.topartists.artist[4].playcount} écoutes</p>
                  </div>
                    
                </div>
            </div>
        );
    }
} 

export default Widget2;