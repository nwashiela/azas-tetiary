// import { useRouteMatch } from "react-router-dom";
import React, { useState, useEffect } from "react";
// import institutionDetails from "../component/Api/institutionDetail";
// import axios from "axios";
import { useParams } from "react-router-dom";
import app from "../component/Api/app";
import cms from "../component/Api/cms";

// function Navigate() {
//   const { id, name } = useParams();
//     const {
//       params: { id },
//     } = useRouteMatch("/componentURL/:id");

//   console.log(id);
//   return (
//     <div>
//       <h1>{id}</h1>
//       <h1>{name}</h1>
//     </div>
//   );
// }
// export default Navigate;

// const Navigate = ({ match }) => {
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     getInstitutionDetails();
//   });
//   const GET_ONE_INSTITUTION_QUERY = `
//   {
//     institutions(where: {
//       id: ${match.params.id}
//     }){
//         website
//         province
//         location{
//           latitude
//           longitude
//         }
//         photo {
//           url
//         }
//         name
//         classification
//       }
//   }`;
//   const getInstitutionDetails = () => {
//     axios
//       .get(
//         "https://api-eu-central-1.graphcms.com/v2/cko2rdehh09fg01yz05vz5eo2/master",
//         { query: GET_ONE_INSTITUTION_QUERY }
//       )
//       .then((res) => {
//         setData(res.data);
//         console.log(res.data);
//       })
//       .catch((err) => console.log(err));
//   };

//   return (
//     <div>
//       {data.map((item) => {
//         return (
//           <div className="product-container" key={item.id}>
//             <div>
//               <img
//                 className="prod-image"
//                 src={item.photo.url}
//                 alt="isithombe"
//               />
//             </div>
//             <div>
//               <h1 className="brand">{item.name}</h1>
//               <h2>{item.province}</h2>
//               <p>{item.website}</p>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };
// export default Navigate;
function Details({ match }) {
  const { id } = useParams();
  const [institutions, setInstitutions] = useState([]);
console.log(institutions)
  const checkAndSync = async () => {
    if (app.checkIfCanSync()) {
      const response = await cms.getAllInstitutions();
      setInstitutions(response);
      return;
    }
    const response = JSON.parse(window.localStorage.getItem("institutions"));
    
    const det = response.find((x) => x.id === `${id}`);
    setInstitutions(det);
 
  };
  useEffect(() => checkAndSync());

  return (
    <div>

      <h1>{institutions.name}</h1>
      <h3>{institutions.province}</h3>
      <h5>{institutions.website}</h5>
      <h6>{institutions.id}</h6>
      <h6>{institutions.classification}</h6>
      <img src={institutions.photo.url}></img>
    </div>
  );
}
export default Details;
