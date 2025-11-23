
export default async function HomeLayout({ children }: { children?: React.ReactNode }) {
  return <section className="container mx-auto p-4">
    <h1 className="mx-auto text-2xl font-bold mb-4 text-center">Your Tasks.</h1>
    {children}
  </section>;
}