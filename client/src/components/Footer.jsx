import React from "react";
import { useState } from "react";
import Modal from "./Modal";

export default function Footer() {
    const [modal, setModal] = useState(false);
    const rules =["1: You will be given 4 words", "2: Use the words in the rap", "3: Try to make the rap rhyme"];

    const renderRules = rules.map((rule, i) => {
        return (
            <div className="rules">{rule}</div>
        )
    });

    const toggle = () => {
        setModal(!modal);
    };

    return (
    <>
        <footer className="footer">
            <button className="rules neon-button" onClick={toggle}>
                ?
            </button>
        </footer>
        {modal &&  
            <Modal 
                toggle={toggle}
                heading="Rules"
                content={renderRules}
            /> 
        }
    </>
    );   
}