import React from 'react';
import { motion } from 'motion/react';
const Card = ({ data }) => {
    return (
        <div className='font-fira  text-[#F8F4E3] sm:p-5'>
            <div className='flex flex-col gap-y-5'>
                <motion.div className='flex flex-col gap-y-3' initial={{ filter: 'grayscale(100%)', scale: 1 }} whileHover={{ filter: 'grayscale(0%)', scale: 1.02 }} transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 10, duration: 0.2
                }}>
                    <div className=''>
                        <motion.img src={data.img} alt={data.name} />
                    </div>
                    <div>
                        <p className='font-semibold text-2xl'>{data.name}</p>
                        <p className='italic font-light text-[#f8f4e3d1]'>{String(data.tech)}</p>
                    </div>
                </motion.div>
                <div className='flex flex-col gap-y-3'>

                    <div>
                        <p className='text-[#f8f4e3b5]'>{data.des}</p>
                    </div>
                    <div className='flex items-center italic justify-between'>
                        <motion.a href={data.live} target='_blank'
                            className="relative px-8 py-4 cursor-pointer font-fira text-2xl font-semibold text-[#F8F4E3] bg-transparent overflow-hidden"
                            whileHover="hover"
                            initial="initial"
                        >
                            <span className="relative z-10">Live</span>

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

                        <motion.a href={data.code} target='_blank'
                            className="relative px-8 py-4 font-fira text-2xl font-semibold text-[#F8F4E3] bg-transparent cursor-pointer overflow-hidden"
                            whileHover="hover"
                            initial="initial"
                        >
                            <span className="relative z-10">Code</span>

                            <motion.span
                                className="absolute bottom-0 left-1/2 h-0.5 bg-[#F8F4E3]"
                                variants={{
                                    initial: { width: '80%', x: '-50%' },
                                    hover: { width: '0', x: '-50%' }
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
                </div>
            </div>
        </div>
    );
};

export default Card;