import {toast, Flip} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()
export const regError = () => {
    toast.error('Пользователь с таким логином или email уже существует!', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1700,
        hideProgressBar: true,
        closeOnClick: true,
        draggable: true,
        transition: Flip
    })
}
export const authError = () => {
    toast.error('Неправильный email или пароль!', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1700,
        hideProgressBar: true,
        closeOnClick: true,
        draggable: true,
        transition: Flip
    })
}