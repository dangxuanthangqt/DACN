import axiosService from "services/axios/axiosService"

export const addNewRoom =(data)=>{
    return axiosService.post("/api/rooms", data);
}
export const editRoom=(data)=>{
    return axiosService.put("/api/rooms", data);
}
export const getRoomFollowID=(id)=>{
    return axiosService.get(`/api/rooms/${id}`);
}
export const deleteRoom =(id)=>{
    return axiosService.delete(`/api/rooms/${id}`);
}
export const getAllRoomByBrandId=(id)=>{
    return axiosService.get(`/api/rooms/brand/${id}`);
}