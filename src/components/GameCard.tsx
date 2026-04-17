interface GameCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function GameCard({ title, description, icon }: GameCardProps) {
  return (
    <div className="group p-6 rounded-2xl border border-white/5 bg-surface hover:border-primary/20 transition-all duration-200">
      <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
        {icon}
      </div>
      <h3 className="text-base font-semibold text-text-primary mb-2">{title}</h3>
      <p className="text-sm text-text-secondary leading-relaxed">{description}</p>
    </div>
  );
}
