// Task 1: Fetching & Storing Tour Data using fetch() and useEffect()
import React, { useEffect, useState } from 'react'; // Importing React and hooks
import TourCard from './TourCard'; // Importing TourCard component

const Gallery = ({ tours, setTours, onRemove }) => {
    const [loading, setLoading] = useState(true); // State to manage loading
    const [error, setError] = useState(false); // State to manage error

    const fetchTours = async () => { // Writing a function to fetch tours
        try {
            const res = await fetch('https://www.course-api.com/react-tours-project'); // Fetching data from API
            const data = await res.json(); // Parsing response data
            setTours(data);
            setLoading(false);
        } catch (error) { // Handling errors
            setError(true);
            setLoading(false);
        }
    };
    
    // Fetching tours when the component mounts
    useEffect(() => {
        fetchTours();
    }, []);

    // Rendering loading state
    if (loading) {
        return <h2>Loading...</h2>;
    }   

    // Rendering error state
    if (error) {
        return <h2>Something went wrong. Please try again later.</h2>;
    }

    // Task 4: Resetting view if all cards are removed
    // Rendering tours or no tours left
    if (tours.length === 0)
        return (
          <div>
            <h2>No Tours Left</h2>
            <button onClick={fetchTours}>Refresh</button>
          </div>
    );

    // Task 3: Rendering Tour Cards
    // Rendering the gallery of tours
    return (
        <section className="gallery">
            <div className="gallery-container">
                {tours.map((tour) => ( // Mapping through tours to create TourCard components
                    <TourCard key={tour.id} {...tour} onRemove={onRemove} /> // Passing tour data as props to TourCard
                ))}
            </div>
        </section>
    )
};

export default Gallery; // Exporting the Gallery component