import Link from "./Link";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

export default function Post({ skill, mousePosition, handleMouseMove, listRef }) {
  const { elements } = skill;

  const imageHeight = 48;
  const imageWidth = 48;
  const imageOffset = 24;

  return (
    <ul className="flex flex-col animated-list">
      <div className="flex gap-8 items-center">
        {
          elements.map(el => (
            <li key={el.name} className="py-3 group">
              <div className="hidden md:block">
                <motion.div
                  animate={{
                    top: mousePosition.y - imageHeight - imageOffset,
                    left: mousePosition.x - imageWidth / 2,
                  }}
                  initial={false}
                  transition={{ ease: "easeOut" }}
                  style={{ width: imageWidth, height: imageHeight }}
                  className="absolute z-10 hidden overflow-hidden rounded shadow-sm pointer-events-none md:group-hover:block bg-primary"
                >
                  <Image
                    src={el.icon}
                    alt={el.name}
                    width={imageWidth}
                    height={imageHeight}
                  />
                </motion.div>
                {el.href ? (
                  <Link
                    href={el.href}
                    className="font-medium leading-tight underline-none hover:underline"
                  >
                    <span ref={listRef} onMouseMove={e => handleMouseMove(e)}>
                      {el.name}
                    </span>
                  </Link>
                ) : (
                  <span className="font-medium leading-tight" ref={listRef} onMouseMove={e => handleMouseMove(e)}>
                    {el.name}
                  </span>
                )}
              </div>
              {
                el.href ? (
                  <Link href={el.href} className="md:hidden aspect-square  w-12 h-12 relative drop-shadow-sm">
                    <Image src={el.icon} alt={el.name} className="object-cover rounded" width={48}
                      height={48} />
                  </Link>
                ) : (
                  <Image src={el.icon} alt={el.name} className="md:hidden object-cover rounded" width={48}
                    height={48} />
                )
              }
            </li>
          ))
        }
      </div>
    </ul>
  );
}
