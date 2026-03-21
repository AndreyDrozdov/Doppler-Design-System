import React, { useEffect, useRef, useMemo } from 'react';

export const MazeBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Constants for our fixed-size background
  const cellSize = 60;
  const canvasWidth = 4000;
  const canvasHeight = 4000;
  const maxCols = Math.ceil(canvasWidth / cellSize);
  const maxRows = Math.ceil(canvasHeight / cellSize);

  // Generate the grid once and keep it immutable
  const grid = useMemo(() => {
    const newGrid: number[][] = [];
    for (let i = 0; i < maxCols; i++) {
      newGrid[i] = [];
      for (let j = 0; j < maxRows; j++) {
        newGrid[i][j] = Math.random();
      }
    }
    return newGrid;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Draw the static maze once
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.lineWidth = 0.5;
    ctx.lineCap = 'round';

    const colors = ['#C4FF40', '#7B5CF5', '#38BDF8'];
    
    colors.forEach(targetColor => {
      ctx.strokeStyle = targetColor;
      ctx.beginPath();
      
      for (let x = 0; x < maxCols; x++) {
        const gridCol = grid[x];
        for (let y = 0; y < maxRows; y++) {
          const rand = gridCol[y];
          const segmentColor = rand < 0.5 ? '#C4FF40' : (rand < 0.8 ? '#7B5CF5' : '#38BDF8');
          if (segmentColor !== targetColor) continue;

          const px = x * cellSize;
          const py = y * cellSize;

          if (rand < 0.25) {
            ctx.moveTo(px, py);
            ctx.lineTo(px + cellSize, py + cellSize);
          } else if (rand < 0.5) {
            ctx.moveTo(px + cellSize, py);
            ctx.lineTo(px, py + cellSize);
          } else if (rand < 0.75) {
            ctx.moveTo(px, py + cellSize / 2);
            ctx.lineTo(px + cellSize, py + cellSize / 2);
          } else {
            ctx.moveTo(px + cellSize / 2, py);
            ctx.lineTo(px + cellSize / 2, py + cellSize);
          }
        }
      }
      ctx.stroke();
    });

  }, [grid]);

  return (
    <div 
      className="absolute inset-0 pointer-events-none overflow-hidden opacity-100 select-none"
      style={{
        maskImage: 'radial-gradient(circle, rgba(0,0,0,0.2) 20%, black 80%)',
        WebkitMaskImage: 'radial-gradient(circle, rgba(0,0,0,0.2) 20%, black 80%)'
      }}
    >
      <canvas
        ref={canvasRef}
        width={canvasWidth}
        height={canvasHeight}
        className="absolute top-0 left-0"
        style={{ 
          background: 'transparent',
          width: canvasWidth + 'px',
          height: canvasHeight + 'px'
        }}
      />
    </div>
  );
};
