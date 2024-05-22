import React, { useEffect, useRef } from 'react';

const Particules = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let particlesArray = [];
    const numberOfParticles = 355;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Create particles
    class Particle {
      constructor(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
      }

      // Method to draw individual particle
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      // Method to update position of individual particle
      update() {
        if (this.x + this.size > canvas.width || this.x - this.size < 0) {
          this.directionX = -this.directionX;
        }
        if (this.y + this.size > canvas.height || this.y - this.size < 0) {
          this.directionY = -this.directionY;
        }
        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
      }
    }

    // Initialize particle array
    const init = () => {
      particlesArray = [];
      for (let i = 0; i < numberOfParticles; i++) {
        const size = Math.random() * 2;
        const x = Math.random() * (canvas.width - size * 2) + size;
        const y = Math.random() * (canvas.height - size * 2) + size;
        const directionX = (Math.random() * 0.4) - 0.2;
        const directionY = (Math.random() * 0.4) - 0.2;
        const color = '#ffffff';

        particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
      }
      requestAnimationFrame(animate);
    };

    init();
    animate();

    // Handle window resize
    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    });

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        init();
      });
    };
  }, []);

  return <canvas ref={canvasRef} className="particles" />;
};

export default Particules;
