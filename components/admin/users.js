// pages/users.js
import { useEffect, useState } from "react";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Ambil data dari server Express
    axios
      .get("http://localhost:3001/api/admin/users") // Perbarui URL ke admin
      .then((response) => {
        setUsers(response.data.users); // Ambil data users dari respons
      })
      .catch((error) => {
        console.error("Terjadi kesalahan:", error.response ? error.response.data : error.message);
        setError("Gagal mengambil data pengguna."); // Set error jika ada masalah
      });
  }, []);

  return (
    <div>
      <h1>Data Pengguna</h1>
      {error && <p>{error}</p>} {/* Tampilkan pesan error jika ada */}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nama</th>
            <th>Email</th>
            {/* Tambahkan kolom lain sesuai tabel users */}
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id_user}> {/* Ganti dengan id_user */}
              <td>{user.id_user}</td> {/* Ganti dengan id_user */}
              <td>{user.username}</td> {/* Ganti dengan username */}
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
