"use client"
import React, { FC } from 'react'
import { Loader2, LucideProps } from 'lucide-react'
import { cn } from '../../lib/utils'
import "../styles.css";

interface SpinnerProps extends LucideProps {
  size?: number,
  color?: string
}

const Spinner: FC<SpinnerProps> = ({ className, size=24,color='white', ...props }) => {
  return (
    
    <div className={cn('mr-2 h-12 w-12 relative', className)}>
    <div className={cn('absolute inset-0 flex justify-center items-center animate-spin')}>
      <Loader2 {...props} color={color} size={size}  />
    </div>
  </div>
   
  )
}

export {Spinner, SpinnerProps} ;

// import React, { FC } from 'react';
// import { Loader2, LucideProps } from 'lucide-react';
// import '../styles.css';
// import { cn } from '../../lib/utils'

// interface SpinnerProps extends LucideProps {
//   size?: 'sm' | 'md' | 'lg';
//   className?: string;
// }

// const Spinner: FC<SpinnerProps> = ({ className, size = 'md', ...props }) => {
 

//   const loaderSize = {
//     sm: { width: 24, height: 24 }, // Adjust according to your requirements
//     md: { width: 32, height: 32 }, // Adjust according to your requirements
//     lg: { width: 40, height: 40 }, // Adjust according to your requirements
//   };

//   return (
//     <div className={cn('mr-2 h-12 w-12 relative', className)}>
//       <div className="absolute inset-0 flex justify-center items-center animate-spin">
//         <Loader2 {...props} {...loaderSize[size]} />
//       </div>
//     </div>
//   );
// };

// export { Spinner, SpinnerProps };


// import React, { FC } from "react";
// import { cva } from "class-variance-authority";
// import "../styles.css";

// interface SpinnerProps {
//   size?: "sm" | "md" | "lg";
//   className?: string;
// }

// const Spinner: FC<SpinnerProps> = ({
//   size = "md",
//   className = "",
// }) => {
//   const spinnerWrapper = cva([
//     "relative",
//     "inline-flex",
//     "items-center",
//     "justify-center",
//   ], {
//     variants: {
//       size: {
//         sm: "w-5 h-5",
//         md: "w-8 h-8",
//         lg: "w-10 h-10",
//       },
//     },
//     defaultVariants: {
//       size: "md",
//     },
//   });

//   const circle1 = cva([
//     "w-full",
//     "h-full",
//     "rounded-full",
//     "border-4",
//     "border-solid",
//     "border-t-transparent",
//     "border-l-transparent",
//     "border-r-transparent",
//     "border-black", // Set the border color to black
//     "animate-spin", // Add spinning animation
//   ]);

//   const circle2 = cva([
//     "w-full",
//     "h-full",
//     "rounded-full",
//     "border-4",
//     "border-solid",
//     "border-t-transparent",
//     "border-l-transparent",
//     "border-r-transparent",
//     "border-black", // Set the border color to black
//     "opacity-50", // Reduce opacity
//     "animate-spin", // Add spinning animation
//   ]);

//   return (
//     <div className={`${spinnerWrapper({ size })} ${className}`}>
//       <div className="relative">
//         <i className={circle1()} />
//         <i className={circle2()} />
//       </div>
//     </div>
//   );
// };

// export { Spinner, SpinnerProps };
