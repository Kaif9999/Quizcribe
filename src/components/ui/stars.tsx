"use client"

import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
const blink = keyframes`
    0%, 100% {
        opacity: 0.2;
    }
    50% {
        opacity: 1;
    }
`;

const move = keyframes`
    0% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-5px); // Slight upward movement
    }
    100% {
        transform: translateY(0);
    }
`;

const Star = styled.div`
    position: absolute;
    width: 4px; // Increased size for better visibility
    height: 4px; // Increased size for better visibility
    background: white;
    border-radius: 50%;
    animation: ${blink} 2s infinite ease-in-out, ${move} 5s infinite ease-in-out; // Added move animation with slower duration
    opacity: 0.8; // Slightly increased opacity for better visibility
`;

const StarsWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: -1;
    background: linear-gradient(180deg, rgba(0, 0, 20, 0.8), rgba(0, 0, 50, 0.8)); // Added gradient background
`;

const Stars = () => {
    const createStars = () => {
        const stars = [];
        for (let i = 0; i < 150; i++) { // Increased number of stars for a denser effect
            const style = {
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 3 + 1}s`, // Adjusted duration for varied speed
                animationDelay: `${Math.random() * 3}s`, // Adjusted delay for varied timing
            };
            stars.push(<Star key={i} style={style} />);
        }
        return stars;
    };

    return <StarsWrapper>{createStars()}</StarsWrapper>;
};

export default Stars;
