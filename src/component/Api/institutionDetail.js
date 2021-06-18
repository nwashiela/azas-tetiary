import axios from "axios";
const GET_ONE_INSTITUTION_QUERY = `
{
    institutions(where: {
      id: "cko2s5u740iwd0b6280pz2g0n"
    }){
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
const getInstitutionDetails = async () => {
  const {
    data: {
      data: { institution },
    },
  } = await axios.get(
    "https://api-eu-central-1.graphcms.com/v2/cko2rdehh09fg01yz05vz5eo2/master",
    { query: GET_ONE_INSTITUTION_QUERY }
  );
 console.log(institution)
  window.localStorage.setItem('institution', JSON.stringify(institution));
  return institution;
};
const institutionDetails = {
    getInstitutionDetails
}
export default  institutionDetails
