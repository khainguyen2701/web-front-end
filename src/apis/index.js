export * from "./mock";
import { axiosInstance } from "./config";

export const getBoardDetailsAPI = async (boardId) => {
  const res = await axiosInstance.get(`/v1/boards/${boardId}`);
  return res.data;
};
