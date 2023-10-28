import { useEffect, useState,useRef } from "react";

const useRandomText = (text) => {
  const min = 47;
  const max = 126;
  const arr = text
    .split("")
    .map(() => Math.floor(Math.random() * (max - min + 1) + min))
    .map((item) => String.fromCharCode(item));
  return arr;
};

const useTextDecryption = (data, interval = 3000) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const randomtext = useRandomText(data[currentIndex % data.length]);

  // TODO: rotate index every interval
  // TODO: generate random text (hint: need another hook)
  useEffect(() => {
    const textInterval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, interval);
    return () => {
      clearInterval(textInterval);
    };
  }, []);

  return [data[currentIndex % data.length], randomtext];
};

const useTextDecryptionAnimation = (text, random) => {
  const indexRef = useRef(1);
  const [randomText, setRandomText] = useState(
    random.slice(0, text.length - 1)
  );
  useEffect(() => {
    const textInterval = setInterval(() => {
      indexRef.current += 1;
      setRandomText(text.slice(0, indexRef.current) + useRandomText(text).slice(indexRef.current))
      if (indexRef.current >= text.length) {
        clearInterval(textInterval);
        indexRef.current = 1;
      }
    }, 70);
    return () => {
      clearInterval(textInterval);
    };
  }, [text]);

  return randomText;
};

export const ChallengePage = () => {
  const data = [
    "encrypt access tokens",
    "share encrypted data",
    "encrypt credit cards",
  ];
  const [text, randomText] = useTextDecryption(data);
  const finalText = useTextDecryptionAnimation(text, randomText);

  return (
    <div>
      <h1 style={{textAlign:"left"}}>{finalText}</h1>
    </div>
  );
};
