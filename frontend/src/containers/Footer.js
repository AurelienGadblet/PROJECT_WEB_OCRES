import React from 'react';

class Footer extends React.Component
{
    constructor(props)
    {
        super(props);
    }


    render()
    {
        return(
            <div class = "footer">
                <center>
                    <p>
                        Copyright Aurélien GADBLET TD4A <br></br>
                        Projet WEB<br></br>
                        Pour plus d'informations sur le site WEB, contacter aurelien.gadblet@hotmail.fr<br></br>
                    </p>
                </center>     
            </div>
         );
    }
}

export default Footer;