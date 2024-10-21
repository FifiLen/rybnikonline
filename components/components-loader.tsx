"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

export function LoaderComponent() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(timer);
          return 100;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 200);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-zinc-900">
      <div className="text-center">
        <h1
          className={`text-4xl md:text-6xl font-bold mb-4 ${GeistSans.className}`}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            RYBNIK
          </span>
          <span
            className={`${GeistMono.className} text-2xl md:text-3xl text-white`}
          >
            Online
          </span>
        </h1>
        <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-purple-400 to-pink-600"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <p className={`mt-2 text-white ${GeistMono.className}`}>
          {Math.round(progress)}%
        </p>
      </div>
    </div>
  );
}
