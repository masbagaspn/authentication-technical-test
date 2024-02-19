import Header from "./Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="max-w-screen min-h-screen flex flex-col relative bg-neutral-50 text-neutral-950">
      <Header />
      {children}
    </main>
  );
}
