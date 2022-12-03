import React from "react";
import { motion, AnimatePresence } from 'framer-motion'
import "./Modal.css"

const backdrop = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
}

function Modal({ modalWinner }) {

    return (
        <AnimatePresence exitBeforeEnter>
            {modalWinner && (
                <motion.div className="backdrop"
                    variants={backdrop}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div className="modal">
                        <p>Winner</p>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
};

export default Modal;
