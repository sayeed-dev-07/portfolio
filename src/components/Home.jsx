import React from 'react';
import { motion, stagger } from 'framer-motion'; // ✅ use framer-motion, not motion/react

const Home = () => {

    // Parent container variant
    const list = {
        visible: {
            opacity: 1,
            translateY:0,
            transition: {
                duration : 1,
                when: "beforeChildren",
                delayChildren: stagger(0.5)
            },
        },
        hidden: {
            opacity: 0,
            translateY: '-100vh',
            transition: {
                when: "afterChildren",
            },
        },
    }

    // Each child’s animation
    const item = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <motion.div
            style={{
                backgroundImage:
                    'radial-gradient(circle at 0.5px 0.5px, rgba(6,182,212,0.2) 0.5px, transparent 0)',
                backgroundSize: '8px 8px',
                backgroundRepeat: 'repeat',
            }}
            className="h-screen flex items-center justify-center bg-black border"
        >
            {/* 🧩 Parent container controls the stagger */}
            <motion.div
                variants={list}
                initial="hidden"
                animate="visible"
                
                className="flex text-2xl gap-x-3 text-white p-6 border shadow-2xl shadow-white"
            >
                <motion.p variants={item}>Im</motion.p>
                <motion.p variants={item}>Sayeed</motion.p>
                <motion.p variants={item}>Shorif</motion.p>
            </motion.div>
        </motion.div>
    );
};

export default Home;
