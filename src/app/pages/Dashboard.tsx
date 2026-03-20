import { useState } from "react";
import {
  TrendingUp,
  TrendingDown,
  Users,
  DollarSign,
  Activity,
  ArrowUpRight,
  ArrowDownRight,
  Sparkles,
  RefreshCw,
  MoreHorizontal,
  AlertTriangle,
  CheckCircle2,
  Brain,
  Zap,
  Target,
  Clock,
  Send,
} from "lucide-react";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  LineChart,
  Line,
} from "recharts";

const revenueData = [
  { month: "Jan", revenue: 420, target: 400 },
  { month: "Feb", revenue: 510, target: 430 },
  { month: "Mar", revenue: 480, target: 460 },
  { month: "Apr", revenue: 620, target: 500 },
  { month: "May", revenue: 590, target: 530 },
  { month: "Jun", revenue: 780, target: 560 },
  { month: "Jul", revenue: 840, target: 600 },
  { month: "Aug", revenue: 920, target: 650 },
  { month: "Sep", revenue: 880, target: 700 },
  { month: "Oct", revenue: 1050, target: 750 },
  { month: "Nov", revenue: 990, target: 800 },
  { month: "Dec", revenue: 1180, target: 850 },
];

const channelData = [
  { name: "Organic", value: 38, color: "#C4FF40" },
  { name: "Paid", value: 28, color: "#7B5CF5" },
  { name: "Referral", value: 20, color: "#38BDF8" },
  { name: "Direct", value: 14, color: "#FB923C" },
];

const weeklyData = [
  { day: "Mon", sessions: 2400, conversions: 180 },
  { day: "Tue", sessions: 2800, conversions: 210 },
  { day: "Wed", sessions: 3200, conversions: 260 },
  { day: "Thu", sessions: 2900, conversions: 230 },
  { day: "Fri", sessions: 3500, conversions: 290 },
  { day: "Sat", sessions: 1800, conversions: 140 },
  { day: "Sun", sessions: 1500, conversions: 110 },
];

const topProducts = [
  { name: "Analytics Pro", revenue: "$142K", growth: 24, users: 1840 },
  { name: "Insights Basic", revenue: "$98K", growth: 12, users: 3200 },
  { name: "DataSync API", revenue: "$76K", growth: 31, users: 940 },
  { name: "Report Builder", revenue: "$54K", growth: -4, users: 1120 },
  { name: "Export Suite", revenue: "$38K", growth: 18, users: 760 },
];

const aiInsights = [
  {
    type: "anomaly",
    title: "Revenue spike detected",
    desc: "Thursday's revenue was 42% above the weekly average, likely driven by the enterprise upsell campaign.",
    confidence: 94,
    icon: AlertTriangle,
    color: "#F97316",
  },
  {
    type: "opportunity",
    title: "Upsell opportunity identified",
    desc: "847 Pro users haven't activated the new Analytics feature. Targeted emails could drive 12% revenue lift.",
    confidence: 88,
    icon: Zap,
    color: "#C4FF40",
  },
  {
    type: "risk",
    title: "Churn risk flagged",
    desc: "14 high-value accounts (combined $340K ARR) show disengagement patterns — intervention recommended.",
    confidence: 91,
    icon: Target,
    color: "#EF4444",
  },
];

const kpis = [
  {
    label: "Total Revenue",
    value: "$2.4M",
    change: "+18.2%",
    positive: true,
    icon: DollarSign,
    color: "#C4FF40",
    sub: "vs last month",
  },
  {
    label: "Active Users",
    value: "14,832",
    change: "+12.5%",
    positive: true,
    icon: Users,
    color: "#7B5CF5",
    sub: "vs last month",
  },
  {
    label: "Conversion Rate",
    value: "4.7%",
    change: "+0.8%",
    positive: true,
    icon: Activity,
    color: "#38BDF8",
    sub: "vs last month",
  },
  {
    label: "Avg. Deal Size",
    value: "$8.2K",
    change: "-3.1%",
    positive: false,
    icon: TrendingUp,
    color: "#FB923C",
    sub: "vs last month",
  },
];

const CARD = {
  background: "#0D0F1A",
  border: "1px solid rgba(255,255,255,0.06)",
  borderRadius: "0",
};

export function Dashboard() {
  const [aiQuery, setAiQuery] = useState("");
  const [timeRange, setTimeRange] = useState("12M");

  return (
    <div
      className="p-6"
      style={{ background: "#090B13", minHeight: "100%" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 style={{ fontSize: "24px", fontWeight: 300, color: "#fff", marginBottom: "4px" }}>
            Dashboard
          </h1>
          <p style={{ color: "#6B7280", fontSize: "14px" }}>
            Welcome back, Alex · Updated 2 min ago
          </p>
        </div>
        <div className="flex items-center gap-3">
          {["7D", "30D", "3M", "12M"].map((r) => (
            <button
              key={r}
              onClick={() => setTimeRange(r)}
              className="px-3 py-1.5 rounded-lg text-xs transition-all"
              style={{
                background: timeRange === r ? "#C4FF40" : "rgba(255,255,255,0.06)",
                color: timeRange === r ? "#000" : "#8892A4",
                fontWeight: timeRange === r ? 700 : 400,
              }}
            >
              {r}
            </button>
          ))}
          <button
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs"
            style={{ background: "rgba(255,255,255,0.06)", color: "#8892A4" }}
          >
            <RefreshCw size={12} /> Refresh
          </button>
        </div>
      </div>

      {/* Ask AI Bar */}
      <div
        className="flex items-center gap-3 p-4 rounded-2xl mb-6"
        style={{
          background: "linear-gradient(135deg, rgba(196,255,64,0.06) 0%, rgba(123,92,245,0.06) 100%)",
          border: "1px solid rgba(196,255,64,0.15)",
        }}
      >
        <div
          className="flex items-center justify-center rounded-xl"
          style={{ width: "36px", height: "36px", background: "rgba(196,255,64,0.1)", flexShrink: 0 }}
        >
          <Sparkles size={18} style={{ color: "#C4FF40" }} />
        </div>
        <input
          value={aiQuery}
          onChange={(e) => setAiQuery(e.target.value)}
          placeholder="Ask anything about your data... e.g. 'Why did revenue drop last Tuesday?'"
          className="flex-1 bg-transparent border-none outline-none text-sm"
          style={{ color: "#fff" }}
        />
        <button
          className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm transition-all"
          style={{ background: "#C4FF40", color: "#000", fontWeight: 400 }}
        >
          <Send size={14} /> Ask
        </button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {kpis.map((kpi) => (
          <div key={kpi.label} className="p-5 rounded-2xl" style={CARD}>
            <div className="flex items-start justify-between mb-3">
              <p className="text-sm" style={{ color: "#6B7280" }}>{kpi.label}</p>
              <div
                className="flex items-center justify-center rounded-lg"
                style={{ width: "32px", height: "32px", background: `${kpi.color}15` }}
              >
                <kpi.icon size={16} style={{ color: kpi.color }} />
              </div>
            </div>
            <p style={{ fontSize: "26px", fontWeight: 400, color: "#fff", lineHeight: 1 }}>
              {kpi.value}
            </p>
            <div className="flex items-center gap-1.5 mt-2">
              {kpi.positive ? (
                <ArrowUpRight size={14} style={{ color: "#C4FF40" }} />
              ) : (
                <ArrowDownRight size={14} style={{ color: "#EF4444" }} />
              )}
              <span
                className="text-xs font-semibold"
                style={{ color: kpi.positive ? "#C4FF40" : "#EF4444" }}
              >
                {kpi.change}
              </span>
              <span className="text-xs" style={{ color: "#4A5568" }}>{kpi.sub}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
        {/* Revenue chart */}
        <div className="lg:col-span-2 p-5 rounded-2xl" style={CARD}>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 style={{ fontSize: "15px", fontWeight: 400, color: "#fff" }}>Revenue vs Target</h3>
              <p className="text-xs mt-0.5" style={{ color: "#6B7280" }}>Monthly comparison</p>
            </div>
            <button style={{ color: "#6B7280" }}>
              <MoreHorizontal size={18} />
            </button>
          </div>
          <ResponsiveContainer width="100%" height={220}>
            <AreaChart data={revenueData}>
              <defs>
                <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#C4FF40" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#C4FF40" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="targetGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#7B5CF5" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="#7B5CF5" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid stroke="rgba(255,255,255,0.04)" vertical={false} />
              <XAxis dataKey="month" tick={{ fill: "#4A5568", fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: "#4A5568", fontSize: 11 }} axisLine={false} tickLine={false} />
              <Tooltip
                contentStyle={{ background: "#1A1D2E", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "0", color: "#fff", fontSize: "12px" }}
              />
              <Area type="monotone" dataKey="revenue" stroke="#C4FF40" strokeWidth={2} fill="url(#revGrad)" dot={false} name="Revenue ($K)" />
              <Area type="monotone" dataKey="target" stroke="#7B5CF5" strokeWidth={2} strokeDasharray="4 4" fill="url(#targetGrad)" dot={false} name="Target ($K)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Channel breakdown */}
        <div className="p-5 rounded-2xl" style={CARD}>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 style={{ fontSize: "15px", fontWeight: 400, color: "#fff" }}>Traffic Sources</h3>
              <p className="text-xs mt-0.5" style={{ color: "#6B7280" }}>By channel</p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={140}>
            <PieChart>
              <Pie
                data={channelData}
                cx="50%"
                cy="50%"
                innerRadius={45}
                outerRadius={65}
                paddingAngle={3}
                dataKey="value"
              >
                {channelData.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="space-y-2 mt-2">
            {channelData.map((ch) => (
              <div key={ch.name} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ background: ch.color }} />
                  <span className="text-xs" style={{ color: "#8892A4" }}>{ch.name}</span>
                </div>
                <span className="text-xs" style={{ color: "#fff", fontWeight: 400 }}>{ch.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Top products */}
        <div className="lg:col-span-2 p-5 rounded-2xl" style={CARD}>
          <div className="flex items-center justify-between mb-4">
            <h3 style={{ fontSize: "15px", fontWeight: 400, color: "#fff" }}>Top Products</h3>
            <button className="text-xs" style={{ color: "#C4FF40" }}>View all</button>
          </div>
          <div className="space-y-1">
            <div className="grid grid-cols-4 text-xs pb-2" style={{ color: "#4A5568", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
              <span>Product</span>
              <span className="text-right">Revenue</span>
              <span className="text-right">Growth</span>
              <span className="text-right">Users</span>
            </div>
            {topProducts.map((p, i) => (
              <div
                key={p.name}
                className="grid grid-cols-4 py-3 rounded-lg px-2 transition-all"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.03)" }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-xs w-4" style={{ color: "#4A5568" }}>{i + 1}</span>
                  <span className="text-sm" style={{ color: "#fff" }}>{p.name}</span>
                </div>
                <span className="text-sm text-right" style={{ color: "#fff", fontWeight: 400 }}>{p.revenue}</span>
                <div className="flex items-center justify-end gap-1">
                  {p.growth > 0 ? (
                    <TrendingUp size={12} style={{ color: "#C4FF40" }} />
                  ) : (
                    <TrendingDown size={12} style={{ color: "#EF4444" }} />
                  )}
                  <span
                    className="text-sm"
                    style={{ color: p.growth > 0 ? "#C4FF40" : "#EF4444", fontWeight: 400 }}
                  >
                    {p.growth > 0 ? "+" : ""}{p.growth}%
                  </span>
                </div>
                <span className="text-sm text-right" style={{ color: "#8892A4" }}>{p.users.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>

        {/* AI Insights */}
        <div className="p-5 rounded-2xl" style={CARD}>
          <div className="flex items-center gap-2 mb-4">
            <Brain size={16} style={{ color: "#7B5CF5" }} />
            <h3 style={{ fontSize: "15px", fontWeight: 400, color: "#fff" }}>AI Insights</h3>
            <span
              className="ml-auto text-xs px-2 py-0.5 rounded-full"
              style={{ background: "rgba(123,92,245,0.15)", color: "#7B5CF5" }}
            >
              3 new
            </span>
          </div>
          <div className="space-y-3">
            {aiInsights.map((insight) => (
              <div
                key={insight.title}
                className="p-3 rounded-xl cursor-pointer transition-all"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: `1px solid ${insight.color}20`,
                }}
              >
                <div className="flex items-start gap-2 mb-1.5">
                  <insight.icon size={14} className="mt-0.5" style={{ color: insight.color }} />
                  <p className="text-xs" style={{ color: "#fff", fontWeight: 400 }}>{insight.title}</p>
                </div>
                <p className="text-xs leading-relaxed mb-2" style={{ color: "#6B7280" }}>
                  {insight.desc}
                </p>
                <div className="flex items-center justify-between">
                  <div
                    className="flex items-center gap-1 text-xs px-2 py-0.5 rounded-full"
                    style={{ background: "rgba(255,255,255,0.05)", color: "#8892A4" }}
                  >
                    <CheckCircle2 size={10} />
                    {insight.confidence}% confidence
                  </div>
                  <button className="text-xs" style={{ color: "#C4FF40" }}>Act →</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Weekly sessions */}
      <div className="mt-4 p-5 rounded-2xl" style={CARD}>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 style={{ fontSize: "15px", fontWeight: 400, color: "#fff" }}>Weekly Sessions & Conversions</h3>
            <p className="text-xs mt-0.5" style={{ color: "#6B7280" }}>Last 7 days</p>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-sm" style={{ background: "#7B5CF5" }} />
              <span style={{ color: "#8892A4" }}>Sessions</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-sm" style={{ background: "#C4FF40" }} />
              <span style={{ color: "#8892A4" }}>Conversions</span>
            </div>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={160}>
          <BarChart data={weeklyData} barGap={4}>
            <CartesianGrid stroke="rgba(255,255,255,0.04)" vertical={false} />
            <XAxis dataKey="day" tick={{ fill: "#4A5568", fontSize: 11 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: "#4A5568", fontSize: 11 }} axisLine={false} tickLine={false} />
            <Tooltip
              contentStyle={{ background: "#1A1D2E", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "0", color: "#fff", fontSize: "12px" }}
            />
            <Bar dataKey="sessions" fill="#7B5CF5" radius={[4, 4, 0, 0]} maxBarSize={40} name="Sessions" />
            <Bar dataKey="conversions" fill="#C4FF40" radius={[4, 4, 0, 0]} maxBarSize={40} name="Conversions" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
