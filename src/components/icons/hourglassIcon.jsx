import * as React from "react";
import { motion, useInView } from "framer-motion";

const HourglassIcon = (props) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-50px" });
  
  
  const [animationState, setAnimationState] = React.useState("initial");
  const animationCycleRef = React.useRef(null);
  
  
  const runAnimationCycle = React.useCallback(() => {
    
    if (animationCycleRef.current) {
      clearTimeout(animationCycleRef.current.topDisappearTimer);
      clearTimeout(animationCycleRef.current.rotateTimer);
      clearTimeout(animationCycleRef.current.resetTimer);
    }
    
    
    setAnimationState("topDisappearing");
    
    
    animationCycleRef.current = {};
    
    
    animationCycleRef.current.topDisappearTimer = setTimeout(() => {
      setAnimationState("rotating");
      
      
      animationCycleRef.current.rotateTimer = setTimeout(() => {
        setAnimationState("initial");
        
       
        animationCycleRef.current.resetTimer = setTimeout(() => {
          if (isInView) {
            runAnimationCycle(); 
          }
        }, 1000);
      }, 3000); 
    }, 4000); 
  }, [isInView]);
  
  React.useEffect(() => {
    if (isInView) {
      runAnimationCycle();
    } else {
      setAnimationState("initial");
      if (animationCycleRef.current) {
        clearTimeout(animationCycleRef.current.topDisappearTimer);
        clearTimeout(animationCycleRef.current.rotateTimer);
        clearTimeout(animationCycleRef.current.resetTimer);
      }
    }
    
    
    return () => {
      if (animationCycleRef.current) {
        clearTimeout(animationCycleRef.current.topDisappearTimer);
        clearTimeout(animationCycleRef.current.rotateTimer);
        clearTimeout(animationCycleRef.current.resetTimer);
      }
    };
  }, [isInView, runAnimationCycle]);
  
  
  const hourglassVariants = {
    initial: {
      rotate: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    topDisappearing: {
      rotate: 0 
    },
    rotating: {
      rotate: 180,
      transition: {
        duration: 3,
        ease: "easeInOut",
      }
    }
  };
  
  const topSandVariants = {
    initial: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    topDisappearing: {
      scale: 0.2,
      opacity: 0,
      transition: {
        duration: 4,
        ease: "easeOut"
      }
    },
    rotating: {
      scale: 0.2,
      opacity: 0
    }
  };
  
  const bottomSandVariants = {
    initial: {
      scale: 0.8,
      opacity: 0.3,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    topDisappearing: {
      scale: 1.2,
      opacity: 1,
      transition: {
        duration: 4,
        ease: "easeIn"
      }
    },
    rotating: {
      scale: 1.2,
      opacity: 1
    }
  };

  return (
    <motion.svg
      ref={ref}
      viewBox="0 0 24 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      animate={animationState}
    >
      <motion.g 
        id="hourglass"
        variants={hourglassVariants}
      >
        <g id="base">
          <rect
            id="Rectangle 3"
            x={0.5}
            y={35.5}
            width={23}
            height={2}
            rx={1}
            stroke="black"
          />
          <rect
            id="Rectangle 4"
            x={0.5}
            y={0.5}
            width={23}
            height={2}
            rx={1}
            stroke="black"
          />
          <path
            id="Vector 3"
            d="M11 20C11 20 5 20.5 4 26C3 31.5 3 35 3 35"
            stroke="black"
          />
          <path
            id="Vector 4"
            d="M11 18C11 18 5 17.5 4 12C3 6.5 3 3 3 3"
            stroke="black"
          />
          <path
            id="Vector 5"
            d="M13 20C13 20 19 20.5 20 26C21 31.5 21 35 21 35"
            stroke="black"
          />
          <path
            id="Vector 6"
            d="M13 18C13 18 19 17.5 20 12C21 6.5 21 3 21 3"
            stroke="black"
          />
          <path
            id="Vector 7"
            d="M13 18V20"
            stroke="black"
            strokeLinecap="round"
          />
          <path
            id="Vector 8"
            d="M11 18V20"
            stroke="black"
            strokeLinecap="round"
          />
        </g>
        <motion.g 
          id="bottom"
          variants={bottomSandVariants}
        >
          <path
            id="Rectangle 6"
            d="M18.1878 30.9727C18.9858 32.3058 18.0254 34 16.4717 34H7.52826C5.97457 34 5.01421 32.3058 5.81224 30.9727L5.93003 30.776C6.16044 30.3911 6.51356 30.0948 6.93264 29.9348L11.2866 28.2724C11.746 28.097 12.254 28.097 12.7134 28.2724L17.0674 29.9348C17.4864 30.0948 17.8396 30.3911 18.07 30.776L18.1878 30.9727Z"
            fill="black"
          />
        </motion.g>
        <motion.g 
          id="top"
          variants={topSandVariants}
        >
          <path
            id="Rectangle 5"
            d="M6.70856 14.99C6.01319 13.7731 7.02163 12.2888 8.40911 12.487L11.7172 12.9596C11.9048 12.9864 12.0952 12.9864 12.2828 12.9596L15.5909 12.487C16.9784 12.2888 17.9868 13.7731 17.2914 14.99V14.99C17.1027 15.3202 16.8078 15.5769 16.4546 15.7182L12.7428 17.2029C12.266 17.3936 11.734 17.3936 11.2572 17.2029L7.5454 15.7182C7.19223 15.5769 6.89728 15.3202 6.70856 14.99V14.99Z"
            fill="black"
          />
        </motion.g>
      </motion.g>
    </motion.svg>
  );
};

export { HourglassIcon as ReactComponent }
