import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { DateInput, Button, Card, CardHeader, CardBody, CardFooter, Input } from '@nextui-org/react';
import { CalendarDate, today, getLocalTimeZone } from "@internationalized/date";

const RoomDetails = () => {
  const location = useLocation();
  const { rid } = useParams();
  const room = location.state?.room;

  const tomorrow = today(getLocalTimeZone()).add({ days: 1 });
  const [startDate, setStartDate] = useState(tomorrow);
  const [endDate, setEndDate] = useState(tomorrow.add({ days: 2 }));
  const [guests, setGuests] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalDays, setTotalDays] = useState(0);
  const [error, setError] = useState('');

  useEffect(() => {
    if (room) {
      const days = endDate.compare(startDate) + 1;
      if (days < 2 || days > 30) {
        setError('Booking must be between 2 and 30 days.');
        setTotalPrice(0);
        setTotalDays(0);
      } else {
        setError('');
        setTotalPrice(days * room.price);
        setTotalDays(days);
      }
    }
  }, [startDate, endDate, room]);

  const handleStartDateChange = (date) => {
    setStartDate(date);
    const newEndDate = date.add({ days: 2 });
    if (newEndDate.compare(endDate) > 0) {
      setEndDate(newEndDate);
    }
  };

  const handleEndDateChange = (date) => {
    if (date.compare(startDate.add({ days: 1 })) >= 0 && date.compare(startDate.add({ days: 30 })) <= 0) {
      setEndDate(date);
    }
  };

  const handleBooking = () => {
    // Implement booking logic here
    console.log('Booking:', { 
      roomId: rid, 
      startDate: startDate.toString(), 
      endDate: endDate.toString(), 
      guests, 
      totalPrice 
    });
    // You might want to send this data to an API or state management system
  };

  if (!room) {
    return <div>Loading...</div>;
  }

  return (
    <div className="m-4">
      <Card className="max-w-xl mx-auto">
        <CardHeader>
          <h1 className="text-2xl font-bold">{room.name}</h1>
        </CardHeader>
        <CardBody>
          <img src={room.image} alt={room.name} className="w-full h-64 object-cover mb-4" />
          <p className="text-xl mb-2">Location: {room.location}</p>
          <p className="text-lg mb-4">Price: ₹{room.price} per night</p>
          
          <div className="flex flex-col gap-4">
            <DateInput
              label="Check-in date"
              value={startDate}
              onChange={handleStartDateChange}
              minValue={tomorrow}
            />
            <DateInput
              label="Check-out date"
              value={endDate}
              onChange={handleEndDateChange}
              minValue={startDate.add({ days: 1 })}
              maxValue={startDate.add({ days: 30 })}
            />
            <Input
              type="number"
              label="Number of guests"
              value={guests}
              onChange={(e) => setGuests(Math.max(1, parseInt(e.target.value)))}
              min={1}
              max={4}
            />
          </div>

          {error && <p className="text-red-500 mt-2">{error}</p>}
          
          <div className="mt-4">
            <p className="text-lg">Total days: {totalDays}</p>
            <p className="text-xl font-bold">Total Price: ₹{totalPrice}</p>
          </div>
        </CardBody>
        <CardFooter>
          <Button color="primary" disabled={!!error} onPress={handleBooking}>
            Book Now
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default RoomDetails;