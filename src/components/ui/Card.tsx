import React, { ReactNode, HTMLAttributes } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface CardProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'> {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  gradient?: boolean;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  hover = true, 
  glow = false,
  gradient = false,
  ...props 
}) => {
  const baseClasses = 'bg-white dark:bg-dark-800 rounded-xl shadow-lg border border-gray-200 dark:border-dark-700 transition-all duration-300';
  
  const hoverClasses = hover ? 'hover:shadow-2xl hover:-translate-y-1' : '';
  const glowClasses = glow ? 'hover:shadow-primary-500/25 hover:shadow-2xl' : '';
  const gradientClasses = gradient ? 'bg-gradient-to-br from-white to-gray-50 dark:from-dark-800 dark:to-dark-900' : '';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={hover ? { y: -4 } : {}}
      className={`${baseClasses} ${hoverClasses} ${glowClasses} ${gradientClasses} ${className}`}
      {...(props as HTMLMotionProps<"div">)}
    >
      {children}
    </motion.div>
  );
};

export default Card; 