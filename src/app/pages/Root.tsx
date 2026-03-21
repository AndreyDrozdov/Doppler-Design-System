import { Outlet, NavLink, useLocation } from "react-router";
import { useState } from "react";
import {
  BarChart3,
  Sparkles,
  Database,
  LineChart,
  Settings,
  Bell,
  Search,
  ChevronLeft,
  ChevronRight,
  LayoutDashboard,
  Lightbulb,
  Puzzle,
  User,
  LogOut,
  HelpCircle,
  Zap,
  Activity,
} from "lucide-react";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", to: "/app" },
  { icon: BarChart3, label: "Analytics", to: "/app/analytics" },
  { icon: Lightbulb, label: "Insights", to: "/app/insights" },
  { icon: Database, label: "Data Sources", to: "/app/sources" },
  { icon: Puzzle, label: "Components", to: "/app/components" },
];

const bottomItems = [
  { icon: Settings, label: "Settings", to: "/app/settings" },
  { icon: HelpCircle, label: "Help", to: "#" },
];

export function Root() {
  const [collapsed, setCollapsed] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div
      className="flex h-screen overflow-hidden"
      style={{ background: "#090B13" }}
    >
      {/* Sidebar */}
      <aside
        className="flex flex-col transition-all duration-300 ease-in-out relative z-20 flex-shrink-0"
        style={{
          width: collapsed ? "68px" : "220px",
          background: "#0D0F1A",
          borderRight: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        {/* Logo */}
        <div
          className="flex items-center gap-3 px-4 py-3 flex-shrink-0"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
        >
          <img 
            src="/src/assets/logo.svg" 
            alt="Doppler" 
            style={{ 
              height: collapsed ? "24px" : "32px", 
              width: "auto",
              transition: "height 0.3s ease-in-out"
            }} 
          />
        </div>

        {/* Nav items */}
        <nav className="flex-1 overflow-y-auto py-4 px-2">
          <div className="space-y-1">
            {navItems.map((item) => {
              const isActive =
                item.to === "/app"
                  ? location.pathname === "/app" || location.pathname === "/app/"
                  : location.pathname.startsWith(item.to);
              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className="flex items-center gap-3 rounded-lg transition-all duration-150 group"
                  style={{
                    padding: "10px 12px",
                    background: isActive
                      ? "rgba(196,255,64,0.1)"
                      : "transparent",
                    color: isActive ? "#C4FF40" : "#8892A4",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      (e.currentTarget as HTMLElement).style.background =
                        "rgba(255,255,255,0.04)";
                      (e.currentTarget as HTMLElement).style.color = "#fff";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      (e.currentTarget as HTMLElement).style.background =
                        "transparent";
                      (e.currentTarget as HTMLElement).style.color = "#8892A4";
                    }
                  }}
                >
                  <item.icon size={18} className="flex-shrink-0" />
                  {!collapsed && (
                    <span
                      className="whitespace-nowrap overflow-hidden text-sm"
                      style={{ fontWeight: isActive ? 600 : 400 }}
                    >
                      {item.label}
                    </span>
                  )}
                  {isActive && !collapsed && (
                    <div
                      className="ml-auto w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: "#C4FF40" }}
                    />
                  )}
                </NavLink>
              );
            })}
          </div>

          {/* AI Section */}
          {!collapsed && (
            <div className="mt-6 mb-2">
              <p
                className="text-xs px-3 mb-2"
                style={{ color: "#4A5568", fontWeight: 400 }}
              >
                AI TOOLS
              </p>
            </div>
          )}
          {!collapsed && (
            <div
              className="mx-2 p-3 rounded-xl cursor-pointer transition-all duration-150"
              style={{
                background: "linear-gradient(135deg, rgba(196,255,64,0.08) 0%, rgba(123,92,245,0.08) 100%)",
                border: "1px solid rgba(196,255,64,0.15)",
              }}
            >
              <div className="flex items-center gap-2 mb-1">
                <Sparkles size={14} style={{ color: "#C4FF40" }} />
                <span className="text-xs" style={{ color: "#C4FF40", fontWeight: 400 }}>
                  Ask Doppler
                </span>
              </div>
              <p className="text-xs" style={{ color: "#6B7280" }}>
                Query your data with AI
              </p>
            </div>
          )}
          {collapsed && (
            <div className="flex justify-center mt-2">
              <div
                className="p-2 rounded-lg cursor-pointer"
                style={{ background: "rgba(196,255,64,0.1)" }}
              >
                <Sparkles size={18} style={{ color: "#C4FF40" }} />
              </div>
            </div>
          )}
        </nav>

        {/* Bottom items */}
        <div
          className="py-4 px-2"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          {bottomItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className="flex items-center gap-3 rounded-lg transition-all duration-150 mb-1"
              style={{ padding: "10px 12px", color: "#8892A4" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background =
                  "rgba(255,255,255,0.04)";
                (e.currentTarget as HTMLElement).style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "transparent";
                (e.currentTarget as HTMLElement).style.color = "#8892A4";
              }}
            >
              <item.icon size={18} className="flex-shrink-0" />
              {!collapsed && (
                <span className="text-sm whitespace-nowrap">{item.label}</span>
              )}
            </NavLink>
          ))}

          {/* User */}
          <div className="relative">
            <button
              onClick={() => setUserMenuOpen(!userMenuOpen)}
              className="flex items-center gap-3 w-full rounded-lg transition-all duration-150 mt-1"
              style={{
                padding: "10px 12px",
                color: "#8892A4",
                background: userMenuOpen ? "rgba(255,255,255,0.04)" : "transparent",
              }}
            >
              <div
                className="flex items-center justify-center rounded-full flex-shrink-0 text-xs overflow-hidden"
                style={{
                  width: "28px",
                  height: "28px",
                  background: "linear-gradient(135deg, #C4FF40, #7B5CF5)",
                  color: "#000",
                  fontWeight: 400,
                }}
              >
                <img src="https://i.pravatar.cc/150?u=alex" alt="Alex Johnson" className="w-full h-full object-cover" />
              </div>
              {!collapsed && (
                <div className="text-left overflow-hidden">
                  <p className="text-sm text-white whitespace-nowrap overflow-hidden">
                    Alex Johnson
                  </p>
                  <p className="text-xs whitespace-nowrap overflow-hidden" style={{ color: "#6B7280" }}>
                    Pro Plan
                  </p>
                </div>
              )}
            </button>
            {userMenuOpen && (
              <div
                className="absolute bottom-full left-0 mb-2 w-48 rounded-xl p-1 z-50"
                style={{
                  background: "#1A1D2E",
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                }}
              >
                <button className="flex items-center gap-2 w-full rounded-lg px-3 py-2 text-sm transition-colors hover:bg-white/5" style={{ color: "#fff" }}>
                  <User size={14} /> Profile
                </button>
                <button className="flex items-center gap-2 w-full rounded-lg px-3 py-2 text-sm transition-colors hover:bg-white/5" style={{ color: "#fff" }}>
                  <Settings size={14} /> Settings
                </button>
                <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", margin: "4px 0" }} />
                <button className="flex items-center gap-2 w-full rounded-lg px-3 py-2 text-sm transition-colors hover:bg-white/5" style={{ color: "#EF4444" }}>
                  <LogOut size={14} /> Sign out
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Collapse toggle */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="absolute -right-3 top-20 flex items-center justify-center w-6 h-6 rounded-full transition-all duration-150 z-30"
          style={{
            background: "#1A1D2E",
            border: "1px solid rgba(255,255,255,0.12)",
            color: "#8892A4",
          }}
        >
          {collapsed ? <ChevronRight size={12} /> : <ChevronLeft size={12} />}
        </button>
      </aside>

      {/* Main content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Top bar */}
        <header
          className="flex items-center justify-between px-6 py-3 flex-shrink-0"
          style={{
            background: "rgba(9,11,19,0.8)",
            backdropFilter: "blur(12px)",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          {/* Search */}
          <div
            className="flex items-center gap-2 rounded-lg px-3 py-2 flex-1 max-w-md"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <Search size={16} style={{ color: "#6B7280" }} />
            <input
              placeholder="Search or ask anything..."
              className="bg-transparent border-none outline-none text-sm flex-1"
              style={{ color: "#fff" }}
            />
            <kbd
              className="text-xs px-1.5 py-0.5 rounded"
              style={{
                background: "rgba(255,255,255,0.08)",
                color: "#6B7280",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              ⌘K
            </kbd>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3 ml-4">
            <button
              className="relative flex items-center justify-center rounded-lg p-2 transition-colors"
              style={{ background: "rgba(255,255,255,0.04)", color: "#8892A4" }}
            >
              <Bell size={18} />
              <span
                className="absolute top-1 right-1 w-2 h-2 rounded-full"
                style={{ background: "#C4FF40" }}
              />
            </button>
            <button
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all"
              style={{
                background: "linear-gradient(135deg, #C4FF40 0%, #A0E020 100%)",
                color: "#000",
                fontWeight: 400,
              }}
            >
              <Zap size={14} />
              Ask AI
            </button>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
