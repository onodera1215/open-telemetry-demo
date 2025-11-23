export function BasicCard({
  children,
  props,
}: {
  children: React.ReactNode;
  props?: React.HTMLAttributes<HTMLDivElement>;
}) {
  return (
    <div
      {...props}
      className="border border-gray-300 rounded shadow-sm p-4 bg-white"
    >
      {children}
    </div>
  );
}
