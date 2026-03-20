import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Mail, Lock, Eye, EyeOff, User, Building2, Activity, ArrowRight, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

const steps = ["Account", "Company", "Plan"];

export function Signup() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    company: "",
    size: "",
    plan: "pro",
  });

  const update = (key: string, val: string) => setForm({ ...form, [key]: val });

  const handleNext = async () => {
    if (step < 2) {
      setStep(step + 1);
    } else {
      setLoading(true);
      await new Promise((r) => setTimeout(r, 1400));
      setLoading(false);
      toast.success("Account created! Welcome to DataWhisper 🎉");
      navigate("/app");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-8"
      style={{ background: "#090B13" }}
    >
      <div className="w-full max-w-lg">
        {/* Logo */}
        <div className="flex items-center gap-2 justify-center mb-8">
          <div
            className="flex items-center justify-center rounded-lg"
            style={{ width: "32px", height: "32px", background: "linear-gradient(135deg, #C4FF40 0%, #7B5CF5 100%)" }}
          >
            <Activity size={18} color="#000" />
          </div>
          <span style={{ fontWeight: 700, fontSize: "16px", color: "#fff" }}>DataWhisper</span>
        </div>

        {/* Progress */}
        <div className="flex items-center justify-center gap-2 mb-8">
          {steps.map((s, i) => (
            <div key={s} className="flex items-center gap-2">
              <div
                className="flex items-center justify-center rounded-full text-xs transition-all"
                style={{
                  width: "28px",
                  height: "28px",
                  background: i <= step ? "#C4FF40" : "rgba(255,255,255,0.08)",
                  color: i <= step ? "#000" : "#6B7280",
                  fontWeight: 700,
                }}
              >
                {i < step ? <CheckCircle2 size={14} /> : i + 1}
              </div>
              <span className="text-sm" style={{ color: i <= step ? "#fff" : "#4A5568" }}>{s}</span>
              {i < steps.length - 1 && (
                <div
                  className="w-8 h-px mx-1"
                  style={{ background: i < step ? "#C4FF40" : "rgba(255,255,255,0.1)" }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Card */}
        <div
          className="p-8 rounded-2xl"
          style={{ background: "#0D0F1A", border: "1px solid rgba(255,255,255,0.08)" }}
        >
          {step === 0 && (
            <>
              <h2 className="mb-1" style={{ fontSize: "22px", fontWeight: 800, color: "#fff" }}>
                Create your account
              </h2>
              <p className="mb-6 text-sm" style={{ color: "#6B7280" }}>Start your 14-day free trial. No credit card required.</p>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm mb-1.5" style={{ color: "#8892A4" }}>Full Name</label>
                  <div className="flex items-center gap-2 px-3 py-3 rounded-xl" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                    <User size={16} style={{ color: "#6B7280" }} />
                    <input value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="Alex Johnson" className="flex-1 bg-transparent border-none outline-none text-sm" style={{ color: "#fff" }} />
                  </div>
                </div>
                <div>
                  <label className="block text-sm mb-1.5" style={{ color: "#8892A4" }}>Work Email</label>
                  <div className="flex items-center gap-2 px-3 py-3 rounded-xl" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                    <Mail size={16} style={{ color: "#6B7280" }} />
                    <input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="alex@company.com" className="flex-1 bg-transparent border-none outline-none text-sm" style={{ color: "#fff" }} />
                  </div>
                </div>
                <div>
                  <label className="block text-sm mb-1.5" style={{ color: "#8892A4" }}>Password</label>
                  <div className="flex items-center gap-2 px-3 py-3 rounded-xl" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                    <Lock size={16} style={{ color: "#6B7280" }} />
                    <input type={showPassword ? "text" : "password"} value={form.password} onChange={(e) => update("password", e.target.value)} placeholder="Min. 8 characters" className="flex-1 bg-transparent border-none outline-none text-sm" style={{ color: "#fff" }} />
                    <button type="button" onClick={() => setShowPassword(!showPassword)} style={{ color: "#6B7280" }}>
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}

          {step === 1 && (
            <>
              <h2 className="mb-1" style={{ fontSize: "22px", fontWeight: 800, color: "#fff" }}>
                About your company
              </h2>
              <p className="mb-6 text-sm" style={{ color: "#6B7280" }}>Help us personalize your experience.</p>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm mb-1.5" style={{ color: "#8892A4" }}>Company Name</label>
                  <div className="flex items-center gap-2 px-3 py-3 rounded-xl" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                    <Building2 size={16} style={{ color: "#6B7280" }} />
                    <input value={form.company} onChange={(e) => update("company", e.target.value)} placeholder="Acme Inc." className="flex-1 bg-transparent border-none outline-none text-sm" style={{ color: "#fff" }} />
                  </div>
                </div>
                <div>
                  <label className="block text-sm mb-1.5" style={{ color: "#8892A4" }}>Company Size</label>
                  <div className="grid grid-cols-2 gap-2">
                    {["1–10", "11–50", "51–200", "200+"].map((size) => (
                      <button
                        key={size}
                        onClick={() => update("size", size)}
                        className="py-3 rounded-xl text-sm transition-all"
                        style={{
                          background: form.size === size ? "rgba(196,255,64,0.1)" : "rgba(255,255,255,0.04)",
                          border: form.size === size ? "1px solid rgba(196,255,64,0.4)" : "1px solid rgba(255,255,255,0.08)",
                          color: form.size === size ? "#C4FF40" : "#8892A4",
                          fontWeight: form.size === size ? 600 : 400,
                        }}
                      >
                        {size} employees
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm mb-1.5" style={{ color: "#8892A4" }}>Primary Use Case</label>
                  <div className="grid grid-cols-1 gap-2">
                    {["Sales Analytics", "Marketing Analytics", "Product Analytics", "Financial Reporting"].map((uc) => (
                      <button
                        key={uc}
                        className="py-2.5 px-3 rounded-xl text-sm text-left transition-all"
                        style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#8892A4" }}
                      >
                        {uc}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <h2 className="mb-1" style={{ fontSize: "22px", fontWeight: 800, color: "#fff" }}>
                Choose your plan
              </h2>
              <p className="mb-6 text-sm" style={{ color: "#6B7280" }}>Start free, upgrade anytime.</p>
              <div className="space-y-3">
                {[
                  { id: "starter", name: "Starter", price: "$49/mo", desc: "5 sources · 10 AI queries/day" },
                  { id: "pro", name: "Pro", price: "$149/mo", desc: "25 sources · Unlimited queries", recommended: true },
                  { id: "enterprise", name: "Enterprise", price: "Custom", desc: "Unlimited everything · SSO" },
                ].map((plan) => (
                  <button
                    key={plan.id}
                    onClick={() => update("plan", plan.id)}
                    className="relative flex items-center justify-between w-full p-4 rounded-xl transition-all text-left"
                    style={{
                      background: form.plan === plan.id ? "rgba(196,255,64,0.06)" : "rgba(255,255,255,0.03)",
                      border: form.plan === plan.id ? "1px solid rgba(196,255,64,0.3)" : "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="text-sm" style={{ color: "#fff", fontWeight: 600 }}>{plan.name}</p>
                        {plan.recommended && (
                          <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: "#C4FF40", color: "#000", fontWeight: 700 }}>
                            Recommended
                          </span>
                        )}
                      </div>
                      <p className="text-xs" style={{ color: "#6B7280" }}>{plan.desc}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span style={{ color: "#fff", fontWeight: 700 }}>{plan.price}</span>
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center"
                        style={{ background: form.plan === plan.id ? "#C4FF40" : "rgba(255,255,255,0.1)" }}
                      >
                        {form.plan === plan.id && <CheckCircle2 size={12} color="#000" />}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </>
          )}

          <button
            onClick={handleNext}
            disabled={loading}
            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm mt-6 transition-all"
            style={{ background: loading ? "rgba(196,255,64,0.5)" : "#C4FF40", color: "#000", fontWeight: 700 }}
          >
            {loading ? (
              <div className="w-4 h-4 rounded-full border-2 border-black/30 border-t-black animate-spin" />
            ) : step === 2 ? (
              <>Create Account <ArrowRight size={16} /></>
            ) : (
              <>Continue <ArrowRight size={16} /></>
            )}
          </button>
        </div>

        <p className="text-center text-sm mt-4" style={{ color: "#6B7280" }}>
          Already have an account?{" "}
          <Link to="/login" style={{ color: "#C4FF40", fontWeight: 600 }}>Sign in</Link>
        </p>
      </div>
    </div>
  );
}
