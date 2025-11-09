import React from 'react';
import Noise from './Noise';
import { motion } from 'motion/react';

const Contact = ({ refs }) => {
    return (
        <div ref={refs} className='text-[#F8F4E3] z-20  flex min-h-screen pt-[10%] font-fira pb-10 px-[5%] sm:items-end items-center gap-y-12 justify-end sm:justify-end relative flex-col '>
            <motion.div initial={{ opacity: 0, filter: 'blur(10px)', y: -20 }} whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }} transition={{ type: 'spring', delay: 0.2, duration: 1 }} className='sm:absolute lg:top-[20%] top-[30%] left-[10%] text-center sm:text-start'>
                <p className='capitalize text-6xl font-semibold'>Contact me</p>
                <p className='uppercase text-2xl'>Let’s get in touch!</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }} whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }} transition={{ type: 'spring', delay: 0.2, duration: 1 }}  className='flex flex-col items-center justify-center gap-y-2'>
                <div className=''>
                    <motion.a     href='mailto:expsayeedshoirf@gmail.com' target='_blank'
                            className="relative wrap-break-word px-8  cursor-pointer font-fira text-2xl font-semibold text-[#F8F4E3] bg-transparent overflow-hidden"
                            whileHover="hover"
                            initial="initial"
                        >
                            <span className="relative z-10">expsayeedshoirf@gmail.com</span>

                            <motion.span
                                className="absolute bottom-0 cursor-pointer left-1/2 hidden sm:block h-0.5 bg-[#F8F4E3]"
                                variants={{
                                    initial: { width: '80%', x: '-50%' },
                                    hover: { width: 0, x: '-50%' }
                                }}
                                transition={{
                                    duration: 0.4,
                                    ease: [0.4, 0, 0.2, 1],
                                    type: "spring",
                                    stiffness: 120,
                                    damping: 20
                                }}
                            />
                        </motion.a>
                </div>
                <div>
                    <motion.a href='https://github.com/sayeed-dev-07' target='_blank'
                            className="relative px-3  cursor-pointer font-fira text-2xl font-semibold text-[#F8F4E3] bg-transparent overflow-hidden"
                            whileHover="hover"
                            initial="initial"
                        >
                            <span className="relative z-10">Github</span>

                            <motion.span
                                className="absolute bottom-0 cursor-pointer left-1/2 h-0.5 bg-[#F8F4E3]"
                                variants={{
                                    initial: { width: '80%', x: '-50%' },
                                    hover: { width: 0, x: '-50%' }
                                }}
                                transition={{
                                    duration: 0.4,
                                    ease: [0.4, 0, 0.2, 1],
                                    type: "spring",
                                    stiffness: 120,
                                    damping: 20
                                }}
                            />
                        </motion.a>
                        <motion.a href='https://www.linkedin.com/in/sayeed-shorif-68080234b/' target='_blank'
                            className="relative px-3  cursor-pointer font-fira text-2xl font-semibold text-[#F8F4E3] bg-transparent overflow-hidden"
                            whileHover="hover"
                            initial="initial"
                        >
                            <span className="relative z-10">LinkedIn</span>

                            <motion.span
                                className="absolute bottom-0 cursor-pointer left-1/2 h-0.5 bg-[#F8F4E3]"
                                variants={{
                                    initial: { width: '80%', x: '-50%' },
                                    hover: { width: 0, x: '-50%' }
                                }}
                                transition={{
                                    duration: 0.4,
                                    ease: [0.4, 0, 0.2, 1],
                                    type: "spring",
                                    stiffness: 120,
                                    damping: 20
                                }}
                            />
                        </motion.a>
                </div>
            </motion.div>
        </div>
    );
};

export default Contact;