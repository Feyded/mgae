import Sidebar from "./(components)/sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full md:w-64">
        <Sidebar />
      </div>
      <div className="flex-grow md:overflow-y-auto">{children}</div>
    </div>
  );
}
