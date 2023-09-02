import React from 'react'
import "./Carousals.css";
import { useEffect } from 'react';
const Carousals = () => {
    var cardPosition = [];
    var curIndex = 0;

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




        // const card0 = document.getElementById('card-0');
        // const card1 = document.getElementById('card-1');
        // const card2 = document.getElementById('card-2');
        // const card3 = document.getElementById('card-3');
        // const card4 = document.getElementById('card-4');
        // cardPosition = [
        //     {
        //         X: card0.getBoundingClientRect().left,
        //         Y: card0.getBoundingClientRect().top,
        //         centerTransformX: -card0.clientWidth / 2,
        //         centerTransformY: -card0.clientHeight / 2,
        //         width: card0.clientWidth,
        //         height: card0.clientHeight,
        //         zIndex: window.getComputedStyle(card0).getPropertyValue('z-index')
        //     },
        //     {
        //         X: card1.getBoundingClientRect().left,
        //         Y: card1.getBoundingClientRect().top,
        //         centerTransformX: -card1.clientWidth / 2,
        //         centerTransformY: -card1.clientHeight / 2,
        //         width: card1.clientWidth,
        //         height: card1.clientHeight,
        //         zIndex: window.getComputedStyle(card1).getPropertyValue('z-index'),
        //     },
        //     {
        //         X: card2.getBoundingClientRect().left,
        //         Y: card2.getBoundingClientRect().top,
        //         centerTransformX: -card2.clientWidth / 2,
        //         centerTransformY: -card2.clientHeight / 2,
        //         width: card2.clientWidth,
        //         height: card2.clientHeight,
        //         zIndex: window.getComputedStyle(card2).getPropertyValue('z-index'),
        //     },
        //     {
        //         X: card3.getBoundingClientRect().left,
        //         Y: card3.getBoundingClientRect().top,
        //         centerTransformX: -card3.clientWidth / 2,
        //         centerTransformY: -card3.clientHeight / 2,
        //         width: card3.clientWidth,
        //         height: card3.clientHeight,
        //         zIndex: window.getComputedStyle(card3).getPropertyValue('z-index'),
        //     },
        //     {
        //         X: card4.getBoundingClientRect().left,
        //         Y: card4.getBoundingClientRect().top,
        //         centerTransformX: -card4.clientWidth / 2,
        //         centerTransformY: -card4.clientHeight / 2,
        //         width: card4.clientWidth,
        //         height: card4.clientHeight,
        //         zIndex: window.getComputedStyle(card4).getPropertyValue('z-index'),
        //     }
        // ]
    }, []);



    function TranslateAToB(card, fromIndex, toIndex) {
        const cardA = document.getElementById(card);
        cardA.style.transform = `translate(${cardPosition[toIndex].X - (cardPosition[fromIndex].X - cardPosition[fromIndex].centerTransformX)}px,${cardPosition[toIndex].Y - (cardPosition[fromIndex].Y - cardPosition[fromIndex].centerTransformY)}px)`;
        cardA.style.width = cardPosition[toIndex].width + 'px';
        cardA.style.height = cardPosition[toIndex].height + 'px';
        cardA.style.zIndex = cardPosition[toIndex].zIndex;
    }


    function translate() {
        for (let i = 0; i < 5; i++) {
            TranslateAToB('card-' + i, i, (i + 1 + curIndex) % 5);
        }
        curIndex++;
        if (curIndex == 5) {
            curIndex = 0;
        }
    }

    return (
        <div>
            <div id='par-container' className="container">
                <button onClick={translate}>click me</button>
                {
                    Array.from({ length: 5 }, (_, index) => (
                        <div key={index} id={`card-${index}`} className={`card-${index}`}>
                            Div {index + 1}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Carousals

