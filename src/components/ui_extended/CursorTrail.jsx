import React, { useEffect, useState, useRef } from 'react';
import { useMousePosition } from '@/hooks/useMousePosition';
import { motion, AnimatePresence } from 'framer-motion';

const CursorTrail = () => {
    const { x, y } = useMousePosition();
    const [particles, setParticles] = useState([]);
    const [isMoving, setIsMoving] = useState(false);
    const timeoutRef = useRef(null);

    const prevPosition = useRef({ x, y });

    useEffect(() => {
        const dx = x - prevPosition.current.x;
        const dy = y - prevPosition.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance > 2) {
            setIsMoving(true);
            prevPosition.current = { x, y };
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
            timeoutRef.current = setTimeout(() => setIsMoving(false), 150);
        }

    }, [x, y]);
    
    useEffect(() => {
        if (isMoving) {
            setParticles(prev => [
                ...prev, 
                { x, y, id: Math.random(), createdAt: Date.now() }
            ]);
        }
    }, [isMoving, x, y]);

    useEffect(() => {
        const interval = setInterval(() => {
            setParticles(prev => prev.filter(p => Date.now() - p.createdAt < 500));
        }, 100);

        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            clearInterval(interval);
        };
    }, []);

    return (
        <div className="pointer-events-none fixed inset-0 z-[9998]">
            <AnimatePresence>
                {isMoving && particles.map(p => (
                    <motion.div
                        key={p.id}
                        className="trail-particle"
                        initial={{ opacity: 1, scale: 1, x: p.x - 3, y: p.y - 3 }}
                        animate={{}}
                        exit={{ 
                            opacity: 0, 
                            scale: 0, 
                            transition: { duration: 0.5, ease: "easeOut" } 
                        }}
                    />
                ))}
            </AnimatePresence>
        </div>
    );
};

export default CursorTrail;