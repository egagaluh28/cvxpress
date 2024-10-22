// middleware/admin.js
import jwt from "jsonwebtoken";

const JWT_SECRET =
  "f6c4f7a886c075f0b9a7e7114c8c6b792e8dfd1d653838994a0fa5f201b2bf375058a1567ea80327cb9dae2d3fa3e7f30dfa2e8bf29eac354e57ebe6bc5ab17e"; // Ganti dengan secret key kamu

export default function adminMiddleware(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1]; // Ambil token dari header Authorization
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" }); // Jika tidak ada token, kirim 401 Unauthorized
  }

  try {
    // Verifikasi token
    const decoded = jwt.verify(token, JWT_SECRET);
    if (decoded.role !== "admin") {
      return res
        .status(403)
        .json({ message: "Access denied. You are not an admin." }); // Jika bukan admin, kirim 403 Forbidden
    }
    next(); // Lanjutkan ke middleware berikutnya atau handler
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" }); // Jika token tidak valid, kirim 401 Unauthorized
  }
}
