import type { CalendarEvent, Conversation, FlowNotification, FlowProject, FlowTask, TeamMember } from '../types/app';

export const teamSeed: TeamMember[] = [
  { id: 'alex', name: 'Alex Morgan', role: 'Product Lead', avatar: 'A', online: true, productivity: 87, completion: 92, activity: 'Reviewed launch plan' },
  { id: 'sarah', name: 'Sarah Chen', role: 'UX Designer', avatar: 'S', online: true, productivity: 91, completion: 88, activity: 'Completed onboarding copy' },
  { id: 'daniel', name: 'Daniel Reed', role: 'Engineer', avatar: 'D', online: false, productivity: 82, completion: 79, activity: 'Uploaded analytics files' },
  { id: 'maya', name: 'Maya Patel', role: 'QA Lead', avatar: 'M', online: true, productivity: 78, completion: 84, activity: 'Commented on QA checklist' },
  { id: 'jordan', name: 'Jordan Lee', role: 'Data Analyst', avatar: 'J', online: false, productivity: 75, completion: 81, activity: 'Updated KPI model' },
];

export const projectsSeed: FlowProject[] = [
  { id: 'p1', name: 'Mercury Launch System', description: 'Release the new onboarding experience and activation flows.', status: 'On track', progress: 78, dueDate: '2026-09-18', members: ['alex', 'sarah', 'daniel', 'maya'], owner: 'alex', budget: '$48k' },
  { id: 'p2', name: 'Atlas Mobile App', description: 'Beta-ready task management app for iOS and Android teams.', status: 'At risk', progress: 54, dueDate: '2026-09-12', members: ['maya', 'daniel', 'jordan'], owner: 'maya', budget: '$72k' },
  { id: 'p3', name: 'Nova Analytics', description: 'Customer reporting views, cohort analytics, and insights.', status: 'Planning', progress: 34, dueDate: '2026-10-02', members: ['daniel', 'jordan', 'sarah'], owner: 'daniel', budget: '$39k' },
  { id: 'p4', name: 'Helio Brand Refresh', description: 'Marketing site system, visual language, and component polish.', status: 'In progress', progress: 61, dueDate: '2026-09-28', members: ['sarah', 'alex'], owner: 'sarah', budget: '$25k' },
];

export const tasksSeed: FlowTask[] = [
  { id: 't1', title: 'Finalize onboarding copy', projectId: 'p1', status: 'Review', priority: 'High', assignee: 'sarah', dueDate: '2026-09-04', completed: false },
  { id: 't2', title: 'Homepage redesign QA', projectId: 'p1', status: 'Completed', priority: 'Medium', assignee: 'maya', dueDate: '2026-09-05', completed: true },
  { id: 't3', title: 'Mobile navigation prototype', projectId: 'p2', status: 'In progress', priority: 'Urgent', assignee: 'sarah', dueDate: '2026-09-06', completed: false },
  { id: 't4', title: 'Analytics schema review', projectId: 'p3', status: 'Backlog', priority: 'Medium', assignee: 'daniel', dueDate: '2026-09-10', completed: false },
  { id: 't5', title: 'Create beta survey', projectId: 'p2', status: 'In progress', priority: 'Low', assignee: 'alex', dueDate: '2026-09-11', completed: false },
  { id: 't6', title: 'Brand token audit', projectId: 'p4', status: 'Review', priority: 'High', assignee: 'jordan', dueDate: '2026-09-14', completed: false },
];

export const eventsSeed: CalendarEvent[] = [
  { id: 'e1', title: 'Mercury launch review', date: '2026-09-08', type: 'Meeting', projectId: 'p1' },
  { id: 'e2', title: 'Atlas beta milestone', date: '2026-09-12', type: 'Milestone', projectId: 'p2' },
  { id: 'e3', title: 'Analytics schema review', date: '2026-09-10', type: 'Task', projectId: 'p3' },
  { id: 'e4', title: 'Design critique', date: '2026-09-16', type: 'Meeting', projectId: 'p4' },
];

export const notificationsSeed: FlowNotification[] = [
  { id: 'n1', title: 'Sarah mentioned you', body: 'Can you review the onboarding copy today?', type: 'Mention', read: false, time: '8 min ago' },
  { id: 'n2', title: 'Deadline approaching', body: 'Atlas Mobile App is due in 8 days.', type: 'Deadline', read: false, time: '30 min ago' },
  { id: 'n3', title: 'Task completed', body: 'Maya completed Homepage redesign QA.', type: 'Task', read: true, time: '2 hrs ago' },
];

export const conversationsSeed: Conversation[] = [
  { id: 'c1', name: 'Sarah Chen', avatar: 'S', online: true, last: 'Copy is ready for review.', messages: [{ id: 'm1', sender: 'Sarah', body: 'Copy is ready for review.', time: '9:41' }, { id: 'm2', sender: 'Alex', body: 'Great — I will review after standup.', time: '9:45', mine: true }] },
  { id: 'c2', name: 'Mercury Launch', avatar: 'M', online: true, last: 'Daniel uploaded release files.', messages: [{ id: 'm3', sender: 'Daniel', body: 'I uploaded the release files.', time: '8:22' }] },
  { id: 'c3', name: 'Maya Patel', avatar: 'M', online: false, last: 'QA notes are in the task.', messages: [{ id: 'm4', sender: 'Maya', body: 'QA notes are in the task.', time: 'Yesterday' }] },
];
