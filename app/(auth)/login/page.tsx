"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { login, Role } from "@/lib/auth";
import { ChevronDown } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [site, setSite] = useState("Mamuju, Sulawesi");
  const [role, setRole] = useState<Role>("Admin");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return alert("Email dan password wajib diisi.");

    login({ id: "u1", name: "User Demo", role, site });

    // Redirect based on role
    switch (role) {
      case "Inbound Operator":
        router.push("/inbound");
        break;
      case "Field/Screening Operator":
        router.push("/stock-card");
        break;
      case "QM/Outbound Operator":
        router.push("/outbound");
        break;
      case "Kasir/Retail":
        router.push("/retail");
        break;
      case "Finance":
        router.push("/procurement");
        break;
      case "Admin":
      case "Supervisor":
      case "Viewer":
      default:
        router.push("/dashboard");
        break;
    }
  };

  return (
    <div className="flex h-screen w-full bg-white overflow-hidden">
      {/* Left Branding Panel */}
      <div className="hidden md:flex w-[45%] lg:w-[48%] bg-gradient-to-b from-[#114B26] to-[#1B7A3D] p-10 lg:p-20 flex-col justify-center text-white relative">
        <div className="flex flex-col max-w-[500px]">
          <div className="mb-10">
            <h1 className="text-4xl lg:text-[44px] font-extrabold tracking-wider text-white mb-3">
              GGC STOCKFILE
            </h1>
            <p className="text-[13px] tracking-[0.2em] text-[#95b1c7] font-semibold">
              PKS LOGISTICS & INVENTORY
            </p>
          </div>

          <p className="text-[15px] leading-[1.8] text-[#d7eee0] mb-14">
            Pencatatan harian procurement, inbound, stockpile, outbound & barge
            untuk 3 stockpile: <strong>Mamuju, Marunda, Teluk Bayur.</strong>{" "}
            Bekerja online maupun offline.
          </p>

          <div className="flex items-center gap-5 text-[13px] text-[#dce9df]">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
              Multi-site
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
              Offline-first PWA
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
              Audit trail penuh
            </span>
          </div>
        </div>
      </div>

      {/* Right Form Panel */}
      <div className="flex flex-1 flex-col justify-center px-8 lg:px-24">
        <div className="w-full max-w-[520px] mx-auto">
          <div className="mb-8">
            <h2 className="text-[28px] font-bold text-[#173A5E] mb-2">
              Masuk ke akun
            </h2>
            <p className="text-[15px] text-[#64748B]">
              Gunakan email & password yang diberikan admin.
            </p>
          </div>

          <form onSubmit={handleLogin} className="flex flex-col gap-6">
            <div>
              <label className="block text-[14px] font-bold text-[#64748B] mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="operator.mmj@ggc.id"
                className="w-full rounded-lg border border-[#E2E8F0] px-4 py-3.5 text-[15px] text-[#173A5E] placeholder:text-[#94A3B8] outline-none focus:border-[#1B7A3D]"
                required
              />
            </div>

            <div>
              <label className="block text-[14px] font-bold text-[#64748B] mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full rounded-lg border border-[#E2E8F0] px-4 py-3.5 text-[15px] text-[#173A5E] placeholder:text-[#94A3B8] tracking-widest outline-none focus:border-[#1B7A3D]"
                required
              />
            </div>

            <div className="flex items-center justify-between mt-1">
              <label className="flex items-center gap-2.5 text-[13px] text-[#64748B] cursor-pointer select-none">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded hover:cursor-pointer border-[#E2E8F0] text-[#1B7A3D] focus:ring-[#1B7A3D]"
                />
                Ingat perangkat ini
              </label>
              <a
                href="#"
                className="text-[13px] text-[#1B7A3D] font-bold hover:underline"
              >
                Lupa password?
              </a>
            </div>

            <div className="mt-2">
              <label className="block text-[14px] font-bold text-[#64748B] mb-2">
                Stockpile / Site
              </label>
              <div className="relative">
                <select
                  value={site}
                  onChange={(e) => setSite(e.target.value)}
                  className="w-full hover:cursor-pointer rounded-lg border border-[#E2E8F0] pl-4 pr-40 py-3.5 text-[15px] text-[#173A5E] outline-none focus:border-[#1B7A3D] appearance-none bg-white relative z-10 bg-transparent"
                >
                  <option>Mamuju, Sulawesi</option>
                  <option>Marunda, Jakarta</option>
                  <option>Teluk Bayur, Padang</option>
                </select>
                <ChevronDown
                  size={18}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#64748B] pointer-events-none z-20"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-4 w-full rounded-lg bg-[#1B7A3D] py-4 text-[15px] font-bold text-white hover:bg-[#166a34] transition-colors"
            >
              Masuk
            </button>
          </form>

          <div className="mt-6 rounded-lg bg-[#E6F3EA] px-4 py-3.5 text-[13px] text-[#1B7A3D] flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1B7A3D] flex-shrink-0"></span>
            <span>
              Lokasi terdeteksi: <strong>{site}</strong> — sesi terikat ke site
              ini.
            </span>
          </div>

          {/* Demo Role Selector (visually toned down) */}
          <div className="mt-12 flex justify-center opacity-40 hover:opacity-100 transition-opacity">
            <label className="flex items-center gap-2 text-[11px] text-[#64748B]">
              Role (Demo):
              <select
                value={role}
                onChange={(e) => setRole(e.target.value as Role)}
                className="bg-transparent border-b border-[#E2E8F0] outline-none text-[#173A5E] font-medium py-1"
              >
                <option>Admin</option>
                <option>Supervisor</option>
                <option>Finance</option>
                <option>Inbound Operator</option>
                <option>Field/Screening Operator</option>
                <option>QM/Outbound Operator</option>
                <option>Kasir/Retail</option>
                <option>Viewer</option>
              </select>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
