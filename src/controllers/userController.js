import * as userService from "../services/userService.js";
import { success, error } from "../utils/response.js";

export const create = async (req, res) => {
  try {
    const newUser = await userService.createUser(req.body);
    // tạo validate cho user
    if (!newUser)
      return error(res, "Lỗi tạo người dùng", 400, "INVALID_USER_DATA");
    return success(res, "Tạo người dùng thành công", newUser, 201);
  } catch (err) {
    return error(res, "Lỗi tạo người dùng", 500, err.message);
  }
};
export const getAll = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    return success(res, "Lấy danh sách người dùng", users, 200);
  } catch (err) {
    return error(res, "Lỗi hệ thống", 500, err.message);
  }
};
export const getDetail = async (req, res) => {
  try {
    const user = await userService.getUserById(req.params.id);
    if (!user)
      return error(res, "Không tìm thấy người dùng", 404, "USER_NOT_FOUND");
    return success(res, "Lấy chi tiết người dùng", user, 200);
  } catch (err) {
    return error(res, "Lỗi hệ thống", 500, err.message);
  }
};
export const update = async (req, res) => {
  try {
    const updatedUser = await userService.updateUser(req.params.id, req.body);
    return success(res, "Update người dùng", updatedUser, 200);
  } catch (err) {
    return error(res, "Lỗi hệ thống", 500, err.message);
  }
};
export const remove = async (req, res) => {
  try {
    const deletedUser = await userService.deleteUser(req.params.id);
    return success(res, "Xóa người dùng", deletedUser, 200);
  } catch (err) {
    return error(res, "Lỗi hệ thống", 500, err.message);
  }
};
