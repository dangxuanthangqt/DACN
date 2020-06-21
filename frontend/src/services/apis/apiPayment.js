import axiosService from "services/axios/axiosService"

export const apiPayment =(id)=>{
    return axiosService.patch(`/api/reservations/${id}/status`)
}