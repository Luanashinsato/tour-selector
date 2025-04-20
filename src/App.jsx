// Creating the root component of the app
import React, { useState } from 'react'; // Importing React and useState
import Gallery from './components/Gallery'; // Importing the Gallery component
import DestinationSelector from './components/DestinationSelector'; // Importing the DestinationSelector component
import './styles/styles.css' // Importing the CSS file for styling

const App = () => {
  const [tours, setTours] = useState([]); // State to hold the list of tours
  const [selectedTour, setSelectedTour] = useState('all'); // State to hold the selected tour

  // Function to filter tours based on the selected destination
  const filteredTours = selectedTour === 'all' ? tours : tours.filter((tour) => tour.name === selectedTour); // Filtering tours based on the selected destination

  // Function to remove a tour from the list
  const removeTour = (id) => {
    setTours((prevTours) => {
      const updatedTours = prevTours.filter((tour) => tour.id !== id); // Filtering out the tour with the given id
      if (
        selectedTour !== 'all' && // Checking if the selected tour is not 'all'
        updatedTours.filter((tour) => tour.name === selectedTour).length === 0) {
        setSelectedTour('all'); // Resetting the selected tour to 'all' if no tours are left
      }
      return updatedTours; // Returning the updated list of tours
    });
  };

  return (
    <main>
      <h1>Our Tours</h1> {/* Main heading of the app */}
      <DestinationSelector tours={tours} selectedTour={selectedTour} setSelectedTour={setSelectedTour} /> {/* DestinationSelector component to filter tours */}
      <Gallery tours={filteredTours} setTours={setTours} onRemove={removeTour} /> {/* Gallery component to display the tours */} 
    </main>
  );
};

export default App; // Exporting the App component