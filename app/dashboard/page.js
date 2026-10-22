"use client";

import { useState, useEffect } from "react";

export default function DashboardPage() {
  const [user, setUser] = useState(null);

  // โหลดข้อมูลผู้ใช้ที่ Login อยู่จาก API
  useEffect(() => {
    fetch("/api/me")
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []);

  // ให้เซิร์ฟเวอร์ลบ cookie แล้วไปหน้า login
  const handleLogout = async () => {
    await fetch("/api/logout", { method: "POST" });
    window.location.href = "/login"; // โหลดหน้าใหม่ ล้างหน้าที่ cache ไว้
  };

  if (!user) {
    return <main className="loading">กำลังโหลด...</main>;
  }

  return (
    <main className="dash">
      <div className="dash-head">
        <div className="avatar">{user.fullname?.trim().charAt(0).toUpperCase()}</div>
        <div>
          <h1>สวัสดี, {user.fullname}</h1>
          <p>นี่คือพื้นที่สมาชิกของคุณ</p>
        </div>
      </div>

      <div className="dash-grid">
        <div className="tile">
          <span>ชื่อ</span>
          <strong>{user.fullname}</strong>
        </div>
        <div className="tile">
          <span>อีเมล</span>
          <strong>{user.email}</strong>
        </div>
        <div className="tile">
          <span>รหัสสมาชิก</span>
          <strong>#{user.id}</strong>
        </div>
      </div>

      <button className="btn btn-outline" onClick={handleLogout}>
        ออกจากระบบ
      </button>
    </main>
  );
}
