import type { LucideIcon } from 'lucide-react';

export type NavItem = {
  label: string;
  icon: LucideIcon;
  active?: boolean;
};

export type ProjectStatus = 'On track' | 'At risk' | 'Planning' | 'Paused';

export type Project = {
  name: string;
  description: string;
  status: ProjectStatus;
  progress: number;
  dueDate: string;
  members: string[];
};
