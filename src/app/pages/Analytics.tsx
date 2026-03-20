import { useState } from "react";
import {
  Filter,
  Download,
  RefreshCw,
  MoreHorizontal,
  TrendingUp,
  TrendingDown,
  ChevronDown,
  ArrowUpRight,
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
  LineChart,
  Line,
  ComposedChart,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
} from "recharts";

const monthlyRevenue = [
  { month: "Jan", b2b: 320, b2c: 180, target: 450 },
  { month: "Feb", b2b: 380, b2c: 210, target: 470 },
  { month: "Mar", b2b: 290, b2c: 190, target: 490 },
  { month: "Apr", b2b: 450, b2c: 240, target: 510 },
  { month: "May", b2b: 420, b2c: 280, target: 530 },
  { month: "Jun", b2b: 560, b2c: 310, target: 560 },
  { month: "Jul", b2b: 590, b2c: 330, target: 590 },
  { month: "Aug", b2b: 640, b2c: 360, target: 620 },
  { month: "Sep", b2b: 610, b2c: 340, target: 650 },
  { month: "Oct", b2b: 720, b2c: 390, target: 680 },
  { month: "Nov", b2b: 680, b2c: 370, target: 710 },
  { month: "Dec", b2b: 810, b2c: 420, target: 750 },
];

const funnelData = [
  { name: "Visitors", value: 48000, fill: "#7B5CF5" },
  { name: "Sign-ups", value: 12400, fill: "#8B70F5" },
  { name: "Trial Start", value: 6800, fill: "#9B85F5" },
  { name: "Active", value: 3200, fill: "#ABBAF5" },
  { name: "Converted", value: 1840, fill: "#C4FF40" },
];

const cohortData = [
  { week: "Wk 1", retention: 100 },
  { week: "Wk 2", retention: 72 },
  { week: "Wk 3", retention: 58 },
  { week: "Wk 4", retention: 47 },
  { week: "Wk 6", retention: 38 },
  { week: "Wk 8", retention: 32 },
  { week: "Wk 12", retention: 28 },
];

const radarData = [
  { subject: "Revenue", A: 85, B: 72 },
  { subject: "Engagement", A: 78, B: 65 },
  { subject: "Retention", A: 68, B: 80 },
  { subject: "NPS", A: 92, B: 75 },
  { subject: "Growth", A: 76, B: 58 },
  { subject: "Churn", A: 55, B: 68 },
];

const heatmapData = [
  { hour: "12am", Mon: 2, Tue: 1, Wed: 3, Thu: 2, Fri: 1, Sat: 4, Sun: 3 },
  { hour: "3am", Mon: 1, Tue: 2, Wed: 1, Thu: 1, Fri: 2, Sat: 2, Sun: 1 },
  { hour: "6am", Mon: 4, Tue: 3, Wed: 5, Thu: 4, Fri: 3, Sat: 2, Sun: 2 },
  { hour: "9am", Mon: 8, Tue: 9, Wed: 10, Thu: 9, Fri: 8, Sat: 4, Sun: 3 },
  { hour: "12pm", Mon: 9, Tue: 10, Wed: 9, Thu: 10, Fri: 9, Sat: 6, Sun: 5 },
  { hour: "3pm", Mon: 10, Tue: 8, Wed: 9, Thu: 8, Fri: 10, Sat: 5, Sun: 4 },
  { hour: "6pm", Mon: 7, Tue: 8, Wed: 7, Thu: 9, Fri: 8, Sat: 7, Sun: 6 },
  { hour: "9pm", Mon: 5, Tue: 6, Wed: 6, Thu: 5, Fri: 7, Sat: 8, Sun: 7 },
];

const CARD = {
  background: "#0D0F1A",
  border: "1px solid rgba(255,255,255,0.06)",
  borderRadius: "0",
};

function getHeatColor(value: number): string {
  if (value <= 2) return "rgba(123,92,245,0.1)";
  if (value <= 4) return "rgba(123,92,245,0.25)";
  if (value <= 6) return "rgba(123,92,245,0.45)";
  if (value <= 8) return "rgba(196,255,64,0.4)";
  return "rgba(196,255,64,0.7)";
}

export function Analytics() {
  const [activeSegment, setActiveSegment] = useState("All");
  const segments = ["All", "B2B", "B2C", "Enterprise", "SMB"];

  return (
    <div
      className="p-6"
      style={{ background: "#090B13", minHeight: "100%" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 style={{ fontSize: "24px", fontWeight: 300, color: "#fff", marginBottom: "4px" }}>
            Analytics
          </h1>
          <p style={{ color: "#6B7280", fontSize: "14px" }}>
            Deep dive into your business metrics
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm"
            style={{ background: "rgba(255,255,255,0.06)", color: "#8892A4" }}
          >
            <Filter size={14} /> Filters
          </button>
          <button
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm"
            style={{ background: "rgba(255,255,255,0.06)", color: "#8892A4" }}
          >
            <Download size={14} /> Export
          </button>
          <button
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm"
            style={{ background: "#C4FF40", color: "#000", fontWeight: 400 }}
          >
            Last 12 months <ChevronDown size={14} />
          </button>
        </div>
      </div>

      {/* Segment filter */}
      <div className="flex items-center gap-2 mb-6">
        {segments.map((s) => (
          <button
            key={s}
            onClick={() => setActiveSegment(s)}
            className="px-4 py-1.5 rounded-full text-sm transition-all"
            style={{
              background: activeSegment === s ? "#C4FF40" : "rgba(255,255,255,0.06)",
              color: activeSegment === s ? "#000" : "#8892A4",
              fontWeight: activeSegment === s ? 700 : 400,
            }}
          >
            {s}
          </button>
        ))}
      </div>

      {/* Top KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {[
          { label: "Total Sessions", value: "284K", change: "+14.2%", pos: true },
          { label: "Avg. Session Duration", value: "4m 32s", change: "+8.1%", pos: true },
          { label: "Bounce Rate", value: "28.4%", change: "-3.2%", pos: true },
          { label: "Pages / Session", value: "6.8", change: "+1.1", pos: true },
        ].map((kpi) => (
          <div key={kpi.label} className="p-4 rounded-2xl" style={CARD}>
            <p className="text-xs mb-2" style={{ color: "#6B7280" }}>{kpi.label}</p>
            <p style={{ fontSize: "22px", fontWeight: 400, color: "#fff" }}>{kpi.value}</p>
            <div className="flex items-center gap-1 mt-1">
              <ArrowUpRight size={12} style={{ color: "#C4FF40" }} />
              <span className="text-xs" style={{ color: "#C4FF40", fontWeight: 400 }}>{kpi.change}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Stacked Revenue + Funnel */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
        <div className="lg:col-span-2 p-5 rounded-2xl" style={CARD}>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 style={{ fontSize: "15px", fontWeight: 400, color: "#fff" }}>Revenue by Segment</h3>
              <p className="text-xs mt-0.5" style={{ color: "#6B7280" }}>B2B vs B2C stacked</p>
            </div>
            <div className="flex items-center gap-4 text-xs">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-sm" style={{ background: "#7B5CF5" }} />
                <span style={{ color: "#8892A4" }}>B2B</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-sm" style={{ background: "#C4FF40" }} />
                <span style={{ color: "#8892A4" }}>B2C</span>
              </div>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={220}>
            <ComposedChart data={monthlyRevenue} barGap={2}>
              <CartesianGrid stroke="rgba(255,255,255,0.04)" vertical={false} />
              <XAxis dataKey="month" tick={{ fill: "#4A5568", fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: "#4A5568", fontSize: 11 }} axisLine={false} tickLine={false} />
              <Tooltip
                contentStyle={{ background: "#1A1D2E", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "0", color: "#fff", fontSize: "12px" }}
              />
              <Bar dataKey="b2b" stackId="a" fill="#7B5CF5" name="B2B ($K)" />
              <Bar dataKey="b2c" stackId="a" fill="#C4FF40" radius={[4, 4, 0, 0]} name="B2C ($K)" />
              <Line type="monotone" dataKey="target" stroke="#38BDF8" strokeWidth={2} strokeDasharray="4 4" dot={false} name="Target ($K)" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>

        {/* Funnel */}
        <div className="p-5 rounded-2xl" style={CARD}>
          <h3 className="mb-1" style={{ fontSize: "15px", fontWeight: 400, color: "#fff" }}>Conversion Funnel</h3>
          <p className="text-xs mb-4" style={{ color: "#6B7280" }}>From visitor to customer</p>
          <div className="space-y-2">
            {funnelData.map((item, i) => {
              const pct = Math.round((item.value / funnelData[0].value) * 100);
              return (
                <div key={item.name}>
                  <div className="flex justify-between text-xs mb-1">
                    <span style={{ color: "#8892A4" }}>{item.name}</span>
                    <span style={{ color: "#fff", fontWeight: 400 }}>{item.value.toLocaleString()}</span>
                  </div>
                  <div className="h-6 rounded-lg overflow-hidden" style={{ background: "rgba(255,255,255,0.04)" }}>
                    <div
                      className="h-full rounded-lg transition-all"
                      style={{ width: `${pct}%`, background: item.fill }}
                    />
                  </div>
                  {i < funnelData.length - 1 && (
                    <p className="text-xs mt-0.5 text-right" style={{ color: "#4A5568" }}>
                      {Math.round((funnelData[i + 1].value / item.value) * 100)}% pass-through
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Retention + Radar */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <div className="p-5 rounded-2xl" style={CARD}>
          <h3 className="mb-1" style={{ fontSize: "15px", fontWeight: 400, color: "#fff" }}>Cohort Retention</h3>
          <p className="text-xs mb-4" style={{ color: "#6B7280" }}>User retention over time</p>
          <ResponsiveContainer width="100%" height={180}>
            <AreaChart data={cohortData}>
              <defs>
                <linearGradient id="retGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#38BDF8" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#38BDF8" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid stroke="rgba(255,255,255,0.04)" vertical={false} />
              <XAxis dataKey="week" tick={{ fill: "#4A5568", fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis domain={[0, 100]} tick={{ fill: "#4A5568", fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={(v) => `${v}%`} />
              <Tooltip
                contentStyle={{ background: "#1A1D2E", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "0", color: "#fff", fontSize: "12px" }}
                formatter={(v) => [`${v}%`, "Retention"]}
              />
              <Area type="monotone" dataKey="retention" stroke="#38BDF8" strokeWidth={2} fill="url(#retGrad)" dot={{ fill: "#38BDF8", r: 4 }} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="p-5 rounded-2xl" style={CARD}>
          <h3 className="mb-1" style={{ fontSize: "15px", fontWeight: 400, color: "#fff" }}>Performance Radar</h3>
          <p className="text-xs mb-4" style={{ color: "#6B7280" }}>Current vs previous period</p>
          <ResponsiveContainer width="100%" height={200}>
            <RadarChart data={radarData}>
              <PolarGrid stroke="rgba(255,255,255,0.06)" />
              <PolarAngleAxis dataKey="subject" tick={{ fill: "#6B7280", fontSize: 11 }} />
              <Radar name="Current" dataKey="A" stroke="#C4FF40" fill="#C4FF40" fillOpacity={0.15} strokeWidth={2} />
              <Radar name="Previous" dataKey="B" stroke="#7B5CF5" fill="#7B5CF5" fillOpacity={0.15} strokeWidth={2} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Heatmap */}
      <div className="p-5 rounded-2xl" style={CARD}>
        <h3 className="mb-1" style={{ fontSize: "15px", fontWeight: 400, color: "#fff" }}>Activity Heatmap</h3>
        <p className="text-xs mb-4" style={{ color: "#6B7280" }}>User activity by hour and day</p>
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr>
                <th className="text-left pb-2 w-12" style={{ color: "#4A5568" }}>Hour</th>
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
                  <th key={d} className="text-center pb-2" style={{ color: "#4A5568" }}>{d}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {heatmapData.map((row) => (
                <tr key={row.hour}>
                  <td className="py-1 pr-3" style={{ color: "#6B7280" }}>{row.hour}</td>
                  {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
                    <td key={d} className="py-1 px-1">
                      <div
                        className="w-full h-8 rounded-md"
                        style={{ background: getHeatColor((row as any)[d]) }}
                        title={`${row.hour} ${d}: ${(row as any)[d]}/10`}
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex items-center gap-2 mt-3">
            <span className="text-xs" style={{ color: "#4A5568" }}>Low</span>
            <div className="flex gap-1">
              {["rgba(123,92,245,0.1)", "rgba(123,92,245,0.25)", "rgba(123,92,245,0.45)", "rgba(196,255,64,0.4)", "rgba(196,255,64,0.7)"].map((c, i) => (
                <div key={i} className="w-8 h-4 rounded-sm" style={{ background: c }} />
              ))}
            </div>
            <span className="text-xs" style={{ color: "#4A5568" }}>High</span>
          </div>
        </div>
      </div>
    </div>
  );
}