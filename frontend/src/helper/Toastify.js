
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const toastifyError =(message)=>{
    return toast.error(message,{autoClose:3000})
}
export const toastifySuccess =(message)=>{
    return toast.success(message,{autoClose:3000})
}