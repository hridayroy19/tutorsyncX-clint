import { Users, Sigma, Video, Package } from "lucide-react";

const stats = [
  {
    id: 1,
    icon: <Users className="w-8 h-8 text-white" />,
    value: "204,223",
    label: "Registered Tutors",
  },
  {
    id: 2,
    icon: <Sigma className="w-8 h-8 text-white" />,
    value: "340,345",
    label: "Total Applications",
  },
  {
    id: 3,
    icon: <Video className="w-8 h-8 text-white" />,
    value: "843",
    label: "Live Tuition Jobs",
  },
  {
    id: 4,
    icon: <Package className="w-8 h-8 text-white" />,
    value: "267,010",
    label: "Total Stakeholders",
  },
];

const Counter = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="flex items-center gap-4 bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="bg-[#ac0ed49c] p-3 rounded-lg">{stat.icon}</div>
              <div>
                <h2 className="text-2xl font-bold">{stat.value}</h2>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Counter;
