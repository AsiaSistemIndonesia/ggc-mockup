"use client";

import { useState } from "react";
import { useAuth } from "@/components/providers/auth-provider";
import { ChevronDown, AlertCircle } from "lucide-react";
import { ConnectionStatus } from "@/components/ui-custom/connectivity/connection-status";

export default function LoginPage() {
  const [email, setEmail] = useState("admin@ggc.demo");
  const [password, setPassword] = useState("demo123");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { login } = useAuth();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    if (!email || !password) {
      setErrorMsg("Email dan password wajib diisi.");
      return;
    }

    setIsSubmitting(true);
    try {
      const result = await login(email, password);
      if (!result.success && result.error) {
        setErrorMsg(result.error);
      }
    } catch (err) {
      console.error("Login error:", err);
      setErrorMsg("Gagal melakukan autentikasi.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSelectDemoUser = (userEmail: string) => {
    setEmail(userEmail);
    setPassword("demo123");
    setErrorMsg(null);
  };

  return (
    <div className="min-h-screen w-full bg-white flex flex-col md:flex-row overflow-x-hidden">
      {/* ========================================================= */}
      {/* DESKTOP LEFT BRANDING PANEL (Visible on md and larger)    */}
      {/* ========================================================= */}
      <div className="hidden md:flex w-[45%] lg:w-[48%] bg-gradient-to-b from-[#114B26] to-[#1B7A3D] p-10 lg:p-20 flex-col justify-center text-white relative">
        <div className="flex flex-col max-w-[500px]">
          <div className="mb-10">
            <h1 className="text-4xl lg:text-[44px] font-extrabold tracking-wider text-white mb-3">
              GGC STOCKFILE
            </h1>
            <p className="text-[13px] tracking-[0.2em] text-[#95b1c7] font-semibold uppercase">
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

      {/* ========================================================= */}
      {/* MOBILE PWA TOP HEADER (Visible only on mobile < md)       */}
      {/* ========================================================= */}
      <div className="flex justify-between md:hidden bg-[#0B4A2B] text-white px-5 py-3.5 shadow-sm">
        <div>
          <h1 className="text-base font-bold leading-tight">Masuk</h1>
          <p className="text-[11px] text-[#86C29E] font-medium mt-0.5">
            GGC Stockfile
          </p>
        </div>

        {/* Status Badges */}
        <div className="">
          <ConnectionStatus variant="compact" showDemoToggle={false} />
        </div>
      </div>

      {/* ========================================================= */}
      {/* MAIN FORM PANEL (Desktop & Mobile)                        */}
      {/* ========================================================= */}
      <div className="flex-1 flex flex-col justify-center px-6 py-8 md:px-12 lg:px-24 bg-white">
        <div className="w-full max-w-[480px] mx-auto">
          {/* Desktop Heading */}
          <div className="hidden md:block mb-8">
            <h2 className="text-[28px] font-bold text-[#173A5E] mb-2">
              Masuk ke akun
            </h2>
            <p className="text-[15px] text-[#64748B]">
              Gunakan email & password yang diberikan admin.
            </p>
          </div>

          {/* Mobile Logo Header */}
          <div className="block md:hidden text-center my-6">
            <h2 className="text-2xl font-extrabold text-[#0B4A2B] tracking-wider uppercase">
              GGC STOCKFILE
            </h2>
            <p className="text-[11px] font-semibold tracking-[0.2em] text-[#718096] uppercase mt-1">
              PKS LOGISTICS
            </p>
          </div>

          {/* Error Message Alert */}
          {errorMsg && (
            <div className="mb-4 rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-xs text-red-700 flex items-center gap-2 font-medium">
              <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="hidden md:block text-sm font-bold text-[#64748B] mb-1.5">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@ggc.demo"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-800 placeholder:text-gray-400 outline-none focus:border-[#1B7A3D] focus:ring-1 focus:ring-[#1B7A3D]"
                required
              />
            </div>

            <div>
              <label className="hidden md:block text-sm font-bold text-[#64748B] mb-1.5">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-800 placeholder:text-gray-400 outline-none focus:border-[#1B7A3D] focus:ring-1 focus:ring-[#1B7A3D]"
                required
              />
            </div>

            <div className="flex items-center justify-between pt-1">
              <label className="flex items-center gap-2 text-xs text-gray-600 cursor-pointer select-none">
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-4 h-4 rounded border-gray-300 text-[#1B7A3D] focus:ring-[#1B7A3D] accent-[#1B7A3D]"
                />
                Ingat perangkat ini
              </label>
              <a
                href="#"
                className="text-xs text-[#1B7A3D] font-bold hover:underline"
              >
                Lupa password?
              </a>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-2 rounded-xl bg-[#1B7A3D] hover:bg-[#166a34] py-3.5 text-base font-bold text-white shadow-sm transition-colors cursor-pointer disabled:opacity-50"
            >
              {isSubmitting ? "Memproses..." : "Masuk"}
            </button>
          </form>

          {/* Subtle Quick Demo User Picker */}
          <div className="mt-8 pt-4 border-t border-gray-100 flex flex-col items-center">
            <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-2">
              Pilih Akun Demo (Password: demo123)
            </span>
            <div className="flex flex-wrap justify-center gap-1.5 text-xs text-gray-600">
              <button
                type="button"
                onClick={() => handleSelectDemoUser("admin@ggc.demo")}
                className="px-2 py-1 bg-gray-100 hover:bg-[#EAF5EF] hover:text-[#1B7A3D] rounded font-medium transition-colors cursor-pointer"
              >
                Admin
              </button>
              <button
                type="button"
                onClick={() => handleSelectDemoUser("supervisor@ggc.demo")}
                className="px-2 py-1 bg-gray-100 hover:bg-[#EAF5EF] hover:text-[#1B7A3D] rounded font-medium transition-colors cursor-pointer"
              >
                Supervisor
              </button>
              <button
                type="button"
                onClick={() => handleSelectDemoUser("inbound@ggc.demo")}
                className="px-2 py-1 bg-gray-100 hover:bg-[#EAF5EF] hover:text-[#1B7A3D] rounded font-medium transition-colors cursor-pointer"
              >
                Inbound (IO)
              </button>
              <button
                type="button"
                onClick={() => handleSelectDemoUser("field@ggc.demo")}
                className="px-2 py-1 bg-gray-100 hover:bg-[#EAF5EF] hover:text-[#1B7A3D] rounded font-medium transition-colors cursor-pointer"
              >
                Field (FO)
              </button>
              <button
                type="button"
                onClick={() => handleSelectDemoUser("qm@ggc.demo")}
                className="px-2 py-1 bg-gray-100 hover:bg-[#EAF5EF] hover:text-[#1B7A3D] rounded font-medium transition-colors cursor-pointer"
              >
                QM (QO)
              </button>
              <button
                type="button"
                onClick={() => handleSelectDemoUser("finance@ggc.demo")}
                className="px-2 py-1 bg-gray-100 hover:bg-[#EAF5EF] hover:text-[#1B7A3D] rounded font-medium transition-colors cursor-pointer"
              >
                Finance
              </button>
              <button
                type="button"
                onClick={() => handleSelectDemoUser("viewer@ggc.demo")}
                className="px-2 py-1 bg-gray-100 hover:bg-[#EAF5EF] hover:text-[#1B7A3D] rounded font-medium transition-colors cursor-pointer"
              >
                Viewer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
