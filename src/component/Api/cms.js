import axios from "axios";
const GET_ALL_INSTITUTIONS_QUERY = `
{
    institutions {
      id
      website
      province
      location{
        latitude
        longitude
      }
      photo {
        url
      }
      name
      classification
    }
  }
  `;
const getAllInstitutions = async () => {
  const {
    data: {
      data: { institutions },
    },
  } = await axios.post(
    "https://api-eu-central-1.graphcms.com/v2/cko2rdehh09fg01yz05vz5eo2/master",
    { query: GET_ALL_INSTITUTIONS_QUERY }
  );
 console.log(institutions)
  window.localStorage.setItem('institutions', JSON.stringify(institutions));
  return institutions;
};
const cms = {
    getAllInstitutions

}
export default  cms
