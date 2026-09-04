import { BarChart3, Bell, CalendarDays, CheckCircle2, CircleGauge, FolderKanban, LayoutDashboard, ListTodo, MessageSquareText, Settings, Sparkles, Target, UsersRound } from 'lucide-react';
import type { NavItem, Project } from '../types';

export const navItems: NavItem[] = [
  { label: 'Dashboard', icon: LayoutDashboard, active: true },
  { label: 'Projects', icon: FolderKanban },
  { label: 'Tasks', icon: ListTodo },
  { label: 'Team', icon: UsersRound },
  { label: 'Calendar', icon: CalendarDays },
  { label: 'Analytics', icon: BarChart3 },
  { label: 'Messages', icon: MessageSquareText },
  { label: 'Notifications', icon: Bell },
  { label: 'Settings', icon: Settings },
];

export const kpis = [
  { label: 'Total Projects', value: 124, suffix: '', change: '+12.5%', detail: 'from last month', icon: FolderKanban, spark: [18, 22, 20, 28, 31, 38, 44] },
  { label: 'Active Tasks', value: 48, suffix: '', change: '+8.2%', detail: 'this week', icon: CircleGauge, spark: [28, 25, 32, 30, 40, 38, 48] },
  { label: 'Completed Tasks', value: 312, suffix: '', change: '+18.4%', detail: 'from last month', icon: CheckCircle2, spark: [120, 160, 155, 210, 240, 270, 312] },
  { label: 'Team Productivity', value: 87, suffix: '%', change: '+5.1%', detail: 'team average', icon: Target, spark: [62, 68, 65, 74, 79, 82, 87] },
];

export const projects: Project[] = [
  { name: 'Mercury Launch System', description: 'Coordinate release tasks for the new onboarding experience.', status: 'On track', progress: 78, dueDate: 'Sep 18', members: ['A', 'S', 'D', 'M'] },
  { name: 'Atlas Mobile App', description: 'Polish mobile task flows, QA blockers, and beta feedback.', status: 'At risk', progress: 54, dueDate: 'Sep 12', members: ['M', 'J', 'T'] },
  { name: 'Nova Analytics', description: 'Build customer reporting views and usage insights.', status: 'Planning', progress: 34, dueDate: 'Oct 02', members: ['D', 'R', 'S'] },
];

export const productivityData = {
  Weekly: [
    { label: 'Mon', focus: 72, completed: 42 },
    { label: 'Tue', focus: 81, completed: 54 },
    { label: 'Wed', focus: 76, completed: 49 },
    { label: 'Thu', focus: 88, completed: 63 },
    { label: 'Fri', focus: 84, completed: 58 },
    { label: 'Sat', focus: 61, completed: 31 },
    { label: 'Sun', focus: 66, completed: 36 },
  ],
  Monthly: [
    { label: 'W1', focus: 70, completed: 188 },
    { label: 'W2', focus: 76, completed: 214 },
    { label: 'W3', focus: 84, completed: 247 },
    { label: 'W4', focus: 87, completed: 276 },
  ],
  Yearly: [
    { label: 'Jan', focus: 64, completed: 620 },
    { label: 'Mar', focus: 72, completed: 780 },
    { label: 'May', focus: 79, completed: 910 },
    { label: 'Jul', focus: 83, completed: 1040 },
    { label: 'Sep', focus: 87, completed: 1180 },
    { label: 'Nov', focus: 90, completed: 1310 },
  ],
};

export const activities = [
  { user: 'Alex', avatar: 'A', action: 'completed', item: 'Homepage redesign', time: '8 min ago', context: 'Mercury Launch' },
  { user: 'Sarah', avatar: 'S', action: 'created a new task', item: 'Prepare beta survey', time: '24 min ago', context: 'Atlas Mobile' },
  { user: 'Daniel', avatar: 'D', action: 'uploaded project files', item: 'Q3 analytics brief', time: '1 hr ago', context: 'Nova Analytics' },
  { user: 'Maya', avatar: 'M', action: 'commented on', item: 'Checkout QA checklist', time: '2 hrs ago', context: 'Mercury Launch' },
];

export const deadlines = [
  { task: 'Finalize onboarding copy', project: 'Mercury Launch', due: 'Today', priority: 'High', assignee: 'Sarah' },
  { task: 'Mobile navigation QA', project: 'Atlas Mobile', due: 'Tomorrow', priority: 'Urgent', assignee: 'Maya' },
  { task: 'Analytics schema review', project: 'Nova Analytics', due: 'Sep 10', priority: 'Medium', assignee: 'Daniel' },
];

export const accentIcon = Sparkles;
