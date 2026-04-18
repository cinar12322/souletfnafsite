interface GameCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function GameCard({ title, description, icon }: GameCardProps) {
  return (
    <div className="group relative p-8 rounded-[2rem] glass transition-all duration-500 hover:scale-[1.02] hover:bg-white/[0.06] overflow-hidden border border-white/10">
      {/* Decorative glow */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-white/[0.02] rounded-full blur-2xl -mr-12 -mt-12 group-hover:bg-white/[0.05] transition-all" />
      
      <div className="relative z-10">
        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500">
          {icon}
        </div>
        <h3 className="text-lg font-bold text-white mb-3 tracking-wide uppercase">{title}</h3>
        <p className="text-sm text-text-secondary leading-relaxed font-light">
          {description}
        </p>
      </div>
    </div>
  );
}
