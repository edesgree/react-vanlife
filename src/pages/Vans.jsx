import React from "react";

export default function Vans() {
    const [vans, setVans] = React.useState([]);

    React.useEffect(() => {
        fetch("/api/vans")
            .then((response) => response.json())
            .then((data) => {
                console.log('data', data);
                if (Array.isArray(data.vans)) {
                    setVans(data.vans);
                } else {
                    console.error("Data received from API is not an array:", data);
                }

            });
    }, []);
    console.log('vans', vans);
    const vanList = (vans || []).map((van) => (
        <div key={van.id} className="van-card">
            <img src={van.imageUrl
            } alt={van.name} />
            <h3>{van.name}</h3>
            <p>{van.description}</p>
            <p>Price: ${van.price}<br />Type: {van.type}</p>
        </div>
    ));

    return (
        <div className="about-page-container">
            <h1>Vans page</h1>
            <div>{vanList}</div>
        </div>
    );
}