import react from 'react';

function Titre({valeur}) {
    console.log({valeur});
    return (
        <h1 className="border border-danger m-3 p-2 ">{valeur}</h1>
    )

}

export default Titre;