import React from 'react';

class Widget3 extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            
            trendArt : require('./donnees/topartist.json'),
            trendTitle : require('./donnees/toptitres.json')
        }
    }

    render()
    {
        return(
            <div class="Widget">
                <center><h1>LastFM - Tendances</h1></center>
                <hr></hr>
                <div class="divWidget">
                    <div class="subDiv50 bordureD">
                        <center><h2>Artistes du moment</h2></center>
                        <h4>1 : {this.state.trendArt.artists.artist[0].name} </h4>
                        <p>{this.state.trendArt.artists.artist[0].playcount} écoutes</p>
                        <h4>2 : {this.state.trendArt.artists.artist[1].name} </h4>
                        <p>{this.state.trendArt.artists.artist[1].playcount} écoutes</p>
                        <h4>3 : {this.state.trendArt.artists.artist[2].name} </h4>
                        <p>{this.state.trendArt.artists.artist[2].playcount} écoutes</p>
                        <h4>4 : {this.state.trendArt.artists.artist[3].name} </h4>
                        <p>{this.state.trendArt.artists.artist[3].playcount} écoutes</p>
                        <h4>5 : {this.state.trendArt.artists.artist[4].name} </h4>
                        <p>{this.state.trendArt.artists.artist[4].playcount} écoutes</p>
                    </div>
                    <div class="subDiv50">
                        <center><h2>Titres du moment</h2></center>
                        <h4>1 : {this.state.trendTitle.tracks.track[0].name} de {this.state.trendTitle.tracks.track[0].artist.name} </h4>
                        <p>{this.state.trendTitle.tracks.track[0].playcount} écoutes</p>
                        <h4>2 : {this.state.trendTitle.tracks.track[1].name} de {this.state.trendTitle.tracks.track[1].artist.name} </h4>
                        <p>{this.state.trendTitle.tracks.track[1].playcount} écoutes</p>
                        <h4>3 : {this.state.trendTitle.tracks.track[2].name} de {this.state.trendTitle.tracks.track[2].artist.name} </h4>
                        <p>{this.state.trendTitle.tracks.track[2].playcount} écoutes</p>
                        <h4>4 : {this.state.trendTitle.tracks.track[3].name} de {this.state.trendTitle.tracks.track[3].artist.name} </h4>
                        <p>{this.state.trendTitle.tracks.track[3].playcount} écoutes</p>
                        <h4>5 : {this.state.trendTitle.tracks.track[4].name} de {this.state.trendTitle.tracks.track[4].artist.name} </h4>
                        <p>{this.state.trendTitle.tracks.track[4].playcount} écoutes</p>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Widget3;