// pages/api/admin/users/[id].js
import jwt from "jsonwebtoken";
import mysql from "mysql2/promise";

const JWT_SECRET =
  process.env.JWT_SECRET ||
  "02dd7175f8e35db07e032b9cabff9c29c141a6c85eee55bafe5bbf7f0c333db026aafa8173e3cca4d80a771f4be5881e6bff76db2b3ea1664cc67da50027261d";

// Membuat koneksi ke database
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",npm 
  database: "cvxpress",
});

export default async function handler(req, res) {
  const { method } = req;
  const { id } = req.query;

  // Otentikasi dan verifikasi admin
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  let decoded;
  try {
    decoded = jwt.verify(token, JWT_SECRET);
    if (decoded.role !== "admin") {
      return res
        .status(403)
        .json({ message: "Access denied. You are not an admin." });
    }
  } catch (error) {
    console.error("Error verifying token:", error);
    return res.status(401).json({ message: "Invalid token" });
  }

  switch (method) {
    case "GET":
      try {
        const [user] = await db.query(
          "SELECT id_user, username, email, role FROM users WHERE id_user = ?",
          [id]
        );
        if (user.length === 0) {
          return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ user: user[0] });
      } catch (error) {
        console.error("Error fetching user:", error);
        res.status(500).json({ message: "Database error" });
      }
      break;
    case "PUT":
      try {
        const { username, email, role } = req.body;
        const [result] = await db.query(
          "UPDATE users SET username = ?, email = ?, role = ? WHERE id_user = ?",
          [username, email, role, id]
        );
        if (result.affectedRows === 0) {
          return res
            .status(404)
            .json({ message: "User not found or no changes made" });
        }
        res.status(200).json({ message: "User updated successfully" });
      } catch (error) {
        console.error("Error updating user:", error);
        res.status(500).json({ message: "Database error" });
      }
      break;
    case "DELETE":
      try {
        const [result] = await db.query("DELETE FROM users WHERE id_user = ?", [
          id,
        ]);
        if (result.affectedRows === 0) {
          return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "User deleted successfully" });
      } catch (error) {
        console.error("Error deleting user:", error);
        res.status(500).json({ message: "Database error" });
      }
      break;
    default:
      res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
