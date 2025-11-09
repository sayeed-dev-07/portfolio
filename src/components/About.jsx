import React from 'react';
import ScrollReveal from './ScrollReveal';
import { motion, useScroll, useTransform } from 'motion/react';
import ElectricBorder from './ElectricBorder'

const About = ({ refs }) => {
    const { scrollYProgress } = useScroll({
        target: refs,
        offset: ['start end', 'end start']
    })
    const y = useTransform(scrollYProgress, [0, 1], [-200, 200])
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])

    return (

        <div ref={refs} className='min-h-screen flex items-center justify-center flex-col lg:flex-row w-[90vw] gap-x-10 mx-auto gap-y-20'>
            <motion.div style={{ y, opacity }} className='text-[#F8F4E3] font-fira w-full lg:w-[40%] flex flex-col gap-y-6'>
                <div className=''>
                    <p className='uppercase'>Read More</p>
                    <p className='capitalize font-outfit text-5xl font-semibold'>About me</p>
                </div>
                <p className='text-xl'>Hello, my name is Sayeed Shorif and I’m a self-taught front-end developer and designer. Tyson is the nickname I use across social medias. I build responsive, accessible websites from scratch that look and feel fresh and creative. I’m committed to developing products that focus on usability and simplicity.</p>
                <p className='text-xl'>I love learning new things and technologies and I’m always gathering inspiration and exploring different ideas and techniques. I’m curious and passionate, especially when it comes to art, music and gaming.</p>
            </motion.div>
            <div className='lg:w-[40%] md:flex-1 xl:max-w-[30%] group transition-all duration-300 scale-100 hover:scale-105'>
                <div className=''>
                    <img
                        className='grayscale-0 w-full'
                        src="https://i.pinimg.com/736x/0a/01/04/0a0104b34d90ef354feff46d759b7e29.jpg"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default About;