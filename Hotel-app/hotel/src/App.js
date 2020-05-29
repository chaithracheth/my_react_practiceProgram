import React,{useEffect ,useState} from 'react';
import List from './list';
import './App.css';



const App= ()=>{



  const [info,setInfo]=useState([]);
  const [search,setSearch]=useState("");
  const [query,setQuery]=useState(search);

console.log(info);
useEffect(() =>
{
 getRecipes();


},[query]);
const getRecipes=async () =>
{
 
  const response = await fetch(`https://api.imgflip.com/get_memes`);
  const data = await response.json();
  setInfo(data.data.memes);
  
}
const updateSearch=(e)=>
{
  setSearch(e.target.value);
  console.log(search);
  
}
const getSearch =(e) =>
{
  console.log("onsubmit")
  e.preventDefault();
  setQuery(search);
  console.log(search);
  console.log(query);
  setSearch('');
}

const ListView=(query)=>(
  <div>
    {info.map(info =>(
      <h1>{info.id === query ? "hello" : "nooo"}</h1>
     
    ))}
  </div>
)

  return (
    <div className="App">
      <form  onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button className="search-button"  
        type="submit">search</button>
      </form>
     {info.map(info => (
       <List id={info.id} name={info.name} url={info.url}/>
     ))}
     < ListView />
        
    </div>
  );

  }
export default App;
