import React from "react";
import { useParams } from "react-router-dom";
const fetchVan = async function (id) {
    try {
        const response = await fetch(`/api/vans/${id}`);
        const data = await response.json();
        console.log('data', data.vans);
        return data.vans || {};
    } catch (err) {
        console.log(err);
        return { name: 'Van not found' };
    } finally {
        console.log('done');
    }

};
export default function VanDetail() {
    const params = useParams();
    console.log('useParams', params);
    const [vanDetail, setVanDetail] = React.useState({});

    React.useEffect(() => {
        const fetchData = async () => {
            const data = await fetchVan(params.id);
            setVanDetail(data);
        };
        fetchData();
    }, [params.id]);
    return (
        <div className="van-detail-container">
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