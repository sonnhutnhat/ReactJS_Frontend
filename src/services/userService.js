import axios from '../axios'

const handleLoginApi = (userEmail, userPassword) => {
    return axios.post('/api/login', { email: userEmail, password: userPassword });
}

const getAllUsers = (inputId) => {
    return axios.get(`/api/get-all-users?id=${inputId}`)
}

const creatNewUserService = (data) => {
    console.log('check', data)
    return axios.post('/api/create-new-user', data)
}

const editUserService = (data) => {
    return axios.put('/api/edit-user', data);
}

const deleteUserService = (userId) => {
    return axios.delete('/api/delete-user', {
        data: { id: userId }
    });
}
const getAllCodeService = (inputType) => {
    return axios.get(`/api/allcode?type=${inputType}`)
}


export { handleLoginApi, getAllUsers, creatNewUserService, editUserService, deleteUserService, getAllCodeService } 