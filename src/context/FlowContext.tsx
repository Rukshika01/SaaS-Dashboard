import { createContext, useContext, useMemo, useState } from 'react';
import { conversationsSeed, eventsSeed, notificationsSeed, projectsSeed, tasksSeed, teamSeed } from '../data/flow';
import { useLocalStorage } from '../hooks/useLocalStorage';
import type { CalendarEvent, Conversation, FlowNotification, FlowProject, FlowTask, Page } from '../types/app';

type FlowContextValue = {
  page: Page; setPage: (page: Page) => void; selectedProjectId: string | null; setSelectedProjectId: (id: string | null) => void;
  projects: FlowProject[]; setProjects: React.Dispatch<React.SetStateAction<FlowProject[]>>;
  tasks: FlowTask[]; setTasks: React.Dispatch<React.SetStateAction<FlowTask[]>>;
  notifications: FlowNotification[]; setNotifications: React.Dispatch<React.SetStateAction<FlowNotification[]>>;
  conversations: Conversation[]; setConversations: React.Dispatch<React.SetStateAction<Conversation[]>>;
  events: CalendarEvent[]; setEvents: React.Dispatch<React.SetStateAction<CalendarEvent[]>>;
  team: typeof teamSeed;
};

const FlowContext = createContext<FlowContextValue | null>(null);

export function FlowProvider({ children }: { children: React.ReactNode }) {
  const [page, setPage] = useState<Page>('Dashboard');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [projects, setProjects] = useLocalStorage('flow-projects', projectsSeed);
  const [tasks, setTasks] = useLocalStorage('flow-tasks', tasksSeed);
  const [notifications, setNotifications] = useLocalStorage('flow-notifications', notificationsSeed);
  const [conversations, setConversations] = useLocalStorage('flow-conversations', conversationsSeed);
  const [events, setEvents] = useLocalStorage('flow-events', eventsSeed);
  const value = useMemo(() => ({ page, setPage, selectedProjectId, setSelectedProjectId, projects, setProjects, tasks, setTasks, notifications, setNotifications, conversations, setConversations, events, setEvents, team: teamSeed }), [page, selectedProjectId, projects, tasks, notifications, conversations, events]);
  return <FlowContext.Provider value={value}>{children}</FlowContext.Provider>;
}

export function useFlow() {
  const context = useContext(FlowContext);
  if (!context) throw new Error('useFlow must be used inside FlowProvider');
  return context;
}
