const User = require("../models/user.model");
const mongoose = require("mongoose");

class UserManager {
  async createUser(data) {
    //! |***********************|
    //* |***********************|
    //! |****** CODE AQUI ******|
    //* |***********************|
    //! |***********************|
  }

  async getAllUsers() {
    //! |***********************|
    //* |***********************|
    //! |****** CODE AQUI ******|
    //* |***********************|
    //! |***********************|
  }

  async getUserById(id) {
    //! |***********************|
    //* |***********************|
    //! |****** CODE AQUI ******|
    //* |***********************|
    //! |***********************|
  }

  async getUserByDni(dni) {
    try {
      return await User.findOne({ dni });
    } catch (error) {
      console.error("Error buscando por DNI:", error);
      return null;
    }
  }

  async updateUserById(id, data) {
    try {
      if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new Error("ID no válido");
      }
      return await User.findByIdAndUpdate(id, data, { new: true });
    } catch (error) {
      console.error("Error actualizando:", error);
      throw new Error("Error al actualizar");
    }
  }

  async deleteUserById(id) {
    try {
      return await User.findByIdAndDelete(id);
    } catch (error) {
      console.error("Error eliminando:", error.message);
      return null;
    }
  }
}

module.exports = UserManager;
