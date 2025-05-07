import React from "react";
import { useParams, Navigate } from "react-router-dom";
import DestinationLayout from "../../components/templates/DestinationLayout";
import { destinationPageData } from "../../data/destinationPageData";
import { destinationsData } from "../../data/educationData";

const DestinationDetails = () => {
  const { slug } = useParams();
  const destinationData = destinationPageData[slug];
  const destination = destinationsData.find(
    (item) => item.title.toLowerCase() === slug.toLowerCase()
  );
  console.log(destination);

  if (!destinationData) {
    return <Navigate to="/destinations" replace />;
  }

  return <DestinationLayout data={destinationData} image={destination.image}/>;
};

export default DestinationDetails;
