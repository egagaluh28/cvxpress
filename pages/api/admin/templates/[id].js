// pages/api/admin/templates/[id].js
import jwt from "jsonwebtoken";
import mysql from "mysql2/promise";
import path from "path";
import fs from "fs";

const JWT_SECRET =
  process.env.JWT_SECRET ||
  "02dd7175f8e35db07e032b9cabff9c29c141a6c85eee55bafe5bbf7f0c333db026aafa8173e3cca4d80a771f4be5881e6bff76db2b3ea1664cc67da50027261d";

// Membuat koneksi ke database
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
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
    case "DELETE":
      try {
        // Dapatkan informasi template sebelum dihapus untuk menghapus file
        const [template] = await db.query(
          "SELECT * FROM templates WHERE id_template = ?",
          [id]
        );
        if (template.length === 0) {
          return res.status(404).json({ message: "Template not found" });
        }

        const templateFilePath = path.join(
          process.cwd(),
          "public",
          template[0].template_file
        );

        // Hapus file dari server
        fs.unlink(templateFilePath, async (err) => {
          if (err) {
            console.error("Error deleting file:", err);
            return res
              .status(500)
              .json({ message: "Error deleting template file" });
          }

          // Hapus data template dari database
          const [result] = await db.query(
            "DELETE FROM templates WHERE id_template = ?",
            [id]
          );
          if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Template not found" });
          }

          res.status(200).json({ message: "Template deleted successfully" });
        });
      } catch (error) {
        console.error("Error deleting template:", error);
        res.status(500).json({ message: "Database error" });
      }
      break;
    default:
      res.setHeader("Allow", ["DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
