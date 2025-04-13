import * as React from "react";
import { motion, useInView } from "framer-motion";

const StickyIcon = (props) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-50px" });
  
  
  const transition = 
    isInView
      ? {
          repeat: Infinity,
          repeatType: "reverse",
          duration: 1.5,
          ease: "easeInOut"
        }
      : { duration: 0 };

  
  const topMovement = [-1, -4, -1];
  
  return(
    <motion.svg
      ref={ref}
      viewBox="0 0 38 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="sticky">
        
        <g id="base-bottom">
          <path
            id="Vector 9"
            d="M35.4442 20.0472L19.3791 26.6296C19.1362 26.7291 18.8638 26.7291 18.6209 26.6296L2.5558 20.0472C1.69034 19.6926 1.74193 18.4499 2.63381 18.1683L18.6989 13.0951C18.8949 13.0332 19.1051 13.0332 19.3011 13.0951L35.3662 18.1683C36.2581 18.4499 36.3097 19.6926 35.4442 20.0472Z"
            stroke="black"
          />
        </g>
        
        
        <motion.g
          id="base-top"
          animate={isInView ? { y: topMovement } : { y: 0 }}
          transition={transition}
        >
          <path
            id="Vector 10"
            d="M2.72566 7.57592L18.6328 13.8551C18.8688 13.9482 19.1312 13.9482 19.3672 13.8551L35.2743 7.57592C36.1615 7.22571 36.1014 5.95042 35.1852 5.6852L19.2781 1.08049C19.0964 1.02791 18.9036 1.02791 18.7219 1.08049L2.81477 5.6852C1.89856 5.95042 1.83846 7.22571 2.72566 7.57592Z"
            fill="white"
            stroke="black"
          />
        </motion.g>
        
        
        <g id="adhesive">
          
          <motion.path
            id="Rectangle 8"
            d="M22.0092 12.8749C21.2085 16.8672 21.7949 20.0961 22.2116 21.6571C22.2965 21.9753 22.1284 22.2928 21.8675 22.3907L19.1756 23.4002C19.0624 23.4426 18.9376 23.4426 18.8244 23.4002L16.4943 22.5264C16.338 22.4678 16.1952 22.3218 16.1099 22.0955C16.0242 21.8683 16.0174 21.6095 16.0877 21.4012C16.5887 19.9157 16.9965 17.2024 15.9967 12.8303C15.8945 12.3835 16.3306 12.033 16.7002 12.1716L18.4733 12.8365C18.8129 12.9638 19.1871 12.9638 19.5267 12.8365L21.2702 12.1827C21.6389 12.0444 22.1043 12.4011 22.0092 12.8749Z"
            fill="white"
            stroke="black"
            animate={isInView ? { 
              scaleY: [1, 1.2, 1], 
              y: [0, -2, 0] 
            } : { scaleY: 1, y: 0 }}
            transition={transition}
            style={{ transformOrigin: "center bottom" }}
          />
          
         
          <motion.path
            id="Rectangle 9"
            d="M10.5173 9.96618L13.0347 11.1105C13.2499 11.2083 13.3774 11.4552 13.3239 11.7106C12.6134 15.1024 12.8065 18.1086 13.0846 20.007C13.117 20.2278 13.0195 20.4568 12.8334 20.6116C12.6492 20.7647 12.4305 20.8044 12.2431 20.7263L9.31349 19.5056C9.02766 19.3865 8.85603 18.9815 9.01119 18.6178C9.63922 17.146 10.4472 14.3459 9.68561 10.7361C9.63513 10.4968 9.73015 10.2479 9.91725 10.082C10.1009 9.91906 10.3218 9.87731 10.5173 9.96618Z"
            fill="white"
            stroke="black"
            animate={isInView ? { 
              scaleY: [1, 1.25, 1], 
              y: [0, -2, 0] 
            } : { scaleY: 1, y: 0 }}
            transition={transition}
            style={{ transformOrigin: "center bottom" }}
          />
          
         
          <motion.path
            id="Rectangle 10"
            d="M27.9847 9.45235L25.0897 10.7513C24.8523 10.8579 24.7114 11.1558 24.8041 11.4599C25.7216 14.4682 25.3787 17.8281 24.9925 19.938C24.952 20.1594 25.045 20.3851 25.2267 20.5359C25.4064 20.6851 25.6243 20.7231 25.8143 20.6379L28.8318 19.2838C29.0911 19.1675 29.2461 18.8221 29.1341 18.4918C28.6264 16.9957 27.9355 13.9868 28.7986 10.2129C28.8526 9.97706 28.7619 9.73237 28.5794 9.56849C28.4001 9.40749 28.181 9.36426 27.9847 9.45235Z"
            fill="white"
            stroke="black"
            animate={isInView ? { 
              scaleY: [1, 1.2, 1], 
              y: [0, -2, 0] 
            } : { scaleY: 1, y: 0 }}
            transition={transition}
            style={{ transformOrigin: "center bottom" }}
          />
        </g>
      </g>
    </motion.svg>
  );
};

export { StickyIcon as ReactComponent };
