You are designing a comprehensive design system for "DataWhisper," an AI-powered data 
storytelling and business intelligence platform.

## BRAND & SERVICE OVERVIEW
- Service: AI-powered data storytelling, business intelligence, and automated insights
- Target Users: Non-technical business leaders, marketing directors, sales managers, executives
- Core Value: Users connect their data sources, ask natural language questions about their 
  business, and instantly receive AI-generated insights with visualizations and recommendations
- Aesthetic: Modern, intelligent, empowering (will be defined by provided color palettes and fonts)

## DESIGN SYSTEM REQUIREMENTS

### Visual Style
- [COLOR PALETTE: To be provided via screenshots]
- [TYPOGRAPHY: To be provided via screenshots]
- Design coherence across all components using provided visual reference

## COMPONENT LIBRARY (Build ALL)

### 1. BASE COMPONENTS
- Button (primary, secondary, ghost, danger variants; sizes: sm, md, lg)
- Input fields (text, email, password, with icons, validation states)
- Textarea (with character count, resize options)
- Checkbox and Radio buttons
- Toggle switches
- Dropdown/Select menus (single & multi-select)
- Search bars (with suggestions, filters)
- Tags and Badges
- Tooltips and Popovers
- Modal/Dialog boxes
- Alerts and Toast notifications
- Breadcrumbs
- Pagination
- Spinners and Loading skeletons
- Dividers and Separators

### 2. NAVIGATION & LAYOUT
- Top navigation bar (with logo, menu, user profile dropdown)
- Sidebar navigation (collapsible, active states, icons)
- Bottom navigation (mobile)
- Tabs (horizontal & vertical)
- Drawer/Slide-out panels
- Header variants (primary, secondary)
- Footer
- Sticky navigation options

### 3. FORM COMPONENTS
- Form layouts and field grouping
- Help text and error messages
- Input with prefix/suffix icons
- Date picker (with range selection)
- Time picker
- File upload (drag & drop)
- Multi-step form with progress indicator
- Auto-complete/type-ahead
- Form validation states
- Toggle form sections

### 4. DATA DISPLAY COMPONENTS
- Data tables (sortable, filterable, pagination, row selection, expandable rows)
- Cards (elevated, outlined, interactive)
- Stat cards (KPI boxes with icons, trends, percentages, comparisons)
- List views (basic, detailed, with avatars)
- Timeline component
- Tree view/hierarchical display
- Kanban-style columns
- Status indicators and badges
- Progress bars (linear & circular)
- Metric cards with comparison arrows
- Data grid views
- Comparison tables

### 5. CHARTS & GRAPHS (ESSENTIAL - Build Multiple Variants)
Using Recharts or Chart.js:
- Line charts (single line, multi-line, with area fill, animated)
- Bar charts (vertical, horizontal, grouped, stacked)
- Pie/Donut charts (with labels, legends)
- Area charts (stacked and non-stacked)
- Scatter plots (with trendlines)
- Combo charts (bars + lines)
- Heatmaps (colored grids)
- Gauge/Speed-o-meter charts
- Distribution histograms
- Waterfall charts
- Funnel charts
- Calendar heatmaps
- Network/relationship diagrams
- Live data streaming charts with animations
- Sparklines (mini charts in cards)
- Bubble charts

### 6. DASHBOARD COMPONENTS
- Dashboard grid layout (resizable widgets, drag-and-drop)
- Chart containers with refresh buttons, export options
- Filter bars (date range, category, multi-select)
- Report headers with title, date, last updated timestamp
- Quick stats section (KPI cards)
- Comparison widgets (period-over-period)
- Trending indicators (up/down arrows with percentages)
- Empty states with illustrations
- Data loading states and skeletons
- No data/error states with recovery actions
- Widget customization panels

### 7. USER & ACCOUNT COMPONENTS
- User profile card/dropdown
- Avatar (with initials, images, online status indicators)
- User mention component (@username)
- Authentication forms (login, signup, password reset, 2FA)
- Team member cards with roles
- Permission/role badges and indicators
- Settings panels and preferences
- Account menu with navigation
- Notification center/badge
- Activity feed

### 8. SPECIALIST AI COMPONENTS (UNIQUE TO SERVICE)
- "Ask DataWhisper" input bar (prominent, contextual, always accessible)
- AI response cards (with confidence levels, sources)
- Insight cards (AI-generated insights with explanations and evidence)
- Recommendation cards (with action buttons and expected impact)
- Query history sidebar (recent searches, saved queries)
- AI response loading animation (unique character/style)
- Data source selector (connections, integrations)
- Report generation preview and customization
- Insight confidence indicator (high/medium/low with explanation)
- Smart filter suggestions (AI-powered filter recommendations)
- Data quality indicator badge
- AI-powered anomaly alerts
- Natural language query builder with suggestions

## LUCIDE REACT ICONS - REQUIRED USAGE
Implement ALL icons using Lucide React with consistent styling:

Navigation & Menu:
- Home, BarChart3, TrendingUp, Settings, LogOut, Menu, X, ChevronDown, 
  ChevronRight, ChevronLeft, MoreVertical, MoreHorizontal

Data & Analytics:
- Database, Table2, PieChart, BarChart2, LineChart, Activity, Zap, 
  TrendingUp, TrendingDown, Target

Actions & Controls:
- Plus, Minus, Edit, Trash2, Download, Upload, Share2, Copy, Refresh, 
  Eye, EyeOff, Lock, Unlock

Status & Feedback:
- CheckCircle2, AlertCircle, AlertTriangle, Info, HelpCircle, XCircle, 
  Clock, Calendar, Filter, Search

AI-Specific:
- Sparkles, Brain, MessageSquare, Wand2, Zap, Lightbulb, 
  MessageCircle, Send

User & Account:
- User, Users, UserPlus, LogIn, LogOut, Settings, Bell, Mail

Data Source:
- Cloud, CloudOff, HardDrive, Server, Link, ExternalLink, Unlink

Use size variants: 16px (inline/small), 20px (standard), 24px (large), 32px (hero)
Maintain consistent color and styling with provided design system

## UNSPLASH INTEGRATION
- Use Unsplash images for hero sections, empty states, onboarding, feature highlights
- Recommended image categories: data, technology, business, analytics, dashboard, 
  workspace, collaboration, growth
- Image optimization: Proper sizing, lazy loading, responsive variants
- Suggested usage locations:
  * Dashboard hero/welcome section: Professional workspace or data visualization
  * Empty states: Relevant business/data imagery with messaging
  * Feature highlights: Team collaboration, data analysis, insights
  * Onboarding screens: Step-by-step visual guidance
  * Backgrounds: Subtle, non-distracting patterns or blurred images
  * User avatars fallback: Abstract patterns

## INTERACTIVE FEATURES
- Smooth animations and transitions (define timing as part of design reference)
- Hover effects on interactive elements
- Active/selected states with clear indication
- Disabled states (reduced visibility)
- Focus states for accessibility (keyboard navigation)
- Toast notifications for success/error/info messages
- Confirmation dialogs for destructive actions
- Real-time updates with visual feedback
- Responsive interactions for touch devices
- Skeleton screens during data loading
- Undo/redo capabilities where applicable

## PAGES/SECTIONS TO SHOWCASE
1. Landing/Marketing page (hero, feature highlights, testimonials, CTA)
2. Onboarding flow (welcome, data source setup, first query)
3. Dashboard home (overview, recent insights, quick actions)
4. Analytics/Explore page (advanced filtering, multiple chart types, drill-down)
5. Insights & Stories page (AI-generated insights, shared reports)
6. Data Sources management (integrations, connections, data preview)
7. Query history and saved queries
8. User profile and account settings
9. Team management and collaboration
10. Help/Documentation and FAQ pages
11. Empty states (no data, no results, errors)
12. Authentication pages (login, signup, password reset)

## TECHNICAL REQUIREMENTS
- Built with React (functional components, hooks)
- Styled with Tailwind CSS or styled-components
- Use Lucide React for ALL icons (no other icon libraries)
- Responsive design (mobile-first approach)
- Dark mode support (provide both light and dark variants)
- Smooth animations using CSS transitions or Framer Motion
- Accessibility: ARIA labels, semantic HTML, keyboard navigation, color contrast compliance
- Performance: Image lazy loading, code splitting, virtualized lists for large datasets
- State management for theme, filters, user data, UI state
- Sample/mock data for all components and pages
- Proper error boundaries and error handling UI

## DELIVERABLES
- Complete, interactive component library (showcasing all components)
- Full page examples (minimum 5: landing, dashboard, analytics, insights, settings)
- Component variants and states (hover, active, disabled, loading, error)
- Responsive mobile views for key pages
- Dark mode variants for all pages
- Consistent design language throughout