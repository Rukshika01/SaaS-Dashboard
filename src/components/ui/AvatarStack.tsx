export function AvatarStack({ members, limit = 4 }: { members: string[]; limit?: number }) {
  return (
    <div className="flex -space-x-2" aria-label={`${members.length} team members`}>
      {members.slice(0, limit).map((member, index) => (
        <div
          key={`${member}-${index}`}
          className="grid h-8 w-8 place-items-center rounded-full border-2 border-[rgb(var(--surface))] bg-gradient-to-br from-flow-300 to-flow-700 text-xs font-semibold text-white shadow-sm"
        >
          {member}
        </div>
      ))}
    </div>
  );
}
