import NavBar from './NavBar';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1 container mx-auto p-4">{children}</main>
    </div>
  );
}
