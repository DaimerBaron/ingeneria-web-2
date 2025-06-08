import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

class userController {
  async createUser(req, res) {
    try {
      const { name, email, password, role } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({ name, email, password: hashedPassword, role });
      await newUser.save();
      res.status(201).json({ message: "Usuario creado correctamente" });
    } catch (error) {
      res.status(500).json({ message: "Erro al crear el Usuario" });
    }
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) return res.status(401).json({ message: "Credenciales inválidas" });

      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) return res.status(401).json({ message: "Credenciales inválidas" });

      const token = jwt.sign(
        { id: user._id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );

      res.status(200).json({ token, user: { id: user._id, name: user.name, role: user.role } });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

}

export default new userController();