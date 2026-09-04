import { FlowProvider, useFlow } from './context/FlowContext';
import { AppShell } from './components/layout/AppShell';
import { Dashboard } from './pages/Dashboard';
import { Projects } from './pages/Projects';
import { ProjectDetails } from './pages/ProjectDetails';
import { Tasks } from './pages/Tasks';
import { Team } from './pages/Team';
import { Calendar } from './pages/Calendar';
import { Analytics } from './pages/Analytics';
import { Messages } from './pages/Messages';
import { Notifications } from './pages/Notifications';
import { Settings } from './pages/Settings';

function CurrentPage() {
  const { page, selectedProjectId } = useFlow();
  if (page === 'Projects' && selectedProjectId) return <ProjectDetails />;
  const pages = { Dashboard: <Dashboard />, Projects: <Projects />, Tasks: <Tasks />, Team: <Team />, Calendar: <Calendar />, Analytics: <Analytics />, Messages: <Messages />, Notifications: <Notifications />, Settings: <Settings /> };
  return pages[page];
}

export function App() {
  return <FlowProvider><AppShell><CurrentPage /></AppShell></FlowProvider>;
}
