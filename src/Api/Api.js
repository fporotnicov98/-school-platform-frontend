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
        return instanse.post(`/auth/login`, {login, password})
    },
    getAuth(token) {
        return instanse.get(`/auth/me`, {headers: {"Authorization": `Bearer ${token}`}})
    },
}

export const userAPI = {
    getStudents() {
        return instanse.get('/users/students')
    },
    getTeachers() {
        return instanse.get('/users/teachers')
    },
    getModerators() {
        return instanse.get('/users/moderators')
    },
    deleteUser(id) {
        return instanse.delete(`/users/deleteUser/${id}`)
    },
    updateStudent(id, fio, login, email, mobileNumber, classroom) {
        return instanse.put(`/users/updateStudent/${id}`, {fio, login, email, mobileNumber, classroom})
    },
    updateTeacher(id, fio, login, email, mobileNumber, subject, classroom) {
        return instanse.put(`/users/updateTeacher/${id}`, {fio, login, email, mobileNumber, subject, classroom})
    },
    updateModerator(id, fio, login) {
        return instanse.put(`/users/updateModerator/${id}`, {fio, login})
    }
}

export const classAPI = {
    getClasses() {
        return instanse.get(`/classroom/classrooms`)
    },
    getClassroom(id) {
        return instanse.get(`/classroom/classrooms/${id}`)
    },
    addClassroom(classNumber) {
        return instanse.post(`/classroom/addClassroom`, {classNumber})
    },
    deleteClassroom(id) {
        return instanse.delete(`/classroom/deleteClassroom/${id}`)
    },
    addStudentToClass(id, studentId, fio, login, email, mobileNumber) {
        return instanse.post(`/classroom/classrooms/${id}/addStudent`, {studentId, fio, login, email, mobileNumber})
    },
    addTeacherToClass(id, teacherId, fio, login, email, mobileNumber, subject) {
        return instanse.put(`/classroom/classrooms/${id}/addTeacher`, {teacherId, fio, login, email, mobileNumber, subject})
    },
    deleteStudentToClass(classId, studentId) {
        return instanse.delete(`/classroom/classrooms/${classId}/deleteStudent/${studentId}`)
    },
    addMessage(classId, authorId, date, message) {
        return instanse.post(`/classroom/classrooms/${classId}/addMessage`, {authorId, date, message})
    },

}