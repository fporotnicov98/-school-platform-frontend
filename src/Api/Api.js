import * as axios from 'axios'

const instanse = axios.create({
    baseURL: 'http://localhost:80',
    withCredentials: true,
})

export const authAPI = {
    registration(fio, login, email, mobileNumber, role, password) {
        return instanse.post(`/api/auth/registration`, {fio, login, email, mobileNumber, role, password})
    },
    // login(login, password) {
    //     return instanse.post(`/api/auth/login`, { login, password })
    // },
    // getAuth(token) {
    //     return instanse.get(`...`, { headers: { "Authorization": `Bearer ${token}` } })
    // },
}