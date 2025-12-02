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
    <div className="flex flex-row items-center gap-8">
      <div className="w-4 h-4 flex p-5 items-center justify-center border rounded-full bg-accent">
        <span className=" text-orange-400">{icon}</span>
      </div>
      <div className="flex flex-col">
        <span className="text-muted-foreground">{label}</span>
        <span className="text-primary">{value}</span>
      </div>
    </div>
  );
}
