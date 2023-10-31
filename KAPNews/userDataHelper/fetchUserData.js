
import axios from 'axios';

const apiUrl = 'http://ec2-100-27-39-177.compute-1.amazonaws.com:6565/kapnewsapi/users';

export const fetchUserData = async () => {
  try {
    const response = await axios.get(apiUrl);

    if (response.status === 200) {
      console.log(response.data);
      console.log(typeof response.data)
      return response.data;
      
    } else {
      console.error('Failed to fetch user data');
      return null;
    }
  } catch (error) {
    console.error('Error fetching user data:', error);
    return null;
  }
};
