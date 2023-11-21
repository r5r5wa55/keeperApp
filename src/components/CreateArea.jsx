import React, { useState } from "react";

function CreateArea(props) {

  const [contact,setNametext] = useState({
    title:"",
    content:""
  });
  
  function showText(event){
    const { name, value } = event.target;

    
    setNametext(prevValue => {
      return {
        ...prevValue,
        [name]: value
      };    });
  }

  return (
    <div>
      <form>
        <input name="title" placeholder="Title" onChange={showText} value={contact.title}/>
        <textarea name="content" placeholder="Take a note..." rows="3"  onChange={showText} value={contact.content}/>
        <button onClick={(event)=>{
          event.preventDefault();
          props.onChange(contact);
          setNametext({
            title:"",
            content:""
          });
        
            // addInput
        }}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
