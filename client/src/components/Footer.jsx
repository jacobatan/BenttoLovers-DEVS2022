import React from "react";
import { useState } from "react";
import Modal from "./Modal";

export default function Footer() {
    const [modal, setModal] = useState(false);

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
        {modal && <Modal toggle={toggle} />}
    </>
    );   
}