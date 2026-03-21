import { useState } from "react";
import {
  User,
  Bell,
  Shield,
  Database,
  Palette,
  Users,
  Key,
  Mail,
  Globe,
  Moon,
  Sun,
  Check,
  ChevronRight,
  Lock,
  Trash2,
  Download,
} from "lucide-react";
import { toast } from "sonner";

const settingsSections = [
  { id: "profile", label: "Profile", icon: User },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "security", label: "Security", icon: Shield },
  { id: "integrations", label: "Integrations", icon: Database },
  { id: "appearance", label: "Appearance", icon: Palette },
  { id: "team", label: "Team", icon: Users },
  { id: "billing", label: "Billing", icon: Key },
];

const teamMembers = [
  { name: "Alex Johnson", email: "alex@company.com", role: "Owner", avatar: "https://i.pravatar.cc/150?u=alex", status: "active" },
  { name: "Sarah Chen", email: "sarah@company.com", role: "Admin", avatar: "https://i.pravatar.cc/150?u=sarah", status: "active" },
  { name: "Marcus W.", email: "marcus@company.com", role: "Analyst", avatar: "https://i.pravatar.cc/150?u=marcus", status: "active" },
  { name: "Priya Sharma", email: "priya@company.com", role: "Viewer", avatar: "https://i.pravatar.cc/150?u=priya", status: "pending" },
];

const CARD = {
  background: "#0D0F1A",
  border: "1px solid rgba(255,255,255,0.06)",
  borderRadius: "0.25rem",
};

export function Settings() {
  const [activeSection, setActiveSection] = useState("profile");
  const [notifications, setNotifications] = useState({
    aiInsights: true,
    anomalyAlerts: true,
    weeklyReport: false,
    teamActivity: true,
    productUpdates: false,
    securityAlerts: true,
  });
  const [profile, setProfile] = useState({
    name: "Alex Johnson",
    email: "alex@company.com",
    company: "Acme Inc.",
    role: "VP of Analytics",
    timezone: "America/New_York",
  });

  const handleSave = () => {
    toast.success("Settings saved successfully");
  };

  return (
    <div
      className="flex"
      style={{ background: "#090B13", minHeight: "100%" }}
    >
      {/* Sidebar */}
      <aside
        className="w-56 flex-shrink-0 p-4"
        style={{ borderRight: "1px solid rgba(255,255,255,0.06)" }}
      >
        <p className="text-xs mb-3 px-2" style={{ color: "#4A5568", fontWeight: 400 }}>
          SETTINGS
        </p>
        {settingsSections.map((s) => (
          <button
            key={s.id}
            onClick={() => setActiveSection(s.id)}
            className="flex items-center gap-3 w-full rounded-xl px-3 py-2.5 mb-1 text-sm transition-all"
            style={{
              background: activeSection === s.id ? "rgba(196,255,64,0.08)" : "transparent",
              color: activeSection === s.id ? "#C4FF40" : "#8892A4",
              fontWeight: activeSection === s.id ? 600 : 400,
            }}
          >
            <s.icon size={16} />
            {s.label}
          </button>
        ))}
      </aside>

      {/* Content */}
      <main className="flex-1 p-6 overflow-auto">
        {activeSection === "profile" && (
          <div>
            <h2 className="mb-6" style={{ fontSize: "20px", fontWeight: 400, color: "#fff" }}>Profile Settings</h2>
            <div className="p-6 rounded-2xl mb-4" style={CARD}>
              {/* Avatar */}
              <div className="flex items-center gap-4 mb-6 pb-6" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                <div
                  className="flex items-center justify-center rounded-full overflow-hidden"
                  style={{ width: "64px", height: "64px", background: "linear-gradient(135deg, #C4FF40, #7B5CF5)", color: "#000", fontSize: "20px", fontWeight: 400 }}
                >
                  <img src="https://i.pravatar.cc/150?u=alex" alt="Alex Johnson" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p style={{ fontSize: "16px", fontWeight: 400, color: "#fff" }}>Alex Johnson</p>
                  <p className="text-sm" style={{ color: "#6B7280" }}>Pro Plan · Member since Jan 2025</p>
                </div>
                <button
                  className="ml-auto px-4 py-2 rounded-xl text-sm"
                  style={{ background: "rgba(255,255,255,0.06)", color: "#fff" }}
                >
                  Change Avatar
                </button>
              </div>

              {/* Fields */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Full Name", key: "name", icon: User },
                  { label: "Email Address", key: "email", icon: Mail },
                  { label: "Company", key: "company", icon: Globe },
                  { label: "Job Title", key: "role", icon: User },
                ].map((field) => (
                  <div key={field.key}>
                    <label className="block text-sm mb-2" style={{ color: "#8892A4" }}>
                      {field.label}
                    </label>
                    <div
                      className="flex items-center gap-2 px-3 py-2.5 rounded-xl"
                      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                    >
                      <field.icon size={14} style={{ color: "#6B7280" }} />
                      <input
                        value={(profile as any)[field.key]}
                        onChange={(e) => setProfile({ ...profile, [field.key]: e.target.value })}
                        className="flex-1 bg-transparent border-none outline-none text-sm"
                        style={{ color: "#fff" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <button
                onClick={handleSave}
                className="mt-4 px-5 py-2.5 rounded-xl text-sm"
                style={{ background: "#C4FF40", color: "#000", fontWeight: 400 }}
              >
                Save Changes
              </button>
            </div>

            {/* Danger zone */}
            <div
              className="p-6 rounded-2xl"
              style={{ background: "#0D0F1A", border: "1px solid rgba(239,68,68,0.15)" }}
            >
              <h3 className="mb-4" style={{ fontSize: "15px", fontWeight: 400, color: "#EF4444" }}>
                Danger Zone
              </h3>
              <div className="flex items-center justify-between py-3" style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                <div>
                  <p className="text-sm" style={{ color: "#fff" }}>Export all data</p>
                  <p className="text-xs" style={{ color: "#6B7280" }}>Download all your data as a CSV archive</p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm" style={{ background: "rgba(255,255,255,0.06)", color: "#fff" }}>
                  <Download size={14} /> Export
                </button>
              </div>
              <div className="flex items-center justify-between pt-3">
                <div>
                  <p className="text-sm" style={{ color: "#EF4444" }}>Delete account</p>
                  <p className="text-xs" style={{ color: "#6B7280" }}>Permanently delete your account and all data</p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm" style={{ background: "rgba(239,68,68,0.1)", color: "#EF4444" }}>
                  <Trash2 size={14} /> Delete
                </button>
              </div>
            </div>
          </div>
        )}

        {activeSection === "notifications" && (
          <div>
            <h2 className="mb-6" style={{ fontSize: "20px", fontWeight: 400, color: "#fff" }}>Notifications</h2>
            <div className="p-6 rounded-2xl" style={CARD}>
              <div className="space-y-1">
                {Object.entries(notifications).map(([key, value]) => {
                  const labels: Record<string, { label: string; desc: string }> = {
                    aiInsights: { label: "AI Insights", desc: "Get notified when Doppler finds new insights" },
                    anomalyAlerts: { label: "Anomaly Alerts", desc: "Real-time alerts for unusual data patterns" },
                    weeklyReport: { label: "Weekly Report", desc: "Automated weekly summary sent every Monday" },
                    teamActivity: { label: "Team Activity", desc: "Updates when team members share reports" },
                    productUpdates: { label: "Product Updates", desc: "New features and improvements" },
                    securityAlerts: { label: "Security Alerts", desc: "Login attempts and security events" },
                  };
                  return (
                    <div
                      key={key}
                      className="flex items-center justify-between py-4"
                      style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}
                    >
                      <div>
                        <p className="text-sm" style={{ color: "#fff", fontWeight: 400 }}>
                          {labels[key]?.label}
                        </p>
                        <p className="text-xs mt-0.5" style={{ color: "#6B7280" }}>
                          {labels[key]?.desc}
                        </p>
                      </div>
                      <button
                        onClick={() => setNotifications({ ...notifications, [key]: !value })}
                        className="relative rounded-full transition-all duration-200"
                        style={{
                          width: "44px",
                          height: "24px",
                          background: value ? "#C4FF40" : "rgba(255,255,255,0.1)",
                        }}
                      >
                        <div
                          className="absolute top-1 rounded-full transition-all duration-200"
                          style={{
                            width: "16px",
                            height: "16px",
                            background: value ? "#000" : "#6B7280",
                            left: value ? "24px" : "4px",
                          }}
                        />
                      </button>
                    </div>
                  );
                })}
              </div>
              <button
                onClick={handleSave}
                className="mt-4 px-5 py-2.5 rounded-xl text-sm"
                style={{ background: "#C4FF40", color: "#000", fontWeight: 400 }}
              >
                Save Preferences
              </button>
            </div>
          </div>
        )}

        {activeSection === "security" && (
          <div>
            <h2 className="mb-6" style={{ fontSize: "20px", fontWeight: 400, color: "#fff" }}>Security</h2>
            <div className="space-y-4">
              <div className="p-6 rounded-2xl" style={CARD}>
                <h3 className="mb-4" style={{ fontSize: "15px", fontWeight: 400, color: "#fff" }}>Password</h3>
                <div className="space-y-3">
                  {["Current Password", "New Password", "Confirm New Password"].map((label) => (
                    <div key={label}>
                      <label className="block text-sm mb-1.5" style={{ color: "#8892A4" }}>{label}</label>
                      <div
                        className="flex items-center gap-2 px-3 py-2.5 rounded-xl"
                        style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                      >
                        <Lock size={14} style={{ color: "#6B7280" }} />
                        <input
                          type="password"
                          placeholder="••••••••"
                          className="flex-1 bg-transparent border-none outline-none text-sm"
                          style={{ color: "#fff" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => toast.success("Password updated successfully")}
                  className="mt-4 px-5 py-2.5 rounded-xl text-sm"
                  style={{ background: "#C4FF40", color: "#000", fontWeight: 400 }}
                >
                  Update Password
                </button>
              </div>

              <div className="p-6 rounded-2xl" style={CARD}>
                <div className="flex items-center justify-between mb-2">
                  <h3 style={{ fontSize: "15px", fontWeight: 400, color: "#fff" }}>Two-Factor Authentication</h3>
                  <span className="text-xs px-2 py-1 rounded-full" style={{ background: "rgba(239,68,68,0.1)", color: "#EF4444" }}>
                    Disabled
                  </span>
                </div>
                <p className="text-sm mb-4" style={{ color: "#6B7280" }}>
                  Add an extra layer of security to your account.
                </p>
                <button
                  onClick={() => toast.success("2FA setup initiated")}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm"
                  style={{ background: "rgba(196,255,64,0.08)", color: "#C4FF40", fontWeight: 400 }}
                >
                  <Shield size={14} /> Enable 2FA
                </button>
              </div>

              <div className="p-6 rounded-2xl" style={CARD}>
                <h3 className="mb-4" style={{ fontSize: "15px", fontWeight: 400, color: "#fff" }}>Active Sessions</h3>
                {[
                  { device: "MacBook Pro 16\"", location: "New York, US", time: "Now", current: true },
                  { device: "iPhone 15 Pro", location: "New York, US", time: "2 hours ago", current: false },
                  { device: "Chrome / Windows", location: "Boston, US", time: "Yesterday", current: false },
                ].map((session) => (
                  <div key={session.device} className="flex items-center justify-between py-3" style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="text-sm" style={{ color: "#fff" }}>{session.device}</p>
                        {session.current && (
                          <span className="text-xs px-1.5 py-0.5 rounded" style={{ background: "rgba(196,255,64,0.1)", color: "#C4FF40" }}>
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-xs" style={{ color: "#6B7280" }}>{session.location} · {session.time}</p>
                    </div>
                    {!session.current && (
                      <button
                        onClick={() => toast.success("Session revoked")}
                        className="text-xs px-3 py-1 rounded-lg"
                        style={{ background: "rgba(239,68,68,0.1)", color: "#EF4444" }}
                      >
                        Revoke
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeSection === "team" && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 style={{ fontSize: "20px", fontWeight: 400, color: "#fff" }}>Team Management</h2>
              <button
                onClick={() => toast.success("Invite sent!")}
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm"
                style={{ background: "#C4FF40", color: "#000", fontWeight: 400 }}
              >
                <Mail size={14} /> Invite Member
              </button>
            </div>
            <div className="p-6 rounded-2xl" style={CARD}>
              <div className="space-y-1">
                {teamMembers.map((member) => (
                  <div
                    key={member.email}
                    className="flex items-center gap-4 py-3"
                    style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}
                  >
                    <div
                      className="flex items-center justify-center rounded-full text-xs flex-shrink-0 overflow-hidden"
                      style={{ width: "36px", height: "36px", background: "linear-gradient(135deg, #C4FF40, #7B5CF5)", color: "#000", fontWeight: 400 }}
                    >
                      {member.avatar.startsWith("http") ? (
                        <img src={member.avatar} alt={member.name} className="w-full h-full object-cover" />
                      ) : (
                        member.avatar
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm" style={{ color: "#fff", fontWeight: 400 }}>{member.name}</p>
                      <p className="text-xs" style={{ color: "#6B7280" }}>{member.email}</p>
                    </div>
                    <span
                      className="text-xs px-2.5 py-1 rounded-full"
                      style={{
                        background: member.status === "pending" ? "rgba(249,115,22,0.1)" : "rgba(196,255,64,0.08)",
                        color: member.status === "pending" ? "#F97316" : "#8892A4",
                      }}
                    >
                      {member.status === "pending" ? "Pending" : member.role}
                    </span>
                    <button style={{ color: "#6B7280" }}>
                      <ChevronRight size={16} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeSection === "billing" && (
          <div>
            <h2 className="mb-6" style={{ fontSize: "20px", fontWeight: 400, color: "#fff" }}>Billing & Plan</h2>
            <div
              className="p-6 rounded-2xl mb-4"
              style={{ background: "linear-gradient(135deg, rgba(196,255,64,0.06), rgba(123,92,245,0.06))", border: "1px solid rgba(196,255,64,0.2)" }}
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs mb-1" style={{ color: "#C4FF40", fontWeight: 400 }}>CURRENT PLAN</p>
                  <h3 style={{ fontSize: "24px", fontWeight: 400, color: "#fff" }}>Pro Plan</h3>
                  <p className="text-sm mt-1" style={{ color: "#8892A4" }}>$149/month · Renews March 20, 2026</p>
                </div>
                <button
                  className="px-4 py-2 rounded-xl text-sm"
                  style={{ background: "#C4FF40", color: "#000", fontWeight: 400 }}
                >
                  Upgrade to Enterprise
                </button>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-4 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                {[
                  { label: "Data Sources", used: "6", limit: "25" },
                  { label: "AI Queries", used: "284", limit: "∞" },
                  { label: "Team Members", used: "4", limit: "15" },
                ].map((u) => (
                  <div key={u.label}>
                    <p className="text-xs mb-1" style={{ color: "#6B7280" }}>{u.label}</p>
                    <p className="text-sm" style={{ color: "#fff" }}>
                      <span style={{ fontWeight: 400 }}>{u.used}</span>
                      <span style={{ color: "#4A5568" }}> / {u.limit}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-6 rounded-2xl" style={CARD}>
              <h3 className="mb-4" style={{ fontSize: "15px", fontWeight: 400, color: "#fff" }}>Payment History</h3>
              {[
                { date: "Mar 1, 2026", amount: "$149.00", status: "Paid" },
                { date: "Feb 1, 2026", amount: "$149.00", status: "Paid" },
                { date: "Jan 1, 2026", amount: "$149.00", status: "Paid" },
              ].map((inv) => (
                <div key={inv.date} className="flex items-center justify-between py-3" style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                  <p className="text-sm" style={{ color: "#8892A4" }}>{inv.date}</p>
                  <p className="text-sm" style={{ color: "#fff", fontWeight: 400 }}>{inv.amount}</p>
                  <span className="text-xs px-2.5 py-1 rounded-full" style={{ background: "rgba(196,255,64,0.08)", color: "#C4FF40" }}>
                    {inv.status}
                  </span>
                  <button className="text-xs" style={{ color: "#C4FF40" }}>
                    <Download size={14} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {!["profile", "notifications", "security", "team", "billing"].includes(activeSection) && (
          <div className="flex flex-col items-center justify-center h-64 text-center">
            <div className="text-4xl mb-4">⚙️</div>
            <h3 style={{ color: "#fff", fontWeight: 400 }}>Coming Soon</h3>
            <p className="mt-2 text-sm" style={{ color: "#6B7280" }}>This settings section is under construction.</p>
          </div>
        )}
      </main>
    </div>
  );
}
