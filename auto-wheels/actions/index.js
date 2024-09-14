"use server"
import { fetchAPI } from '@/services/fetchAPI';
import { API_ENDPOINTS } from '@/constants/api-endpoints';

export const fetchMakesByTypeServer = async (type) => {
  try {
    const makes = await await fetchAPI(`${API_ENDPOINTS.MAKES}?type=${type}`);
    console.log('makesmakesmakes>>>>>>',makes)
    return makes;
  } catch (error) {
    console.error("Error fetching dashboard data:", error);
    return {
      makes: [],
    };
  }
};


export const postDataToServer = async (url, payload) => {
  try {
    console.log('Payload URL:', url);


    if (response.status !== 200) {
      console.error("🚀 ~ postDataToServer ~ errorData:", response.data);
      return {
        success: false,
        message: `Error ${response.status}: ${response.data.message || 'Failed to post data'}`,
      };
    }

    // Return the response data
    return {
      success: true,
      data: response.data,
    };

  } catch (error) {
    console.error("🚀 ~ postDataToServer ~ error:", error);
    return {
      success: false,
      message: 'An unexpected error occurred',
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
    console.log('<<<<<<<<<<<<<<<<',`${API_ENDPOINTS.BROWSE_VIDEOS}${params?.slug?`?slug=${params?.slug}`:''}${params?.search?`?search=${params?.search}`:''}`);
    const videos = await await fetchAPI(`${API_ENDPOINTS.BROWSE_VIDEOS}${params?.slug?`?slug=${params?.slug}`:''}${params?.search?`?search=${params?.search}`:''}`);
    return videos?.data;
  } catch (error) {
    console.error("Error fetching dashboard data:", error);
    return {
      videos: [],
    };
  }
};





