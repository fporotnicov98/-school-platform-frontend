import {toast, Flip} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()
export const regError = (text) => {
    toast.error(text, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1700,
        hideProgressBar: true,
        closeOnClick: true,
        draggable: true,
        transition: Flip
    })
}
export const authError = (text) => {
    toast.error(text, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1700,
        hideProgressBar: true,
        closeOnClick: true,
        draggable: true,
        transition: Flip
    })
}