import React from "react";
import { motion, AnimatePresence } from 'framer-motion'
import "./Modal.css"
import PlayAgain from "../PlayAgainButton/PlayAgainButton"


const backdrop = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
}

function Modal({ modalWinner, showWinner, PlayAgainButton }) {

    return (
        <AnimatePresence exitBeforeEnter>
            {modalWinner && (
                <motion.div className="backdrop"
                    variants={backdrop}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div className="modal">
                        <p>The {showWinner} Player Wins</p>
                        <PlayAgain PlayAgainButton={PlayAgainButton} />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
};

export default Modal;
