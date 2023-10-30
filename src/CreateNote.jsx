import React, { useState } from "react";
import './index.css';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

//Creating a create note component
const CreateNote =(props)=>{
    //State to expand Component on click making it as default
    const [expand,setexpand]=useState(false);  

    //updating note having title and content 
    const [note,setnote]=useState({
        title:'',
        content:'',
    });

// entering element by clicking on it.
const Inputevent=(event)=>{
    //const value=event.target.value;
    //const name=event.target.name;

    //getting ele by updating input field  by name and value.
    const {name,value}=event.target;
    // updating note having preval and new val as array
    setnote((preval)=>{
        return {
            ...preval,
            [name]:value,
        };
    });
    console.log(note);
};

// when clicked on plus button  as the  function is passed it is stating that what to be added 
const addEvent=()=>{
    props.passNote(note);
    //  After adding refreshing the input field.
    setnote( {title:'',
    content:'',}
);
};

const expandele=()=>{
    setexpand(true);
}
 
    return(
        <>
        <div className="main_note">
            <form className="form">
                {expand?
                <input type="text" 
                placeholder="Title" 
                onChange={Inputevent}
                name='title'
                 value={note.title}
                autoComplete="off"
                />:null}
                <textarea 
                placeholder="Write your notes here..." 
                onChange={Inputevent}
                 name="content" 
                 onClick={expandele}
                 value={note.content}/>
               {expand?
               <Button className="MuiButton-root" onClick={addEvent} >

                <AddIcon className="plus-sign"/>
               
               </Button>:null
                }
           </form>
        </div>

    
          </>
    );
}
export default CreateNote;