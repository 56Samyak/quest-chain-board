
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, DollarSign, Target, Users } from "lucide-react";

const DashboardStats = () => {
  const stats = [
    {
      title: "Total Bounties",
      value: "1,234",
      change: "+12%",
      icon: Target,
      color: "text-blue-400",
      bgColor: "bg-blue-500/20"
    },
    {
      title: "Total Rewards",
      value: "$45,678",
      change: "+8%", 
      icon: DollarSign,
      color: "text-green-400",
      bgColor: "bg-green-500/20"
    },
    {
      title: "Active Hunters",
      value: "892",
      change: "+23%",
      icon: Users,
      color: "text-purple-400",
      bgColor: "bg-purple-500/20"
    },
    {
      title: "Success Rate",
      value: "94%",
      change: "+5%",
      icon: TrendingUp,
      color: "text-orange-400",
      bgColor: "bg-orange-500/20"
    }
  ];

  return (
    <div className="flex overflow-x-auto gap-6 pb-4">
      {stats.map((stat, index) => (
        <Card key={index} className="min-w-[280px] hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-gray-800/60 backdrop-blur-lg border-gray-700">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className={`p-4 rounded-2xl ${stat.bgColor}`}>
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-400 uppercase tracking-wider">{stat.title}</p>
                <div className="flex items-baseline space-x-2">
                  <p className="text-3xl font-bold text-white">{stat.value}</p>
                  <p className="text-sm text-green-400 font-medium">{stat.change}</p>
                </div>
                <p className="text-xs text-gray-500 mt-1">from last month</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default DashboardStats;
