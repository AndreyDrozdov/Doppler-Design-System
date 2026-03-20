import { Link } from "react-router";
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
    avatar: "SC",
    rating: 5,
  },
  {
    name: "Marcus Williams",
    role: "CEO, GrowthLabs",
    quote:
      "The AI insights are uncannily accurate. It surfaced a revenue opportunity we completely missed—added $2M to our pipeline.",
    avatar: "MW",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Sales Director, Apex Corp",
    quote:
      "Our sales team finally has real-time visibility. DataWhisper is the first BI tool they actually use every day.",
    avatar: "PS",
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

export function Landing() {
  return (
    <div
      className="min-h-screen"
      style={{ background: "#090B13", fontFamily: "'Geist', sans-serif", color: "#fff" }}
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
          <span style={{ fontWeight: 700, fontSize: "16px" }}>DataWhisper</span>
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
            style={{ background: "#C4FF40", color: "#000", fontWeight: 600 }}
          >
            Get started free
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-40 pb-20 px-8 text-center overflow-hidden">
        {/* BG glow */}
        <div
          className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full blur-3xl opacity-20 pointer-events-none"
          style={{ background: "radial-gradient(circle, #C4FF40 0%, #7B5CF5 50%, transparent 70%)" }}
        />

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
            fontWeight: 800,
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
            style={{ background: "#C4FF40", color: "#000", fontWeight: 700 }}
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
                  <p className="text-lg" style={{ fontWeight: 700, color: "#fff" }}>{stat.value}</p>
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
                    contentStyle={{ background: "#1A1D2E", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "8px", color: "#fff" }}
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
            <span key={logo} style={{ color: "#8892A4", fontWeight: 600, fontSize: "14px" }}>
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
              style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800, lineHeight: 1.2, letterSpacing: "-1px" }}
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
                  style={{ fontSize: "16px", fontWeight: 600, color: "#fff" }}
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

      {/* AI Query showcase */}
      <section className="py-20 px-8" style={{ background: "#0D0F1A" }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm mb-6"
                style={{ background: "rgba(196,255,64,0.08)", border: "1px solid rgba(196,255,64,0.2)", color: "#C4FF40" }}
              >
                <Brain size={14} /> AI-Powered
              </div>
              <h2
                className="mb-4"
                style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, lineHeight: 1.2, letterSpacing: "-1px" }}
              >
                Just ask. Get answers.
              </h2>
              <p className="mb-6" style={{ color: "#8892A4", lineHeight: 1.7 }}>
                No SQL. No code. No waiting. Type your question in plain English and
                DataWhisper instantly translates it into insights, charts, and recommendations.
              </p>
              <div className="space-y-3">
                {[
                  "Which products have the highest churn risk this quarter?",
                  "Show me revenue trends broken down by region",
                  "What's causing the spike in support tickets?",
                ].map((query) => (
                  <div
                    key={query}
                    className="flex items-start gap-3 p-3 rounded-xl cursor-pointer transition-all"
                    style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
                  >
                    <Sparkles size={14} className="mt-0.5 flex-shrink-0" style={{ color: "#C4FF40" }} />
                    <p className="text-sm" style={{ color: "#8892A4" }}>{query}</p>
                    <ArrowRight size={14} className="mt-0.5 ml-auto flex-shrink-0" style={{ color: "#4A5568" }} />
                  </div>
                ))}
              </div>
            </div>
            <div
              className="rounded-2xl overflow-hidden"
              style={{ background: "#161A28", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <div
                className="px-4 py-3 flex items-center gap-2"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
              >
                <Sparkles size={14} style={{ color: "#C4FF40" }} />
                <span className="text-sm" style={{ color: "#C4FF40", fontWeight: 600 }}>Ask DataWhisper</span>
                <span className="ml-auto text-xs px-2 py-0.5 rounded" style={{ background: "rgba(196,255,64,0.1)", color: "#C4FF40" }}>AI</span>
              </div>
              <div className="p-4">
                <div className="rounded-lg p-3 mb-3" style={{ background: "rgba(123,92,245,0.08)", border: "1px solid rgba(123,92,245,0.15)" }}>
                  <p className="text-sm" style={{ color: "#C4FF40" }}>
                    "Which sales reps are underperforming this month?"
                  </p>
                </div>
                <div className="space-y-3">
                  <div
                    className="p-3 rounded-xl"
                    style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Brain size={12} style={{ color: "#7B5CF5" }} />
                      <p className="text-xs" style={{ color: "#7B5CF5", fontWeight: 600 }}>AI Analysis</p>
                      <span className="ml-auto text-xs" style={{ color: "#4A5568" }}>95% confidence</span>
                    </div>
                    <p className="text-sm" style={{ color: "#8892A4" }}>
                      3 reps are below target this month. Sarah K. is 34% below quota, likely due to territory reassignment in week 2.
                    </p>
                  </div>
                  {[
                    { rep: "Sarah K.", quota: "34% below", color: "#EF4444" },
                    { rep: "Mike T.", quota: "18% below", color: "#F97316" },
                    { rep: "Lisa C.", quota: "9% below", color: "#EAB308" },
                  ].map((item) => (
                    <div key={item.rep} className="flex items-center justify-between text-sm">
                      <span style={{ color: "#fff" }}>{item.rep}</span>
                      <span style={{ color: item.color }}>{item.quota}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, letterSpacing: "-1px" }}>
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
                    className="flex items-center justify-center rounded-full text-sm"
                    style={{ width: "36px", height: "36px", background: "linear-gradient(135deg, #C4FF40, #7B5CF5)", color: "#000", fontWeight: 700 }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm" style={{ color: "#fff", fontWeight: 600 }}>{t.name}</p>
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
            <h2 className="mb-3" style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, letterSpacing: "-1px" }}>
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
                    style={{ background: "#C4FF40", color: "#000", fontWeight: 700 }}
                  >
                    Most Popular
                  </div>
                )}
                <p className="text-sm mb-2" style={{ color: "#8892A4" }}>{plan.name}</p>
                <div className="flex items-baseline gap-1 mb-1">
                  <span style={{ fontSize: "36px", fontWeight: 800, color: "#fff" }}>{plan.price}</span>
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
                  className="block w-full text-center py-2.5 rounded-xl text-sm transition-all font-semibold"
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
          style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-1.5px" }}
        >
          Ready to unlock your data's potential?
        </h2>
        <p className="mb-10 text-lg" style={{ color: "#8892A4" }}>
          Join 5,000+ teams using DataWhisper to make better decisions, faster.
        </p>
        <Link
          to="/signup"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base transition-all hover:opacity-90"
          style={{ background: "#C4FF40", color: "#000", fontWeight: 700 }}
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
                <span style={{ fontWeight: 700, fontSize: "14px" }}>DataWhisper</span>
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
                <p className="text-sm mb-3" style={{ color: "#fff", fontWeight: 600 }}>{col.title}</p>
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
