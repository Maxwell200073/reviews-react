import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
    const [index, setIndex] = useState(0);
    const { name, job, image, text } = people[index];

    const checkValue = (num) => {
        if (num < 0) return people.length - 1;
        if (num === people.length) return 0;
        return num;
    };

    const nextPerson = () => {
        setIndex(checkValue(index + 1));
    };

    const prevPerson = () => {
        setIndex(checkValue(index - 1));
    };

    const randomPerson = () => {
        let newIndex = Math.floor(Math.random() * people.length);
        if (newIndex === index) setIndex(checkValue(newIndex + 1));
        else setIndex(checkValue(newIndex));
    };
    return (
        <article className="review">
            <div className="img-container">
                <img src={image} alt={name} className="person-img" />
                <span className="quote-icon">
                    <FaQuoteRight />
                </span>
            </div>
            <h4 className="author">{name}</h4>
            <p className="job">{job}</p>
            <p className="text">{text}</p>
            <div className="button-container">
                <button onClick={prevPerson} className="prev-btn">
                    <FaChevronLeft />
                </button>
                <button onClick={nextPerson} className="next-btn">
                    <FaChevronRight />
                </button>
            </div>
            <button onClick={randomPerson} className="random-btn">
                surprise me
            </button>
        </article>
    );
};

export default Review;
