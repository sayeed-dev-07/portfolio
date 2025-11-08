import React, { useRef } from 'react';
import BlurText from './BlurText';
import { motion, useScroll, useTransform } from 'motion/react';


const Home = ({ refs }) => {
    let title = "hello, i'm";
    let subTitle = "Sayeed Shorif";
    const container = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05, // each child animates 0.2s after the previous
            },
        },
    };
    const { scrollYProgress } = useScroll({
        target: refs,
        offset: ["start end", 'end start']
    })

    const translateContent = useTransform(scrollYProgress, [0.50, 1], [0, -150])
    const translateContent2 = useTransform(scrollYProgress, [0.50, 1], [0, 150])

    const child = {
        hidden: { y: 20, opacity: 0, filter: "blur(5px)" },
        visible: { y: 0, opacity: 1, filter: "blur(0px)" },
    };
    return (
        <div ref={refs} className='min-h-screen w-full flex items-center justify-center'>
            <motion.div className='text-[#F8F4E3] w-full sm:w-[70%] lg:w-[55%] xl:w-[37%] overflow-hidden md:overflow-visible justify-center gap-y-12 md:px-0 px-4 mx-auto  flex flex-col sm:items-start items-center'>
                <div>
                    <motion.p style={{ x: translateContent }} variants={container} initial='hidden' animate='visible' className='uppercase font-fira text-2xl'>{
                        title.split('').map((elem, index) =>
                            <motion.span variants={child} className='text-xl md:text-2xl' key={index}>{elem}</motion.span>
                        )}</motion.p>
                    <motion.p variants={container} initial='hidden' animate='visible' className='font-outfit  sm:text-nowrap wrap-break-word'>
                        {
                            subTitle.split('').map((elem, index) =>
                                <motion.span variants={child} className='lg:text-8xl text-6xl' key={index}>{elem}</motion.span>
                            )}
                    </motion.p>
                    <motion.div style={{ x: translateContent2 }} className='flex items-center z-10 w-full sm:justify-end justify-center'>
                        <BlurText
                            text="WEB DESIGNER AND DEVELOPER"
                            delay={150}
                            animateBy="words"
                            direction="top"
                            className="lg:text-3xl font-fira text-2xl mb-8"
                        />
                    </motion.div>
                </div>
                <div  className='mx-auto text-xl font-fira text-center'>
                    <motion.p initial={{opacity:0, filter:'blur(10px)',y:20}} animate={{opacity:1, filter:'blur(0px)', y:0}} transition={{type:'spring', delay:0.4, duration:1}}>I’m a passionate front-end web developer and  designer from Bangladesh. you can check out my <div className='group inline-block'><a className='italic' target='_blank' href="https://github.com/sayeed-dev-07">github</a>
                        <div><div className={`w-0 duration-300 group-hover:w-[90%] transition-all  bg-[#F8F4E3] h-[0.03rem]`}></div></div></div> or scroll down to see my projects.</motion.p>
                </div>
            </motion.div>
        </div>
    );
};

export default Home;