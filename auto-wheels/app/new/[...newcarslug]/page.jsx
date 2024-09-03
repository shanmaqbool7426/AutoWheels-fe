import React from 'react'
import NewCarsModule from "@/modules/new-cars/index"
import { fetchMakesAndBodies, fetchMakesByType, fetchVehiclsData } from '@/services/vehicles'
const NewCarsPage =async (params ,searchParams) => {
  const makesAndBodies= await fetchMakesAndBodies()
  // const reorderedSlug = reorderSlug(params.slug);
  // let loading = true;
  const popularVehicles = await fetchVehiclsData('/t_car/cn_new/sb_price-asc');
  const fetchUpComingVehicles = await fetchVehiclsData('/t_car/cn_new/sb_upcoming');
  const fetchToyotaVehicles = await fetchVehiclsData('/t_car/cn_new/mk_toyota');
  const fetchHondaVehicles = await fetchVehiclsData('/t_car/cn_new/mk_honda');
  const fetchMakesByTypeData = await fetchMakesByType('car');

  return (
    <NewCarsModule makes={makesAndBodies?.makes} bodies={makesAndBodies?.bodies} popularVehicles={popularVehicles} fetchUpComingVehicles={fetchUpComingVehicles}  fetchToyotaVehicles={fetchToyotaVehicles} fetchHondaVehicles={fetchHondaVehicles} fetchMakesByTypeData={fetchMakesByTypeData} params={params} searchParams={searchParams}/>
  )
}

export default NewCarsPage