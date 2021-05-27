import axios from 'axios'

import { GEO_LOCATION_API_KEY } from 'react-native-dotenv';

export default axios.create({
    
    baseURL:`https://api.opencagedata.com/geocode/v1`
});

