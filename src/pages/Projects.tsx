import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { FolderPlus, Search, Trash2 } from 'lucide-react';
import { useFlow } from '../context/FlowContext';
import type { FlowProject, Status } from '../types/app';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { Select } from '../components/ui/Select';
import { Badge } from '../components/ui/Badge';
import { Modal } from '../components/ui/Modal';
import { ProgressBar } from '../components/ui/ProgressBar';
import { AvatarStack } from '../components/ui/AvatarStack';
import { EmptyState } from '../components/ui/EmptyState';
import { useToast } from '../context/ToastContext';

const statuses: Status[] = ['On track', 'At risk', 'Planning', 'In progress', 'Paused', 'Completed'];
const tone = (s: string) => s === 'On track' || s === 'Completed' ? 'success' : s === 'At risk' ? 'danger' : s === 'Planning' ? 'warning' : 'neutral';

function ProjectForm({ project, onSave, onClose }: { project?: FlowProject; onSave: (p: FlowProject) => void; onClose: () => void }) {
  const { team } = useFlow();
  const [draft, setDraft] = useState<FlowProject>(project ?? { id: crypto.randomUUID(), name: '', description: '', status: 'Planning', progress: 0, dueDate: new Date().toISOString().slice(0, 10), members: ['alex'], owner: 'alex', budget: '$20k' });
  return <form className="space-y-3" onSubmit={(e) => { e.preventDefault(); onSave(draft); onClose(); }}>
    <Input required placeholder="Project name" value={draft.name} onChange={(e) => setDraft({ ...draft, name: e.target.value })} />
    <Input placeholder="Description" value={draft.description} onChange={(e) => setDraft({ ...draft, description: e.target.value })} />
    <div className="grid grid-cols-2 gap-3"><Select value={draft.status} onChange={(e) => setDraft({ ...draft, status: e.target.value as Status })}>{statuses.map(s => <option key={s}>{s}</option>)}</Select><Input type="date" value={draft.dueDate} onChange={(e) => setDraft({ ...draft, dueDate: e.target.value })} /></div>
    <div className="grid grid-cols-2 gap-3"><Input type="number" min={0} max={100} value={draft.progress} onChange={(e) => setDraft({ ...draft, progress: Number(e.target.value) })} /><Select value={draft.owner} onChange={(e) => setDraft({ ...draft, owner: e.target.value })}>{team.map(m => <option key={m.id} value={m.id}>{m.name}</option>)}</Select></div>
    <div className="flex justify-end gap-2 pt-2"><Button type="button" variant="ghost" onClick={onClose}>Cancel</Button><Button type="submit" variant="primary">Save project</Button></div>
  </form>;
}

export function Projects() {
  const { projects, setProjects, setPage, setSelectedProjectId } = useFlow();
  const { toast } = useToast();
  const [query, setQuery] = useState(''); const [status, setStatus] = useState('All'); const [sort, setSort] = useState('due'); const [modal, setModal] = useState<FlowProject | null | 'new'>(null);
  const list = useMemo(() => projects.filter(p => (status === 'All' || p.status === status) && (p.name + p.description).toLowerCase().includes(query.toLowerCase())).sort((a,b) => sort === 'progress' ? b.progress - a.progress : a.dueDate.localeCompare(b.dueDate)), [projects, query, status, sort]);
  const save = (project: FlowProject) => { const exists = projects.some(p => p.id === project.id); setProjects(prev => exists ? prev.map(p => p.id === project.id ? project : p) : [project, ...prev]); toast(exists ? 'Project updated' : 'Project created'); };
  return <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mx-auto max-w-7xl space-y-6">
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"><div><h2 className="text-3xl font-semibold tracking-tight">Projects</h2><p className="text-muted">Plan, track, and tune delivery across active initiatives.</p></div><Button variant="primary" onClick={() => setModal('new')}><FolderPlus size={17}/>Create project</Button></div>
    <Card><div className="grid gap-3 md:grid-cols-[1fr_180px_160px]"><label className="relative"><Search className="absolute left-3 top-2.5 text-soft" size={17}/><Input className="pl-9" placeholder="Search projects..." value={query} onChange={e => setQuery(e.target.value)} /></label><Select value={status} onChange={e => setStatus(e.target.value)}><option>All</option>{statuses.map(s => <option key={s}>{s}</option>)}</Select><Select value={sort} onChange={e => setSort(e.target.value)}><option value="due">Sort by due date</option><option value="progress">Sort by progress</option></Select></div></Card>
    {list.length === 0 ? <EmptyState icon={FolderPlus} title="No projects found" body="Create a project or adjust your filters to see work here." action="Create project" onAction={() => setModal('new')} /> : <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{list.map(project => <Card key={project.id}><div className="flex items-start justify-between gap-3"><button className="text-left" onClick={() => { setSelectedProjectId(project.id); setPage('Projects'); }}><h3 className="font-semibold hover:text-flow-600">{project.name}</h3><p className="mt-1 line-clamp-2 text-sm text-muted">{project.description}</p></button><Badge tone={tone(project.status)}>{project.status}</Badge></div><div className="mt-5 flex justify-between text-sm"><span className="text-muted">Progress</span><span>{project.progress}%</span></div><div className="mt-2"><ProgressBar value={project.progress}/></div><div className="mt-5 flex items-center justify-between"><AvatarStack members={project.members.map(m => m[0].toUpperCase())}/><span className="text-sm text-muted">Due {project.dueDate}</span></div><div className="mt-5 flex gap-2"><Button onClick={() => setModal(project)}>Edit</Button><Select value={project.status} onChange={e => setProjects(prev => prev.map(p => p.id === project.id ? { ...p, status: e.target.value as Status } : p))}>{statuses.map(s => <option key={s}>{s}</option>)}</Select><Button variant="ghost" onClick={() => { if (confirm('Delete project?')) { setProjects(prev => prev.filter(p => p.id !== project.id)); toast('Project deleted', 'danger'); } }} aria-label="Delete project"><Trash2 size={16}/></Button></div></Card>)}</div>}
    <Modal open={!!modal} title={modal === 'new' ? 'Create project' : 'Edit project'} onClose={() => setModal(null)}><ProjectForm project={modal && modal !== 'new' ? modal : undefined} onSave={save} onClose={() => setModal(null)} /></Modal>
  </motion.div>;
}
