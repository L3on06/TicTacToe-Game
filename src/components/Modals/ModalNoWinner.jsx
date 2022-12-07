import React from "react";
import { motion, AnimatePresence } from 'framer-motion'
import "./Modal.css"
import PlayAgain from "../PlayAgainButton/PlayAgainButton"


const backdrop = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
}


const modal = {
    hidden: {
        y: "-100vh",
        opacity: 0
    },
    visible: {
        y: "200px",
        opacity: 1,
        transition: { duration: 1, ease: "easeOut" }
    }
}

function Modal({ modalNoWinner, PlayAgainButton }) {

    return (
        <AnimatePresence exitBeforeEnter>
            {modalNoWinner && (
                <motion.div className="backdrop"
                    variants={backdrop}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                >
                    <motion.div className="modal"
                        variants={modal}
                        initial="hidden"
                        animate="visible"
                    >
                        <p>No One Wins</p>
                        <PlayAgain PlayAgainButton={PlayAgainButton} />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
};

export default Modal;
