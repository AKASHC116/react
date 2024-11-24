// import Parent from "./components/paraent";
 
// const App = () => {
//   return (
//     <div className="App">
//       <Parent/>
//     </div>
//   );
// }

// export default App;


import DataTable from "./components/DataTable"
 export const App =() =>{
  const table1 = [
    {name: "vikas",designation:"Enginner"},  
    {name: "vihan",designation:"Dector"},  
    {name: "vilas",designation:"Pilot"},  
  ]
  const table2 = [
    {name: "vikas",designation:"Enginner"},  
    {name: "vihan",designation:"Dector"},  
    {name: "vilas",designation:"Pilot"},  
  ]
  return (
    <div className="App">
    <DataTable data={table1}/> <br></br>
    <DataTable data={table1}/> 
    </div>

  )
 }