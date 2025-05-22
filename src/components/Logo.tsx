import React from 'react';

export default function Logo() {
  return (
    <div className="flex items-center font-bold text-xl sm:text-2xl">
      <span className="text-blue-600 dark:text-blue-400">Koin</span>
      <span className="text-orange-500 dark:text-orange-400">X</span>
      <span className="text-xs align-top ml-0.5">®</span>
    </div>
  );
}