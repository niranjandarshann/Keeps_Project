import React from "react";
import './index.css';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


const Note =(props)=>{
    
    const deleteitem=()=>{
        props.deleteclicked(props.id);

    };
    return(
        <>
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button className="btn" onClick={deleteitem}>
            <DeleteOutlineIcon className="deleteIcon"/>
            </button>
        </div>
        </>
    );
}
export default Note;