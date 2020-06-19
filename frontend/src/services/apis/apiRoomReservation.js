import axiosService from "services/axios/axiosService";

export const getAllRoom_RoomReservationByBrand = (id) => {
  return axiosService.get(`/api/rooms/room-reservation/brand/${id}`);
};
