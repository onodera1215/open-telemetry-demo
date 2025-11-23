'use server';
import Footer from "../molecules/Footer";
import Header from "../molecules/Header";

export default async function BaseLayout({ children }: { children: React.ReactNode }) {
  return <main className="flex flex-col min-h-screen">
    <div>
      <Header />
    </div>
    <section className="flex-grow">{children}</section>
    <div>
      <Footer />
    </div>
  </main>;
}