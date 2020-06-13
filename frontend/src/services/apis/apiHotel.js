import axiosService from "services/axios/axiosService"


export const getAllHotel =()=>{
    return axiosService.get("/api/hotels");
}
export const getHotelFollowID=(id)=>{
    return axiosService.get(`/api/hotels/${id}`)
}