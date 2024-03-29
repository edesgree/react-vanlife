
import { useOutletContext } from "react-router-dom";
export default function HostVanInfo() {
    const { vanDetail } = useOutletContext();
    return (
        <section className="host-van-detail-info">
            <h4>Name: <span>{vanDetail.name}</span></h4>
            <h4>Category: <span>{vanDetail.type}</span></h4>
            <h4>Description: <span>{vanDetail.description}</span></h4>
            <h4>Visibility: <span>Public</span></h4>
        </section>
    );
}