import User from "../models/userModel.js";

// 1. Tạo User mới
export const createUser = async (data) => {
    return await User.create(data);
};

// 2. Lấy tất cả User
export const getAllUsers = async () => {
    return await User.find().select('-password');
};
// 3. Lấy chi tiết User
export const getUserById = async (id) => {
    return await User.findById(id).select('-password');
};
// 4. Update User
export const updateUser = async (id, data) => {
    return await User.findByIdAndUpdate(id, data, { new: true });
};
// 5. Xoá User
export const deleteUser = async (id) => {
    return await User.findByIdAndDelete(id);
};
