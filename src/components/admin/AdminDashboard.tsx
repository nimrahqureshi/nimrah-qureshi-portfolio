import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, Users, Briefcase, Star, FileText, 
  Mail, Settings, LogOut, Menu, X, Bell, TrendingUp,
  MessageSquare, Eye, DollarSign, UserPlus
} from 'lucide-react';
import GlassCard from '@/components/effects/GlassCard';

type Tab = 'dashboard' | 'leads' | 'projects' | 'testimonials' | 'blog' | 'subscribers' | 'settings';

interface AdminTab {
  id: Tab;
  label: string;
  icon: any;
  count?: number;
}

const tabs: AdminTab[] = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'leads', label: 'Leads', icon: Users, count: 24 },
  { id: 'projects', label: 'Projects', icon: Briefcase, count: 8 },
  { id: 'testimonials', label: 'Testimonials', icon: Star, count: 6 },
  { id: 'blog', label: 'Blog Posts', icon: FileText, count: 12 },
  { id: 'subscribers', label: 'Subscribers', icon: Mail, count: 156 },
  { id: 'settings', label: 'Settings', icon: Settings },
];

const stats = [
  { label: 'Total Leads', value: '156', change: '+12%', icon: UserPlus, color: 'from-purple-500/20 to-cyan-400/20 text-cyan-300 border border-cyan-500/30' },
  { label: 'Conversion Rate', value: '24.5%', change: '+5.2%', icon: TrendingUp, color: 'from-green-500/20 to-emerald-500/20 text-emerald-300 border border-emerald-500/30' },
  { label: 'Active Projects', value: '8', change: '+2', icon: Briefcase, color: 'from-blue-500/20 to-purple-500/20 text-purple-300 border border-purple-500/30' },
  { label: 'Revenue', value: '$48,000', change: '+18%', icon: DollarSign, color: 'from-orange-500/20 to-pink-500/20 text-pink-300 border border-pink-500/30' },
];

const recentLeads = [
  { name: 'John Smith', email: 'john@example.com', project: 'AI Chatbot', date: '2 hours ago', status: 'new' },
  { name: 'Sarah Johnson', email: 'sarah@company.com', project: 'Web Development', date: '5 hours ago', status: 'contacted' },
  { name: 'Mike Chen', email: 'mike@startup.io', project: 'AI Agent', date: '1 day ago', status: 'qualified' },
  { name: 'Emily Davis', email: 'emily@agency.com', project: 'Automation', date: '2 days ago', status: 'proposal' },
];

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<Tab>('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="space-y-8 relative z-10">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                >
                  <GlassCard className="bg-[#101010]/80 border border-white/[0.04] p-6 rounded-xl relative overflow-hidden group hover:border-white/[0.08] transition-all duration-300">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-xs text-gray-400 tracking-wider uppercase font-mono">{stat.label}</p>
                        <p style={{ color: '#E1E0CC' }} className="text-3xl font-medium mt-2 tracking-tight">{stat.value}</p>
                        <p className="text-xs text-emerald-400 font-mono mt-1.5 flex items-center gap-1">
                          <span>{stat.change}</span> 
                          <span className="text-gray-500 font-sans">vs last month</span>
                        </p>
                      </div>
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center transition-transform duration-300 group-hover:scale-105`}>
                        <stat.icon className="w-5 h-5" />
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>

            {/* Recent Leads */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <GlassCard className="bg-[#101010]/80 border border-white/[0.04] p-6 sm:p-8 rounded-xl">
                <div className="flex items-center justify-between mb-6">
                  <h3 style={{ color: '#E1E0CC' }} className="text-lg font-medium tracking-tight">Recent Leads</h3>
                  <button 
                    onClick={() => setActiveTab('leads')}
                    className="text-xs font-mono tracking-wider uppercase text-purple-400 hover:text-purple-300 transition-colors border-b border-purple-400/20 pb-0.5"
                  >
                    View All
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/[0.06]">
                        <th className="text-left pb-3 text-gray-400 font-medium font-mono text-xs uppercase tracking-wider">Name</th>
                        <th className="text-left pb-3 text-gray-400 font-medium font-mono text-xs uppercase tracking-wider">Email</th>
                        <th className="text-left pb-3 text-gray-400 font-medium font-mono text-xs uppercase tracking-wider">Project</th>
                        <th className="text-left pb-3 text-gray-400 font-medium font-mono text-xs uppercase tracking-wider">Date</th>
                        <th className="text-left pb-3 text-gray-400 font-medium font-mono text-xs uppercase tracking-wider">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/[0.02]">
                      {recentLeads.map((lead) => (
                        <tr key={lead.email} className="group hover:bg-white/[0.02] transition-colors">
                          <td className="py-3.5 text-gray-200 font-medium">{lead.name}</td>
                          <td className="py-3.5 text-gray-400 font-mono text-xs">{lead.email}</td>
                          <td className="py-3.5 text-gray-300">{lead.project}</td>
                          <td className="py-3.5 text-gray-500 text-xs font-mono">{lead.date}</td>
                          <td className="py-3.5">
                            <span className={`px-2.5 py-0.5 rounded text-[11px] font-mono tracking-wide uppercase border ${
                              lead.status === 'new' ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' :
                              lead.status === 'contacted' ? 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20' :
                              lead.status === 'qualified' ? 'bg-purple-500/10 text-purple-400 border-purple-500/20' :
                              'bg-green-500/10 text-green-400 border-green-500/20'
                            }`}>
                              {lead.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </GlassCard>
            </motion.div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <GlassCard className="cursor-pointer bg-[#101010]/80 border border-white/[0.04] p-6 rounded-xl hover:border-purple-500/30 hover:bg-[#121115]/90 transition-all duration-300 group">
                <MessageSquare className="w-6 h-6 text-purple-400 mb-4 transition-transform duration-300 group-hover:scale-110" />
                <h4 style={{ color: '#E1E0CC' }} className="font-medium mb-1 tracking-tight">AI Knowledge Base</h4>
                <p className="text-xs text-gray-400 leading-relaxed font-light">Update agent system prompts & chatbot structural training datasets.</p>
              </GlassCard>
              <GlassCard className="cursor-pointer bg-[#101010]/80 border border-white/[0.04] p-6 rounded-xl hover:border-cyan-500/30 hover:bg-[#101315]/90 transition-all duration-300 group">
                <Eye className="w-6 h-6 text-cyan-400 mb-4 transition-transform duration-300 group-hover:scale-110" />
                <h4 style={{ color: '#E1E0CC' }} className="font-medium mb-1 tracking-tight">Preview Site</h4>
                <p className="text-xs text-gray-400 leading-relaxed font-light">Launch live portfolio environment to view staging adjustments.</p>
              </GlassCard>
              <GlassCard className="cursor-pointer bg-[#101010]/80 border border-white/[0.04] p-6 rounded-xl hover:border-green-500/30 hover:bg-[#101411]/90 transition-all duration-300 group">
                <UserPlus className="w-6 h-6 text-green-400 mb-4 transition-transform duration-300 group-hover:scale-110" />
                <h4 style={{ color: '#E1E0CC' }} className="font-medium mb-1 tracking-tight">Add Team Member</h4>
                <p className="text-xs text-gray-400 leading-relaxed font-light">Provision granular RBAC security roles to external collaborators.</p>
              </GlassCard>
            </div>
          </div>
        );

      case 'leads':
        return (
          <GlassCard className="bg-[#101010]/80 border border-white/[0.04] p-6 sm:p-8 rounded-xl relative z-10">
            <h3 style={{ color: '#E1E0CC' }} className="text-lg font-medium mb-6 tracking-tight">All Leads</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/[0.06]">
                    <th className="text-left pb-3 text-gray-400 font-medium font-mono text-xs uppercase tracking-wider">Name</th>
                    <th className="text-left pb-3 text-gray-400 font-medium font-mono text-xs uppercase tracking-wider">Email</th>
                    <th className="text-left pb-3 text-gray-400 font-medium font-mono text-xs uppercase tracking-wider">Project Type</th>
                    <th className="text-left pb-3 text-gray-400 font-medium font-mono text-xs uppercase tracking-wider">Budget</th>
                    <th className="text-left pb-3 text-gray-400 font-medium font-mono text-xs uppercase tracking-wider">Date</th>
                    <th className="text-left pb-3 text-gray-400 font-medium font-mono text-xs uppercase tracking-wider">Status</th>
                    <th className="text-left pb-3 text-gray-400 font-medium font-mono text-xs uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.02]">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <tr key={i} className="hover:bg-white/[0.01] transition-colors">
                      <td className="py-3.5 text-gray-200 font-medium">Lead {i}</td>
                      <td className="py-3.5 text-gray-400 font-mono text-xs">lead{i}@example.com</td>
                      <td className="py-3.5 text-gray-300">AI Chatbot</td>
                      <td className="py-3.5 text-emerald-400/90 font-mono text-xs">$3,000 - $8,000</td>
                      <td className="py-3.5 text-gray-500 font-mono text-xs">2 days ago</td>
                      <td className="py-3.5">
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-purple-500/10 text-purple-400 border border-purple-500/20">new</span>
                      </td>
                      <td className="py-3.5">
                        <button className="text-purple-400 hover:text-purple-300 text-xs font-medium transition-colors">View</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </GlassCard>
        );

      case 'subscribers':
        return (
          <GlassCard className="bg-[#101010]/80 border border-white/[0.04] p-6 sm:p-8 rounded-xl relative z-10">
            <h3 style={{ color: '#E1E0CC' }} className="text-lg font-medium mb-6 tracking-tight">Newsletter Subscribers</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                <p style={{ color: '#E1E0CC' }} className="text-2xl font-medium tracking-tight">156</p>
                <p className="text-xs text-gray-400 uppercase font-mono tracking-wider mt-1">Total Subscribers</p>
              </div>
              <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/10">
                <p className="text-2xl font-medium text-emerald-400 tracking-tight">142</p>
                <p className="text-xs text-emerald-500 uppercase font-mono tracking-wider mt-1">Active metrics</p>
              </div>
              <div className="p-4 rounded-xl bg-rose-500/5 border border-rose-500/10">
                <p className="text-2xl font-medium text-rose-400 tracking-tight">14</p>
                <p className="text-xs text-rose-500 uppercase font-mono tracking-wider mt-1">Unsubscribed</p>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/[0.06]">
                    <th className="text-left pb-3 text-gray-400 font-medium font-mono text-xs uppercase tracking-wider">Email</th>
                    <th className="text-left pb-3 text-gray-400 font-medium font-mono text-xs uppercase tracking-wider">Subscribed</th>
                    <th className="text-left pb-3 text-gray-400 font-medium font-mono text-xs uppercase tracking-wider">Status</th>
                    <th className="text-left pb-3 text-gray-400 font-medium font-mono text-xs uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.02]">
                  {[1, 2, 3, 4].map((i) => (
                    <tr key={i} className="hover:bg-white/[0.01] transition-colors">
                      <td className="py-3.5 text-gray-300 font-mono text-xs">subscriber{i}@example.com</td>
                      <td className="py-3.5 text-gray-500 font-mono text-xs">Jan 15, 2024</td>
                      <td className="py-3.5">
                        <span className="text-emerald-400 text-xs font-mono flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Active
                        </span>
                      </td>
                      <td className="py-3.5">
                        <button className="text-rose-400 hover:text-rose-300 text-xs font-medium transition-colors">Remove</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </GlassCard>
        );

      default:
        return (
          <GlassCard className="bg-[#101010]/80 border border-white/[0.04] p-6 sm:p-8 rounded-xl relative z-10">
            <h3 style={{ color: '#E1E0CC' }} className="text-lg font-medium mb-3 capitalize tracking-tight">
              {activeTab} Management
            </h3>
            <p className="text-sm text-gray-400 font-light">Configure and orchestrate your customizable {activeTab} parameters and systemic workflows.</p>
          </GlassCard>
        );
    }
  };

  return (
    <div className="min-h-screen bg-black selection:bg-[#E1E0CC] selection:text-black relative overflow-hidden font-sans antialiased text-gray-200">
      
      {/* 1. Premium Dynamic Noise Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.14] pointer-events-none mix-blend-overlay z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />
      
      {/* 2. Abstract Premium Radial Glow Clusters (Prisma Style Depth) */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-[-5%] left-[15%] w-[700px] h-[700px] bg-cyan-900/10 rounded-full blur-[160px] pointer-events-none z-0" />

      {/* Sidebar Mobile Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-40 lg:hidden transition-all duration-300"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar Panel Container */}
      <aside className={`fixed top-0 left-0 h-full w-64 bg-[#0a0a0a]/90 border-r border-white/[0.04] backdrop-blur-xl z-50 transform transition-all duration-300 ease-[0.16, 1, 0.3, 1] ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`}>
        <div className="p-6 h-full flex flex-col justify-between relative">
          <div>
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500/20 to-cyan-400/20 border border-purple-500/30 flex items-center justify-center shadow-inner">
                  <LayoutDashboard className="w-4 h-4 text-[#E1E0CC]" />
                </div>
                <span style={{ color: '#E1E0CC' }} className="font-medium text-sm tracking-wider uppercase font-mono">Admin Panel</span>
              </div>
              <button 
                onClick={() => setSidebarOpen(false)}
                className="lg:hidden text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="space-y-1.5">
              {tabs.map((tab) => {
                const IsActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => { setActiveTab(tab.id); setSidebarOpen(false); }}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-xs tracking-wide uppercase font-mono transition-all duration-200 group ${
                      IsActive
                        ? 'bg-white/[0.04] text-[#E1E0CC] border-l-2 border-[#E1E0CC] pl-3.5 shadow-sm'
                        : 'text-gray-400 hover:text-white hover:bg-white/[0.02]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <tab.icon className={`w-4 h-4 transition-colors ${IsActive ? 'text-[#E1E0CC]' : 'text-gray-500 group-hover:text-gray-300'}`} />
                      <span>{tab.label}</span>
                    </div>
                    {tab.count !== undefined && (
                      <span className={`px-2 py-0.5 rounded text-[10px] font-mono ${
                        IsActive ? 'bg-[#E1E0CC]/10 text-[#E1E0CC]' : 'bg-white/[0.04] text-gray-500 group-hover:text-gray-400'
                      }`}>
                        {tab.count}
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>
          </div>

          <div className="pt-6 border-t border-white/[0.04]">
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-xs font-mono uppercase tracking-wide text-gray-400 hover:text-rose-400 hover:bg-rose-500/5 transition-all duration-200 group">
              <LogOut className="w-4 h-4 text-gray-500 group-hover:text-rose-400 transition-colors" />
              Sign Out
            </button>
          </div>
        </div>
      </aside>

      {/* Main Framework Layout Frame */}
      <div className="lg:ml-64 min-h-screen flex flex-col justify-between relative z-10">
        
        {/* Transparent Modern Top Bar */}
        <header className="sticky top-0 z-30 bg-black/20 border-b border-white/[0.02] backdrop-blur-md">
          <div className="flex items-center justify-between px-6 py-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/[0.04] transition-all"
            >
              <Menu className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-5 ml-auto">
              <button className="relative p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/[0.04] transition-all group">
                <Bell className="w-4 h-4" />
                <span className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-purple-500 ring-2 ring-black" />
              </button>
              
              <div className="h-4 w-[1px] bg-white/[0.08]" />

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-white/[0.08] flex items-center justify-center text-xs font-mono font-medium text-[#E1E0CC]">
                  NQ
                </div>
                <div className="hidden sm:block text-left">
                  <p className="text-xs font-medium text-gray-200 tracking-tight">Nimrah Qureshi</p>
                  <p className="text-[10px] text-gray-500 font-mono uppercase tracking-widest mt-0.5">Admin</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Dynamic Structural Content Render Engine */}
        <main className="p-6 sm:p-8 flex-grow max-w-7xl w-full mx-auto">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}