// pages/admin/dashboard.js
import { useEffect, useState } from 'react';

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalCVs: 0,
    totalTemplates: 0,
  });

  useEffect(() => {
    // Fetch statistik dari backend
    const fetchStats = async () => {
      try {
        const res = await fetch('/api/admin/stats', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        const data = await res.json();
        if (res.ok) {
          setStats(data);
        } else {
          alert(data.message);
        }
      } catch (error) {
        console.error('Error fetching stats:', error);
      }
    };

    fetchStats();
  }, []);

  return (
    <div>
      <h1>Dashboard Overview</h1>
      <div className="row">
        <div className="col-md-4">
          <div className="card text-white bg-primary mb-3">
            <div className="card-header">Total Users</div>
            <div className="card-body">
              <h5 className="card-title">{stats.totalUsers}</h5>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-white bg-success mb-3">
            <div className="card-header">Total CVs</div>
            <div className="card-body">
              <h5 className="card-title">{stats.totalCVs}</h5>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-white bg-warning mb-3">
            <div className="card-header">Total Templates</div>
            <div className="card-body">
              <h5 className="card-title">{stats.totalTemplates}</h5>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
};

export default Dashboard;
