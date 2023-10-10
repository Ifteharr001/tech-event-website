import { useEffect, useState } from "react";
import Service from "./Service/Service";

const Services = () => {

    const [serviceData, setServiceData] = useState([])

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setServiceData(data))
    }, [])
    return (
      <div className="max-w-[1140px] mx-auto">
        <h1 className="text-center font-bold text-5xl my-12 ">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceData.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </div>
      </div>
    );
};

export default Services;