import React, { useEffect } from 'react';

const ParticlesBackground = ({ id = 'particles', style = {}, className = 'particles-canvas' }) => {
  useEffect(() => {
    const canvas = document.getElementById(id);
    if (canvas) {
      try {
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        function resizeCanvas() {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
        }
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        const particles = [];
        const particleCount = 50;
        for (let i = 0; i < particleCount; i++) {
          particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 2 + 1,
            speedX: Math.random() * 2 - 1,
            speedY: Math.random() * 2 - 1,
          });
        }

        let animationFrame;
        function animate() {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          particles.forEach(particle => {
            particle.x += particle.speedX;
            particle.y += particle.speedY;
            if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
            if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
            ctx.fill();
          });
          animationFrame = requestAnimationFrame(animate);
        }
        animate();

        return () => {
          window.removeEventListener('resize', resizeCanvas);
          cancelAnimationFrame(animationFrame);
        };
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Error initializing canvas animation:', error);
      }
    }
  }, [id]);

  return <canvas id={id} className={className} style={style} />;
};

export default ParticlesBackground; 