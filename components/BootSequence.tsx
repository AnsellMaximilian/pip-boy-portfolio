import React, { useState, useEffect } from 'react';

interface BootSequenceProps {
  onComplete: () => void;
}

const BOOT_TEXT = [
  "*** PIP-OS(R) V7.1.0.8 ***",
  "",
  "COPYRIGHT 2075 ROBCO(R)",
  "LOADER V1.1",
  "EXEC VERSION 41.10",
  "64k RAM SYSTEM",
  "38911 BYTES FREE",
  "NO HOLOTAPE FOUND",
  "LOAD ROM(1): DEITRIX 303",
  "INITIALIZING GRAPHICS...",
  "CHECKING BIOMETRICS...",
  "USER AUTHENTICATED.",
];

const BootSequence: React.FC<BootSequenceProps> = ({ onComplete }) => {
  const [lines, setLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);

  useEffect(() => {
    if (currentLineIndex >= BOOT_TEXT.length) {
      const timeout = setTimeout(onComplete, 800);
      return () => clearTimeout(timeout);
    }

    const currentText = BOOT_TEXT[currentLineIndex];
    let charIndex = 0;

    // If empty line, just push immediately
    if (!currentText) {
      setLines(prev => [...prev, " "]); // Space for empty line
      setCurrentLineIndex(prev => prev + 1);
      return;
    }

    // Typewriter effect for current line
    const typeLine = () => {
       setLines(prev => {
          const newLines = [...prev];
          if (newLines.length <= currentLineIndex) {
              newLines.push(currentText);
          } else {
              newLines[currentLineIndex] = currentText;
          }
          return newLines;
       });
       setCurrentLineIndex(prev => prev + 1);
    };

    // Simplified logic: just add line by line with delay, 
    // real char-by-char is too slow for 12 lines in a web demo usually.
    // Let's do a fast distinct line appearance.
    const timeout = setTimeout(typeLine, Math.random() * 300 + 100);

    return () => clearTimeout(timeout);

  }, [currentLineIndex, onComplete]);

  return (
    <div className="w-full h-screen bg-black text-pip font-mono p-8 text-lg sm:text-2xl uppercase flex flex-col justify-start items-start overflow-hidden">
      {lines.map((line, i) => (
        <div key={i} className="whitespace-pre-wrap">{line}</div>
      ))}
      <div className="animate-pulse-fast mt-2">_</div>
    </div>
  );
};

export default BootSequence;