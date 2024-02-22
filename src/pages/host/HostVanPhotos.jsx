
import { useOutletContext } from "react-router-dom";
export default function HostVanPhotos() {
    const { vanDetail } = useOutletContext();
    return (
        <section>
            <img src={vanDetail.imageUrl} className="host-van-detail-image" />

        </section>
    );
}