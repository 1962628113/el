import axios from 'axios'
// import config from '../config'
const axio = axios.create(
    {
        timeout: 10 * 1000,
    }
);
// axio.interceptors.response.use(
//     (response) => {
//     return response
//     },
//     error => {
//         if (error.response) {
//             if(error.response.status === 401){
//                 window.location.href = `${config.baseUrl}/api/oauth2/authorization/ua`
//             }
//         }
//     }
// );
export default  axio;
