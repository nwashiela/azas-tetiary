import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/App';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// const reducer = (state, action) => {
//   if (action.type === "SEARCH_VALUE") {
//     return {
//       ...state,
//       searchInstitution: action.payload,
//     };
//   }
//   if (action.type === "INSTITUTION_DATA") {
//     return {
//       ...state,
//       instdata: action.payload,
//     };
//   }
// };

// const theState = {
//   instdata: [],
//   searchInstitution: "",
// };

// const Universities = () => {
//   const [state, dispatch] = useReducer(reducer, theState);

//   const checkAndSync = async () => {
//     if (app.checkIfCanSync()) {
//       const response = await cms.getAllInstitutions();
//       setInstitutions(response);
//       return;
//     }
//     const response = JSON.parse(window.localStorage.getItem("institutions"));
//     setInstitutions(response);
//     console.log(institutions);
//     dispatch({ type: "INSTITUTION_DATA", payload: response });
//   };

//   useEffect(() => checkAndSync(), []);

//   const handleSearch = ({ target }) => {
//     const { value } = target;
//     dispatch({ type: "SEARCH_VALUE", payload: value });
//   };
//   const fuse = new Fuse(state.instdata, {
//     keys: ["name", "description"],
//     minMatchCharLenght: 3,
//   });
//   const result = fuse.search(State.searchInstitution)
//   const searchResult = state.searchInstitution.length < 3 ?  
// };
// export default Universities;
// function University() {

//   const [institutions, setInstitutions] = useState([]);
//   const checkAndSync = async () => {
//     if (app.checkIfCanSync()) {
//       const response = await cms.getAllInstitutions();
//       setInstitutions(response);
//       return;
//     }
//     const response = JSON.parse(window.localStorage.getItem("institutions"));
//     setInstitutions(response);
//     console.log(institutions);
//   };

//   useEffect(() => checkAndSync(), [checkAndSync]);

//   return (
//     <div>
//       <h1>
//         EASY APPLICATION
//       </h1>

//       {institutions.map(({ name, province, photo }) => (
//         <div display="flex" margin="1" width="10" height="10">
//              <Paper variant="outlined">
//              <img src={photo && photo.url} alt=""></img>
//           <h1>{name}</h1>
//           <h2>{province}</h2>
//              </Paper>

//         </div>
//       ))}
//     </div>
//   );
// }
// export default University;
// {
  /* <div style={{ width: 300 }}>
        <Autocomplete
          freeSolo
          id="free-solo-2-demo"
          disableClearable
          options={institutions.map((name) => name)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search input"
              margin="normal"
              variant="outlined"
              InputProps={{ ...params.InputProps, type: "search" }}
            />
          )}
        />
      </div> */
// }