import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="bg-[#F9F8F3] w-full flex flex-col items-center justify-center px-6 pt-12 pb-0 md:pt-20 select-none">
      
      {/* 1. RUBRIK: Ligger helt fritt i fullbredd för absolut matematisk och optisk centrering på skärmen */}
      <div className="w-full text-center z-10 mb-0 left-0 right-0 mx-auto">
        <h1 className="text-4xl md:text-7xl font-normal text-[#1A1A1A] tracking-[-0.03em] font-sans text-center inline-block w-full leading-tight">
          För ett starkare grannskap.
        </h1>
      </div>
      
      {/* 2. INNEHÅLL: Kolumnerna ligger i sin egen max-bredd under */}
      <div className="max-w-4xl w-full flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center w-full -mt-6 md:-mt-16">
          
          {/* VÄNSTER SPALT: TEXT OCH LISTA */}
          <div className="flex flex-col space-y-8 max-w-lg mx-auto md:mx-0 pt-4 md:pt-0">
            <p className="text-xl md:text-2xl text-[#1A1A1A] leading-normal font-medium text-center md:text-left">
              Grannsam förenklar styrelsens uppgifter och ökar grannarnas engagemang i er förening.
            </p>

            {/* LISTA MED GRÖNA BOCKAR */}
            <ul className="space-y-4 text-lg md:text-xl text-[#1A1A1A] mx-auto md:mx-0 max-w-md md:max-w-none">
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

            {/* BUTTON SOM LÄNK */}
            <div className="flex justify-center pt-1">
              <Link 
                href="/kontakt?intent=demo" 
                className="bg-[#227C21] hover:bg-[#1b611a] text-white font-medium py-6 px-10 rounded-full text-lg transition duration-200 shadow-sm active:scale-[0.98] text-center inline-block min-w-[200px] leading-none"
              >
                Boka demo
              </Link>
            </div>
          </div>

          {/* HÖGER SPALT: MOBILBILD */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-[320px] aspect-[9/19]">
              <Image 
                src="/images/hero-phone-mockup.png" 
                alt="Grannsam applikation i mobiltelefon"
                layout="fill"
                objectFit="contain"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}