
// const BASE_URL = 'https://auto-wheel-be.vercel.app'
const BASE_URL = 'http://localhost:5000'

export const API_ENDPOINTS = {
    MAKES: `${BASE_URL}/api/browes-by-make`,
    BODIES: `${BASE_URL}/api/browes-by-body`,
    VEHICLES_TYPE: (type) => {
      let url = `${BASE_URL}/api/vehicle/vehicles-by-type`;
      if (type) {
        url += `?type=${encodeURIComponent(type)}`;
      }
      return url;
    },
    VEHICLES_Listing:`${BASE_URL}/api/vehicle`,
    COMPARISONS: 'https://fakestoreapi.com/products',
    INSTANT_USED_CARS: 'https://fakestoreapi.com/products',
    VIDEOS: 'https://fakestoreapi.com/products',
    BLOGS: 'https://fakestoreapi.com/products',
    SIGNUP:`${BASE_URL}/api/user/register`,
    VERIFY_OTP:`${BASE_URL}/api/user/verify-user`
  };
  