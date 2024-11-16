// pages/admin/users/[id].js
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const EditUser = () => {
  const router = useRouter();
  const { id } = router.query;

  const [user, setUser] = useState({
    username: "",
    email: "",
    role: "user",
  });

  useEffect(() => {
    if (id) {
      // Fetch user data
      const fetchUser = async () => {
        try {
          const res = await fetch(`/api/admin/users/${id}`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          });
          const data = await res.json();
          if (res.ok) {
            setUser({
              username: data.user.username,
              email: data.user.email,
              role: data.user.role,
            });
          } else {
            alert(data.message);
          }
        } catch (error) {
          console.error("Error fetching user:", error);
        }
      };

      fetchUser();
    }
  }, [id]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`/api/admin/users/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(user),
      });
      const data = await res.json();
      if (res.ok) {
        alert("User updated successfully");
        router.push("/admin/users");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <div>
      <h1>Edit User</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            name="username"
            value={user.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={user.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Role</label>
          <select
            className="form-control"
            name="role"
            value={user.role}
            onChange={handleChange}>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Update User
        </button>
      </form>
    </div>
  );
};

export default EditUser;
