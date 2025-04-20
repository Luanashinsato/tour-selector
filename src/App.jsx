// Creating the root component of the app
import React, { useState } from 'react'; // Importing React and useState
import Gallery from './components/Gallery'; // Importing the Gallery component
import './styles/styles.css' // Importing the CSS file for styling

const App = () => {
  const [tours, setTours] = useState([]); // State to hold the list of tours

  // Function to remove a tour from the list
  const removeTour = (id) => {
    setTours((prevTours) => prevTours.filter((tour) => tour.id !== id)); // Filtering out the tour with the given id
  };

  return (
    <main>
      <h1>Our Tours</h1> {/* Main heading of the app */}
      <Gallery tours={tours} setTours={setTours} onRemove={removeTour} /> {/* Gallery component to display the tours */} 
    </main>
  );
};

export default App; // Exporting the App component