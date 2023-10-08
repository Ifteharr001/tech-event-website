

import { useEffect, useState } from "react";
import DetailsCard from "./DetailsCard";

const ServiceDetail = () => {
    const [detailsData, setDetailsData] = useState([]);

    useEffect(() => {
      fetch("/data.json")
        .then((res) => res.json())
        .then((data) => setDetailsData(data));
    }, []);
    return (
        <div>
            {
                detailsData.map(detailData => <DetailsCard
                    key={detailData.id}
                    detailData = {detailData}
                ></DetailsCard>)
            }
        </div>
    );
};

export default ServiceDetail;