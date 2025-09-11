'use client';
import React, { useState, useEffect } from 'react';
import { SlideRenderer } from './container/Slide';
import DotGrid from './component/DotGrid';
import { Body } from './component/Body';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PPTContainer = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { type: 'one', title: 'Slide 1' },
    { type: 'porto', title: 'Portfolio' },
    { type: 'two', title: 'Slide 2' },
    { type: 'three', title: 'Slide 3' },
    { type: 'four', title: 'Slide 4' },
    { type: 'five', title: 'Slide 5' },
    { type: 'meme', title: 'Meme Slide' },
    { type: 'button', title: 'Button Slide' },
    { type: 'meme2', title: 'Meme Slide 2' },
    { type: 'type', title: 'Type Slide' },
    { type: 'six', title: 'Slide 6' },
    { type: 'seven', title: 'Slide 7' },
    { type: 'eight', title: 'Slide 8' },
    { type: 'forkrepo', title: 'Fork Repo' },
    { type: 'nine', title: 'Slide 9' },
    { type: 'ten', title: 'Slide 10' },
    { type: 'eleven', title: 'Slide 11' },
    { type: 'twelve', title: 'Slide 12' },
    { type: 'thirteen', title: 'Slide 13' },
    { type: 'fourteen', title: 'Slide 14' },
    { type: 'fifteen', title: 'Slide 15' },
    { type: 'eighteen', title: 'Slide 18' },
    { type: 'sixteen', title: 'Slide 16' },
    { type: 'learntailwind', title: "Let's Learn Tailwind" },
    { type: 'whytailwind', title: 'Why Tailwind' },
    { type: 'tailwind1', title: 'Tailwind Slide' },
    { type: 'tailwind2', title: 'Tailwind Slide 2' },
    { type: 'tailwind3', title: 'Tailwind Slide 3' },
    { type: 'handson', title: 'Hands On' },
    { type: 'seventeen', title: 'Slide 17' },
  ];

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="h-screen w-full relative overflow-hidden bg-gradient-to-br from-blue-300 to-blue-100 flex flex-col">
      <div className="absolute inset-0 z-1">
       <DotGrid
          dotSize={5}
          gap={20}
          baseColor="#bfdbfe"
          activeColor="#3B82F6"
          proximity={120}
          shockRadius={200}
          shockStrength={2}
          resistance={750}
          returnDuration={1.5}
        />
      </div>
      {/* Navbar */}
      <nav className=" px-16 py-6 flex items-center justify-between z-2">
        <h1 className="text-xl font-sans font-semibold text-gray-800">BMS</h1>
        <div className="flex items-center space-x-8">
          <Body size="md"> Home </Body>
          <Body size="md"> About </Body>
          <Body size="md"> Content </Body>
        </div>
      </nav>

      {/* Slide Area */}
      <div className="flex items-center justify-between w-full h-full mb-20 px-8 z-3">
          <button
            onClick={prevSlide}
            className="transition"
          >
            <ChevronLeft size={20} color='gray' />
          </button>
          <div className='w-full h-full flex justify-center items-center'>
          <SlideRenderer slide={slides[currentSlide]} />
          </div>
          <button
            onClick={nextSlide}
            className="transition"
          >
            <ChevronRight size={20} color='gray' />
          </button>
      </div>
    </div>
  );
};

export default PPTContainer;
