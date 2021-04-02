import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from "./composants/NavBar";
import AcceuilPage from "./pages/AccueilPage";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import PaysPage from "./pages/PaysPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import PaysDetailPage from "./pages/PaysDetailPage";

function App() {


    return (
        <BrowserRouter>
        <NavBar/>

        <div className="container pt-3">
            <Switch>
                <Route exact path="/" component={AcceuilPage}/>
                <Route exact path="/pays" component={PaysPage}/>
                <Route exact path="/pays/:nom" component={PaysDetailPage}/>
                <Route exact path="/contact" component={ContactPage}/>
                <Route exact path="/about" component={AboutPage}/>

                <Route></Route>
                <Route></Route>

            </Switch>



        </div>
        </BrowserRouter>

    );
}

class Ap extends React.Component {



    state = {
        clients: [
            {id: 1, nom:"Lior Chabla"},
            {id: 2, nom:"Paul Jour"},
            {id: 3, nom:"Emma carena"},
        ],

        nouveauClient : ''


    };

    handleDelete = (id) => {
        const clients = this.state.clients.slice();
        const index = clients.findIndex(function (client) {
            return  client.id === id

        });
        clients.splice(index, 1);

        this.setState({clients : clients});
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const id = new Date().getTime();
        const nom = this.state.nouveauClient;

        const client = {id : id, nom : nom};

        const clients = [...this.state.clients];
        clients.push({id : id, nom : nom});

        this.setState({clients, nouveauClient : ''});

    }

    handleChange = (event) => {

        this.setState({nouveauClient : event.currentTarget.value});

        console.log(event.currentTarget.value);

    }


    render() {
        const title = "Liste des clients"

        return(
        <div>
            <h1> {title}</h1>


            <ul>
                { this.state.clients.map( (client) =>
                <li>{client.nom} <button onClick={() => this.handleDelete(client.id)}></button></li>

                )}

            </ul>



        </div>
    )
    }
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


