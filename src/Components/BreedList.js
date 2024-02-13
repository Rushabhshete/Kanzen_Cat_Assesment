import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function BreedList() {

    const [catlist, setCatlist] = useState([]);

    useEffect(() => {
        fetCatList();
    }, [])

    const fetCatList = async () => {
        try {
            const res = await axios.get('https://api.thecatapi.com/v1/breeds?limit=10&page=0');
            console.log(res);
            const data = await res.data;
            setCatlist(data);
        } catch (error) {
            console.error('data fetching error');
        }
    }


    return (
        <div>
            <ul>
                <table>
                    <thead>
                        <th>Breed Name</th>
                        <th>Breed Origin</th>
                    </thead>
                    <tbody>
                        {
                            catlist.map((val) => {
                                return <tr key={val.id} >
                                    <td>
                                        <Link to={`LIST/${val.id}`}>{val.name}</Link></td>
                                    <td> <Link to={`LIST/${val.id}`}>{val.origin}</Link></td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>

            </ul>
        </div>
    )
}

export default BreedList


// import axios from 'axios';
// import React, { useEffect, useState } from 'react';

// function CatBreedList() {

//     const [catlist, setCatlist] = useState([]);

//     useEffect(() => {
//         fetCatList();
//     }, [])

//     const fetCatList = async () => {
//         const res = await axios.get('https://api.thecatapi.com/v1/breeds?limit=10&page=0');
//         console.log(res);
//         const data = await res.data;
//         setCatlist(data);
//     }
//     return (
//         <div>
//             {/* <ul>
//                 <table>
//                     <thead>
//                         <th>Breed Name</th>
//                         <th>Breed Origin</th>
//                     </thead>
//                     <tbody>
//                         {
//                             catlist.map((breed) => {
//                                 return <tr key={breed.id} >
//                                     <td>{breed.name}</td>
//                                     <td>{breed.origin}</td>
//                                 </tr>
//                             })
//                         }
//                     </tbody>
//                 </table>

//             </ul> */}

// <div>
//       <h1>Cat Breed List</h1>
//       <ul>
//         {catlist.map(breed => (
//           <li key={breed.id}>
            
//               {breed.name} - {breed.origin}
//                    </li>
//         ))}
//       </ul>
//     </div>



//         </div>
//     )
// }

// export default CatBreedList