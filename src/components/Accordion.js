import React from "react";
import { questionlist } from "./api.js";
import MyAccordion from './MyAccordion.js';
import './Accordion.css';

const Accordion=()=>{
    return(<>
        <h1>Accordion In React</h1>

    <section>

        { questionlist.map((curele)=>{
            const {id}=curele;
                    return <MyAccordion key={id} {...curele}/>

        }
        )
        }
    </section>
    </>);
}
export default Accordion;