import React from 'react'
import { useState, useEffect } from 'react';

import "./Carousals.css";
import ArrowControls from './ArrowControls';
import imgs from './../data'


const Carousals = () => {
    var cardPosition = [];
    var curIndex = 0;
    var activeItem = 2;
    var carouselInterval;
    const totalItems = 5;



    useEffect(() => {
        const cardCount = 5; // Specify the number of cards
        cardPosition = [];
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
        carouselInterval = setInterval(() => rotateCarousal(1), 2000);
    }, []);



    function TranslateAToB(card, fromIndex, toIndex) {
        const cardA = document.getElementById(card);
        cardA.style.zIndex = cardPosition[toIndex].zIndex;
        cardA.style.transform = `translate(${cardPosition[toIndex].X - (cardPosition[fromIndex].X - cardPosition[fromIndex].centerTransformX)}px,${cardPosition[toIndex].Y - (cardPosition[fromIndex].Y - cardPosition[fromIndex].centerTransformY)}px)`;
        cardA.style.width = cardPosition[toIndex].width + 'px';
        cardA.style.height = cardPosition[toIndex].height + 'px';
    }

    function rotateCarousal(dir) {
        curIndex = (curIndex + dir) % 5;
        if (curIndex == -1) {
            curIndex = 4;
        }
        for (let i = 0; i < 5; i++) {
            TranslateAToB('card-' + i, i, (i + curIndex) % 5);
        }

    }

    function handleNextClick() {
        if (carouselInterval) {
            clearInterval(carouselInterval);
        }
        rotateCarousal(1);
        carouselInterval = setInterval(() => rotateCarousal(1), 2000);
    }

    function handlePrevClick() {
        if (carouselInterval) {
            clearInterval(carouselInterval);
        }
        rotateCarousal(-1);
        carouselInterval = setInterval(() => rotateCarousal(1), 2000);
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

