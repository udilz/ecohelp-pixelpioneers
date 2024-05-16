export default function Layout({ children }) {
  return (
    <main className="h-screen flex justify-center items-center">
      <div className="w-[350px]">{children}</div>
    </main>
  );
}
