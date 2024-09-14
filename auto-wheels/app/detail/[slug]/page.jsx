import React from "react";
import VehicleDetailModule from "@/modules/vehicle-detail";
import { fetchVehiclDetail } from "@/services/vehicles";
import { API_ENDPOINTS } from "@/constants/api-endpoints";
const VehicleDetailPage = async({params}) => {
console.log('params>>>',params)
const slug= params?.slug ??"#"
  const detail = await fetchVehiclDetail(
    `${API_ENDPOINTS.VEHICLE_DETAIL}/${slug}`
  );

  // const listOfSimilarVehicles = await fetchSimilarVehicls(
  //   `${API_ENDPOINTS.SIMILAR_VEHICLES}/64bb97d4933cfe6cdd01ecb4`
  // );
  return <VehicleDetailModule detail={detail}  listOfSimilarVehicles={[]}/>;
};

export default VehicleDetailPage;
