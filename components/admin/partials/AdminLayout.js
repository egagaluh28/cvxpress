// components/admin/partials/AdminLayout.js
const AdminLayout = ({ children }) => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      {/* Tambahkan navbar, sidebar, atau elemen lain yang diperlukan */}
      <main>{children}</main>
    </div>
  );
};

export default AdminLayout;
