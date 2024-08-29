import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import ContactForm from './ContactForm'; // Import ContactForm component

const Contact = () => {
  return (
    <div className="container mx-auto p-4 md:p-6 lg:p-8 h-screen flex flex-col">
      <h1 className="text-3xl font-semibold text-black mb-4">
        Contact Us
      </h1>
      <div className="flex-1 flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 xl:w-1/3 p-4 md:h-screen xl:h-screen">
          <div className="sticky top-0 h-80 w-full"> {/* Add sticky container */}
            <MapContainer
              center={[37.7749, -122.4194]}
              zoom={13}
              className="h-full w-full"
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a>"
              />
              <Marker position={[37.7749, -122.4194]}>
                <div>
                  <h2>Our Location</h2>
                  <p>123 Main St, San Francisco, CA 94105</p>
                </div>
              </Marker>
            </MapContainer>
          </div>
        </div>
        <div className="w-full md:w-1/2 xl:w-2/3 p-4 md:overflow-y-auto">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;