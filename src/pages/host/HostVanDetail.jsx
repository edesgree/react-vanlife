import React from "react";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";
const fetchHostVan = async function (id) {
    try {
        const response = await fetch(`/api/host/vans/${id}`);
        const data = await response.json();
        console.log('data detail', data.vans);
        return data.vans || {};
    } catch (err) {
        console.log(err);
        return { name: 'Van not found' };
    } finally {
        console.log('done');
    }
};
const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
};
export default function HostVanDetail() {
    const params = useParams();
    console.log('useParams', params);
    const [vanDetail, setVanDetail] = React.useState({});

    React.useEffect(() => {
        const fetchData = async () => {
            const data = await fetchHostVan(params.id);
            setVanDetail(data);
            console.log('vanDetail', vanDetail);
        };
        fetchData();
    }, [params.id]);
    return (
        <div className="van-detail-container">
            {vanDetail ? (
                <>
                    <section>
                        <Link
                            to=".."
                            relative="path"
                            className="back-button"
                        >&larr; <span>Back to all vans</span></Link>

                        <div className="host-van-detail-layout-container">
                            <div className="host-van-detail">
                                <img src={vanDetail.imageUrl} />
                                <div className="host-van-detail-info-text">
                                    <i
                                        className={`van-type van-type-${vanDetail.type}`}
                                    >
                                        {vanDetail.type}
                                    </i>
                                    <h3>{vanDetail.name}</h3>
                                    <h4>${vanDetail.price}/day</h4>
                                </div>
                            </div>

                            <nav className="host-van-detail-nav">

                                <NavLink
                                    to="."
                                    end
                                    style={({ isActive }) => isActive ? activeStyles : null}
                                >
                                    Details
                                </NavLink>
                                <NavLink
                                    to="pricing"
                                    style={({ isActive }) => isActive ? activeStyles : null}
                                >
                                    Pricing
                                </NavLink>
                                <NavLink
                                    to="photos"
                                    style={({ isActive }) => isActive ? activeStyles : null}
                                >
                                    Photos
                                </NavLink>
                            </nav>
                            <Outlet context={{ vanDetail }} />
                        </div>
                    </section>
                </>
            ) : <h2>Loading...</h2>}
        </div>
    );
}