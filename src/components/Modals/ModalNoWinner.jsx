import React from "react";
import { motion, AnimatePresence } from 'framer-motion'
import "./Modal.css"

const backdrop = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
}

function Modal({ modalNoWinner }) {

    return (
        <AnimatePresence exitBeforeEnter>
            {modalNoWinner && (
                <motion.div className="backdrop"
                    variants={backdrop}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div className="modal">
                        <p>No One Wins</p>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
};

export default Modal;
