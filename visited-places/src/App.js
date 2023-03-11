import './App.css';
import React,{useState} from 'react';

import NavigationBar from './components/NavigationBar';
import Background from './components/Background';
import FormComp from './components/FormComp';
import Post from './components/Post';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
 let [array,setArray]= useState([])

 function handleChanges(a){
  setArray((d)=>d.concat(a))
  // console.log(array)
 }
  return (
    <div>
     <NavigationBar />
     <main>
    <Background />
    <FormComp sendData={handleChanges} />
    <Post arr={array}/>
     </main>
    </div>
  );
}

export default App;
