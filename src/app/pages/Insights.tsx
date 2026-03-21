import { useState } from "react";
import {
  Sparkles,
  Brain,
  Zap,
  AlertTriangle,
  TrendingUp,
  Target,
  ArrowRight,
  ThumbsUp,
  ThumbsDown,
  Share2,
  Bookmark,
  Clock,
  Check,
  Filter,
  Search,
  MoreHorizontal,
  Lightbulb,
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
  LineChart,
  Line,
} from "recharts";

const insightTypes = ["All", "Anomalies", "Opportunities", "Risks", "Trends"];

const insights = [
  {
    id: 1,
    type: "opportunity",
    title: "High-Value Upsell Opportunity in Enterprise Tier",
    summary:
      "847 Pro users haven't activated the Advanced Analytics feature since launch. Based on usage patterns, these users are prime candidates for the Enterprise tier. A targeted campaign could yield an estimated $340K in additional ARR.",
    confidence: 94,
    impact: "High",
    timeframe: "This week",
    tags: ["Revenue", "Upsell", "Enterprise"],
    chart: [
      { month: "Jan", value: 120 },
      { month: "Feb", value: 280 },
      { month: "Mar", value: 95 },
      { month: "Apr", value: 310 },
      { month: "May", value: 110 },
      { month: "Jun", value: 340 },
    ],
    icon: Zap,
    color: "#C4FF40",
    actions: ["View Segment", "Create Campaign"],
  },
  {
    id: 2,
    type: "anomaly",
    title: "Unusual Revenue Spike on Thursday",
    summary:
      "Thursday's revenue was 42% above the 7-day rolling average. Doppler traced this to a single enterprise deal that closed early alongside a successful email campaign. The pattern suggests your sales team performs best mid-week.",
    confidence: 97,
    impact: "Medium",
    timeframe: "Yesterday",
    tags: ["Revenue", "Anomaly", "Sales"],
    chart: [
      { day: "Mon", value: 42 },
      { day: "Tue", value: 115 },
      { day: "Wed", value: 28 },
      { day: "Thu", value: 145 },
      { day: "Fri", value: 39 },
      { day: "Sat", value: 92 },
    ],
    icon: AlertTriangle,
    color: "#F97316",
    actions: ["Investigate", "Set Alert"],
  },
  {
    id: 3,
    type: "risk",
    title: "Churn Risk: 14 High-Value Accounts",
    summary:
      "AI analysis has identified 14 accounts representing $340K combined ARR showing disengagement signals: declining login frequency (-62%), reduced feature usage, and support tickets with unresolved status. Immediate outreach is recommended.",
    confidence: 89,
    impact: "Critical",
    timeframe: "Ongoing",
    tags: ["Churn", "Risk", "Retention"],
    chart: [
      { week: "Wk1", engaged: 14, at_risk: 0 },
      { week: "Wk2", engaged: 13, at_risk: 1 },
      { week: "Wk3", engaged: 11, at_risk: 3 },
      { week: "Wk4", engaged: 8, at_risk: 6 },
      { week: "Wk5", engaged: 5, at_risk: 9 },
      { week: "Wk6", engaged: 2, at_risk: 12 },
    ],
    icon: Target,
    color: "#EF4444",
    actions: ["View Accounts", "Generate Outreach"],
  },
  {
    id: 4,
    type: "trend",
    title: "Mobile Usage Surging Among New Users",
    summary:
      "Mobile device usage among users acquired in the last 30 days is 68% higher than the cohort from 6 months ago. This signals a shift in acquisition channels and suggests investing in mobile experience improvements.",
    confidence: 91,
    impact: "Medium",
    timeframe: "Last 30 days",
    tags: ["Mobile", "UX", "Acquisition"],
    chart: [
      { month: "Jul", desktop: 72, mobile: 28 },
      { month: "Aug", desktop: 68, mobile: 32 },
      { month: "Sep", desktop: 64, mobile: 36 },
      { month: "Oct", desktop: 58, mobile: 42 },
      { month: "Nov", desktop: 52, mobile: 48 },
      { month: "Dec", desktop: 47, mobile: 53 },
    ],
    icon: TrendingUp,
    color: "#38BDF8",
    actions: ["Explore Trend", "Share Report"],
  },
];

const impactColors: Record<string, string> = {
  Critical: "#EF4444",
  High: "#C4FF40",
  Medium: "#F97316",
  Low: "#38BDF8",
};

const CARD = {
  background: "#0D0F1A",
  border: "1px solid rgba(255,255,255,0.06)",
  borderRadius: "0.25rem",
};

export function Insights() {
  const [activeType, setActiveType] = useState("All");
  const [savedIds, setSavedIds] = useState<number[]>([]);
  const [likedIds, setLikedIds] = useState<number[]>([]);

  const filtered =
    activeType === "All"
      ? insights
      : insights.filter((i) =>
          i.type === activeType.toLowerCase().replace(/s$/, "")
        );

  return (
    <div
      className="p-6"
      style={{ background: "#090B13", minHeight: "100%" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 style={{ fontSize: "24px", fontWeight: 400, color: "#fff", marginBottom: "4px" }}>
            AI Insights
          </h1>
          <p style={{ color: "#6B7280", fontSize: "14px" }}>
            Doppler found {insights.length} new insights for you
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm"
            style={{ background: "rgba(255,255,255,0.06)", color: "#8892A4" }}
          >
            <Filter size={14} /> Filter
          </button>
          <button
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm"
            style={{ background: "#C4FF40", color: "#000", fontWeight: 400 }}
          >
            <Sparkles size={14} /> Generate Report
          </button>
        </div>
      </div>

      {/* Stats bar */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        {[
          { label: "Total Insights", value: "24", icon: Lightbulb, color: "#7B5CF5" },
          { label: "Opportunities", value: "8", icon: Zap, color: "#C4FF40" },
          { label: "Risks Detected", value: "3", icon: AlertTriangle, color: "#EF4444" },
          { label: "Est. Revenue Impact", value: "+$520K", icon: TrendingUp, color: "#38BDF8" },
        ].map((s) => (
          <div key={s.label} className="flex items-center gap-3 p-4 rounded-2xl" style={CARD}>
            <div
              className="flex items-center justify-center rounded-xl"
              style={{ width: "40px", height: "40px", background: `${s.color}15`, flexShrink: 0 }}
            >
              <s.icon size={18} style={{ color: s.color }} />
            </div>
            <div>
              <p style={{ fontSize: "20px", fontWeight: 400, color: "#fff" }}>{s.value}</p>
              <p className="text-xs" style={{ color: "#6B7280" }}>{s.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Search and filter */}
      <div className="flex items-center gap-3 mb-6">
        <div
          className="flex items-center gap-2 flex-1 px-3 py-2.5 rounded-xl"
          style={{ background: "#0D0F1A", border: "1px solid rgba(255,255,255,0.06)" }}
        >
          <Search size={16} style={{ color: "#6B7280" }} />
          <input
            placeholder="Search insights..."
            className="flex-1 bg-transparent border-none outline-none text-sm"
            style={{ color: "#fff" }}
          />
        </div>
        <div className="flex items-center gap-2">
          {insightTypes.map((t) => (
            <button
              key={t}
              onClick={() => setActiveType(t)}
              className="px-3 py-2 rounded-xl text-sm transition-all"
              style={{
                background: activeType === t ? "#C4FF40" : "rgba(255,255,255,0.06)",
                color: activeType === t ? "#000" : "#8892A4",
                fontWeight: activeType === t ? 700 : 400,
              }}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Insights list */}
      <div className="space-y-4">
        {filtered.map((insight) => (
          <div key={insight.id} className="p-6 rounded-2xl" style={CARD}>
            <div className="flex items-start gap-4">
              {/* Left column */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3 flex-wrap">
                  <div
                    className="flex items-center justify-center rounded-lg"
                    style={{ width: "32px", height: "32px", background: `${insight.color}15`, flexShrink: 0 }}
                  >
                    <insight.icon size={16} style={{ color: insight.color }} />
                  </div>
                  <span
                    className="text-xs px-2 py-1 rounded-full"
                    style={{ background: `${impactColors[insight.impact]}15`, color: impactColors[insight.impact], fontWeight: 400 }}
                  >
                    {insight.impact} Impact
                  </span>
                  <div className="flex items-center gap-1 text-xs" style={{ color: "#6B7280" }}>
                    <Clock size={12} />
                    {insight.timeframe}
                  </div>
                  <div className="flex items-center gap-1 text-xs ml-auto" style={{ color: "#6B7280" }}>
                    <Check size={12} style={{ color: "#C4FF40" }} />
                    {insight.confidence}% confidence
                  </div>
                </div>

                <h3 className="mb-2" style={{ fontSize: "16px", fontWeight: 400, color: "#fff" }}>
                  {insight.title}
                </h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#8892A4" }}>
                  {insight.summary}
                </p>

                {/* Tags */}
                <div className="flex items-center gap-2 mb-4 flex-wrap">
                  {insight.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full"
                      style={{ background: "rgba(255,255,255,0.06)", color: "#8892A4" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 flex-wrap">
                  {insight.actions.map((action, i) => (
                    <button
                      key={action}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs transition-all"
                      style={
                        i === 0
                          ? { background: "#C4FF40", color: "#000", fontWeight: 400 }
                          : { background: "rgba(255,255,255,0.06)", color: "#fff" }
                      }
                    >
                      {action}
                      {i === 0 && <ArrowRight size={12} />}
                    </button>
                  ))}
                  <div className="flex items-center gap-2 ml-auto">
                    <button
                      onClick={() => setLikedIds((p) => p.includes(insight.id) ? p.filter((x) => x !== insight.id) : [...p, insight.id])}
                      className="p-2 rounded-lg transition-all"
                      style={{ background: likedIds.includes(insight.id) ? "rgba(196,255,64,0.1)" : "rgba(255,255,255,0.04)", color: likedIds.includes(insight.id) ? "#C4FF40" : "#6B7280" }}
                    >
                      <ThumbsUp size={14} />
                    </button>
                    <button className="p-2 rounded-lg" style={{ background: "rgba(255,255,255,0.04)", color: "#6B7280" }}>
                      <ThumbsDown size={14} />
                    </button>
                    <button
                      onClick={() => setSavedIds((p) => p.includes(insight.id) ? p.filter((x) => x !== insight.id) : [...p, insight.id])}
                      className="p-2 rounded-lg transition-all"
                      style={{ background: savedIds.includes(insight.id) ? "rgba(123,92,245,0.1)" : "rgba(255,255,255,0.04)", color: savedIds.includes(insight.id) ? "#7B5CF5" : "#6B7280" }}
                    >
                      <Bookmark size={14} />
                    </button>
                    <button className="p-2 rounded-lg" style={{ background: "rgba(255,255,255,0.04)", color: "#6B7280" }}>
                      <Share2 size={14} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Chart preview */}
              <div
                className="flex-shrink-0 rounded-xl overflow-hidden"
                style={{ width: "220px", height: "120px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.04)", padding: "12px" }}
              >
                <ResponsiveContainer width="100%" height="100%">
                  {insight.type === "risk" ? (
                    <BarChart data={insight.chart as any} barGap={2}>
                      <Bar dataKey="engaged" fill="#C4FF40" radius={[3, 3, 0, 0]} maxBarSize={16} />
                      <Bar dataKey="at_risk" fill="#EF4444" radius={[3, 3, 0, 0]} maxBarSize={16} />
                    </BarChart>
                  ) : insight.type === "trend" ? (
                    <BarChart data={insight.chart as any}>
                      <Bar dataKey="desktop" stackId="a" fill="#7B5CF5" />
                      <Bar dataKey="mobile" stackId="a" fill="#C4FF40" radius={[3, 3, 0, 0]} />
                    </BarChart>
                  ) : (
                    <AreaChart data={insight.chart as any}>
                      <defs>
                        <linearGradient id={`grad-${insight.id}`} x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor={insight.color} stopOpacity={0.3} />
                          <stop offset="95%" stopColor={insight.color} stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <Area
                        type="natural"
                        dataKey="value"
                        stroke={insight.color}
                        strokeWidth={2}
                        fill={`url(#grad-${insight.id})`}
                        dot={false}
                      />
                    </AreaChart>
                  )}
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
