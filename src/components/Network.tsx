import { useEffect, useRef } from "react";

const Dream100Network = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const centerNode = { x: canvas.offsetWidth / 2, y: canvas.offsetHeight / 2 };
    const networkNodes: { x: number; y: number; angle: number; distance: number; }[] = [];
    
    for (let ring = 1; ring <= 4; ring++) {
      const nodesInRing = ring * 6;
      const ringDistance = ring * 50;
      
      for (let i = 0; i < nodesInRing; i++) {
        const angle = (i / nodesInRing) * Math.PI * 2;
        networkNodes.push({
          x: centerNode.x + Math.cos(angle) * ringDistance,
          y: centerNode.y + Math.sin(angle) * ringDistance,
          angle,
          distance: ringDistance
        });
      }
    }

    let animationFrame: number;
    let time = 0;

    const animate = () => {
      time += 0.02;
      
      ctx.fillStyle = 'rgb(17, 24, 39)';
      ctx.fillRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      networkNodes.forEach((node, index) => {
        const pulseOffset = (index * 0.1 + time) % 1;
        const pulsePosition = {
          x: centerNode.x + (node.x - centerNode.x) * pulseOffset,
          y: centerNode.y + (node.y - centerNode.y) * pulseOffset
        };

        ctx.beginPath();
        ctx.moveTo(centerNode.x, centerNode.y);
        ctx.lineTo(node.x, node.y);
        ctx.strokeStyle = 'rgba(59, 130, 246, 0.1)';
        ctx.lineWidth = 1;
        ctx.stroke();

        const glowSize = 2 + Math.sin(time * 2 + index * 0.5) * 1;
        const gradient = ctx.createRadialGradient(
          pulsePosition.x, pulsePosition.y, 0,
          pulsePosition.x, pulsePosition.y, glowSize * 2
        );
        gradient.addColorStop(0, 'rgba(59, 130, 246, 0.8)');
        gradient.addColorStop(1, 'rgba(59, 130, 246, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(pulsePosition.x, pulsePosition.y, glowSize * 2, 0, Math.PI * 2);
        ctx.fill();
      });

      networkNodes.forEach((node, index) => {
        const nodeSize = 2 + Math.sin(time * 1.5 + index * 0.3) * 0.5;
        ctx.fillStyle = 'rgba(59, 130, 246, 0.6)';
        ctx.beginPath();
        ctx.arc(node.x, node.y, nodeSize, 0, Math.PI * 2);
        ctx.fill();
      });

      const centerSize = 6 + Math.sin(time * 2) * 2;
      const centerGradient = ctx.createRadialGradient(
        centerNode.x, centerNode.y, 0,
        centerNode.x, centerNode.y, centerSize * 1.5
      );
      centerGradient.addColorStop(0, 'rgb(59, 130, 246)');
      centerGradient.addColorStop(1, 'rgba(59, 130, 246, 0)');
      
      ctx.fillStyle = centerGradient;
      ctx.beginPath();
      ctx.arc(centerNode.x, centerNode.y, centerSize * 1.5, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.fillStyle = 'rgb(17, 24, 39)';
      ctx.beginPath();
      ctx.arc(centerNode.x, centerNode.y, centerSize - 2, 0, Math.PI * 2);
      ctx.fill();

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-black text-center text-white mb-8 leading-tight">
          A NETWORK OF <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">10,000+ DREAMERS</span>
          <br />
          HAS YOUR BACK
        </h2>
        
        <p className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto">
          Experience the power of collective growth. Every connection accelerates your journey.
        </p>

        <div className="relative h-96 md:h-[500px] bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
          <canvas 
            ref={canvasRef}
            className="w-full h-full"
            style={{ width: '100%', height: '100%' }}
          />
          
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-center">
              <div className="text-2xl font-black text-blue-400 mb-2">
                YOU
              </div>
              <div className="text-sm text-gray-400">
                The Dreamer
              </div>
            </div>
          </div>
          
          <div className="absolute top-6 left-6 bg-gray-800/90 backdrop-blur-sm border border-blue-500/30 rounded-lg p-4">
            <div className="text-sm text-gray-400 mb-2">Network Strength</div>
            <div className="text-2xl font-black text-blue-400">10,000+</div>
            <div className="text-xs text-gray-500">Active Members</div>
          </div>
          
          <div className="absolute top-6 right-6 bg-gray-800/90 backdrop-blur-sm border border-blue-500/30 rounded-lg p-4">
            <div className="text-sm text-gray-400 mb-2">Response Time</div>
            <div className="text-2xl font-black text-blue-400">&lt;1hr</div>
            <div className="text-xs text-gray-500">Average Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Dream100Network;