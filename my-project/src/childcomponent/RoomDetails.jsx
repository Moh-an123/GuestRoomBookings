import { Button, Card, CardBody, CardFooter, CardHeader, DateInput, Input, Checkbox, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from '@nextui-org/react';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { CalendarDate, parseDate, today, getLocalTimeZone } from "@internationalized/date";
import ImageGallery from './ImageGallery';
import img from '../assets/guestroom2.jpeg'
import img1 from '../assets/guestroom1studioashby.jpeg'
import img2 from '../assets/guestroom3.jpeg'
import img3 from '../assets/guestroom4.jpeg'

const RoomDetails = () => {
  const location = useLocation();
  const { room } = location.state;

  const tomorrow = today(getLocalTimeZone()).add({ days: 1 });
  const [startDate, setStartDate] = useState(tomorrow);
  const [endDate, setEndDate] = useState(tomorrow.add({ days: 2 }));
  const [totalPrice, setTotalPrice] = useState(room.price);
  const [error, setError] = useState('');
  const [guests, setGuests] = useState(1);
  const [breakfast, setBreakfast] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
const [totaldays,setTotaldays]=useState(2);
  useEffect(() => {
    const days = endDate.compare(startDate) + 1;
    if (days < 2 || days > 30) {
      setError('Booking must be between 2 and 30 days.');
      setTotalPrice(0);
    } else {
      setError('');
      let price = days * room.price;
      if (breakfast) price += days * guests * 200; // Breakfast costs 200 per person per day
      setTotalPrice(price);
      setTotaldays(days);
    }
  }, [startDate, endDate, room.price, guests, breakfast]);

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
    onOpen();
  };

  return (
    <div className='m-10'>
      <Card className='shadow-lg'>
        <CardHeader>
          <h1 className="text-2xl font-bold">Room Name: {room.name}</h1>
        </CardHeader>
        <CardBody>
          <h3 className="text-xl mb-2">Location: {room.location}</h3>
          <h4 className="text-lg mb-4">Base Price: ₹{room.price}/night</h4>
          <ImageGallery images={[img,img1,img2,img3]} />
          <div className="mt-4">
            <h3 className="text-xl font-semibold mb-2">Amenities:</h3>
            <ul className="list-disc list-inside">
              <li>Free Wi-Fi</li>
              <li>Air Conditioning</li>
              <li>Flat-screen TV</li>
              <li>Mini Bar</li>
            </ul>
          </div>
        </CardBody>        <CardFooter className='flex flex-col'>
          <div className="flex mb-8 flex-wrap md:flex-nowrap gap-4 w-full">
            <DateInput
              label="Check-in date"
              isRequired
              value={startDate}
              onChange={handleStartDateChange}
              minValue={tomorrow}
              className="flex-1"
            />
            <DateInput
              label="Check-out date"
              isRequired
              value={endDate}
              onChange={handleEndDateChange}
              minValue={startDate.add({ days: 1 })}
              maxValue={startDate.add({ days: 30 })}
              className="flex-1"
            />
            <Input
              type="number"
              label="Number of guests"
              value={guests}
              onChange={(e) => setGuests(Math.max(1, parseInt(e.target.value)))}
              min={1}
              max={4}
              className="flex-1"
            />
          </div>
          <div className="flex gap-4 mb-4">
            <Checkbox isSelected={breakfast} onValueChange={setBreakfast}>
              Breakfast (₹200/person/day)
            </Checkbox>
          </div>
          {error && <p className="text-red-500 mb-2">{error}</p>}
          <h1 className="text-2xl font-bold mb-4">No of days: {totaldays}Days</h1>
          <h1 className="text-2xl font-bold mb-4">Total Price: ₹{totalPrice}</h1>
          <Button color='primary' size="lg" disabled={!!error} onPress={handleBooking}>Book Now</Button>
        </CardFooter>
      </Card>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">Booking Confirmation</ModalHeader>
          <ModalBody>
            <p>Room: {room.name}</p>
            <p>Check-in: {startDate.toString()}</p>
            <p>Check-out: {endDate.toString()}</p>
            <p>Guests: {guests}</p>
            <p>Breakfast: {breakfast ? 'Yes' : 'No'}</p>
            <p className="font-bold">Total Price: ₹{totalPrice}</p>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="light" onPress={onClose}>
              Cancel
            </Button>
            <Button color="primary" onPress={onClose}>
              Confirm Booking
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default RoomDetails;