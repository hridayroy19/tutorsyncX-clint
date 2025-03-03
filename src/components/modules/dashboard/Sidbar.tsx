import UserDashboard from "@/app/(WithDashboardLayout)/student/dashboard/page";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 text-white p-4">
      <div className="mb-8">
        <h2 className="text-xl font-semibold">Admin</h2>
      </div>
      <nav>
        <UserDashboard />
      </nav>
    </aside>
  );
}
