import React from "react";
import { Link, useSearchParams } from "react-router-dom";
export default function Vans() {
    const [vans, setVans] = React.useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const typeFilter = searchParams.get("type");


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
    const vansToDisplay = typeFilter ? vans.filter(van => van.type === typeFilter) : vans;

    const vanElements = (vansToDisplay || []).map((van) => (

        <div className="van-tile" key={van.id}>
            <Link to={`/vans/${van.id}`}>
                <img src={van.imageUrl} />
                <div className="van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
        </div >

    ));

    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <nav>
                <Link to="?type=simple">simple</Link>
                <Link to="?type=luxury">luxury</Link>
                <Link to="?type=rugged">rugged</Link>
            </nav>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    );
}