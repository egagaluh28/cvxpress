// pages/admin/dashboard.js
import { useEffect } from "react";
import { useRouter } from "next/router";

const Dashboard = () => {
  const router = useRouter();

  useEffect(() => {
    // Fungsi untuk memeriksa token
    const checkAdminAccess = async () => {
      const token = localStorage.getItem("token"); // Ambil token dari localStorage

      // Jika tidak ada token, arahkan ke halaman login
      if (!token) {
        router.push("/login"); // Arahkan ke halaman login
        return;
      }

      try {
        // Kirim permintaan ke middleware
        const response = await fetch("/api/admin-check", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 403) {
          // Jika akses ditolak, arahkan ke halaman login
          router.push("/login");
        }
      } catch (error) {
        console.error("Error checking admin access:", error);
        router.push("/login"); // Arahkan ke halaman login jika terjadi kesalahan
      }
    };

    checkAdminAccess(); // Panggil fungsi saat komponen dimuat
  }, []);

  return <div>Welcome to Admin Dashboard</div>; // Konten halaman dashboard
};

export default Dashboard;
