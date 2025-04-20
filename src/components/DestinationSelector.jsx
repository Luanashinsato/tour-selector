// Task 2: Creating a dropdown menu populated with unique tour names
import React, { useState } from 'react'; // Importing React and useState

const DestinationSelector = ({ tours }) => {
    return (
        <section className="destination-selector">
            {/* Dropdown menu for selecting a destination */}
            <div className="filter">
                <label htmlFor="destination">Choose a Destination:</label> {/* Label for the dropdown menu */}
                <select
                    id="destination" // ID for the dropdown menu
                    value={selectedTour} // Value of the dropdown menu
                    onChange={(e) => setSelectedTour(e.target.value)} // Updates the selected destination when changed
                >
                    <option value="all">All Destinations</option> // {/* Option to show all destinations */}
                    
                    {tours.map((tour) => ( // Generate an option for each tour
                        <option key={tour.id} value={tour.name}>
                            {tour.name} {/* Display the name of the tour */}
                        </option>
                    ))}
                </select>
            </div>
        </section>
      );
};

export default DestinationSelector; // Exporting the DestinationSelector component