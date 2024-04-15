import React, { useState } from "react";

export default function BookingForm({ handleBooking }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: ""
  });
  const [bookingStatus, setBookingStatus] = useState("");
  const [showMessage, setShowMessage] = useState(false); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleBooking(formData);
    setBookingStatus("good");
    setShowMessage(true);
  };

  return (
    <div className="booking-block">
      {showMessage && bookingStatus === "good" && (
        <div className="good-message">Успешно забронировано!</div>
      )}
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          placeholder="Имя" 
          value={formData.name} 
          onChange={handleChange} 
          className="booking-name"
          required 
        />
        <input 
          type="tel" 
          name="phone" 
          placeholder="Телефон" 
          value={formData.phone} 
          onChange={handleChange}
          className="booking-phone" 
          required 
        />
        <button type="submit" className="booking-button">Забронировать</button>
      </form>
    </div>
  );
}
