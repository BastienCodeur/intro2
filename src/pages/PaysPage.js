import React, {useEffect, useState} from 'react';
import Titre from "../composants/Titre";
import axios from "axios";
import TableLoader from "../composants/loaders/TableLoader";
import {NavLink} from "react-router-dom";

const PaysPage = () => {

   const [lesPays, setLesPays] = useState([]);
   const [rechercheContinent, setRechercheContinent] = useState('');

   const [loading, setLoading] = useState(true);

   const handleChange = (event) => {
       const valeur = event.currentTarget.value;
       setRechercheContinent(valeur);
       console.log(rechercheContinent);
   }

   const lesPaysFiltres = lesPays.filter(p => {
       return p.region.toLowerCase().includes(rechercheContinent.toLowerCase())
   })



    //utiliser l'API afin de récuperer la liste de tous les pays.
    useEffect(() => {
        axios
            .get("https://restcountries.eu/rest/v2/all")
            .then(response => response.data)
            .then(data =>{
                setLesPays(data)
                setLoading(false)
            })

    }, []);


    return(
        <>
            <Titre valeur="Liste des pays" />
            <p>Nombre de pays <span className="badge badge-primary">{lesPays.length}</span></p>

            <div className="form-group">
                <input className="form-control" type="text" placeholder="Rechercher par continent " value={rechercheContinent} onChange={handleChange} />
            </div>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Nom</th>
                    <th scope="col">Capital</th>
                    <th scope="col">Population</th>
                    <th scope="col">Region</th>
                    <th scope="col">Action</th>

                </tr>
                </thead>
                { !loading &&
                <tbody>
                {lesPaysFiltres.map((p, index) => (
                    <tr key={index}>
                        <td>{index}</td>
                        <td> {p.name}</td>
                        <td> {p.capital}</td>
                        <td> {p.population.toLocaleString()}</td>
                        <td> {p.region}</td>
                        <td> <NavLink to={"/pays/" + p.name} className="btn btn-success">Voir plus</NavLink></td>
                    </tr>
                ))}

                </tbody>
                    }

            </table>
            { loading && <TableLoader/>}
        </>
    );
}

export default PaysPage;