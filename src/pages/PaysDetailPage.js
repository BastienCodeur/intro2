import React from 'react';
import Titre from "../composants/Titre";

const PaysDetailPage = (props) => {
    console.log(props);



    const nomPays = props.match.params.nom;
    return(
        <>
        <Titre valeur="Infos pays" />
        <p>{nomPays}</p>
            </>
    );
}

export default PaysDetailPage;