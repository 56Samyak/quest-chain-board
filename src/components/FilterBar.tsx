
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, SlidersHorizontal } from "lucide-react";

const FilterBar = () => {
  return (
    <div className="bg-gray-800/60 backdrop-blur-lg p-6 rounded-2xl shadow-[0_0_25px_rgba(75,85,99,0.4)] border border-gray-700/50 mb-6">
      <div className="flex flex-col space-y-4">
        {/* Search Row */}
        <div className="flex items-center space-x-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 drop-shadow-[0_0_3px_rgba(156,163,175,0.5)]" />
            <Input 
              placeholder="Search bounties by title, description, or skills..." 
              className="pl-12 h-12 bg-gray-900/50 border-gray-600 text-white placeholder-gray-400 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent shadow-[0_0_8px_rgba(75,85,99,0.3)]"
            />
          </div>
          <Button className="h-12 px-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium rounded-xl shadow-[0_0_12px_rgba(147,51,234,0.5)] hover:shadow-[0_0_16px_rgba(147,51,234,0.7)]">
            <Search className="h-4 w-4 mr-2" />
            Search
          </Button>
        </div>
        
        {/* Filters Row */}
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center space-x-2">
            <SlidersHorizontal className="h-4 w-4 text-gray-400 drop-shadow-[0_0_3px_rgba(156,163,175,0.5)]" />
            <span className="text-sm font-medium text-gray-300 drop-shadow-[0_0_3px_rgba(156,163,175,0.3)]">Filters:</span>
          </div>
          
          <Select>
            <SelectTrigger className="w-48 bg-gray-900/50 border-gray-600 text-white rounded-xl shadow-[0_0_6px_rgba(75,85,99,0.3)]">
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 border-gray-600">
              <SelectItem value="all" className="text-white">All Categories</SelectItem>
              <SelectItem value="web-dev" className="text-white">Web Development</SelectItem>
              <SelectItem value="mobile" className="text-white">Mobile App</SelectItem>
              <SelectItem value="blockchain" className="text-white">Blockchain</SelectItem>
              <SelectItem value="ai-ml" className="text-white">AI/ML</SelectItem>
              <SelectItem value="design" className="text-white">Design</SelectItem>
              <SelectItem value="security" className="text-white">Security</SelectItem>
            </SelectContent>
          </Select>
          
          <Select>
            <SelectTrigger className="w-36 bg-gray-900/50 border-gray-600 text-white rounded-xl shadow-[0_0_6px_rgba(75,85,99,0.3)]">
              <SelectValue placeholder="Difficulty" />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 border-gray-600">
              <SelectItem value="all" className="text-white">All Levels</SelectItem>
              <SelectItem value="easy" className="text-white">Easy</SelectItem>
              <SelectItem value="medium" className="text-white">Medium</SelectItem>
              <SelectItem value="hard" className="text-white">Hard</SelectItem>
            </SelectContent>
          </Select>
          
          <Select>
            <SelectTrigger className="w-36 bg-gray-900/50 border-gray-600 text-white rounded-xl shadow-[0_0_6px_rgba(75,85,99,0.3)]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 border-gray-600">
              <SelectItem value="all" className="text-white">All Status</SelectItem>
              <SelectItem value="open" className="text-white">Open</SelectItem>
              <SelectItem value="progress" className="text-white">In Progress</SelectItem>
              <SelectItem value="completed" className="text-white">Completed</SelectItem>
            </SelectContent>
          </Select>
          
          <Button 
            variant="outline" 
            size="default" 
            className="border-gray-600 text-white hover:bg-gray-700 hover:text-white bg-gray-800/60 rounded-xl shadow-[0_0_8px_rgba(249,115,22,0.4)] hover:shadow-[0_0_12px_rgba(249,115,22,0.6)]"
          >
            <Filter className="h-4 w-4 mr-2" />
            Advanced
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
