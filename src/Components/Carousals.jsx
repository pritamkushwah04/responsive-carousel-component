import React from 'react'
import {  useRef,useState,useEffect  } from 'react';

import "./Carousals.css";
import ArrowControls from './ArrowControls';
import imgs from './../data'


const Carousals = () => {
    const totalItems = 5;
    const carouselIntervalRef = useRef();
    const cardPositionRef = useRef([]);
    const curIndexRef= useRef(0);
    const [activeItem,setActiveItem]=useState(2);
    
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    function TranslateAToB(card, fromIndex, toIndex) {
        const cardA = document.getElementById(card);
        const cardPosition = cardPositionRef.current;
        cardA.style.transform = `translate(${cardPosition[toIndex].X - (cardPosition[fromIndex].X - cardPosition[fromIndex].centerTransformX)}px,${cardPosition[toIndex].Y - (cardPosition[fromIndex].Y - cardPosition[fromIndex].centerTransformY)}px)`;
        cardA.style.width = cardPosition[toIndex].width + 'px';
        cardA.style.height = cardPosition[toIndex].height + 'px';
        if(cardA.style.zIndex==='0' && cardPosition[toIndex].zIndex==='0'){
            cardA.style.zIndex=-1;   
        }else{
            cardA.style.zIndex = cardPosition[toIndex].zIndex;
        }
        if(cardA.style.zIndex==='2'){
            cardA.querySelectorAll('.info-container')[0].style.display='block';
        }else{
            cardA.querySelectorAll('.info-container')[0].style.display='none';
        }
    }

    
    function rotateCarousal(dir) {
        if (carouselIntervalRef.current) {
            clearInterval(carouselIntervalRef.current);
        }
        curIndexRef.current=((curIndexRef.current + dir) % 5)!==-1?((curIndexRef.current + dir) % 5):4;
        for (let i = 0; i < 5; i++) {
            TranslateAToB('card-' + i, i, (i + curIndexRef.current) % 5);
        }
        setActiveItem((current)=>((curIndexRef.current + dir) % 5)!==-1?((curIndexRef.current + dir) % 5):4);
        carouselIntervalRef.current = setInterval(() => rotateCarousal(1), 1500);
    }

    function handleNextClick() {
        rotateCarousal(1);
    }

    function handlePrevClick() {
        rotateCarousal(-1);
    }

    return (
        <div>
            <div id='par-container' className='par-container'>
                <div>
                {imgs.map((item, index) => (
                    <div key={index} id={`card-${index}`} className={`card`}>
                        <img src={item.imgSrc} alt="" />
                        <div className="info-container">{item.name}</div>
                    </div>
                ))}
                </div>
            </div>
            <ArrowControls totalItems={totalItems}
                activeItem={activeItem}
                onPrevClick={handlePrevClick}
                onNextClick={handleNextClick} />
        </div>
    )
}

export default Carousals

