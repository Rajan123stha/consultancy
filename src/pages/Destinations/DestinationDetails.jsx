import React from "react";
import { useParams, Navigate } from "react-router-dom";
import DestinationLayout from "../../components/templates/DestinationLayout";
import { destinationPageData } from "../../data/destinationPageData";

const DestinationDetails = () => {
  const { slug } = useParams();
  const destinationData = destinationPageData[slug];

  if (!destinationData) {
    return <Navigate to="/destinations" replace />;
  }

  return <DestinationLayout data={destinationData} />;
};

export default DestinationDetails;
