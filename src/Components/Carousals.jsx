import React from 'react'
import {  useRef,useEffect } from 'react';

import "./Carousals.css";
import ArrowControls from './ArrowControls';
import imgs from './../data'


const Carousals = () => {
    var curIndex = 0;
    var activeItem = 2;
    const totalItems = 5;
    var carouselInterval;
    const carouselIntervalRef = useRef();
    const cardPositionRef = useRef([]);
    

    // useEffect(() => {
    //     const cardCount = 5; // Specify the number of cards
    //     const cardPosition = cardPositionRef.current; // Access the ref value
    
    //     for (let i = 0; i < cardCount; i++) {
    //       const card = document.getElementById(`card-${i}`);
    //       const computedStyle = window.getComputedStyle(card);
    //       cardPosition.push({
    //         X: card.getBoundingClientRect().left,
    //         Y: card.getBoundingClientRect().top,
    //         centerTransformX: -card.clientWidth / 2,
    //         centerTransformY: -card.clientHeight / 2,
    //         width: card.clientWidth,
    //         height: card.clientHeight,
    //         zIndex: computedStyle.getPropertyValue('z-index'),
    //       });
    //     }
    
    //     // Create a ref for carouselInterval
    //     const carouselIntervalRef = useRef();
    
    //     // Assign the interval to the ref
    //     carouselIntervalRef.current = setInterval(() => rotateCarousal(1), 1500);
    
    //     // Cleanup function to clear the interval when the component unmounts
    //     return () => {
    //       clearInterval(carouselIntervalRef.current);
    //     };
    //   }, []);

    useEffect(() => {
        const cardCount = 5; // Specify the number of cards
        const cardPosition = cardPositionRef.current; // Access the ref value
    
        for (let i = 0; i < cardCount; i++) {
            const card = document.getElementById(`card-${i}`);
            const computedStyle = window.getComputedStyle(card);
            cardPosition.push({
                X: card.getBoundingClientRect().left,
                Y: card.getBoundingClientRect().top,
                centerTransformX: -card.clientWidth / 2,
                centerTransformY: -card.clientHeight / 2,
                width: card.clientWidth,
                height: card.clientHeight,
                zIndex: computedStyle.getPropertyValue('z-index'),
            });
        }
        carouselIntervalRef.current = setInterval(() => rotateCarousal(1), 1500);
        
    }, []);



    function TranslateAToB(card, fromIndex, toIndex) {
        const cardA = document.getElementById(card);
        const cardPosition = cardPositionRef.current;
        cardA.style.transform = `translate(${cardPosition[toIndex].X - (cardPosition[fromIndex].X - cardPosition[fromIndex].centerTransformX)}px,${cardPosition[toIndex].Y - (cardPosition[fromIndex].Y - cardPosition[fromIndex].centerTransformY)}px)`;
        cardA.style.width = cardPosition[toIndex].width + 'px';
        cardA.style.height = cardPosition[toIndex].height + 'px';
        cardA.style.zIndex = cardPosition[toIndex].zIndex;
    }

    function rotateCarousal(dir) {
        curIndex = (curIndex + dir) % 5;
        if (curIndex === -1) {
            curIndex = 4;
        }
        for (let i = 0; i < 5; i++) {
            TranslateAToB('card-' + i, i, (i + curIndex) % 5);
        }

    }

    function handleNextClick() {
        if (carouselIntervalRef.current) {
            clearInterval(carouselIntervalRef.current);
        }
        rotateCarousal(-1);
        carouselIntervalRef.current = setInterval(() => rotateCarousal(1), 1500);
    }

    function handlePrevClick() {
        if (carouselIntervalRef.current) {
            clearInterval(carouselIntervalRef.current);
        }
        rotateCarousal(1);
        carouselIntervalRef.current = setInterval(() => rotateCarousal(1), 1500);
    }



    return (
        <div>
            <div id='par-container' className="container">
                {imgs.map((imgSrc, index) => (
                    <div key={index} id={`card-${index}`} className={`card-${index}`}>
                        <img src={imgSrc} alt="" />
                    </div>
                ))}
            </div>
            <ArrowControls totalItems={totalItems}
                activeItem={activeItem}
                onPrevClick={handlePrevClick}
                onNextClick={handleNextClick} />
        </div>
    )
}

export default Carousals

