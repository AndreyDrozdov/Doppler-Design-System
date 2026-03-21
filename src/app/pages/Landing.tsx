import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  BarChart3,
  Database,
  Zap,
  ArrowRight,
  Check,
  TrendingUp,
  Brain,
  MessageSquare,
  Shield,
  Activity,
  ChevronRight,
  Star,
  Play,
  Orbit,
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceDot,
  Label,
} from "recharts";

/* ── Dashboard Demo data ── */
const dashboardMetrics = [
  {
    label: "Total Revenue",
    value: "$2.4M",
    change: "+18%",
    chartTitle: "Revenue Trend",
    primaryKey: "revenue",
    secondaryKey: "cost",
    primaryColor: "#C4FF40",
    secondaryColor: "#6B7280",
    data: [
      { month: "Jan", revenue: 1.2, cost: 0.8 },
      { month: "Feb", revenue: 2.1, cost: 1.1 },
      { month: "Mar", revenue: 0.9, cost: 0.85 },
      { month: "Apr", revenue: 2.3, cost: 0.75 },
      { month: "May", revenue: 1.4, cost: 1.2 },
      { month: "Jun", revenue: 2.6, cost: 0.95 },
      { month: "Jul", revenue: 1.1, cost: 1.3 },
      { month: "Aug", revenue: 2.8, cost: 0.85 },
    ],
  },
  {
    label: "Active Users",
    value: "14,832",
    change: "+12%",
    chartTitle: "User Growth",
    primaryKey: "users",
    secondaryKey: "newUsers",
    primaryColor: "#38BDF8",
    secondaryColor: "#6B7280",
    data: [
      { month: "Jan", users: 8200, newUsers: 1400 },
      { month: "Feb", users: 12500, newUsers: 600 },
      { month: "Mar", users: 9500, newUsers: 1800 },
      { month: "Apr", users: 14800, newUsers: 700 },
      { month: "May", users: 10800, newUsers: 2200 },
      { month: "Jun", users: 15400, newUsers: 900 },
      { month: "Jul", users: 11200, newUsers: 2000 },
      { month: "Aug", users: 16200, newUsers: 1100 },
    ],
  },
  {
    label: "Conversion Rate",
    value: "4.7%",
    change: "+0.8%",
    chartTitle: "Conversion Trend",
    primaryKey: "conversion",
    secondaryKey: "benchmark",
    primaryColor: "#7B5CF5",
    secondaryColor: "#6B7280",
    data: [
      { month: "Jan", conversion: 3.2, benchmark: 3.5 },
      { month: "Feb", conversion: 5.4, benchmark: 3.2 },
      { month: "Mar", conversion: 2.8, benchmark: 3.8 },
      { month: "Apr", conversion: 6.1, benchmark: 3.4 },
      { month: "May", conversion: 3.5, benchmark: 4.1 },
      { month: "Jun", conversion: 5.8, benchmark: 3.5 },
      { month: "Jul", conversion: 3.9, benchmark: 3.9 },
      { month: "Aug", conversion: 6.4, benchmark: 3.6 },
    ],
  },
  {
    label: "Avg. Deal Size",
    value: "$8.2K",
    change: "+24%",
    chartTitle: "Deal Size Trend",
    primaryKey: "dealSize",
    secondaryKey: "target",
    primaryColor: "#FB923C",
    secondaryColor: "#6B7280",
    data: [
      { month: "Jan", dealSize: 5.8, target: 6.0 },
      { month: "Feb", dealSize: 3.2, target: 6.5 },
      { month: "Mar", dealSize: 8.4, target: 5.8 },
      { month: "Apr", dealSize: 4.9, target: 6.8 },
      { month: "May", dealSize: 9.1, target: 6.1 },
      { month: "Jun", dealSize: 5.5, target: 7.1 },
      { month: "Jul", dealSize: 9.8, target: 6.4 },
      { month: "Aug", dealSize: 6.8, target: 7.4 },
    ],
  },
];

const DASHBOARD_CYCLE = 5000;

const AnchoredTooltip = (props: any) => {
  const { cx, cy, color, value } = props;
  if (!cx || !cy) return null;
  
  return (
    <g style={{ pointerEvents: "none" }}>
      <motion.g
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <rect
          x={cx - 35}
          y={cy - 44}
          width={70}
          height={26}
          rx={3}
          fill={color}
        />
        <path
          d={`M ${cx - 6} ${cy - 18} L ${cx} ${cy - 10} L ${cx + 6} ${cy - 18} Z`}
          fill={color}
        />
        <text
          x={cx}
          y={cy - 30}
          textAnchor="middle"
          dominantBaseline="middle"
          fill="#000"
          style={{ fontSize: "12px", fontWeight: 700, fontFamily: "Inter, sans-serif" }}
        >
          {value}
        </text>
      </motion.g>
      
      {/* Data point dot — Static */}
      <circle cx={cx} cy={cy} r={6} fill={color} />
      <circle cx={cx} cy={cy} r={3.5} fill="#fff" />
    </g>
  );
};

function DashboardDemo() {
  const [activeMetric, setActiveMetric] = useState(0);
  const [progress, setProgress] = useState(0);
  const [showTooltip, setShowTooltip] = useState(false);

  const metric = dashboardMetrics[activeMetric];

  // Tooltip entrance delay
  useEffect(() => {
    setShowTooltip(false);
    const timer = setTimeout(() => setShowTooltip(true), 800);
    return () => clearTimeout(timer);
  }, [activeMetric]);

  // Auto-cycle
  useEffect(() => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(elapsed / DASHBOARD_CYCLE, 1);
      setProgress(pct);
      if (pct >= 1) {
        clearInterval(interval);
        setActiveMetric((prev) => (prev + 1) % dashboardMetrics.length);
        setProgress(0);
      }
    }, 30);
    return () => clearInterval(interval);
  }, [activeMetric]);

  // The "middle-ish" point for the anchored tooltip
  const anchoredIndex = 5; // Jun
  const anchoredPoint = metric.data[anchoredIndex];

  return (
    <div
      className="relative mt-20 mx-auto rounded-2xl overflow-hidden"
      style={{
        maxWidth: "900px",
        border: "1px solid rgba(255,255,255,0.08)",
        background: "#090B13",
        boxShadow: "0 40px 120px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)",
      }}
    >

      {/* Dashboard content */}
      <div className="p-4 md:p-6">
        {/* Stat cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3 mb-4">
          {dashboardMetrics.map((m, i) => {
            const isActive = i === activeMetric;
            return (
              <motion.div
                key={m.label}
                className="p-3 rounded-xl cursor-pointer relative overflow-hidden text-center"
                onClick={() => {
                  setActiveMetric(i);
                  setProgress(0);
                }}
                animate={{
                  borderColor: isActive
                    ? m.primaryColor + "50"
                    : "rgba(255,255,255,0.06)",
                  background: isActive
                    ? "rgba(255,255,255,0.04)"
                    : "rgba(255,255,255,0.03)",
                }}
                transition={{ duration: 0.35 }}
                style={{ border: "1px solid" }}
              >
                {/* Active progress line at bottom */}
                {isActive && (
                  <motion.div
                    className="absolute bottom-0 left-0 h-[2px]"
                    style={{
                      width: `${progress * 100}%`,
                      background: m.primaryColor,
                    }}
                  />
                )}
                <p className="text-[10px] md:text-[11px] mb-1 uppercase tracking-wider font-medium" style={{ color: isActive ? m.primaryColor : "#6B7280" }}>
                  {m.label}
                </p>
                <div className="flex items-center justify-center gap-1.5 md:gap-2 mt-0.5">
                  <p className="text-lg md:text-2xl" style={{ fontWeight: 400, color: "#fff", fontFamily: "'Space Grotesk', sans-serif" }}>{m.value}</p>
                  <span
                    className="hidden sm:inline-block text-[10px] md:text-xs px-1.5 py-0.5 rounded-full font-medium"
                    style={{
                      background: m.primaryColor + "20",
                      color: m.primaryColor,
                    }}
                  >
                    {m.change}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Chart */}
        <div
          className="rounded-xl px-4 pt-4 pb-4 relative"
          style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div className="flex items-center justify-between mb-3">
            <AnimatePresence mode="wait">
              <motion.p
                key={metric.chartTitle}
                className="text-sm"
                style={{ color: "#8892A4" }}
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 4 }}
                transition={{ duration: 0.2 }}
              >
                {metric.chartTitle}
              </motion.p>
            </AnimatePresence>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full" style={{ background: metric.primaryColor }} />
                <span className="text-xs" style={{ color: "#6B7280" }}>{metric.primaryKey}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full" style={{ background: metric.secondaryColor }} />
                <span className="text-xs" style={{ color: "#6B7280" }}>{metric.secondaryKey}</span>
              </div>
            </div>
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeMetric}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <ResponsiveContainer width="100%" height={180}>
                <AreaChart data={metric.data} margin={{ left: 10, right: 50, top: 35, bottom: 0 }}>
                  <defs>
                    <linearGradient id={`grad1-${activeMetric}`} x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor={metric.primaryColor} stopOpacity={0.3} />
                      <stop offset="95%" stopColor={metric.primaryColor} stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id={`grad2-${activeMetric}`} x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor={metric.secondaryColor} stopOpacity={0.2} />
                      <stop offset="95%" stopColor={metric.secondaryColor} stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid stroke="rgba(255,255,255,0.04)" vertical={false} />
                  <XAxis dataKey="month" tick={{ fill: "#4A5568", fontSize: 11 }} axisLine={false} tickLine={false} />
                  <YAxis width={40} tick={{ fill: "#4A5568", fontSize: 11 }} axisLine={false} tickLine={false} />
                  <Area
                    type="natural"
                    dataKey={metric.primaryKey}
                    stroke={metric.primaryColor}
                    strokeWidth={2}
                    fill={`url(#grad1-${activeMetric})`}
                    isAnimationActive={true}
                    animationDuration={800}
                    animationEasing="ease-out"
                  />
                  <Area
                    type="natural"
                    dataKey={metric.secondaryKey}
                    stroke={metric.secondaryColor}
                    strokeWidth={1.5}
                    strokeDasharray="4 4"
                    fill={`url(#grad2-${activeMetric})`}
                    isAnimationActive={true}
                    animationDuration={800}
                    animationEasing="ease-out"
                  />
                  <ReferenceDot
                    x={anchoredPoint.month}
                    y={Number(anchoredPoint[metric.primaryKey as keyof typeof anchoredPoint])}
                    fill="none"
                    stroke="none"
                    isFront={true}
                    shape={
                      showTooltip ? (
                        <AnchoredTooltip
                          color={metric.primaryColor}
                          value={
                            metric.primaryKey === "revenue" ? `$${anchoredPoint[metric.primaryKey as keyof typeof anchoredPoint]}M` :
                            metric.primaryKey === "users" ? `${((anchoredPoint[metric.primaryKey as keyof typeof anchoredPoint] as unknown as number) / 1000).toFixed(1)}K` :
                            metric.primaryKey === "conversion" ? `${anchoredPoint[metric.primaryKey as keyof typeof anchoredPoint]}%` :
                            `$${anchoredPoint[metric.primaryKey as keyof typeof anchoredPoint]}K`
                          }
                        />
                      ) : undefined
                    }
                  />
                </AreaChart>
              </ResponsiveContainer>
            </motion.div>
          </AnimatePresence>

        </div>
      </div>
    </div>
  );
}

const features = [
  {
    icon: Brain,
    title: "Natural Language Queries",
    desc: "Ask questions in plain English and get instant AI-powered answers from your data.",
    color: "#7B5CF5",
  },
  {
    icon: BarChart3,
    title: "Automated Visualizations",
    desc: "Doppler automatically picks the best chart type and creates stunning visuals.",
    color: "#C4FF40",
  },
  {
    icon: TrendingUp,
    title: "Predictive Insights",
    desc: "Get ahead of trends with AI-powered forecasts and anomaly detection.",
    color: "#38BDF8",
  },
  {
    icon: MessageSquare,
    title: "Collaborative Stories",
    desc: "Share AI-generated data stories with your team with a single click.",
    color: "#FB923C",
  },
  {
    icon: Database,
    title: "100+ Integrations",
    desc: "Connect to Salesforce, HubSpot, Google Analytics, Snowflake, and more.",
    color: "#34D399",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    desc: "SOC 2 Type II certified with end-to-end encryption and data governance.",
    color: "#F472B6",
  },
];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "VP of Marketing, TechFlow",
    quote:
      "Doppler cut our reporting time by 80%. Now I get insights in seconds instead of waiting days for the data team.",
    avatar: "https://i.pravatar.cc/150?u=sarah",
    rating: 5,
  },
  {
    name: "Marcus Williams",
    role: "CEO, GrowthLabs",
    quote:
      "The AI insights are uncannily accurate. It surfaced a revenue opportunity we completely missed—added $2M to our pipeline.",
    avatar: "https://i.pravatar.cc/150?u=marcus",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Sales Director, Apex Corp",
    quote:
      "Our sales team finally has real-time visibility. Doppler is the first BI tool they actually use every day.",
    avatar: "https://i.pravatar.cc/150?u=priya",
    rating: 5,
  },
];

const plans = [
  {
    name: "Starter",
    price: "$49",
    period: "/month",
    desc: "Perfect for small teams getting started",
    features: ["5 data sources", "10 AI queries/day", "Basic dashboards", "Email support"],
    cta: "Start free trial",
    highlight: false,
  },
  {
    name: "Pro",
    price: "$149",
    period: "/month",
    desc: "For growing teams that need more power",
    features: [
      "25 data sources",
      "Unlimited AI queries",
      "Advanced analytics",
      "Team collaboration",
      "Priority support",
      "Custom reports",
    ],
    cta: "Start free trial",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "For large organizations with complex needs",
    features: [
      "Unlimited data sources",
      "Dedicated AI models",
      "SSO & advanced security",
      "Custom integrations",
      "24/7 support",
      "SLA guarantees",
    ],
    cta: "Contact sales",
    highlight: false,
  },
];

/* ── AI Query Demo data ── */
const aiDemoQueries = [
  {
    question: "Which products have the highest churn risk this quarter?",
    analysis: "4 products show elevated churn signals. Enterprise Plan has a 23% predicted churn rate, driven by low feature adoption in onboarding flows.",
    confidence: "92%",
    rows: [
      { label: "Enterprise Plan", value: "23% churn risk", color: "#EF4444" },
      { label: "Pro Annual", value: "17% churn risk", color: "#F97316" },
      { label: "Team Bundle", value: "12% churn risk", color: "#EAB308" },
      { label: "Starter Monthly", value: "8% churn risk", color: "#22C55E" },
    ],
  },
  {
    question: "Show me revenue trends broken down by region",
    analysis: "APAC revenue grew 34% QoQ, outpacing all other regions. North America remains the largest market but growth is plateauing at 6%.",
    confidence: "97%",
    rows: [
      { label: "APAC", value: "+34% QoQ", color: "#22C55E" },
      { label: "EMEA", value: "+18% QoQ", color: "#C4FF40" },
      { label: "LATAM", value: "+11% QoQ", color: "#EAB308" },
      { label: "North America", value: "+6% QoQ", color: "#F97316" },
    ],
  },
  {
    question: "What's causing the spike in support tickets?",
    analysis: "Ticket volume surged 42% after the v3.2 release. 68% of new tickets relate to the updated billing flow, specifically the payment method migration.",
    confidence: "89%",
    rows: [
      { label: "Billing Flow", value: "68% of tickets", color: "#EF4444" },
      { label: "API Errors", value: "15% of tickets", color: "#F97316" },
      { label: "Login Issues", value: "11% of tickets", color: "#EAB308" },
      { label: "Other", value: "6% of tickets", color: "#6B7280" },
    ],
  },
];

const CYCLE_DURATION = 6000; // ms per question
const TYPING_SPEED = 28; // ms per character

function TypeWriter({ text, onComplete }: { text: string; onComplete?: () => void }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    setDisplayed("");
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(interval);
        onComplete?.();
      }
    }, TYPING_SPEED);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <span>
      {displayed}
      {displayed.length < text.length && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
          style={{ color: "#C4FF40" }}
        >
          |
        </motion.span>
      )}
    </span>
  );
}

function AiQueryDemo() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [phase, setPhase] = useState<"typing" | "analyzing" | "results">("typing");
  const [progress, setProgress] = useState(0);

  const activeQuery = aiDemoQueries[activeIndex];

  const advanceToNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % aiDemoQueries.length);
    setPhase("typing");
    setProgress(0);
  }, []);

  // Progress bar timer
  useEffect(() => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(elapsed / CYCLE_DURATION, 1);
      setProgress(pct);
      if (pct >= 1) {
        clearInterval(interval);
        advanceToNext();
      }
    }, 30);
    return () => clearInterval(interval);
  }, [activeIndex, advanceToNext]);

  // Phase transitions
  const handleTypingComplete = useCallback(() => {
    setTimeout(() => setPhase("analyzing"), 300);
    setTimeout(() => setPhase("results"), 900);
  }, []);

  return (
    <section className="py-20 px-8" style={{ background: "#090B13" }}>
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
          {/* Left — Questions */}
          <div className="flex flex-col">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm mb-6 self-start"
              style={{ background: "rgba(196,255,64,0.08)", border: "1px solid rgba(196,255,64,0.2)", color: "#C4FF40" }}
            >
              <Brain size={14} /> AI-Powered
            </div>
            <h2
              className="mb-4"
              style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 400, lineHeight: 1.2, letterSpacing: "-1px" }}
            >
              Just ask. Get answers.
            </h2>
            <p className="mb-6" style={{ color: "#8892A4", lineHeight: 1.7 }}>
              No SQL. No code. No waiting. Type your question in plain English and
              Doppler instantly translates it into insights, charts, and recommendations.
            </p>
            <div className="space-y-3 flex-1">
              {aiDemoQueries.map((q, i) => {
                const isActive = i === activeIndex;
                return (
                  <motion.div
                    key={q.question}
                    onClick={() => {
                      setActiveIndex(i);
                      setPhase("typing");
                      setProgress(0);
                    }}
                    className="flex items-start gap-3 p-3 rounded-xl cursor-pointer relative overflow-hidden"
                    animate={{
                      background: isActive ? "rgba(196,255,64,0.06)" : "rgba(255,255,255,0.03)",
                      borderColor: isActive ? "rgba(196,255,64,0.3)" : "rgba(255,255,255,0.06)",
                    }}
                    transition={{ duration: 0.3 }}
                    style={{ border: "1px solid" }}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeGlow"
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          background: "linear-gradient(90deg, rgba(196,255,64,0.04) 0%, transparent 100%)",
                        }}
                      />
                    )}
                    <Sparkles
                      size={14}
                      className="mt-0.5 flex-shrink-0"
                      style={{ color: isActive ? "#C4FF40" : "#4A5568" }}
                    />
                    <p className="text-sm" style={{ color: isActive ? "#fff" : "#8892A4" }}>
                      {q.question}
                    </p>
                    <ArrowRight
                      size={14}
                      className="mt-0.5 ml-auto flex-shrink-0"
                      style={{ color: isActive ? "#C4FF40" : "#4A5568" }}
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right — AI Response Panel */}
          <div
            className="rounded-2xl overflow-hidden flex flex-col"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            {/* Progress bar */}
            <div className="relative" style={{ height: "2px", background: "rgba(255,255,255,0.04)" }}>
              <motion.div
                className="absolute inset-y-0 left-0"
                style={{
                  width: `${progress * 100}%`,
                  background: "linear-gradient(90deg, #C4FF40, #7B5CF5)",
                }}
              />
            </div>

            {/* Header */}
            <div
              className="px-4 py-3 flex items-center gap-2"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              >
                <Orbit size={14} style={{ color: "#C4FF40" }} />
              </motion.div>
              <span className="text-sm" style={{ color: "#C4FF40", fontWeight: 400 }}>Ask Doppler</span>
              <span className="ml-auto text-xs px-2 py-0.5 rounded" style={{ background: "rgba(196,255,64,0.1)", color: "#C4FF40" }}>
                AI
              </span>
            </div>

            {/* Content */}
            <div className="p-4 flex-1 flex flex-col">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="flex-1 flex flex-col"
                >
                  {/* Query bubble */}
                  <div
                    className="rounded-lg p-3 mb-3"
                    style={{ background: "rgba(123,92,245,0.08)", border: "1px solid rgba(123,92,245,0.15)" }}
                  >
                    <p className="text-sm" style={{ color: "#C4FF40" }}>
                      <TypeWriter text={activeQuery.question} onComplete={handleTypingComplete} />
                    </p>
                  </div>

                  {/* AI Analysis */}
                  <div className="space-y-3 flex-1">
                    <motion.div
                      className="p-3 rounded-xl"
                      style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: phase !== "typing" ? 1 : 0, scale: phase !== "typing" ? 1 : 0.96 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <p className="text-xs" style={{ color: "#7B5CF5", fontWeight: 400 }}>AI Analysis</p>
                        <motion.span
                          className="ml-auto text-xs"
                          style={{ color: "#4A5568" }}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: phase === "results" ? 1 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {activeQuery.confidence} confidence
                        </motion.span>
                      </div>
                      {phase === "analyzing" ? (
                        <div className="flex items-center gap-1.5">
                          {[0, 1, 2].map((dot) => (
                            <motion.div
                              key={dot}
                              className="w-1.5 h-1.5 rounded-full"
                              style={{ background: "#7B5CF5" }}
                              animate={{ opacity: [0.3, 1, 0.3] }}
                              transition={{ duration: 0.8, repeat: Infinity, delay: dot * 0.2 }}
                            />
                          ))}
                        </div>
                      ) : (
                        <motion.p
                          className="text-sm"
                          style={{ color: "#8892A4" }}
                          initial={{ opacity: 0, y: 4 }}
                          animate={{ opacity: phase === "results" ? 1 : 0, y: phase === "results" ? 0 : 4 }}
                          transition={{ duration: 0.5, delay: 0.15 }}
                        >
                          {activeQuery.analysis}
                        </motion.p>
                      )}
                    </motion.div>

                    {/* Data rows */}
                    {activeQuery.rows.map((item, idx) => (
                      <motion.div
                        key={item.label}
                        className="flex items-center justify-between text-sm"
                        initial={{ opacity: 0, x: 12 }}
                        animate={{
                          opacity: phase === "results" ? 1 : 0,
                          x: phase === "results" ? 0 : 12,
                        }}
                        transition={{ duration: 0.35, delay: phase === "results" ? 0.25 + idx * 0.12 : 0 }}
                      >
                        <span style={{ color: "#fff" }}>{item.label}</span>
                        <motion.span
                          style={{ color: item.color, fontWeight: 400 }}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: phase === "results" ? 1 : 0 }}
                          transition={{ duration: 0.3, delay: phase === "results" ? 0.4 + idx * 0.12 : 0 }}
                        >
                          {item.value}
                        </motion.span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { MazeBackground } from "../components/MazeBackground";

export function Landing() {
  return (
    <div
      className="min-h-screen"
      style={{ background: "#090B13", color: "#fff" }}
    >
      {/* Nav */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 px-8 py-4"
        style={{
          background: "rgba(9,11,19,0.8)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/src/assets/logo.svg" alt="Doppler" style={{ height: "32px", width: "auto" }} />
          </div>
          <div className="hidden md:flex items-center gap-8">
            {["Features", "Pricing", "Docs", "Blog"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm transition-colors hover:text-white"
                style={{ color: "#8892A4" }}
              >
                {item}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <Link
              to="/login"
              className="text-sm px-4 py-2 rounded-lg transition-colors"
              style={{ color: "#8892A4" }}
            >
              Sign in
            </Link>
            <Link
              to="/signup"
              className="text-sm px-4 py-2 rounded-lg transition-all"
              style={{ background: "#C4FF40", color: "#000", fontWeight: 400 }}
            >
              Get started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-40 pb-20 px-8 text-center overflow-hidden min-h-screen flex flex-col items-center justify-center">
        <MazeBackground />
        
        <div className="relative z-10 flex flex-col items-center justify-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm mb-8"
            style={{
              background: "rgba(196,255,64,0.08)",
              border: "1px solid rgba(196,255,64,0.2)",
              color: "#C4FF40",
            }}
          >
            <Sparkles size={14} />
            AI-Powered Data Intelligence
            <ChevronRight size={14} />
          </div>

          <h1
            className="max-w-4xl mx-auto mb-6 px-4"
            style={{
              fontSize: "clamp(32px, 8vw, 76px)",
              fontWeight: 600,
              lineHeight: 1.1,
              letterSpacing: "-2px",
            }}
          >
            Turn your data into{" "}
            <span style={{ color: "#C4FF40" }}>instant insights</span>
          </h1>
          <p
            className="max-w-2xl mx-auto mb-10 text-base md:text-lg px-6"
            style={{ color: "#8892A4", lineHeight: 1.7 }}
          >
            Doppler connects to your data sources and lets you ask questions in plain
            English. Get AI-generated charts, reports, and recommendations — in seconds.
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              to="/signup"
              className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm transition-all hover:opacity-90"
              style={{ background: "#C4FF40", color: "#000", fontWeight: 400 }}
            >
              Start for free <ArrowRight size={16} />
            </Link>
            <button
              className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm transition-all"
              style={{
                background: "rgba(255,255,255,0.06)",
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <Play size={14} />
              Watch demo
            </button>
          </div>

          <p className="mt-4 text-sm" style={{ color: "#4A5568" }}>
            No credit card required · 14-day free trial · Cancel anytime
          </p>
        </div>

        {/* Dashboard preview */}
        <DashboardDemo />
      </section>

      {/* Features */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm mb-6"
              style={{ background: "rgba(123,92,245,0.08)", border: "1px solid rgba(123,92,245,0.2)", color: "#9B7AFF" }}
            >
              <Zap size={14} /> Powerful Features
            </div>
            <h2
              className="max-w-2xl mx-auto mb-4"
              style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 400, lineHeight: 1.2, letterSpacing: "-1px" }}
            >
              Everything you need to understand your data
            </h2>
            <p style={{ color: "#8892A4" }}>
              From raw data to actionable insights, Doppler handles it all.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="p-6 rounded-2xl transition-all duration-200 hover:translate-y-[-2px]"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <div
                  className="flex items-center justify-center rounded-xl mb-4"
                  style={{
                    width: "44px",
                    height: "44px",
                    background: `${feature.color}15`,
                    border: `1px solid ${feature.color}25`,
                  }}
                >
                  <feature.icon size={20} style={{ color: feature.color }} />
                </div>
                <h3
                  className="mb-2"
                  style={{ fontSize: "16px", fontWeight: 400, color: "#fff" }}
                >
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6B7280" }}>
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Query showcase — Interactive Demo */}
      <AiQueryDemo />

      {/* Testimonials */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 400, letterSpacing: "-1px" }}>
              Loved by data-driven teams
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="p-6 rounded-2xl"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={14} fill="#FBBF24" style={{ color: "#FBBF24" }} />
                  ))}
                </div>
                <p className="text-sm mb-6 leading-relaxed" style={{ color: "#8892A4" }}>
                  {t.quote}
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="flex items-center justify-center rounded-full text-sm overflow-hidden"
                    style={{ width: "36px", height: "36px", background: "linear-gradient(135deg, #C4FF40, #7B5CF5)", color: "#000", fontWeight: 400 }}
                  >
                    {t.avatar.startsWith("http") ? (
                      <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                    ) : (
                      t.avatar
                    )}
                  </div>
                  <div>
                    <p className="text-sm" style={{ color: "#fff", fontWeight: 400 }}>{t.name}</p>
                    <p className="text-xs" style={{ color: "#6B7280" }}>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-8" style={{ background: "#090B13" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-3" style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 400, letterSpacing: "-1px" }}>
              Simple, transparent pricing
            </h2>
            <p style={{ color: "#8892A4" }}>Start free. Scale as you grow.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className="p-6 rounded-2xl relative flex flex-col h-full"
                style={{
                  background: plan.highlight ? "linear-gradient(135deg, rgba(196,255,64,0.06), rgba(123,92,245,0.06))" : "rgba(255,255,255,0.03)",
                  border: plan.highlight ? "1px solid rgba(196,255,64,0.3)" : "1px solid rgba(255,255,255,0.06)",
                }}
              >
                {plan.highlight && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs"
                    style={{ background: "#C4FF40", color: "#000", fontWeight: 400 }}
                  >
                    Most Popular
                  </div>
                )}
                <p className="text-sm mb-2" style={{ color: "#8892A4" }}>{plan.name}</p>
                <div className="flex items-baseline gap-1 mb-1">
                  <span style={{ fontSize: "36px", fontWeight: 400, color: "#fff" }}>{plan.price}</span>
                  <span style={{ color: "#6B7280" }}>{plan.period}</span>
                </div>
                <p className="text-sm mb-6" style={{ color: "#6B7280" }}>{plan.desc}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <Check size={14} style={{ color: "#C4FF40" }} />
                      <span style={{ color: "#8892A4" }}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/signup"
                  className="block w-full text-center py-2.5 rounded-xl text-sm transition-all font-medium mt-auto"
                  style={{
                    background: plan.highlight ? "#C4FF40" : "rgba(255,255,255,0.08)",
                    color: plan.highlight ? "#000" : "#fff",
                  }}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-8 text-center relative overflow-hidden">

        <h2
          className="max-w-2xl mx-auto mb-6"
          style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-1.5px" }}
        >
          Ready to unlock your data's potential?
        </h2>
        <p className="mb-10 text-lg" style={{ color: "#8892A4" }}>
          Join 5,000+ teams using Doppler to make better decisions, faster.
        </p>
        <Link
          to="/signup"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base transition-all hover:opacity-90"
          style={{ background: "#C4FF40", color: "#000", fontWeight: 400 }}
        >
          Start your free trial <ArrowRight size={18} />
        </Link>
      </section>

      {/* Footer */}
      <footer
        className="px-8 py-12"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-3">
                <img src="/src/assets/logo.svg" alt="Doppler" style={{ height: "24px", width: "auto" }} />
              </div>
              <p className="text-sm" style={{ color: "#6B7280", maxWidth: "240px", lineHeight: 1.6 }}>
                AI-powered data intelligence for modern business teams.
              </p>
            </div>
            {[
              { title: "Product", items: ["Features", "Pricing", "Changelog", "Roadmap"] },
              { title: "Company", items: ["About", "Blog", "Careers", "Press"] },
              { title: "Legal", items: ["Privacy", "Terms", "Security", "Cookies"] },
            ].map((col) => (
              <div key={col.title}>
                <p className="text-sm mb-3" style={{ color: "#fff", fontWeight: 400 }}>{col.title}</p>
                <ul className="space-y-2">
                  {col.items.map((item) => (
                    <li key={item}>
                      <a href="#" className="text-sm transition-colors hover:text-white" style={{ color: "#6B7280" }}>
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div
            className="flex items-center justify-between pt-8 text-sm"
            style={{ borderTop: "1px solid rgba(255,255,255,0.06)", color: "#4A5568" }}
          >
            <p>© 2026 Doppler, Inc. All rights reserved.</p>
            <p>Built with ❤️ for data-driven teams</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
