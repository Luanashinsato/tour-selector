// Task 3: Rendering Tour Cards and implementing a "Not Interested" button
import React, { useState } from 'react'; // Importing React and useState

// Creating a TourCard component to display individual tour details
const TourCard = ({ id, image, info, price, name, onRemove }) => { 
  const [readMore, setReadMore] = useState(false); // State to manage read more functionality

  return (
    <article className="tour-card"> 
        <img src={image} alt={name} /> {/* Display the tour image */}
        <footer>
            {/* Display the tour name and price */}
            <div className="tour-info">
                <h4>{name}</h4>
                <h4 className="tour-price">${price}</h4>
            </div>
            <p>
                {readMore ? info : `${info.substring(0, 150)}...`} 
                <button onClick={() => setReadMore(!readMore)}> / {/* Button to toggle between showing the full description or shortened version */}
                {readMore ? 'Show Less' : 'Read More'}
                </button>
            </p>
            <button className="btn" onClick={() => onRemove(id)}> {/* Button to remove the tour from the list */}
                Not Interested
            </button>
        </footer>
    </article>
    );
};

export default TourCard; // Exporting the TourCard component