import React, { useState } from "react";

const MyAccordion=({question,answer})=>{
    const [state,setstate]=useState(false);
   
   
    return(
        <>

        <section className="main-div">
                <div className="main-heading">
                <p onClick={()=>setstate(!state)}>{state ?'-':'+'}</p>
            <h3>{question}</h3>

                </div>{
                    state &&
                
                <p className="answers">{answer}</p>
}

            
                </section>
        </>
    );

}
export default MyAccordion;