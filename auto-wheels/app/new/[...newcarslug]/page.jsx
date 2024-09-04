import React from 'react'
import NewCarsModule from "@/modules/new-cars/index"
import { fetchMakesAndBodies, fetchMakesByType, fetchVehiclsData } from '@/services/vehicles'
const NewCarsPage =async (params ,searchParams) => {
  const company_1 = {
    car: "Toyota",
    bike: "Suzuki",
    truck: "Forland"
  }
  const company_2 = {
    car: "Honda",
    bike: "Honda",
    truck: "ISUZU"
  }
  const makesAndBodies= await fetchMakesAndBodies(params.params.newcarslug[0])
  // const reorderedSlug = reorderSlug(params.slug);
  // let loading = true;
  console.log('<<<<<<<<<<<<<',params.params.newcarslug[0])
  const popularVehicles = await fetchVehiclsData(`/t_${params.params.newcarslug[0]}/cn_new/sb_price-asc`);
  const fetchUpComingVehicles = await fetchVehiclsData(`/t_${params.params.newcarslug[0]}/cn_new/sb_upcoming`);
  const fetchToyotaVehicles = await fetchVehiclsData(`/t_${params.params.newcarslug[0]}/cn_new/mk_${company_1[params.params.newcarslug[0]]}`);
  const fetchHondaVehicles = await fetchVehiclsData(`/t_${params.params.newcarslug[0]}/cn_new/mk_${company_2[params.params.newcarslug[0]]}`);
  const fetchMakesByTypeData = await fetchMakesByType(`${params.params.newcarslug[0]}`);
console.log('fetchUpComingVehicles',fetchUpComingVehicles)
  return (
    <NewCarsModule makes={makesAndBodies?.makes} bodies={makesAndBodies?.bodies} popularVehicles={popularVehicles} fetchUpComingVehicles={fetchUpComingVehicles}  fetchToyotaVehicles={fetchToyotaVehicles} fetchHondaVehicles={fetchHondaVehicles} fetchMakesByTypeData={fetchMakesByTypeData} params={params} searchParams={searchParams}/>
  )
}

export default NewCarsPage