export type ContactDetailsProps = {
  icon: React.ReactNode;
  label: string;
  value: string;
};

export default function ContactDetails({
  icon,
  label,
  value,
}: ContactDetailsProps) {
  return (
    <div className="flex items-center space-x-3">
      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
        <span className="text-orange-600 dark:text-orange-400">{icon}</span>
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-sm text-muted-foreground">{label}</p>
        <p className="text-primary truncate">{value}</p>
      </div>
    </div>
  );
}
