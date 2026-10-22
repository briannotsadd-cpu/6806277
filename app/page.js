import Link from "next/link";

// หน้าแรก: ชื่อ นามสกุล รหัสนักศึกษา และลิงก์ไปยังทุกหน้า
export default function Home() {
  return (
    <main className="home">
      <section>
        <span className="eyebrow">DIT205 · Assignment 07</span>
        <h1>
          ระบบสมาชิกที่ <em>ปลอดภัย</em> บน Cloud
        </h1>
        <p className="lead">
          สมัครสมาชิก เข้าสู่ระบบ และเปิดหน้าสมาชิกที่ป้องกันด้วย JWT
          เก็บข้อมูลบน TiDB Cloud และ deploy ด้วย Vercel
        </p>
        <div className="actions">
          <Link href="/register" className="btn">
            เริ่มสมัครสมาชิก
          </Link>
          <Link href="/login" className="btn btn-outline">
            เข้าสู่ระบบ
          </Link>
        </div>
        <div className="stack">
          <span className="chip">Next.js</span>
          <span className="chip">MySQL / TiDB Cloud</span>
          <span className="chip">bcrypt</span>
          <span className="chip">JWT</span>
          <span className="chip">Vercel</span>
        </div>
      </section>

      <aside className="id-card">
        <div className="id-card-head">
          <span>STUDENT</span>
          <span>RSU</span>
        </div>
        <dl>
          <dt>ชื่อ</dt>
          <dd>อันโทนี่</dd>
          <dt>นามสกุล</dt>
          <dd>มูเดอร์</dd>
          <dt>รหัสนักศึกษา</dt>
          <dd className="mono">6806277</dd>
        </dl>
      </aside>
    </main>
  );
}
