import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { getVanById } from "../../api";

export default function VanDetail() {
    const params = useParams();
    console.log('useParams', params);
    const location = useLocation();
    const [vanDetail, setVanDetail] = React.useState({});

    React.useEffect(() => {
        const fetchData = async () => {
            const data = await getVanById(params.id);
            setVanDetail(data);
        };
        fetchData();
    }, [params.id]);
    console.log('location', location);
    const search = location.state?.search || "";
    const type = location.state?.type || "all";
    return (
        <div className="van-detail-container">
            <Link
                to={`..${search}`}
                relative="path"
                className="back-button"
            >&larr; <span>Back to {type} vans</span></Link>
            {vanDetail ? (
                <div className="van-detail">
                    <img src={vanDetail.imageUrl} />
                    <i className={`van-type ${vanDetail.type} selected`}>
                        {vanDetail.type}
                    </i>
                    <h2>{vanDetail.name}</h2>
                    <p className="van-price"><span>${vanDetail.price}</span>/day</p>
                    <p>{vanDetail.description}</p>
                    <button className="link-button">Rent this van</button>
                </div>
            ) : <h2>Loading...</h2>}
        </div>
    );
}