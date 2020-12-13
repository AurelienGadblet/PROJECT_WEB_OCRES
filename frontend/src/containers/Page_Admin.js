import React from 'react';
import PageAjout from '../components/PageAjout';
import PageModify from '../components/PageModify';
import PageDelete from '../components/PageDelete';

class Page_Admin extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
           ajout: false,
           modify: false,
           delete: false,
        }
    }

    chargerAjout = (e) => {
      this.setState({
        ajout: true,
        modify: false,
        delete: false
      });
    }
    chargerModify = (e) => {
      this.setState({
        ajout: false,
        modify: true,
        delete: false
      });
    }
    chargerDelete = (e) => {
      this.setState({
        ajout: false,
        modify: false,
        delete: true
      });
    }

    render()
    {
        return(
            <div className="center">
              <div className="typeDevoir">
                  <button className="boutonAdmin" onClick={(e)=>this.chargerAjout(e)}>Ajouter</button>
                  <button className="boutonAdmin" onClick={(e)=>this.chargerModify(e)}>Modifier</button>
                  <button className="boutonAdmin" onClick={(e)=>this.chargerDelete(e)}>Supprimer</button>
              </div>
              {this.state.ajout && (
                <PageAjout/>
              )}
              {this.state.modify && (
                <PageModify/>
              )}
              {this.state.delete && (
                <PageDelete/>
              )}
            </div>
        );
    }
}

export default Page_Admin;