import Sidebar from "@/components/modules/dashboard/Sidbar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 overflow-y-auto p-4">{children}</div>
    </div>
  );
}
