("use client");
import React from "react";
import { cn } from "../../../lib/utils";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react";

const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
  highlightWordIndex = [],
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className={`dark:text-white text-h4  lg:text-h1 font-bold ${
                highlightWordIndex.includes(idx)
                  ? "text-primary"
                  : "text-foreground"
              } opacity-0`}
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className=" dark:text-white text-black text-2xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};

const AnimatedText = ({ text, highlightWords = [], className }) => {
  return (
    <div
      className={cn(
        "flex flex-wrap text-h1 font-bold text-end items-end justify-end",
        className
      )}
    >
      {text.split(" ").map((word, wordIdx) => (
        <span key={wordIdx} className="mr-2 whitespace-nowrap">
          {word.split("").map((char, charIdx) => {
            const delay = (wordIdx * 6 + charIdx) * 50; // delay animasi per huruf
            const isHighlight = highlightWords.includes(word);

            return (
              <span
                key={charIdx}
                className={`inline-block opacity-0 animate-fade-in ${
                  isHighlight ? "bg-secondary/25" : ""
                }`}
                style={{ animationDelay: `${delay}ms` }}
              >
                {char}
              </span>
            );
          })}
        </span>
      ))}
    </div>
  );
};

export default TextGenerateEffect;
