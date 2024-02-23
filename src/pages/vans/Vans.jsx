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
            <Link to={van.id} state={{ search: `?${searchParams.toString()}`, type: typeFilter }}>
                <img src={van.imageUrl} />
                <div className="van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
        </div >
    ));
    function handleFilterChange(key, value) {
        setSearchParams(prevParams => {
            if (value === null) {
                prevParams.delete(key);
            } else {
                prevParams.set(key, value);
            }
            return prevParams;
        });
    }
    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className="van-list-filter-buttons">
                <button
                    onClick={() => handleFilterChange("type", "simple")}
                    className={`
                    van-type simple 
                    ${typeFilter === 'simple' ? 'selected' : null}
                    `}
                >Simple</button>
                <button
                    onClick={() => handleFilterChange("type", "luxury")}

                    className={`
                    van-type luxury 
                    ${typeFilter === 'luxury' ? 'selected' : null}
                    `}
                >Luxury</button>
                <button
                    onClick={() => handleFilterChange("type", "rugged")}
                    className={`
                    van-type rugged 
                    ${typeFilter === 'rugged' ? 'selected' : null}
                    `}
                >Rugged</button>

                {typeFilter ? (
                    <button
                        onClick={() => handleFilterChange("type", null)}
                        className="van-type clear-filters"
                    >Clear filter</button>
                ) : null}

            </div>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    );
}