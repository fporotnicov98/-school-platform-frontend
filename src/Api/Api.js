import * as axios from 'axios'

const instanse = axios.create({
    baseURL: 'https://polite-sorry-46259.herokuapp.com/api',
    withCredentials: true,
})

export const authAPI = {
    moderatorRegist(fio, login, password) {
        return instanse.post(`/auth/moderatorReg`, {fio, login, password})
    },
    studentRegist(fio, login, email, mobileNumber, password) {
        return instanse.post(`/auth/studentReg`, {fio, login, email, mobileNumber, password})
    },
    teacherRegist(fio, login, email, mobileNumber, subject, password) {
        return instanse.post(`/auth/teacherReg`, {fio, login, email, mobileNumber, subject, password})
    },
    login(login, password) {
        return instanse.post(`/auth/login`, { login, password })
    },
    getAuth(token) {
        return instanse.get(`...`, { headers: { "Authorization": `Bearer ${token}` } })
    },
}