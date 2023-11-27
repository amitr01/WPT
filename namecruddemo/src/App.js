import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NameList from './components/NameList';
import NameForm  from './components/NameForm';
import { useState } from 'react';

function App() {
  const[names,setnames]=useState(['Rajan','Revati','Atharva']);
  const addnameinarr=(nm)=>{
    //add nm in to new array and set that array to names
      setnames([...names,nm]);
  }
  const removename=(name)=>{
             let newarr=names.filter(nm=>nm!==name);
             setnames(newarr);
  }
  return (
 //create a array as state to store names of friends
     <div>
      <NameList namearr={names}></NameList>
      <NameForm insertname={addnameinarr} deletename={removename}></NameForm>
     </div>
 
  );
}

export default App;
