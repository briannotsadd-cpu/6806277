import "./style.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Auth Demo | อันโทนี่ มูเดอร์",
  description: "ระบบสมัครสมาชิกและเข้าสู่ระบบด้วย Next.js, MySQL (TiDB Cloud) และ Vercel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <body>
        <div className="page">
          <Navbar />
          {children}
          <footer className="footer">DIT205 · Rangsit University</footer>
        </div>
      </body>
    </html>
  );
}
