import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function CatBreedDetails({ match }) {

    const [imgDetails, setImgdetails] = useState([]);

    useEffect(() => {
        fetDetails();
    }, [])

    const fetDetails = async () => {
        try {
           
            const res = await axios.get('https://api.thecatapi.com/v1/breeds?limit=10&page=0')
            console.log(res);
            const data = await res.data;
            setImgdetails(data);
        } catch (error) {
            console.error('data fetching error');
        }
    }

    return (
        <div>
            {
                imgDetails.map((details) => {
                    return <div>
                        <h1>{details.name}</h1>
                        <p>{details.origin}</p>
                        <p>{details.origin}</p>
                        <p>{details.weight.metric}</p>
                        <p>{details.hairless}</p>
                        <p><a href={details.wikipedia_url} >Wikipedia</a></p>
                        
                    </div>

                })
            }
            
        </div>
    )
}

export default CatBreedDetails



// // BreedListPage.js
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// const CatBreedDetails=()=>{
// const [breeds, setBreeds] = useState([])

//   useEffect(() => {
//     axios.get('https://api.thecatapi.com/v1/breeds?limit=10&page=0')
//       .then(response => setBreeds(response.data))
//       .catch(error => console.error('Error fetching breeds:', error));
//   }, []);

//   return (
//     <div>
//       <h1>Cat Breed List</h1>
//       <ul>
//         {breeds.map(breed => (
//           <li key={breed.id}>
//             <Link to={`/breeds/${breed.id}`}>
//               {breed.name}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default CatBreedDetails;
