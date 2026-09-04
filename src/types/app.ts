export type Page = 'Dashboard' | 'Projects' | 'Tasks' | 'Team' | 'Calendar' | 'Analytics' | 'Messages' | 'Notifications' | 'Settings';
export type Status = 'Planning' | 'In progress' | 'Review' | 'Completed' | 'On track' | 'At risk' | 'Paused';
export type Priority = 'Low' | 'Medium' | 'High' | 'Urgent';

export type TeamMember = { id: string; name: string; role: string; avatar: string; online: boolean; productivity: number; completion: number; activity: string };
export type FlowProject = { id: string; name: string; description: string; status: Status; progress: number; dueDate: string; members: string[]; owner: string; budget: string };
export type FlowTask = { id: string; title: string; projectId: string; status: 'Backlog' | 'In progress' | 'Review' | 'Completed'; priority: Priority; assignee: string; dueDate: string; completed: boolean };
export type CalendarEvent = { id: string; title: string; date: string; type: 'Task' | 'Meeting' | 'Milestone'; projectId?: string };
export type FlowNotification = { id: string; title: string; body: string; type: 'Task' | 'Project' | 'Mention' | 'Deadline' | 'Team'; read: boolean; time: string };
export type Message = { id: string; sender: string; body: string; time: string; mine?: boolean };
export type Conversation = { id: string; name: string; avatar: string; online: boolean; last: string; messages: Message[] };
