"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
  const router = useRouter();
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // ส่งข้อมูลฟอร์มไปยัง API หากสำเร็จไปหน้า login
  const handleRegister = async (event) => {
    event.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullname, email, password }),
      });
      const data = await response.json();

      if (response.ok) {
        router.push("/login");
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
      <section className="auth-side">
        <h2>สร้างบัญชีใหม่ในไม่กี่วินาที</h2>
        <p>รหัสผ่านของคุณถูกเข้ารหัสด้วย bcrypt ก่อนเก็บลงฐานข้อมูลเสมอ</p>
      </section>
      <section className="auth-main">
        <div className="auth-form">
          <h1>สมัครสมาชิก</h1>
          <p className="subtitle">กรอกข้อมูลด้านล่างเพื่อเริ่มต้นใช้งาน</p>
          <form onSubmit={handleRegister}>
            <label>
              ชื่อ-นามสกุล
              <input
                value={fullname}
                onChange={(event) => setFullname(event.target.value)}
                placeholder="Full name"
                required
              />
            </label>
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
                placeholder="อย่างน้อย 6 ตัวอักษร"
                minLength={6}
                required
              />
            </label>
            {message && <p className="error">{message}</p>}
            <button className="btn btn-block" type="submit" disabled={loading}>
              {loading ? "กำลังสมัคร..." : "สมัครสมาชิก"}
            </button>
          </form>
          <p className="alt">
            มีบัญชีอยู่แล้ว? <Link href="/login">เข้าสู่ระบบ</Link>
          </p>
        </div>
      </section>
    </main>
  );
}
