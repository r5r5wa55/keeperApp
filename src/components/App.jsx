import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  
  
  const [fullText,setFullText]=useState([])

  function addInput(title){
  
    setFullText((e)=>{
      return [   ...e,
        title]
    })

  }

  return (
    <div>
      <Header />
      <CreateArea onChange={addInput}/>
      {fullText.map(note=>{
        return  <Note 
  
        title={note.title}
        content={note.content} />
      })}
     
      <Footer />
    </div>
  );
}

export default App;
