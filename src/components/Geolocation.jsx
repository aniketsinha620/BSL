
import React, { useState } from 'react';
import { OpenStreetMapProvider } from 'leaflet-geosearch';

const Geolocation = () => {
    const provider = new OpenStreetMapProvider();
    const [text, setText] = useState('');
    const [text1, setText1] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [source, setSource] = useState([]);
    const [destination, setDestination] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const results = await provider.search({ query: text });
        const cityResults = await provider.search({ query: text1 });

        if (results.length > 0 && cityResults.length > 0) {
            setSearchResults(results);
            const newX = results[0].x;
            const newY = results[0].y;
            setSource([...source, newX, newY]);
            console.log(source)

            const cityX = cityResults[0].x;
            const cityY = cityResults[0].y;
            setDestination([...destination, cityX, cityY])
            console.log(destination)

        } else {
            console.log("No results found.");
        }
    };




    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <input
                    type="text"
                    value={text1}
                    onChange={(e) => setText1(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>

            {/* <div>
            {searchResults.map((item) => (
              <p key={item.label}>{item.label}</p>
            ))}
          </div> */}
        </>
    );
};

export default Geolocation;
