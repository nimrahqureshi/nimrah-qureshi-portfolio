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
  { label: 'Total Leads', value: '156', change: '+12%', icon: UserPlus, color: 'from-purple-500 to-cyan-400' },
  { label: 'Conversion Rate', value: '24.5%', change: '+5.2%', icon: TrendingUp, color: 'from-green-500 to-emerald-500' },
  { label: 'Active Projects', value: '8', change: '+2', icon: Briefcase, color: 'from-blue-500 to-purple-500' },
  { label: 'Revenue', value: '$48,000', change: '+18%', icon: DollarSign, color: 'from-orange-500 to-pink-500' },
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
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <GlassCard>
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-sm text-muted">{stat.label}</p>
                        <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
                        <p className="text-xs text-green-400 mt-1">{stat.change}</p>
                      </div>
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${stat.color} flex items-center justify-center`}>
                        <stat.icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>

            {/* Recent Leads */}
            <GlassCard>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-white">Recent Leads</h3>
                <button 
                  onClick={() => setActiveTab('leads')}
                  className="text-sm text-purple-400 hover:text-purple-300"
                >
                  View All
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-purple-500/10">
                      <th className="text-left py-3 text-muted font-medium">Name</th>
                      <th className="text-left py-3 text-muted font-medium">Email</th>
                      <th className="text-left py-3 text-muted font-medium">Project</th>
                      <th className="text-left py-3 text-muted font-medium">Date</th>
                      <th className="text-left py-3 text-muted font-medium">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentLeads.map((lead) => (
                      <tr key={lead.email} className="border-b border-purple-500/5 hover:bg-white/5 transition-colors">
                        <td className="py-3 text-white">{lead.name}</td>
                        <td className="py-3 text-muted">{lead.email}</td>
                        <td className="py-3 text-muted">{lead.project}</td>
                        <td className="py-3 text-muted">{lead.date}</td>
                        <td className="py-3">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            lead.status === 'new' ? 'bg-blue-500/10 text-blue-400' :
                            lead.status === 'contacted' ? 'bg-yellow-500/10 text-yellow-400' :
                            lead.status === 'qualified' ? 'bg-purple-500/10 text-purple-400' :
                            'bg-green-500/10 text-green-400'
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

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <GlassCard className="cursor-pointer hover:border-purple-500/30 transition-all">
                <MessageSquare className="w-8 h-8 text-purple-400 mb-3" />
                <h4 className="font-medium text-white mb-1">AI Knowledge Base</h4>
                <p className="text-sm text-muted">Update chatbot training data</p>
              </GlassCard>
              <GlassCard className="cursor-pointer hover:border-purple-500/30 transition-all">
                <Eye className="w-8 h-8 text-cyan-400 mb-3" />
                <h4 className="font-medium text-white mb-1">Preview Site</h4>
                <p className="text-sm text-muted">View live portfolio website</p>
              </GlassCard>
              <GlassCard className="cursor-pointer hover:border-purple-500/30 transition-all">
                <UserPlus className="w-8 h-8 text-green-400 mb-3" />
                <h4 className="font-medium text-white mb-1">Add Team Member</h4>
                <p className="text-sm text-muted">Invite collaborators</p>
              </GlassCard>
            </div>
          </div>
        );

      case 'leads':
        return (
          <GlassCard>
            <h3 className="text-lg font-semibold text-white mb-6">All Leads</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-purple-500/10">
                    <th className="text-left py-3 text-muted font-medium">Name</th>
                    <th className="text-left py-3 text-muted font-medium">Email</th>
                    <th className="text-left py-3 text-muted font-medium">Project Type</th>
                    <th className="text-left py-3 text-muted font-medium">Budget</th>
                    <th className="text-left py-3 text-muted font-medium">Date</th>
                    <th className="text-left py-3 text-muted font-medium">Status</th>
                    <th className="text-left py-3 text-muted font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3, 4, 5].map((i) => (
                    <tr key={i} className="border-b border-purple-500/5 hover:bg-white/5 transition-colors">
                      <td className="py-3 text-white">Lead {i}</td>
                      <td className="py-3 text-muted">lead{i}@example.com</td>
                      <td className="py-3 text-muted">AI Chatbot</td>
                      <td className="py-3 text-muted">$3,000 - $8,000</td>
                      <td className="py-3 text-muted">2 days ago</td>
                      <td className="py-3">
                        <span className="px-2 py-1 rounded-full text-xs bg-purple-500/10 text-purple-400">new</span>
                      </td>
                      <td className="py-3">
                        <button className="text-purple-400 hover:text-purple-300 text-xs">View</button>
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
          <GlassCard>
            <h3 className="text-lg font-semibold text-white mb-6">Newsletter Subscribers</h3>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-xl bg-purple-500/10">
                <p className="text-2xl font-bold text-white">156</p>
                <p className="text-sm text-muted">Total Subscribers</p>
              </div>
              <div className="p-4 rounded-xl bg-green-500/10">
                <p className="text-2xl font-bold text-green-400">142</p>
                <p className="text-sm text-muted">Active</p>
              </div>
              <div className="p-4 rounded-xl bg-red-500/10">
                <p className="text-2xl font-bold text-red-400">14</p>
                <p className="text-sm text-muted">Unsubscribed</p>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-purple-500/10">
                    <th className="text-left py-3 text-muted font-medium">Email</th>
                    <th className="text-left py-3 text-muted font-medium">Subscribed</th>
                    <th className="text-left py-3 text-muted font-medium">Status</th>
                    <th className="text-left py-3 text-muted font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3, 4].map((i) => (
                    <tr key={i} className="border-b border-purple-500/5 hover:bg-white/5 transition-colors">
                      <td className="py-3 text-white">subscriber{i}@example.com</td>
                      <td className="py-3 text-muted">Jan 15, 2024</td>
                      <td className="py-3">
                        <span className="text-green-400 text-xs">● Active</span>
                      </td>
                      <td className="py-3">
                        <button className="text-red-400 hover:text-red-300 text-xs">Remove</button>
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
          <GlassCard>
            <h3 className="text-lg font-semibold text-white mb-4 capitalize">
              {activeTab} Management
            </h3>
            <p className="text-muted">Manage your {activeTab} content here.</p>
          </GlassCard>
        );
    }
  };

  return (
    <div className="min-h-screen bg-bg-primary">
      {/* Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 h-full w-64 glass z-50 transform transition-transform duration-300 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`}>
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-400 flex items-center justify-center">
                <LayoutDashboard className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-white">Admin Panel</span>
            </div>
            <button 
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden text-muted hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="space-y-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => { setActiveTab(tab.id); setSidebarOpen(false); }}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm transition-all ${
                  activeTab === tab.id
                    ? 'bg-purple-500/10 text-purple-400'
                    : 'text-muted hover:text-white hover:bg-white/5'
                }`}
              >
                <div className="flex items-center gap-3">
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </div>
                {tab.count !== undefined && (
                  <span className="px-2 py-0.5 rounded-full text-xs bg-purple-500/10 text-purple-400">
                    {tab.count}
                  </span>
                )}
              </button>
            ))}
          </nav>

          <div className="absolute bottom-6 left-6 right-6">
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-muted hover:text-red-400 hover:bg-red-500/5 transition-all">
              <LogOut className="w-4 h-4" />
              Sign Out
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="lg:ml-64">
        {/* Top Bar */}
        <header className="sticky top-0 z-30 glass">
          <div className="flex items-center justify-between px-6 py-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 rounded-lg text-muted hover:text-white hover:bg-white/5"
            >
              <Menu className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4 ml-auto">
              <button className="relative p-2 rounded-lg text-muted hover:text-white hover:bg-white/5">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-red-500" />
              </button>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 flex items-center justify-center text-sm font-medium text-white">
                  NQ
                </div>
                <div className="hidden sm:block">
                  <p className="text-sm font-medium text-white">Nimrah Qureshi</p>
                  <p className="text-xs text-muted">Admin</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}
