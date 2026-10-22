"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // ส่งอีเมลและรหัสผ่าน หากสำเร็จ API จะตั้ง cookie token ให้
  const handleLogin = async (event) => {
    event.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();

      if (response.ok) {
        // โหลดหน้าใหม่ทั้งหน้า ให้ proxy.js ตรวจ cookie ที่เพิ่งได้รับ
        window.location.href = "/dashboard";
        return;
      }
      setMessage(data.message);
    } catch {
      setMessage("Cannot reach the server. Please try again.");
    }
    setLoading(false);
  };

  return (
    <main className="auth">
      <section className="auth-side teal">
        <h2>ยินดีต้อนรับกลับมา</h2>
        <p>เข้าสู่ระบบเพื่อดูข้อมูลสมาชิกของคุณในพื้นที่ส่วนตัว</p>
      </section>
      <section className="auth-main">
        <div className="auth-form">
          <h1>เข้าสู่ระบบ</h1>
          <p className="subtitle">กรอกอีเมลและรหัสผ่านของคุณ</p>
          <form onSubmit={handleLogin}>
            <label>
              อีเมล
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@example.com"
                required
              />
            </label>
            <label>
              รหัสผ่าน
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="รหัสผ่าน"
                required
              />
            </label>
            {message && <p className="error">{message}</p>}
            <button className="btn btn-block" type="submit" disabled={loading}>
              {loading ? "กำลังเข้าสู่ระบบ..." : "เข้าสู่ระบบ"}
            </button>
          </form>
          <p className="alt">
            ยังไม่มีบัญชี? <Link href="/register">สมัครสมาชิก</Link>
          </p>
        </div>
      </section>
    </main>
  );
}
