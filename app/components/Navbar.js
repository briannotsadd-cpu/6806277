import Link from "next/link";

// แถบนำทางด้านบน ใช้ร่วมกันทุกหน้า
export default function Navbar() {
  return (
    <header className="navbar">
      <Link href="/" className="brand">
        <span className="brand-mark">A</span>
        Auth Demo
      </Link>
      <nav className="nav-links">
        <Link href="/login">เข้าสู่ระบบ</Link>
        <Link href="/dashboard" prefetch={false}>
          Dashboard
        </Link>
        <Link href="/register" className="nav-cta">
          สมัครสมาชิก
        </Link>
      </nav>
    </header>
  );
}
