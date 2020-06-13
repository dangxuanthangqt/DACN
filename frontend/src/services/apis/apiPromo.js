import axiosService from "services/axios/axiosService"

export const getAllPromo =()=>{
    return axiosService.get('/api/promos');
}
export const addNewPromo=(data)=>{
    return axiosService.post('/api/promos', data);
}
export const editPromo =(data)=>{
    return axiosService.put('/api/promos', data);
}
export const deletePromo=(id)=>{
    return axiosService.delete(`/api/promos/${id}`);
}
export const getAllPromoStillActive=()=>{
    return axiosService.get("/api/promos/active");
}

