import { useState } from "react";
import {
  Sparkles,
  CheckCircle2,
  AlertCircle,
  AlertTriangle,
  Info,
  X,
  Plus,
  Download,
  Trash2,
  Edit,
  Eye,
  ArrowRight,
  Search,
  Filter,
  Bell,
  TrendingUp,
  TrendingDown,
  User,
  Database,
  Zap,
  Brain,
  MoreHorizontal,
  Clock,
  ChevronDown,
  Shield,
  Mail,
  Star,
  Activity,
} from "lucide-react";
import {
  AreaChart,
  Area,
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { toast } from "sonner";

const sections = [
  "Buttons",
  "Inputs",
  "Badges & Tags",
  "Cards",
  "Alerts",
  "Charts",
  "AI Components",
  "Data Display",
  "Avatars",
  "Toggles",
];

const sparklineData = [
  { v: 40 }, { v: 55 }, { v: 48 }, { v: 72 }, { v: 65 }, { v: 88 }, { v: 95 },
];

const pieData = [
  { name: "A", value: 40, color: "#C4FF40" },
  { name: "B", value: 30, color: "#7B5CF5" },
  { name: "C", value: 20, color: "#38BDF8" },
  { name: "D", value: 10, color: "#FB923C" },
];

const radarData = [
  { subject: "Speed", A: 80 },
  { subject: "Quality", A: 92 },
  { subject: "Accuracy", A: 75 },
  { subject: "Coverage", A: 88 },
  { subject: "Reliability", A: 95 },
];

const CARD = {
  background: "#0D0F1A",
  border: "1px solid rgba(255,255,255,0.06)",
  borderRadius: "16px",
  padding: "24px",
  marginBottom: "24px",
};

function SectionTitle({ label }: { label: string }) {
  return (
    <h2 style={{ fontSize: "16px", fontWeight: 700, color: "#fff", marginBottom: "16px" }}>
      {label}
    </h2>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <p className="text-xs mb-3" style={{ color: "#4A5568", fontWeight: 500 }}>{children}</p>;
}

export function ComponentLibrary() {
  const [activeSection, setActiveSection] = useState("Buttons");
  const [toggles, setToggles] = useState({ a: true, b: false, c: true });
  const [checkboxes, setCheckboxes] = useState({ a: true, b: false, c: true });
  const [inputVal, setInputVal] = useState("");
  const [radioVal, setRadioVal] = useState("b");
  const [sliderVal, setSliderVal] = useState(65);
  const [aiQuery, setAiQuery] = useState("");

  return (
    <div
      className="flex"
      style={{ background: "#090B13", minHeight: "100%" }}
    >
      {/* Section nav */}
      <aside
        className="w-48 flex-shrink-0 p-4 sticky top-0 h-screen overflow-auto"
        style={{ borderRight: "1px solid rgba(255,255,255,0.06)" }}
      >
        <p className="text-xs mb-3 px-2" style={{ color: "#4A5568", fontWeight: 600 }}>COMPONENTS</p>
        {sections.map((s) => (
          <button
            key={s}
            onClick={() => setActiveSection(s)}
            className="flex items-center w-full rounded-xl px-3 py-2 mb-1 text-xs transition-all"
            style={{
              background: activeSection === s ? "rgba(196,255,64,0.08)" : "transparent",
              color: activeSection === s ? "#C4FF40" : "#8892A4",
              fontWeight: activeSection === s ? 600 : 400,
            }}
          >
            {s}
          </button>
        ))}
      </aside>

      <main className="flex-1 p-6 overflow-auto">
        <div className="mb-6">
          <h1 style={{ fontSize: "24px", fontWeight: 700, color: "#fff" }}>Component Library</h1>
          <p style={{ color: "#6B7280", fontSize: "14px" }}>DataWhisper UI components and design system</p>
        </div>

        {/* BUTTONS */}
        {activeSection === "Buttons" && (
          <div>
            <div style={CARD}>
              <SectionTitle label="Button Variants" />
              <Label>Primary</Label>
              <div className="flex flex-wrap gap-3 mb-6">
                {["sm", "md", "lg"].map((size) => (
                  <button
                    key={size}
                    onClick={() => toast.success(`Primary ${size} clicked`)}
                    className="rounded-xl transition-all hover:opacity-90"
                    style={{
                      background: "#C4FF40",
                      color: "#000",
                      fontWeight: 700,
                      padding: size === "sm" ? "6px 14px" : size === "lg" ? "14px 28px" : "10px 20px",
                      fontSize: size === "sm" ? "12px" : size === "lg" ? "15px" : "13px",
                    }}
                  >
                    {size.toUpperCase()} Button
                  </button>
                ))}
              </div>

              <Label>Secondary</Label>
              <div className="flex flex-wrap gap-3 mb-6">
                {["sm", "md", "lg"].map((size) => (
                  <button
                    key={size}
                    className="rounded-xl transition-all"
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      color: "#fff",
                      border: "1px solid rgba(255,255,255,0.1)",
                      padding: size === "sm" ? "6px 14px" : size === "lg" ? "14px 28px" : "10px 20px",
                      fontSize: size === "sm" ? "12px" : size === "lg" ? "15px" : "13px",
                    }}
                  >
                    {size.toUpperCase()} Button
                  </button>
                ))}
              </div>

              <Label>Ghost / Danger / With Icons</Label>
              <div className="flex flex-wrap gap-3">
                <button className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm" style={{ background: "transparent", color: "#8892A4", border: "1px solid rgba(255,255,255,0.08)" }}>
                  Ghost Button
                </button>
                <button className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm" style={{ background: "rgba(239,68,68,0.1)", color: "#EF4444", border: "1px solid rgba(239,68,68,0.2)" }}>
                  <Trash2 size={14} /> Danger
                </button>
                <button className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm" style={{ background: "#C4FF40", color: "#000", fontWeight: 700 }}>
                  <Plus size={14} /> Add New
                </button>
                <button className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm" style={{ background: "rgba(123,92,245,0.1)", color: "#7B5CF5", border: "1px solid rgba(123,92,245,0.2)" }}>
                  <Sparkles size={14} /> AI Action
                </button>
                <button className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm" style={{ background: "rgba(255,255,255,0.04)", color: "#8892A4" }} disabled>
                  Disabled
                </button>
                <button className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-sm" style={{ background: "rgba(196,255,64,0.5)", color: "#000", fontWeight: 700 }}>
                  <div className="w-4 h-4 rounded-full border-2 border-black/30 border-t-black animate-spin" />
                  Loading...
                </button>
              </div>
            </div>
          </div>
        )}

        {/* INPUTS */}
        {activeSection === "Inputs" && (
          <div>
            <div style={CARD}>
              <SectionTitle label="Input Fields" />
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <Label>Default</Label>
                  <div className="flex items-center gap-2 px-3 py-2.5 rounded-xl" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                    <input placeholder="Type something..." className="flex-1 bg-transparent outline-none text-sm border-none" style={{ color: "#fff" }} />
                  </div>
                </div>
                <div>
                  <Label>With Icon</Label>
                  <div className="flex items-center gap-2 px-3 py-2.5 rounded-xl" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                    <Search size={16} style={{ color: "#6B7280" }} />
                    <input placeholder="Search..." className="flex-1 bg-transparent outline-none text-sm border-none" style={{ color: "#fff" }} />
                  </div>
                </div>
                <div>
                  <Label>Success State</Label>
                  <div className="flex items-center gap-2 px-3 py-2.5 rounded-xl" style={{ background: "rgba(196,255,64,0.04)", border: "1px solid rgba(196,255,64,0.3)" }}>
                    <input value="Valid input" readOnly className="flex-1 bg-transparent outline-none text-sm border-none" style={{ color: "#C4FF40" }} />
                    <CheckCircle2 size={16} style={{ color: "#C4FF40" }} />
                  </div>
                </div>
                <div>
                  <Label>Error State</Label>
                  <div className="flex items-center gap-2 px-3 py-2.5 rounded-xl" style={{ background: "rgba(239,68,68,0.04)", border: "1px solid rgba(239,68,68,0.3)" }}>
                    <input value="Invalid email" readOnly className="flex-1 bg-transparent outline-none text-sm border-none" style={{ color: "#EF4444" }} />
                    <AlertCircle size={16} style={{ color: "#EF4444" }} />
                  </div>
                  <p className="text-xs mt-1" style={{ color: "#EF4444" }}>Please enter a valid email address</p>
                </div>
              </div>

              <Label>Textarea</Label>
              <textarea
                placeholder="Write your message here..."
                rows={3}
                className="w-full px-3 py-2.5 rounded-xl text-sm outline-none resize-none"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#fff" }}
              />

              <Label>Slider</Label>
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={sliderVal}
                  onChange={(e) => setSliderVal(Number(e.target.value))}
                  className="flex-1"
                  style={{ accentColor: "#C4FF40" }}
                />
                <span className="text-sm w-8 text-right" style={{ color: "#C4FF40", fontWeight: 700 }}>{sliderVal}%</span>
              </div>
            </div>

            <div style={CARD}>
              <SectionTitle label="Checkboxes & Radios" />
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <Label>Checkboxes</Label>
                  <div className="space-y-3">
                    {(["a", "b", "c"] as const).map((k) => (
                      <label key={k} className="flex items-center gap-3 cursor-pointer">
                        <div
                          onClick={() => setCheckboxes({ ...checkboxes, [k]: !checkboxes[k] })}
                          className="flex items-center justify-center rounded-md transition-all"
                          style={{ width: "18px", height: "18px", background: checkboxes[k] ? "#C4FF40" : "rgba(255,255,255,0.06)", border: checkboxes[k] ? "none" : "1px solid rgba(255,255,255,0.2)", flexShrink: 0 }}
                        >
                          {checkboxes[k] && <CheckCircle2 size={12} color="#000" />}
                        </div>
                        <span className="text-sm" style={{ color: "#8892A4" }}>Option {k.toUpperCase()}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <Label>Radio Buttons</Label>
                  <div className="space-y-3">
                    {["a", "b", "c"].map((k) => (
                      <label key={k} className="flex items-center gap-3 cursor-pointer" onClick={() => setRadioVal(k)}>
                        <div
                          className="flex items-center justify-center rounded-full"
                          style={{ width: "18px", height: "18px", border: radioVal === k ? "2px solid #C4FF40" : "2px solid rgba(255,255,255,0.2)", flexShrink: 0 }}
                        >
                          {radioVal === k && <div className="w-2 h-2 rounded-full" style={{ background: "#C4FF40" }} />}
                        </div>
                        <span className="text-sm" style={{ color: "#8892A4" }}>Radio {k.toUpperCase()}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* BADGES */}
        {activeSection === "Badges & Tags" && (
          <div>
            <div style={CARD}>
              <SectionTitle label="Badges & Tags" />
              <Label>Status Badges</Label>
              <div className="flex flex-wrap gap-2 mb-6">
                {[
                  { label: "Active", bg: "rgba(196,255,64,0.1)", color: "#C4FF40" },
                  { label: "Pending", bg: "rgba(249,115,22,0.1)", color: "#F97316" },
                  { label: "Error", bg: "rgba(239,68,68,0.1)", color: "#EF4444" },
                  { label: "Inactive", bg: "rgba(107,114,128,0.1)", color: "#6B7280" },
                  { label: "Beta", bg: "rgba(123,92,245,0.1)", color: "#7B5CF5" },
                  { label: "New", bg: "rgba(56,189,248,0.1)", color: "#38BDF8" },
                ].map((b) => (
                  <span key={b.label} className="px-2.5 py-1 rounded-full text-xs" style={{ background: b.bg, color: b.color, fontWeight: 600 }}>
                    {b.label}
                  </span>
                ))}
              </div>

              <Label>Tag Chips (removable)</Label>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Revenue", "Marketing", "B2B", "Q4 2025", "Anomaly"].map((tag) => (
                  <div key={tag} className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs" style={{ background: "rgba(255,255,255,0.06)", color: "#8892A4" }}>
                    {tag}
                    <X size={10} className="cursor-pointer" />
                  </div>
                ))}
              </div>

              <Label>Confidence Indicators</Label>
              <div className="flex flex-wrap gap-3">
                {[
                  { label: "High", value: 94, color: "#C4FF40" },
                  { label: "Medium", value: 72, color: "#F97316" },
                  { label: "Low", value: 45, color: "#EF4444" },
                ].map((c) => (
                  <div key={c.label} className="flex items-center gap-2 px-3 py-2 rounded-xl" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
                    <div className="relative w-8 h-8">
                      <svg viewBox="0 0 36 36" className="w-8 h-8 -rotate-90">
                        <circle cx="18" cy="18" r="14" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="3" />
                        <circle cx="18" cy="18" r="14" fill="none" stroke={c.color} strokeWidth="3" strokeDasharray={`${(c.value / 100) * 88} 88`} strokeLinecap="round" />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center text-xs" style={{ color: c.color, fontWeight: 700 }}></div>
                    </div>
                    <div>
                      <p className="text-xs" style={{ color: "#8892A4" }}>{c.label} Confidence</p>
                      <p className="text-sm" style={{ color: "#fff", fontWeight: 700 }}>{c.value}%</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* CARDS */}
        {activeSection === "Cards" && (
          <div>
            <div style={CARD}>
              <SectionTitle label="Card Variants" />
              <div className="grid grid-cols-3 gap-4 mb-6">
                {/* KPI card */}
                <div className="p-5 rounded-2xl" style={{ background: "#161A28", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-xs" style={{ color: "#6B7280" }}>Total Revenue</p>
                    <TrendingUp size={14} style={{ color: "#C4FF40" }} />
                  </div>
                  <p style={{ fontSize: "24px", fontWeight: 800, color: "#fff" }}>$2.4M</p>
                  <span className="text-xs px-2 py-0.5 rounded" style={{ background: "rgba(196,255,64,0.1)", color: "#C4FF40" }}>+18.2%</span>
                </div>

                {/* Sparkline card */}
                <div className="p-5 rounded-2xl" style={{ background: "#161A28", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <p className="text-xs mb-1" style={{ color: "#6B7280" }}>Active Users</p>
                  <p style={{ fontSize: "24px", fontWeight: 800, color: "#fff" }}>14,832</p>
                  <ResponsiveContainer width="100%" height={48}>
                    <AreaChart data={sparklineData}>
                      <defs>
                        <linearGradient id="spkGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#7B5CF5" stopOpacity={0.3} />
                          <stop offset="95%" stopColor="#7B5CF5" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <Area type="monotone" dataKey="v" stroke="#7B5CF5" strokeWidth={2} fill="url(#spkGrad)" dot={false} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>

                {/* Progress card */}
                <div className="p-5 rounded-2xl" style={{ background: "#161A28", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <p className="text-xs mb-3" style={{ color: "#6B7280" }}>Goal Progress</p>
                  <p style={{ fontSize: "24px", fontWeight: 800, color: "#fff" }}>68%</p>
                  <div className="mt-3 h-2 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
                    <div className="h-full rounded-full" style={{ width: "68%", background: "linear-gradient(90deg, #7B5CF5, #C4FF40)" }} />
                  </div>
                </div>
              </div>

              <Label>Interactive Card</Label>
              <div
                className="flex items-center gap-4 p-5 rounded-2xl cursor-pointer transition-all hover:translate-y-[-2px]"
                style={{ background: "#161A28", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div className="flex items-center justify-center rounded-xl" style={{ width: "44px", height: "44px", background: "rgba(196,255,64,0.1)", flexShrink: 0 }}>
                  <Database size={20} style={{ color: "#C4FF40" }} />
                </div>
                <div className="flex-1">
                  <h4 style={{ color: "#fff", fontWeight: 600 }}>Snowflake Integration</h4>
                  <p className="text-sm" style={{ color: "#6B7280" }}>18.2M records synced · Last sync 30s ago</p>
                </div>
                <ChevronDown size={16} style={{ color: "#6B7280", transform: "rotate(-90deg)" }} />
              </div>
            </div>
          </div>
        )}

        {/* ALERTS */}
        {activeSection === "Alerts" && (
          <div>
            <div style={CARD}>
              <SectionTitle label="Alert & Toast Variants" />
              {[
                { type: "success", icon: CheckCircle2, color: "#C4FF40", bg: "rgba(196,255,64,0.08)", border: "rgba(196,255,64,0.2)", msg: "Query completed successfully. 1,248 rows returned." },
                { type: "warning", icon: AlertTriangle, color: "#F97316", bg: "rgba(249,115,22,0.08)", border: "rgba(249,115,22,0.2)", msg: "Stripe sync failed. Last successful sync was 2 hours ago." },
                { type: "error", icon: AlertCircle, color: "#EF4444", bg: "rgba(239,68,68,0.08)", border: "rgba(239,68,68,0.2)", msg: "Connection timeout. Please check your data source credentials." },
                { type: "info", icon: Info, color: "#38BDF8", bg: "rgba(56,189,248,0.08)", border: "rgba(56,189,248,0.2)", msg: "New AI insight available. DataWhisper found a revenue opportunity worth $340K." },
              ].map((alert) => (
                <div
                  key={alert.type}
                  className="flex items-start gap-3 p-4 rounded-xl mb-3"
                  style={{ background: alert.bg, border: `1px solid ${alert.border}` }}
                >
                  <alert.icon size={16} style={{ color: alert.color, marginTop: "2px" }} />
                  <p className="text-sm flex-1" style={{ color: "#fff" }}>{alert.msg}</p>
                  <button style={{ color: "#6B7280" }}><X size={14} /></button>
                </div>
              ))}

              <Label>Toast notifications</Label>
              <div className="flex flex-wrap gap-2">
                <button onClick={() => toast.success("Data synced successfully!")} className="px-4 py-2 rounded-xl text-sm" style={{ background: "rgba(196,255,64,0.1)", color: "#C4FF40" }}>Success Toast</button>
                <button onClick={() => toast.error("Connection failed. Please retry.")} className="px-4 py-2 rounded-xl text-sm" style={{ background: "rgba(239,68,68,0.1)", color: "#EF4444" }}>Error Toast</button>
                <button onClick={() => toast.warning("API rate limit approaching")} className="px-4 py-2 rounded-xl text-sm" style={{ background: "rgba(249,115,22,0.1)", color: "#F97316" }}>Warning Toast</button>
                <button onClick={() => toast.info("3 new insights ready")} className="px-4 py-2 rounded-xl text-sm" style={{ background: "rgba(56,189,248,0.1)", color: "#38BDF8" }}>Info Toast</button>
              </div>
            </div>
          </div>
        )}

        {/* CHARTS */}
        {activeSection === "Charts" && (
          <div>
            <div style={CARD}>
              <SectionTitle label="Chart Library" />
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <Label>Area Chart</Label>
                  <ResponsiveContainer width="100%" height={140}>
                    <AreaChart data={sparklineData}>
                      <defs>
                        <linearGradient id="chartArea" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#C4FF40" stopOpacity={0.3} />
                          <stop offset="95%" stopColor="#C4FF40" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid stroke="rgba(255,255,255,0.04)" vertical={false} />
                      <Area type="monotone" dataKey="v" stroke="#C4FF40" strokeWidth={2} fill="url(#chartArea)" />
                      <Tooltip contentStyle={{ background: "#1A1D2E", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "8px", color: "#fff", fontSize: "12px" }} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
                <div>
                  <Label>Bar Chart</Label>
                  <ResponsiveContainer width="100%" height={140}>
                    <BarChart data={sparklineData}>
                      <CartesianGrid stroke="rgba(255,255,255,0.04)" vertical={false} />
                      <Bar dataKey="v" fill="#7B5CF5" radius={[4, 4, 0, 0]} />
                      <Tooltip contentStyle={{ background: "#1A1D2E", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "8px", color: "#fff", fontSize: "12px" }} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div>
                  <Label>Pie / Donut Chart</Label>
                  <ResponsiveContainer width="100%" height={140}>
                    <PieChart>
                      <Pie data={pieData} cx="50%" cy="50%" innerRadius={35} outerRadius={55} paddingAngle={3} dataKey="value">
                        {pieData.map((entry, i) => <Cell key={i} fill={entry.color} />)}
                      </Pie>
                      <Tooltip contentStyle={{ background: "#1A1D2E", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "8px", color: "#fff", fontSize: "12px" }} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div>
                  <Label>Radar Chart</Label>
                  <ResponsiveContainer width="100%" height={140}>
                    <RadarChart data={radarData}>
                      <PolarGrid stroke="rgba(255,255,255,0.06)" />
                      <PolarAngleAxis dataKey="subject" tick={{ fill: "#6B7280", fontSize: 10 }} />
                      <Radar dataKey="A" stroke="#C4FF40" fill="#C4FF40" fillOpacity={0.15} strokeWidth={2} />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* AI COMPONENTS */}
        {activeSection === "AI Components" && (
          <div>
            <div style={CARD}>
              <SectionTitle label="Ask DataWhisper Bar" />
              <div
                className="flex items-center gap-3 p-4 rounded-2xl mb-6"
                style={{ background: "linear-gradient(135deg, rgba(196,255,64,0.06), rgba(123,92,245,0.06))", border: "1px solid rgba(196,255,64,0.15)" }}
              >
                <div className="flex items-center justify-center rounded-xl" style={{ width: "36px", height: "36px", background: "rgba(196,255,64,0.1)", flexShrink: 0 }}>
                  <Sparkles size={18} style={{ color: "#C4FF40" }} />
                </div>
                <input value={aiQuery} onChange={(e) => setAiQuery(e.target.value)} placeholder="Ask anything about your data..." className="flex-1 bg-transparent border-none outline-none text-sm" style={{ color: "#fff" }} />
                <button className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm" style={{ background: "#C4FF40", color: "#000", fontWeight: 600 }}>
                  <ArrowRight size={14} /> Ask AI
                </button>
              </div>

              <Label>AI Response Card</Label>
              <div className="p-5 rounded-2xl mb-6" style={{ background: "#161A28", border: "1px solid rgba(123,92,245,0.2)" }}>
                <div className="flex items-center gap-2 mb-3">
                  <Brain size={16} style={{ color: "#7B5CF5" }} />
                  <span className="text-sm" style={{ color: "#7B5CF5", fontWeight: 600 }}>AI Analysis</span>
                  <span className="ml-auto text-xs px-2 py-0.5 rounded" style={{ background: "rgba(196,255,64,0.1)", color: "#C4FF40" }}>94% confidence</span>
                </div>
                <p className="text-sm mb-4" style={{ color: "#8892A4", lineHeight: 1.7 }}>
                  Based on the last 30 days of data, revenue is trending 18% above target. The primary driver is enterprise deal closures in the East region, which increased by 34%. I recommend allocating additional sales resources to this region.
                </p>
                <div className="flex gap-2">
                  <button className="px-3 py-1.5 rounded-lg text-xs" style={{ background: "#C4FF40", color: "#000", fontWeight: 600 }}>Take Action</button>
                  <button className="px-3 py-1.5 rounded-lg text-xs" style={{ background: "rgba(255,255,255,0.06)", color: "#8892A4" }}>Show Evidence</button>
                  <button className="px-3 py-1.5 rounded-lg text-xs" style={{ background: "rgba(255,255,255,0.06)", color: "#8892A4" }}>Share</button>
                </div>
              </div>

              <Label>AI Loading State</Label>
              <div className="flex items-start gap-3 p-4 rounded-2xl" style={{ background: "#161A28", border: "1px solid rgba(255,255,255,0.06)" }}>
                <div className="flex items-center justify-center rounded-xl" style={{ width: "32px", height: "32px", background: "rgba(123,92,245,0.1)", flexShrink: 0 }}>
                  <Brain size={16} style={{ color: "#7B5CF5" }} />
                </div>
                <div className="flex-1">
                  <p className="text-xs mb-3" style={{ color: "#7B5CF5" }}>Analyzing your data...</p>
                  <div className="space-y-2">
                    {[80, 60, 40].map((w, i) => (
                      <div key={i} className="h-3 rounded-full animate-pulse" style={{ width: `${w}%`, background: "rgba(255,255,255,0.08)" }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* DATA DISPLAY */}
        {activeSection === "Data Display" && (
          <div>
            <div style={CARD}>
              <SectionTitle label="Data Table" />
              <div className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.06)" }}>
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ background: "#161A28" }}>
                      {["Name", "Revenue", "Status", "Growth", "Actions"].map((h) => (
                        <th key={h} className="text-left px-4 py-3 text-xs" style={{ color: "#4A5568", fontWeight: 600 }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: "Analytics Pro", rev: "$142K", status: "active", growth: 24 },
                      { name: "Insights Basic", rev: "$98K", status: "active", growth: 12 },
                      { name: "DataSync API", rev: "$76K", status: "pending", growth: 31 },
                      { name: "Report Builder", rev: "$54K", status: "error", growth: -4 },
                    ].map((row, i) => (
                      <tr key={i} className="transition-colors hover:bg-white/[0.02]" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
                        <td className="px-4 py-3" style={{ color: "#fff", fontWeight: 500 }}>{row.name}</td>
                        <td className="px-4 py-3" style={{ color: "#fff" }}>{row.rev}</td>
                        <td className="px-4 py-3">
                          <span className="text-xs px-2 py-1 rounded-full" style={{
                            background: row.status === "active" ? "rgba(196,255,64,0.1)" : row.status === "pending" ? "rgba(249,115,22,0.1)" : "rgba(239,68,68,0.1)",
                            color: row.status === "active" ? "#C4FF40" : row.status === "pending" ? "#F97316" : "#EF4444",
                          }}>
                            {row.status}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-1">
                            {row.growth > 0 ? <TrendingUp size={12} style={{ color: "#C4FF40" }} /> : <TrendingDown size={12} style={{ color: "#EF4444" }} />}
                            <span style={{ color: row.growth > 0 ? "#C4FF40" : "#EF4444", fontWeight: 600 }}>
                              {row.growth > 0 ? "+" : ""}{row.growth}%
                            </span>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-2">
                            <button className="p-1 rounded hover:bg-white/5" style={{ color: "#6B7280" }}><Eye size={14} /></button>
                            <button className="p-1 rounded hover:bg-white/5" style={{ color: "#6B7280" }}><Edit size={14} /></button>
                            <button className="p-1 rounded hover:bg-white/5" style={{ color: "#EF4444" }}><Trash2 size={14} /></button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* AVATARS */}
        {activeSection === "Avatars" && (
          <div>
            <div style={CARD}>
              <SectionTitle label="Avatars & User Components" />
              <Label>Avatar Sizes</Label>
              <div className="flex items-end gap-4 mb-6">
                {[20, 28, 36, 48, 64].map((size) => (
                  <div key={size} className="flex items-center justify-center rounded-full text-xs overflow-hidden" style={{ width: size, height: size, background: "linear-gradient(135deg, #C4FF40, #7B5CF5)", color: "#000", fontWeight: 700, fontSize: size < 28 ? 8 : size < 48 ? 10 : 16 }}>
                    <img src={`https://i.pravatar.cc/150?u=${size}`} alt="Avatar" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>

              <Label>Avatar with Status</Label>
              <div className="flex gap-6 mb-6">
                {[
                  { color: "#C4FF40", label: "Online" },
                  { color: "#F97316", label: "Away" },
                  { color: "#6B7280", label: "Offline" },
                ].map((s) => (
                  <div key={s.label} className="flex flex-col items-center gap-2">
                    <div className="relative">
                      <div className="flex items-center justify-center rounded-full text-sm overflow-hidden" style={{ width: "44px", height: "44px", background: "linear-gradient(135deg, #C4FF40, #7B5CF5)", color: "#000", fontWeight: 700 }}>
                        <img src={`https://i.pravatar.cc/150?u=${s.label}`} alt="User" className="w-full h-full object-cover" />
                      </div>
                      <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full border-2" style={{ background: s.color, borderColor: "#090B13" }} />
                    </div>
                    <span className="text-xs" style={{ color: "#6B7280" }}>{s.label}</span>
                  </div>
                ))}
              </div>

              <Label>Team Member Card</Label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { name: "Alex Johnson", role: "Owner", initials: "AJ" },
                  { name: "Sarah Chen", role: "Admin", initials: "SC" },
                  { name: "Marcus W.", role: "Analyst", initials: "MW" },
                ].map((m) => (
                  <div key={m.name} className="flex items-center gap-3 p-3 rounded-xl" style={{ background: "#161A28", border: "1px solid rgba(255,255,255,0.06)" }}>
                    <div className="flex items-center justify-center rounded-full text-xs overflow-hidden" style={{ width: "36px", height: "36px", background: "linear-gradient(135deg, #C4FF40, #7B5CF5)", color: "#000", fontWeight: 700 }}>
                      <img src={`https://i.pravatar.cc/150?u=${m.name}`} alt={m.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="text-sm" style={{ color: "#fff", fontWeight: 500 }}>{m.name}</p>
                      <p className="text-xs" style={{ color: "#6B7280" }}>{m.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TOGGLES */}
        {activeSection === "Toggles" && (
          <div>
            <div style={CARD}>
              <SectionTitle label="Toggle Switches" />
              <div className="space-y-4">
                {(["a", "b", "c"] as const).map((k) => {
                  const labels: Record<string, string> = { a: "AI Insights enabled", b: "Email notifications", c: "Real-time sync" };
                  return (
                    <div key={k} className="flex items-center justify-between py-3" style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                      <span className="text-sm" style={{ color: "#fff" }}>{labels[k]}</span>
                      <button
                        onClick={() => setToggles({ ...toggles, [k]: !toggles[k] })}
                        className="relative rounded-full transition-all duration-200"
                        style={{ width: "44px", height: "24px", background: toggles[k] ? "#C4FF40" : "rgba(255,255,255,0.1)" }}
                      >
                        <div
                          className="absolute top-1 rounded-full transition-all duration-200"
                          style={{ width: "16px", height: "16px", background: toggles[k] ? "#000" : "#6B7280", left: toggles[k] ? "24px" : "4px" }}
                        />
                      </button>
                    </div>
                  );
                })}
              </div>

              <Label>Progress Bars</Label>
              <div className="space-y-3 mt-4">
                {[
                  { label: "Revenue Goal", value: 78, color: "#C4FF40" },
                  { label: "User Growth", value: 55, color: "#7B5CF5" },
                  { label: "Retention Rate", value: 92, color: "#38BDF8" },
                ].map((p) => (
                  <div key={p.label}>
                    <div className="flex justify-between text-xs mb-1">
                      <span style={{ color: "#8892A4" }}>{p.label}</span>
                      <span style={{ color: "#fff", fontWeight: 600 }}>{p.value}%</span>
                    </div>
                    <div className="h-2 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
                      <div className="h-full rounded-full transition-all" style={{ width: `${p.value}%`, background: p.color }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
