import React, { useState } from "react";
import './index.css';
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";

const App =()=>{

    //To add element in it we need to use the State of the function.
    const [addItem,setaddItem]=useState([]);
//passing the new element .
    const addNote=(note)=>{
        //Updating it with previous node
        setaddItem((prevdata)=>{
            // adding new element in the array.
            return [...prevdata, note];
        });
        console.log(note);
    };
    
//It is callback function which is called when delete button is clicked  It will take the id of the component. to be deleted as parameter

    const onDelete = (id)=>{
//Here we will  check the element present in the array.
        setaddItem((olddata)=>
        // Now we  filter element according to the index value not having passed id .and returning it.
        olddata.filter((val,index)=>{
            return index!==id;
        })
        )
    };
    return(
        <>
        {/* Header compoenent to include header  */}
        <Header/>

        {/* Writing for main keeps where title and description is having to be added 
        Here to pass the function defined here inside the CreateNote Components..... argument passed */}
        <CreateNote passNote={addNote}/>

        {/* Rendering array having the list of data in <it styleName="
        Map function always having 4 parameter (curval,index,array,thisarray).
        "></it> */}
        {
            addItem.map((curval,index)=>{


                return (
                    // Note component where we can access each array element in the frame of Note defined 
                    // Here we passed a function parameter deleteclicked to delete the component when clicked.
                    <Note key={index}
                      id={index}
                      title={curval.title}
                      content={curval.content}
                      deleteclicked={onDelete}/>);
   
            })
        }

        {/* Footer component to include footer  */}
        <Footer/>
        </>
    );
}
export default App;