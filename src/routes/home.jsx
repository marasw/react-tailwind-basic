import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import reactLogo from './assets/react.svg'
import logo from '../assets/vite.svg';

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="text-center selection:bg-green-900">
      <header className="flex min-h-screen flex-col items-center justify-center bg-[#282c34] text-white">
        <img
          src={logo}
          className="animate-speed h-60 motion-safe:animate-spin"
          alt="logo"
        />
        <style>
          {
            '\
            .animate-speed{\
              animation-duration:20s;\
            }\
          '
          }
        </style>
        <p className="bg-gradient-to-r from-emerald-300 to-sky-300 bg-clip-text text-5xl font-black text-transparent selection:bg-transparent">
          Vite + React + Tailwindcss v3
        </p>
        <p className="mt-3">
          <button
            type="button"
            className="my-6 rounded bg-red-400 px-2 py-2 text-[#282C34] transition-all hover:bg-gray-200"
            onClick={() => setCount((c) => c + 1)}
          >
            count is:
            {' '}
            {count}
          </button>
        </p>
        <p>
          ©
          {new Date().getFullYear()}
          {' '}
          Copyright
        </p>
        <Link to={{ pathname: 'about' }} target="_parent" rel="noopener noreferer">
          About
        </Link>
        <p className="mt-3 flex gap-3 text-center text-[#8d96a7]">
          <a
            className="text-[#61dafb] transition-all hover:text-blue-400"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="text-[#61dafb] transition-all hover:text-blue-400"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
        {/* <img src={poweredBy} className="mx-auto my-8" alt="powered-by" /> */}
      </header>
    </div>
  );
}

export default Home;
