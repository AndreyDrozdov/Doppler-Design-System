import { useState } from "react";
import {
  Database,
  Cloud,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Plus,
  RefreshCw,
  Settings,
  ExternalLink,
  Server,
  HardDrive,
  Unlink,
  Search,
  Activity,
  Clock,
  Link,
} from "lucide-react";
import { toast } from "sonner";

const integrations = [
  {
    id: 1,
    name: "Salesforce",
    category: "CRM",
    description: "Customer relationships, deals, pipeline",
    status: "connected",
    lastSync: "2 min ago",
    records: "124,832",
    color: "#00A1E0",
    icon: "SF",
  },
  {
    id: 2,
    name: "HubSpot",
    category: "Marketing",
    description: "Contacts, campaigns, email analytics",
    status: "connected",
    lastSync: "5 min ago",
    records: "89,412",
    color: "#FF7A59",
    icon: "HS",
  },
  {
    id: 3,
    name: "Google Analytics",
    category: "Web Analytics",
    description: "Website traffic, conversion, behavior",
    status: "connected",
    lastSync: "1 min ago",
    records: "2.4M",
    color: "#F9AB00",
    icon: "GA",
  },
  {
    id: 4,
    name: "Snowflake",
    category: "Data Warehouse",
    description: "Enterprise data warehouse and SQL queries",
    status: "syncing",
    lastSync: "Syncing...",
    records: "18.2M",
    color: "#29B5E8",
    icon: "SN",
  },
  {
    id: 5,
    name: "Stripe",
    category: "Payments",
    description: "Revenue, subscriptions, transactions",
    status: "error",
    lastSync: "Failed 1h ago",
    records: "—",
    color: "#635BFF",
    icon: "ST",
  },
  {
    id: 6,
    name: "PostgreSQL",
    category: "Database",
    description: "Primary application database",
    status: "connected",
    lastSync: "30 sec ago",
    records: "4.8M",
    color: "#336791",
    icon: "PG",
  },
];

const availableIntegrations = [
  { name: "BigQuery", category: "Data Warehouse", color: "#4285F4", icon: "BQ" },
  { name: "Mixpanel", category: "Product Analytics", color: "#7856FF", icon: "MX" },
  { name: "Zendesk", category: "Support", color: "#03363D", icon: "ZD" },
  { name: "Slack", category: "Communication", color: "#4A154B", icon: "SL" },
  { name: "Notion", category: "Productivity", color: "#fff", icon: "NO" },
  { name: "Intercom", category: "Customer Success", color: "#1F8DED", icon: "IC" },
  { name: "Amplitude", category: "Analytics", color: "#178DFF", icon: "AM" },
  { name: "Segment", category: "Data Pipeline", color: "#52BD95", icon: "SG" },
];

const statusConfig: Record<string, { label: string; color: string; icon: any; bg: string }> = {
  connected: { label: "Connected", color: "#C4FF40", icon: CheckCircle2, bg: "rgba(196,255,64,0.1)" },
  syncing: { label: "Syncing", color: "#F97316", icon: RefreshCw, bg: "rgba(249,115,22,0.1)" },
  error: { label: "Error", color: "#EF4444", icon: XCircle, bg: "rgba(239,68,68,0.1)" },
  disconnected: { label: "Disconnected", color: "#6B7280", icon: AlertCircle, bg: "rgba(107,114,128,0.1)" },
};

const CARD = {
  background: "#0D0F1A",
  border: "1px solid rgba(255,255,255,0.06)",
  borderRadius: "0",
};

export function DataSources() {
  const [search, setSearch] = useState("");
  const [sources, setSources] = useState(integrations);

  const handleReconnect = (name: string) => {
    toast.success(`Reconnecting to ${name}...`);
  };

  const handleSync = (name: string) => {
    toast.success(`Sync initiated for ${name}`);
  };

  const handleConnect = (name: string) => {
    toast.success(`Connecting to ${name}...`);
  };

  return (
    <div
      className="p-6"
      style={{ background: "#090B13", minHeight: "100%" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 style={{ fontSize: "24px", fontWeight: 300, color: "#fff", marginBottom: "4px" }}>
            Data Sources
          </h1>
          <p style={{ color: "#6B7280", fontSize: "14px" }}>
            Manage your connected data sources and integrations
          </p>
        </div>
        <button
          className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm"
          style={{ background: "#C4FF40", color: "#000", fontWeight: 400 }}
          onClick={() => toast.success("Opening connection wizard...")}
        >
          <Plus size={16} /> Add Source
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        {[
          { label: "Connected Sources", value: "4", icon: CheckCircle2, color: "#C4FF40" },
          { label: "Total Records", value: "29.7M", icon: Database, color: "#7B5CF5" },
          { label: "Last Synced", value: "30s ago", icon: Clock, color: "#38BDF8" },
          { label: "Data Quality", value: "96.4%", icon: Activity, color: "#FB923C" },
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

      {/* Search */}
      <div
        className="flex items-center gap-2 px-3 py-2.5 rounded-xl mb-6"
        style={{ background: "#0D0F1A", border: "1px solid rgba(255,255,255,0.06)" }}
      >
        <Search size={16} style={{ color: "#6B7280" }} />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search data sources..."
          className="flex-1 bg-transparent border-none outline-none text-sm"
          style={{ color: "#fff" }}
        />
      </div>

      {/* Connected sources */}
      <h2 className="text-sm mb-3" style={{ color: "#8892A4", fontWeight: 400 }}>
        CONNECTED SOURCES ({sources.length})
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
        {sources
          .filter((s) => s.name.toLowerCase().includes(search.toLowerCase()))
          .map((source) => {
            const sc = statusConfig[source.status];
            return (
              <div key={source.id} className="p-5 rounded-2xl" style={CARD}>
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div
                    className="flex items-center justify-center rounded-xl text-sm flex-shrink-0"
                    style={{ width: "44px", height: "44px", background: `${source.color}20`, color: source.color, fontWeight: 300, fontSize: "13px" }}
                  >
                    {source.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <h3 style={{ fontSize: "15px", fontWeight: 400, color: "#fff" }}>{source.name}</h3>
                      <span className="text-xs px-2 py-0.5 rounded" style={{ background: "rgba(255,255,255,0.06)", color: "#6B7280" }}>
                        {source.category}
                      </span>
                    </div>
                    <p className="text-xs mb-3" style={{ color: "#6B7280" }}>{source.description}</p>

                    <div className="grid grid-cols-2 gap-3 mb-3">
                      <div>
                        <p className="text-xs mb-0.5" style={{ color: "#4A5568" }}>Status</p>
                        <div
                          className="flex items-center gap-1.5 px-2 py-1 rounded-lg w-fit"
                          style={{ background: sc.bg }}
                        >
                          <sc.icon size={12} style={{ color: sc.color }} className={source.status === "syncing" ? "animate-spin" : ""} />
                          <span className="text-xs" style={{ color: sc.color, fontWeight: 400 }}>{sc.label}</span>
                        </div>
                      </div>
                      <div>
                        <p className="text-xs mb-0.5" style={{ color: "#4A5568" }}>Records</p>
                        <p className="text-sm" style={{ color: "#fff", fontWeight: 400 }}>{source.records}</p>
                      </div>
                      <div>
                        <p className="text-xs mb-0.5" style={{ color: "#4A5568" }}>Last sync</p>
                        <p className="text-xs" style={{ color: "#8892A4" }}>{source.lastSync}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      {source.status === "error" ? (
                        <button
                          onClick={() => handleReconnect(source.name)}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs"
                          style={{ background: "rgba(239,68,68,0.1)", color: "#EF4444", fontWeight: 400 }}
                        >
                          <Link size={12} /> Reconnect
                        </button>
                      ) : (
                        <button
                          onClick={() => handleSync(source.name)}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs"
                          style={{ background: "rgba(196,255,64,0.08)", color: "#C4FF40" }}
                        >
                          <RefreshCw size={12} /> Sync now
                        </button>
                      )}
                      <button className="p-1.5 rounded-lg" style={{ background: "rgba(255,255,255,0.04)", color: "#6B7280" }}>
                        <Settings size={14} />
                      </button>
                      <button className="p-1.5 rounded-lg" style={{ background: "rgba(255,255,255,0.04)", color: "#6B7280" }}>
                        <ExternalLink size={14} />
                      </button>
                      <button className="p-1.5 rounded-lg ml-auto" style={{ background: "rgba(255,255,255,0.04)", color: "#EF4444" }}>
                        <Unlink size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>

      {/* Available integrations */}
      <h2 className="text-sm mb-3" style={{ color: "#8892A4", fontWeight: 400 }}>
        AVAILABLE INTEGRATIONS
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {availableIntegrations.map((int) => (
          <div
            key={int.name}
            className="p-4 rounded-2xl cursor-pointer transition-all hover:translate-y-[-2px]"
            style={{ background: "#0D0F1A", border: "1px solid rgba(255,255,255,0.06)" }}
          >
            <div className="flex items-center justify-between mb-3">
              <div
                className="flex items-center justify-center rounded-lg text-xs"
                style={{ width: "36px", height: "36px", background: `${int.color}20`, color: int.color === "#fff" ? "#8892A4" : int.color, fontWeight: 300, fontSize: "12px" }}
              >
                {int.icon}
              </div>
              <button
                onClick={() => handleConnect(int.name)}
                className="flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs transition-all"
                style={{ background: "rgba(196,255,64,0.08)", color: "#C4FF40", fontWeight: 400 }}
              >
                <Plus size={10} /> Connect
              </button>
            </div>
            <p className="text-sm" style={{ color: "#fff", fontWeight: 400 }}>{int.name}</p>
            <p className="text-xs" style={{ color: "#6B7280" }}>{int.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
