import axiosService from "services/axios/axiosService";

export const getAllRoom_RoomReservationByBrand = (id) => {
  return axiosService.get(`/api/rooms/room-reservation/brand/${id}`);
};
export const getRoomReservationByBrandId = (id) => {
  return axiosService.get(`/api/room-reservations/brand/${id}`);
};
export const changeStatusAPI =(id, status)=>{
  return axiosService.patch(`/api/room-reservations/${id}/status?status=${status}`)
}