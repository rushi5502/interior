'use client'
import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const ThankYouPage = () => {
  useEffect(() => {
    // Trigger the confetti effect
    confetti({
      particleCount: 200,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#bb0000', '#ffffff'],
    });

    // You can trigger multiple times for an extended effect
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min:any, max:any) {
      return Math.random() * (max - min) + min;
    }

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: {
            x: randomInRange(0.1, 0.3),
            y: Math.random() - 0.2,
          },
        })
      );
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: {
            x: randomInRange(0.7, 0.9),
            y: Math.random() - 0.2,
          },
        })
      );
    }, 250);
  }, []);

  return (
    <div className="relative flex items-center justify-center h-screen w-full bg-gradient-to-r from-blue-500 to-green-500">
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">Thank You!</h1>
        <p className="text-lg md:text-2xl text-white">Your submission has been received.</p>

        <Button variant={"outline"} className='mt-4'> <Link  href={"/"}> Go To Home</Link> </Button>
      </div>
    </div>
  );
};

export default ThankYouPage;
