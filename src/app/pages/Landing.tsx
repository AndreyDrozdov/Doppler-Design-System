import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  BarChart3,
  Database,
  Zap,
  ArrowRight,
  CheckCircle2,
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
} from "recharts";

const heroData = [
  { month: "Jan", revenue: 42, leads: 28 },
  { month: "Feb", revenue: 55, leads: 35 },
  { month: "Mar", revenue: 48, leads: 42 },
  { month: "Apr", revenue: 72, leads: 55 },
  { month: "May", revenue: 68, leads: 49 },
  { month: "Jun", revenue: 89, leads: 67 },
  { month: "Jul", revenue: 95, leads: 78 },
  { month: "Aug", revenue: 112, leads: 88 },
];

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
    desc: "DataWhisper automatically picks the best chart type and creates stunning visuals.",
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
      "DataWhisper cut our reporting time by 80%. Now I get insights in seconds instead of waiting days for the data team.",
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
      "Our sales team finally has real-time visibility. DataWhisper is the first BI tool they actually use every day.",
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
    <section className="py-20 px-8" style={{ background: "#0D0F1A" }}>
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
              DataWhisper instantly translates it into insights, charts, and recommendations.
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
            style={{ background: "#161A28", border: "1px solid rgba(255,255,255,0.08)" }}
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
              <span className="text-sm" style={{ color: "#C4FF40", fontWeight: 400 }}>Ask DataWhisper</span>
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
                      "<TypeWriter text={activeQuery.question} onComplete={handleTypingComplete} />"
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

export function Landing() {
  return (
    <div
      className="min-h-screen"
      style={{ background: "#090B13", color: "#fff" }}
    >
      {/* Nav */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4"
        style={{
          background: "rgba(9,11,19,0.8)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="flex items-center gap-2">
          <div
            className="flex items-center justify-center rounded-lg"
            style={{
              width: "32px",
              height: "32px",
              background: "linear-gradient(135deg, #C4FF40 0%, #7B5CF5 100%)",
            }}
          >
            <Activity size={18} color="#000" />
          </div>
          <span style={{ fontWeight: 400, fontSize: "16px" }}>DataWhisper</span>
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
            Get started free
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-40 pb-20 px-8 text-center overflow-hidden">


        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm mb-8"
          style={{
            background: "rgba(196,255,64,0.08)",
            border: "1px solid rgba(196,255,64,0.2)",
            color: "#C4FF40",
          }}
        >
          <Sparkles size={14} />
          AI-Powered Data Intelligence Platform
          <ChevronRight size={14} />
        </div>

        <h1
          className="max-w-4xl mx-auto mb-6"
          style={{
            fontSize: "clamp(40px, 6vw, 76px)",
            fontWeight: 400,
            lineHeight: 1.1,
            letterSpacing: "-2px",
          }}
        >
          Turn your data into{" "}
          <span style={{ color: "#C4FF40" }}>instant insights</span>
          <br />
          with the power of AI
        </h1>
        <p
          className="max-w-2xl mx-auto mb-10 text-lg"
          style={{ color: "#8892A4", lineHeight: 1.7 }}
        >
          DataWhisper connects to your data sources and lets you ask questions in plain
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

        {/* Dashboard preview */}
        <div
          className="relative mt-20 mx-auto rounded-2xl overflow-hidden"
          style={{
            maxWidth: "900px",
            border: "1px solid rgba(255,255,255,0.08)",
            background: "#0D0F1A",
            boxShadow: "0 40px 120px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)",
          }}
        >
          {/* Fake browser bar */}
          <div
            className="flex items-center gap-2 px-4 py-3"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", background: "#111420" }}
          >
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full" style={{ background: "#FF5F56" }} />
              <div className="w-3 h-3 rounded-full" style={{ background: "#FFBD2E" }} />
              <div className="w-3 h-3 rounded-full" style={{ background: "#27C93F" }} />
            </div>
            <div
              className="flex-1 mx-4 rounded px-3 py-1 text-xs text-center"
              style={{ background: "rgba(255,255,255,0.04)", color: "#4A5568" }}
            >
              app.datawhisper.ai/dashboard
            </div>
          </div>
          {/* Dashboard content preview */}
          <div className="p-6">
            <div className="grid grid-cols-4 gap-3 mb-4">
              {[
                { label: "Total Revenue", value: "$2.4M", change: "+18%" },
                { label: "Active Users", value: "14,832", change: "+12%" },
                { label: "Conversion Rate", value: "4.7%", change: "+0.8%" },
                { label: "Avg. Deal Size", value: "$8.2K", change: "+24%" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="p-3 rounded-xl"
                  style={{ background: "#161A28", border: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <p className="text-xs mb-1" style={{ color: "#6B7280" }}>{stat.label}</p>
                  <p className="text-lg" style={{ fontWeight: 400, color: "#fff" }}>{stat.value}</p>
                  <span
                    className="text-xs px-1.5 py-0.5 rounded"
                    style={{ background: "rgba(196,255,64,0.12)", color: "#C4FF40" }}
                  >
                    {stat.change}
                  </span>
                </div>
              ))}
            </div>
            <div
              className="rounded-xl p-4"
              style={{ background: "#161A28", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <p className="text-sm mb-3" style={{ color: "#8892A4" }}>Revenue & Leads Trend</p>
              <ResponsiveContainer width="100%" height={160}>
                <AreaChart data={heroData}>
                  <defs>
                    <linearGradient id="heroRev" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#C4FF40" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#C4FF40" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="heroLead" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#7B5CF5" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#7B5CF5" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid stroke="rgba(255,255,255,0.04)" vertical={false} />
                  <XAxis dataKey="month" tick={{ fill: "#4A5568", fontSize: 11 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: "#4A5568", fontSize: 11 }} axisLine={false} tickLine={false} />
                  <Tooltip
                    contentStyle={{ background: "#1A1D2E", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "0", color: "#fff" }}
                  />
                  <Area type="monotone" dataKey="revenue" stroke="#C4FF40" strokeWidth={2} fill="url(#heroRev)" />
                  <Area type="monotone" dataKey="leads" stroke="#7B5CF5" strokeWidth={2} fill="url(#heroLead)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>

      {/* Logos */}
      <section className="py-16 px-8" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <p className="text-center text-sm mb-8" style={{ color: "#4A5568" }}>
          TRUSTED BY LEADING COMPANIES
        </p>
        <div className="flex items-center justify-center gap-12 flex-wrap opacity-40">
          {["Salesforce", "HubSpot", "Stripe", "Notion", "Figma", "Linear", "Vercel", "Snowflake"].map((logo) => (
            <span key={logo} style={{ color: "#8892A4", fontWeight: 400, fontSize: "14px" }}>
              {logo}
            </span>
          ))}
        </div>
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
              From raw data to actionable insights, DataWhisper handles it all.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="p-6 rounded-2xl transition-all duration-200 hover:translate-y-[-2px]"
                style={{
                  background: "#0D0F1A",
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
                style={{ background: "#0D0F1A", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={14} fill="#C4FF40" style={{ color: "#C4FF40" }} />
                  ))}
                </div>
                <p className="text-sm mb-6 leading-relaxed" style={{ color: "#8892A4" }}>
                  "{t.quote}"
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
      <section className="py-20 px-8" style={{ background: "#0D0F1A" }}>
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
                className="p-6 rounded-2xl relative"
                style={{
                  background: plan.highlight ? "linear-gradient(135deg, rgba(196,255,64,0.06), rgba(123,92,245,0.06))" : "#161A28",
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
                <ul className="space-y-3 mb-6">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 size={14} style={{ color: "#C4FF40" }} />
                      <span style={{ color: "#8892A4" }}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/signup"
                  className="block w-full text-center py-2.5 rounded-xl text-sm transition-all font-medium"
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
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center, rgba(196,255,64,0.05) 0%, transparent 70%)" }}
        />
        <h2
          className="max-w-2xl mx-auto mb-6"
          style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-1.5px" }}
        >
          Ready to unlock your data's potential?
        </h2>
        <p className="mb-10 text-lg" style={{ color: "#8892A4" }}>
          Join 5,000+ teams using DataWhisper to make better decisions, faster.
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
                <div
                  className="flex items-center justify-center rounded-lg"
                  style={{ width: "28px", height: "28px", background: "linear-gradient(135deg, #C4FF40 0%, #7B5CF5 100%)" }}
                >
                  <Activity size={14} color="#000" />
                </div>
                <span style={{ fontWeight: 400, fontSize: "14px" }}>DataWhisper</span>
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
            <p>© 2026 DataWhisper, Inc. All rights reserved.</p>
            <p>Built with ❤️ for data-driven teams</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
