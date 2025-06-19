import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter } from "lucide-react";

const FilterBar = () => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-700 mb-6">
      <div className="flex flex-col lg:flex-row gap-4 items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input 
            placeholder="Search bounties..." 
            className="pl-10 bg-gray-900 border-gray-600 text-white placeholder-gray-400"
          />
        </div>
        
        <div className="flex gap-3">
          <Select>
            <SelectTrigger className="w-40 bg-gray-900 border-gray-600 text-white">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent className="bg-gray-900 border-gray-600">
              <SelectItem value="web-dev" className="text-white">Web Development</SelectItem>
              <SelectItem value="mobile" className="text-white">Mobile App</SelectItem>
              <SelectItem value="blockchain" className="text-white">Blockchain</SelectItem>
              <SelectItem value="ai-ml" className="text-white">AI/ML</SelectItem>
              <SelectItem value="design" className="text-white">Design</SelectItem>
              <SelectItem value="security" className="text-white">Security</SelectItem>
            </SelectContent>
          </Select>
          
          <Select>
            <SelectTrigger className="w-32 bg-gray-900 border-gray-600 text-white">
              <SelectValue placeholder="Difficulty" />
            </SelectTrigger>
            <SelectContent className="bg-gray-900 border-gray-600">
              <SelectItem value="easy" className="text-white">Easy</SelectItem>
              <SelectItem value="medium" className="text-white">Medium</SelectItem>
              <SelectItem value="hard" className="text-white">Hard</SelectItem>
            </SelectContent>
          </Select>
          
          <Select>
            <SelectTrigger className="w-32 bg-gray-900 border-gray-600 text-white">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent className="bg-gray-900 border-gray-600">
              <SelectItem value="open" className="text-white">Open</SelectItem>
              <SelectItem value="progress" className="text-white">In Progress</SelectItem>
              <SelectItem value="completed" className="text-white">Completed</SelectItem>
            </SelectContent>
          </Select>
          
          <Button variant="outline" size="default" className="border-gray-600 text-black hover:bg-gray-700 hover:text-black bg-white">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
