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

  function deleteNote(id){
    setFullText(perVe=>{
      return perVe.filter((items,index)=>{
        return index !== id
      })
    })
  }

  return (
    <div>
      <Header />
      <CreateArea onChange={addInput}/>
      {fullText.map((note,index)=>{
        return  <Note 
        key={index}
        id={index}
        title={note.title}
        content={note.content} 
        onDelete={deleteNote}/>
      })}
     
      <Footer />
    </div>
  );
}

export default App;
