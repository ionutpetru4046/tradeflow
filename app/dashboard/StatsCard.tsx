interface StatsCardProps {
    title: string;
    value: string;
  }
  
  export default function StatsCard({
    title,
    value,
  }: StatsCardProps) {
    return (
      <div className="border rounded-xl p-6 shadow-sm">
        <p className="text-sm text-muted-foreground">
          {title}
        </p>
  
        <h2 className="text-3xl font-bold mt-2">
          {value}
        </h2>
      </div>
    );
  }