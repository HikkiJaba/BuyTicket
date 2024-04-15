import React, { useState } from "react";
import arrow from "../img/arrow.png";
import BookingForm from "./Booking";

const Card = ({origin, destination, distance, depart_date, return_date, value, gate, number_of_changes, trip_class}) => {
    const [expanded, setExpanded] = useState(false);
    const [showBookingForm, setShowBookingForm] = useState(false);
    const [bookingRequested, setBookingRequested] = useState(false);
    const [bookingSuccess, setBookingSuccess] = useState(false);

    const handleCardClick = () => {
        if (!bookingRequested) {
            setExpanded(!expanded);
        }
    };

    const handleBookingButtonClick = () => {
        setShowBookingForm(true);
        setBookingRequested(true);
    };

    const handleBooking = (formData) => {
        console.log("Booking Data:", formData);
        setShowBookingForm(false);
        setBookingSuccess(true);
    };

    return (
        <div className={`card ${expanded ? 'expanded' : ''}`} onClick={handleCardClick}>
            <div className="card-container">
                <p className="origin">{origin}</p>
                <img src={arrow} className="arrow" alt="Arrow"></img>
                <p className="destination">{destination}</p>
                <p className="distance">Расстояние: {distance}</p>
                <p className="depart_date">Дата отправления: {depart_date}</p>
                <p className="return_date">Дата прибытия: {return_date}</p>
                <p className="value">Стоимость: {value} RUB</p>
                {expanded && (
                    <>
                    <p className="gate">Компания перевозчик: {gate}</p>
                    <p className="number_of_changes">Количество пересадок: {number_of_changes}</p>
                    <p className="trip_class">Какой класс: {trip_class === 0 ? 'Эконом' : trip_class === 1 ? 'Бизнес' : 'Эконом/Бизнес'} </p>
                    </>
                )}
                {!bookingRequested && !bookingSuccess && <button onClick={handleBookingButtonClick} className="booking-button-one">Забронировать</button>}
                {bookingSuccess && <div className="good-message">Успешно забронировано!</div>}
                {showBookingForm && <BookingForm handleBooking={handleBooking} />}
            </div>
        </div>
    );
};

export default Card;
