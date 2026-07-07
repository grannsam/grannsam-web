import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="bg-[#F9F8F3] w-full flex flex-col items-center justify-center px-6 pt-12 pb-12 md:pt-16 md:pb-0 select-none">
      
      {/* GEMENSAM CONTAINER */}
      <div className="max-w-4xl w-full flex flex-col items-stretch">
        
        {/* 1. RUBRIK */}
        <div className="w-full text-center z-10 mb-0">
          <h1 className="text-4xl md:text-7xl font-normal text-[#1A1A1A] tracking-[-0.03em] font-sans text-center inline-block w-full leading-tight">
            För ett starkare grannskap.
          </h1>
        </div>
        
        {/* 2. INNEHÅLL (GRID) */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start w-full mt-8 md:mt-12">
          
          {/* VÄNSTER KOLUMN: USPar (60% bredd) */}
          <div className="w-full md:col-span-3 flex flex-col items-center md:items-start space-y-8">
            <p className="text-xl md:text-2xl text-[#1A1A1A] leading-normal font-medium text-center md:text-left w-full md:pl-5">
              Grannsam förenklar styrelsens uppgifter och ökar grannarnas engagemang i er förening.
            </p>

            <ul className="space-y-4 text-lg md:text-xl text-[#1A1A1A] w-full md:pl-5 text-left">
              <li className="flex items-start space-x-3">
                <span className="flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-[#227C21]" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </span>
                <span className="leading-tight">Nå ut med information till hela föreningen.</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-[#227C21]" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </span>
                <span className="leading-tight">Effektivisera styrelsens ärendehantering.</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-[#227C21]" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </span>
                <span className="leading-tight">Ett privat och tryggt grannskap med BankID.</span>
              </li>
            </ul>

            {/* SKRIVBORDSKNAPP */}
            <div className="hidden md:flex justify-center w-full pt-1 md:mt-6">
              <Link 
                href="/kontakt?intent=demo" 
                className="bg-grannsam-green hover:opacity-90 text-white font-medium py-6 px-10 rounded-full text-lg transition duration-200 shadow-sm active:scale-[0.98] text-center inline-block min-w-[200px] leading-none"
              >
                Boka demo
              </Link>
            </div>
          </div>

          {/* HÖGER KOLUMN: MOBILBILD & MOBILKNAPP (40% bredd) */}
          <div className="w-full md:col-span-2 flex flex-col items-center">
            <div className="flex justify-center md:justify-end items-start w-full">
              <div className="relative w-full max-w-[320px] aspect-[9/19] -mb-60 md:-mb-44">
                <Image 
                  src="/images/hero-phone-mockup.png" 
                  alt="Grannsam applikation i mobiltelefon"
                  layout="fill"
                  objectFit="contain"
                  objectPosition="top right"
                  priority
                />
              </div>
            </div>

            {/* MOBILKNAPP: relative z-10 lyfter fram knappen så den blir klickbar framför bildlagret */}
            <div className="relative z-10 flex md:hidden justify-center w-full pt-1 mt-0">
              <Link 
                href="/kontakt?intent=demo" 
                className="bg-grannsam-green hover:opacity-90 text-white font-medium py-6 px-10 rounded-full text-lg transition duration-200 shadow-sm active:scale-[0.98] text-center inline-block min-w-[200px] leading-none"
              >
                Boka demo
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}