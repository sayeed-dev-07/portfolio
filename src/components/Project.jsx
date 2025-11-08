import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Card from './Card';
import data from './Data';

const Project = ({ refs }) => {

  const { scrollYProgress } = useScroll({
    target: refs,
    offset: ['start end', 'end start']
  });


  const rightY = useTransform(scrollYProgress, [0, 1], [-300, 300]);   
  const leftY = useTransform(scrollYProgress, [0, 1], [0, -50]);  


  const midIndex = Math.ceil(data.length / 2);
  const leftColumn = data.slice(0, midIndex);
  const rightColumn = data.slice(midIndex);

  return (
    <div ref={refs} className="min-h-screen my-[10%] px-4 sm:px-[8%]">
      <p className="text-3xl font-bold mb-8 text-white">Projects</p>
      <div className="grid lg:grid-cols-2 gap-6 grid-cols-1">
        <motion.div style={{ y: leftY }} className="flex flex-col gap-6">
          {leftColumn.map(item => <Card key={item.name} data={item} />)}
        </motion.div>
        <motion.div style={{ y: rightY }} className="flex flex-col gap-6">
          {rightColumn.map(item => <Card key={item.name} data={item} />)}
        </motion.div>
      </div>
    </div>
  );
};

export default Project;
