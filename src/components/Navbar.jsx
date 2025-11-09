import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import TextPressure from './TextPressure';
import { delay } from 'motion';

const Navbar = ({ func, refs }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleNavClick = (ref) => {
        func(ref);
        setIsOpen(false);
    };

    const menuVariants = {
        closed: {
            x: '100%',
            transition: {
                type: 'spring',
                stiffness: 400,
                damping: 40,
            },
            
        },
        open: {
            x: 0,
            transition: {
                type: 'spring',
                stiffness: 400,
                damping: 40
            }
        }
    };

    const menuItemVariants = {
        closed: { x: 50, opacity:0},
        open: (i) => ({
            x: 0,
            opacity:1,
            transition: {
                delay: i * 0.1,
                duration: 0.4,
                ease: [0.4, 0, 0.2, 1]
            }
        })
    };

    const overlayVariants = {
        closed: { opacity: 0 },
        open: { opacity: 1 }
    };

    return (
        <>
            <div className='flex items-center z-60 h-[10vh] fixed font-fira text-[#F8F4E3] bg-[#0b0e11] w-full top-0 justify-between px-[5%] py-6 border-b'>
                <motion.div 
                    initial={{ x: '-40vw', filter: 'blur(10px)' }} 
                    animate={{ x: '0', filter: 'blur(0px)' }} 
                    transition={{ duration: 0.7, delay: 0.2, type: 'spring' }} 
                    onClick={() => handleNavClick(refs.homeRef)} 
                    className='cursor-pointer'
                >
                    <TextPressure
                        text="SAYEED"
                        flex={true}
                        alpha={false}
                        stroke={true}
                        width={true}
                        weight={true}
                        italic={false}
                        textColor="#F8F4E3"
                        strokeColor="#fff"
                        minFontSize={42}
                    />
                </motion.div>

                <motion.div 
                    initial={{ x: '40vw', filter: 'blur(10px)' }} 
                    animate={{ x: '0', filter: 'blur(0px)' }} 
                    transition={{ duration: 0.7, delay: 0.2, type: 'spring' }} 
                    className='lg:flex items-center justify-center  text-2xl gap-x-5 hidden'
                >
                    <div className='group cursor-pointer'>
                        <motion.a onClick={() => func(refs.homeRef)}>Home</motion.a>
                        <div className={`w-0 duration-300 group-hover:w-full transition-all bg-[#F8F4E3] h-[0.1rem]`}></div>
                    </div>
                    <div onClick={() => func(refs.aboutRef)} className='group cursor-pointer'>
                        <a>About</a>
                        <div className={`w-0 duration-300 group-hover:w-full transition-all bg-[#F8F4E3] h-[0.1rem]`}></div>
                    </div>
                    <div onClick={() => func(refs.projectsRef)} className='group cursor-pointer'>
                        <a>Projects</a>
                        <div className={`w-0 duration-300 group-hover:w-full transition-all bg-[#F8F4E3] h-[0.1rem]`}></div>
                    </div>
                    <div onClick={() => func(refs.contactRef)} className='group cursor-pointer'>
                        <a>Contact</a>
                        <div className={`w-0 duration-300 group-hover:w-full transition-all bg-[#F8F4E3] h-[0.1rem]`}></div>
                    </div>
                </motion.div>

                <motion.button
                    initial={{ x: '40vw', filter: 'blur(10px)' }}
                    animate={{ x: '0', filter: 'blur(0px)' }}
                    transition={{ duration: 0.7, delay: 0.2, type: 'spring' }}
                    onClick={toggleMenu}
                    className='lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 z-70'
                    aria-label="Toggle menu"
                >
                    <motion.span
                        animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className='w-7 h-0.5 bg-[#F8F4E3] rounded-full'
                    />
                    <motion.span
                        animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className='w-7 h-0.5 bg-[#F8F4E3] rounded-full'
                    />
                    <motion.span
                        animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className='w-7 h-0.5 bg-[#F8F4E3] rounded-full'
                    />
                </motion.button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            variants={overlayVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            onClick={toggleMenu}
                            className='fixed inset-0  bg-black/60 backdrop-blur-sm z-30 lg:hidden'
                        />
                        <motion.div
                            variants={menuVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            className='fixed top-0 right-0 h-full w-[70%] sm:w-[50%] md:w-[40%] bg-[#0b0e11] border-l border-[#F8F4E3]/20 z-30 lg:hidden flex flex-col items-start justify-center px-10 gap-8'
                        >
                            {['Home', 'About', 'Projects', 'Contact'].map((item, index) => (
                                <motion.div
                                    key={item}
                                    custom={index}
                                    variants={menuItemVariants}
                                    initial="closed"
                                    animate="open"
                                    exit="closed"
                                    className='group  cursor-pointer'
                                    onClick={() => handleNavClick(refs[`${item.toLowerCase()}Ref`])}
                                >
                                    <motion.a 
                                        className='font-outfit  text-3xl sm:text-4xl text-[#F8F4E3]'
                                        whileHover={{ x: 10 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {item}
                                    </motion.a>
                                    <div className={`w-0 duration-300 group-hover:w-full transition-all bg-[#F8F4E3] h-[0.15rem] mt-2`}></div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;