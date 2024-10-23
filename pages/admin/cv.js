// pages/admin/cv.js
import { useEffect, useState } from "react";

const CVManagement = () => {
  const [cvs, setCvs] = useState([]);

  useEffect(() => {
    // Fetch daftar CV dari backend
    const fetchCVs = async () => {
      try {
        const res = await fetch("/api/admin/cv", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const data = await res.json();
        if (res.ok) {
          setCvs(data.cvs);
        } else {
          alert(data.message);
        }
      } catch (error) {
        console.error("Error fetching CVs:", error);
      }
    };

    fetchCVs();
  }, []);

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this CV?")) return;

    try {
      const res = await fetch(`/api/admin/cv/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = await res.json();
      if (res.ok) {
        setCvs(cvs.filter((cv) => cv.id_cv !== id));
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error deleting CV:", error);
    }
  };

  return (
    <div>
      <h1>CV Management</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Full Name</th>
            <th>User</th>
            <th>Template</th>
            <th>Created At</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cvs.map((cv) => (
            <tr key={cv.id_cv}>
              <td>{cv.id_cv}</td>
              <td>{cv.full_name}</td>
              <td>{cv.username}</td>
              <td>{cv.template_name}</td>
              <td>{new Date(cv.created_at).toLocaleDateString()}</td>
              <td>
                {/* Tambahkan tombol lihat detail atau edit jika diperlukan */}
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(cv.id_cv)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CVManagement;
