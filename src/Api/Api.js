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
    updateStudent(id, fio, login, email, mobileNumber, classId,classNumber) {
        return instanse.put(`/users/updateStudent/${id}`, {fio, login, email, mobileNumber, classId, classNumber})
    },
    updateTeacher(id, fio, login, email, mobileNumber, subject, classId,classNumber) {
        return instanse.put(`/users/updateTeacher/${id}`, {fio, login, email, mobileNumber, subject, classId,classNumber})
    },
    updateModerator(id, fio, login) {
        return instanse.put(`/users/updateModerator/${id}`, {fio, login})
    },
    getTeacherInfo() {
        return instanse.get(`/users/teachersSubjects`)
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
    addStudentToClass(id, studentId, fio, login, email, mobileNumber, classNumber) {
        return instanse.post(`/classroom/classrooms/${id}/addStudent`, {
            studentId,
            fio,
            login,
            email,
            mobileNumber,
            classNumber
        })
    },
    addTeacherToClass(id, teacherId, fio, login, email, mobileNumber, subject, classNumber) {
        return instanse.put(`/classroom/classrooms/${id}/addTeacher`, {
            teacherId,
            fio,
            login,
            email,
            mobileNumber,
            subject,
            classNumber
        })
    },
    deleteStudentToClass(classId, studentId) {
        return instanse.delete(`/classroom/classrooms/${classId}/deleteStudent/${studentId}`)
    }
}

export const messageAPI = {
    addMessage(classId, authorFio, authorId, date, message) {
        return instanse.post(`/classroom/classrooms/${classId}/addMessage`, {authorFio, authorId, date, message})
    },
    deleteMessage(classId, messageId) {
        return instanse.delete(`/classroom/classrooms/${classId}/deleteMessage/${messageId}`)
    },
    updateMessage(classId, messageId, message) {
        return instanse.put(`/classroom/classrooms/${classId}/updateMessage/${messageId}`, {message})
    }
}

export const scheduleAPI = {
    getSchedule() {
        return instanse.get(`/schedule/getSchedules`)
    },
    getScheduleItem(id) {
        return instanse.get(`/schedule/getSchedule/${id}`)
    },
    addSchedule(classNumber, classId) {
        return instanse.post(`/schedule/addSchedule`, {classNumber, classId})
    },
    updateSchedule(id, day, subjects) {
        return instanse.put(`/schedule/updateSchedule/${id}`, {day, subjects})
    },
    deleteSchedule(id) {
        return instanse.delete(`/schedule/deleteSchedule/${id}`)
    }
}

export const taskAPI = {
    getTasks(){
        return instanse.get('/task/getTasks')
    },
    getTaskItem(taskId){
        return instanse.get(`/task/${taskId}`)
    },
    updateTask(taskId,taskTitle,taskText,editedDate){
        return instanse.put(`/task/updateTask/${taskId}`,{taskTitle,taskText,editedDate})
    },
    addTask(classNumber,publicDate,deadlineDate,subject,teacher,taskTitle,taskText){
        return instanse.post(`/task/addTask`,{classNumber,publicDate,deadlineDate,subject,teacher,taskTitle,taskText})
    },
    deleteTask(taskId){
        return instanse.delete(`/task/deleteTask/${taskId}`)
    }
}

export const homeworkAPI = {
    getHomeworks(){
        return instanse.get('/homework/getHomeworks')
    },
    getHomeworkItem(id){
        return instanse.get(`/homework/${id}`)
    },
    setMark(id,teacherDesc){
        return instanse.put(`/homework/setMark/${id}`,{teacherDesc})
    },
    addHomework(classNumber,taskId, student, publicDate, subject, teacher,answerToTask, deadlineDate, taskTitle){
        return instanse.post(`/homework/addHomework`,{classNumber,taskId, student, publicDate, subject, teacher,answerToTask, deadlineDate,taskTitle})
    }
}