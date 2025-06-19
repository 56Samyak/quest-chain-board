
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, DollarSign, Target, Users } from "lucide-react";

const DashboardStats = () => {
  const stats = [
    {
      title: "Total Bounties",
      value: "1,234",
      change: "+12%",
      icon: Target,
      color: "text-blue-400"
    },
    {
      title: "Total Rewards",
      value: "$45,678",
      change: "+8%", 
      icon: DollarSign,
      color: "text-green-400"
    },
    {
      title: "Active Hunters",
      value: "892",
      change: "+23%",
      icon: Users,
      color: "text-purple-400"
    },
    {
      title: "Success Rate",
      value: "94%",
      change: "+5%",
      icon: TrendingUp,
      color: "text-orange-400"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <Card key={index} className="hover:shadow-lg transition-shadow bg-gray-800 border-gray-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-400">{stat.title}</p>
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-sm text-green-400">{stat.change} from last month</p>
              </div>
              <div className={`p-3 rounded-full bg-gray-700 ${stat.color}`}>
                <stat.icon className="h-6 w-6" />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default DashboardStats;
