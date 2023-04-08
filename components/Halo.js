import React from "react";
import useMousePosition from "hooks/useMousePosition";
import { motion } from "framer-motion";
import cn from "clsx";

const Halo = ({
  children,
  size = 600,
  strength = 10,
  className,
}) => {
  const ref = React.useRef(null);
  const { x, y } = useMousePosition(ref);
  const offset = size / 2;

  return (
    <motion.div
      ref={ref}
      className={cn("relative w-full h-full overflow-hidden", className)}
      whileHover="hover"
    >
      <motion.div
        style={
          {
            "--x": `${x ? x - offset : -offset}px`,
            "--y": `${y ? y - offset : -offset}px`,
            width: size,
            height: size,
            background:
              "radial-gradient(#FFFFFF 0%, rgba(188, 255, 219, 0) 60%)",
          }
        }
        className={`transition-opacity opacity-0 absolute inset-0 z-50 translate-x-[var(--x)] translate-y-[var(--y)] pointer-events-none`}
        variants={{
          hover: {
            opacity: strength / 100,
          },
        }}
      />
      {children}
    </motion.div>
  );
}

export default Halo;