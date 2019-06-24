import api from './index'

// export const loginApi = () => {
//
//     return api.get('/api/oauth/authorize',{
//         headers: {
//             "Cookie" : 'sessionId=ZmU4ZWE5MWYtMWQwZi00YjdkLTlmY2UtOGM0YzAzNjkxMGFm'},
//         params : {response_type:'code',client_id:'w1r233r',redirect_uri:"https://www.baidu.com"}
//     })
// };

export const getUserApi = () => {
    return api.get('/api/ua-user');
};

export const logoutApi = (data) => {
    return api.get('/api/logout',{params:data});
};
