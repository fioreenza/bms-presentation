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
    { type: 'two', title: 'Slide 2' },
    { type: 'three', title: 'Slide 3' },
    { type: 'four', title: 'Slide 4' },
    { type: 'five', title: 'Slide 5' },
    { type: 'six', title: 'Slide 6' },
    { type: 'seven', title: 'Slide 7' },
    { type: 'eight', title: 'Slide 8' },
    { type: 'html', title: 'HTML Intro' },
    { type: 'nine', title: 'Slide 9' },
    { type: 'ten', title: 'Slide 10' },
    { type: 'eleven', title: 'Slide 11' },
    { type: 'twelve', title: 'Slide 12' },
    { type: 'css', title: 'CSS Intro' },
    { type: 'thirteen', title: 'Slide 13' },
    { type: 'fourteen', title: 'Slide 14' },
    { type: 'fifteen', title: 'Slide 15' },
    { type: 'sixteen', title: 'Slide 16' },
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
    <div className="h-screen w-full relative overflow-hidden bg-gradient-to-br from-blue-200 to-white flex flex-col">
      <div className="absolute inset-0 z-1">
        <DotGrid
          dotSize={5}
          gap={20}
          baseColor="#DBEAFE"
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
        <h1 className="text-xl font-sans font-semibold text-gray-800">Ristek HMIT</h1>
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
