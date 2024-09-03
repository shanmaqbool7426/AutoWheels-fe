"use server"
import { fetchAPI } from '@/services/fetchAPI';
import { API_ENDPOINTS } from '@/constants/api-endpoints';

export const fetchMakesByTypeServer = async (type) => {
  try {
    const makes = await await fetchAPI(`${API_ENDPOINTS.MAKES}?type=${type}`);
    return makes;
  } catch (error) {
    console.error("Error fetching dashboard data:", error);
    return {
      makes: [],
    };
  }
};


export const postDataToServer = async (formData) => {
  console.log("🚀 ~ postDataToServer ~ formData:", formData);

  // Create options for the fetch request
  const options = {
    method: 'POST',
    body: formData, // No need to set Content-Type header, FormData handles it
  };

  try {
    // Perform the fetch request
    const response = await fetchAPI(API_ENDPOINTS.VEHICLE_DETAIL, options);

    // Return the response data
    console.log("🚀 ~ postDataToServer ~ response data:", response);
    return response;
  } catch (error) {
    // Log and handle errors
    console.error("🚀 ~ postDataToServer ~ error:", error);
    return {
      success: false,
      message: 'Failed to post data',
    };
  }
};





export const fetchBrowseBlogsServer = async (type) => {
  try {
    const blogs = await await fetchAPI(`${API_ENDPOINTS.BROWSE_BLOGS}${type?`?type=${type}`:''}`);
    return blogs?.data;
  } catch (error) {
    console.error("Error fetching dashboard data:", error);
    return {
      blogs: [],
    };
  }
};
export const fetchVideoDataServer = async (params) => {
  try {
    const videos = await await fetchAPI(`${API_ENDPOINTS.BROWSE_VIDEOS}${params?.slug?`?slug=${params?.slug}`:''}${params?.search?`?search=${params?.search}`:''}`);
    console.log(videos,'hsdjdfhsjfhjsdhfjsdhf');
    return videos?.data;
  } catch (error) {
    console.error("Error fetching dashboard data:", error);
    return {
      videos: [],
    };
  }
};
