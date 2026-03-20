import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Mail, Lock, Eye, EyeOff, Activity, ArrowRight, Github } from "lucide-react";
import { toast } from "sonner";

export function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    toast.success("Welcome back, Alex!");
    navigate("/app");
  };

  return (
    <div
      className="min-h-screen flex"
      style={{ background: "#090B13" }}
    >
      {/* Left panel */}
      <div
        className="hidden lg:flex flex-col justify-between w-2/5 p-10 relative overflow-hidden"
        style={{ background: "#0D0F1A", borderRight: "1px solid rgba(255,255,255,0.06)" }}
      >
        {/* Glow */}
        <div
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 30% 40%, rgba(196,255,64,0.06) 0%, transparent 70%)" }}
        />
        <div>
          <div className="flex items-center gap-2 mb-16">
            <div
              className="flex items-center justify-center rounded-lg"
              style={{ width: "32px", height: "32px", background: "linear-gradient(135deg, #C4FF40 0%, #7B5CF5 100%)" }}
            >
              <Activity size={18} color="#000" />
            </div>
            <span style={{ fontWeight: 300, fontSize: "16px", color: "#fff" }}>DataWhisper</span>
          </div>

          <h2
            style={{ fontSize: "32px", fontWeight: 400, color: "#fff", lineHeight: 1.2, letterSpacing: "-1px", marginBottom: "16px" }}
          >
            Turn your data into decisions
          </h2>
          <p style={{ color: "#6B7280", lineHeight: 1.7, fontSize: "15px" }}>
            AI-powered insights, automated reports, and real-time intelligence — all in one place.
          </p>

          {/* Feature list */}
          <div className="mt-10 space-y-4">
            {[
              "Ask questions in plain English",
              "AI-generated charts & reports",
              "Real-time anomaly detection",
              "100+ data source integrations",
            ].map((f) => (
              <div key={f} className="flex items-center gap-3">
                <div
                  className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(196,255,64,0.15)" }}
                >
                  <div className="w-2 h-2 rounded-full" style={{ background: "#C4FF40" }} />
                </div>
                <span className="text-sm" style={{ color: "#8892A4" }}>{f}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div
          className="p-5 rounded-2xl"
          style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p className="text-sm mb-3" style={{ color: "#8892A4", lineHeight: 1.6 }}>
            "DataWhisper completely changed how our team uses data. We went from weekly reports to real-time insights in a week."
          </p>
          <div className="flex items-center gap-3">
            <div
              className="flex items-center justify-center rounded-full text-xs overflow-hidden"
              style={{ width: "32px", height: "32px", background: "linear-gradient(135deg, #C4FF40, #7B5CF5)", color: "#000", fontWeight: 300 }}
            >
              <img src="https://i.pravatar.cc/150?u=sarah" alt="Sarah Chen" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-sm" style={{ color: "#fff", fontWeight: 400 }}>Sarah Chen</p>
              <p className="text-xs" style={{ color: "#6B7280" }}>VP Marketing, TechFlow</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right panel — Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <div className="flex items-center gap-2 mb-8 lg:hidden">
            <div
              className="flex items-center justify-center rounded-lg"
              style={{ width: "32px", height: "32px", background: "linear-gradient(135deg, #C4FF40, #7B5CF5)" }}
            >
              <Activity size={18} color="#000" />
            </div>
            <span style={{ fontWeight: 300, color: "#fff" }}>DataWhisper</span>
          </div>

          <h1 style={{ fontSize: "28px", fontWeight: 400, color: "#fff", marginBottom: "8px" }}>
            Welcome back
          </h1>
          <p className="mb-8" style={{ color: "#6B7280" }}>
            Sign in to your DataWhisper account
          </p>

          {/* OAuth */}
          <button
            className="flex items-center justify-center gap-3 w-full py-3 rounded-xl text-sm mb-4 transition-all hover:bg-white/10"
            style={{ background: "rgba(255,255,255,0.06)", color: "#fff", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <Github size={18} />
            Continue with GitHub
          </button>
          <button
            className="flex items-center justify-center gap-3 w-full py-3 rounded-xl text-sm mb-6 transition-all hover:bg-white/10"
            style={{ background: "rgba(255,255,255,0.06)", color: "#fff", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Continue with Google
          </button>

          <div className="flex items-center gap-4 mb-6">
            <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.08)" }} />
            <span className="text-xs" style={{ color: "#4A5568" }}>or sign in with email</span>
            <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.08)" }} />
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm mb-1.5" style={{ color: "#8892A4" }}>Email</label>
              <div
                className="flex items-center gap-2 px-3 py-3 rounded-xl"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <Mail size={16} style={{ color: "#6B7280" }} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="flex-1 bg-transparent border-none outline-none text-sm"
                  style={{ color: "#fff" }}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-sm" style={{ color: "#8892A4" }}>Password</label>
                <a href="#" className="text-xs" style={{ color: "#C4FF40" }}>Forgot password?</a>
              </div>
              <div
                className="flex items-center gap-2 px-3 py-3 rounded-xl"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <Lock size={16} style={{ color: "#6B7280" }} />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="flex-1 bg-transparent border-none outline-none text-sm"
                  style={{ color: "#fff" }}
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} style={{ color: "#6B7280" }}>
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm transition-all"
              style={{
                background: loading ? "rgba(196,255,64,0.5)" : "#C4FF40",
                color: "#000",
                fontWeight: 300,
              }}
            >
              {loading ? (
                <div className="w-4 h-4 rounded-full border-2 border-black/30 border-t-black animate-spin" />
              ) : (
                <>Sign in <ArrowRight size={16} /></>
              )}
            </button>
          </form>

          <p className="text-center text-sm mt-6" style={{ color: "#6B7280" }}>
            Don't have an account?{" "}
            <Link to="/signup" style={{ color: "#C4FF40", fontWeight: 400 }}>
              Sign up free
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
