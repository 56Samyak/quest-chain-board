
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Calendar, DollarSign } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useWeb3 } from "@/hooks/useWeb3";
import { ContractService } from "@/services/contractService";

interface CreateBountyFormProps {
  onBountyCreated?: () => void;
}

const CreateBountyForm = ({ onBountyCreated }: CreateBountyFormProps) => {
  const { toast } = useToast();
  const { signer } = useWeb3();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "", 
    category: "",
    difficulty: "",
    reward: "",
    currency: "ETH",
    deadline: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.title || !formData.description || !formData.category || !formData.difficulty || !formData.reward || !formData.deadline) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    if (!signer) {
      toast({
        title: "Error",
        description: "Please connect your wallet first",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const contractService = new ContractService(signer);
      const deadlineTimestamp = new Date(formData.deadline).getTime();
      
      await contractService.createBounty(
        formData.title,
        formData.description,
        formData.reward,
        deadlineTimestamp
      );

      toast({
        title: "Success!",
        description: "Bounty created successfully on the blockchain",
      });

      // Reset form
      setFormData({
        title: "",
        description: "", 
        category: "",
        difficulty: "",
        reward: "",
        currency: "ETH",
        deadline: ""
      });

      // Notify parent component to refresh bounties
      if (onBountyCreated) {
        onBountyCreated();
      }

    } catch (error) {
      console.error('Error creating bounty:', error);
      toast({
        title: "Error",
        description: "Failed to create bounty. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <Card className="max-w-2xl mx-auto bg-gray-900/80 border-gray-700/50 shadow-[0_0_20px_rgba(147,51,234,0.3)]">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">Create New Bounty</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="title" className="text-gray-300">Bounty Title</Label>
            <Input
              id="title"
              placeholder="e.g., Fix responsive design bug on mobile"
              value={formData.title}
              onChange={(e) => handleInputChange('title', e.target.value)}
              className="bg-gray-800/60 border-gray-600/50 text-white placeholder-gray-400 shadow-[0_0_8px_rgba(59,130,246,0.2)]"
              required
            />
          </div>
          
          <div>
            <Label htmlFor="description" className="text-gray-300">Description</Label>
            <Textarea
              id="description"
              placeholder="Describe the task, requirements, and deliverables..."
              className="h-32 bg-gray-800/60 border-gray-600/50 text-white placeholder-gray-400 shadow-[0_0_8px_rgba(59,130,246,0.2)]"
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              required
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label className="text-gray-300">Category</Label>
              <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                <SelectTrigger className="bg-gray-800/60 border-gray-600/50 text-white shadow-[0_0_8px_rgba(59,130,246,0.2)]">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-600">
                  <SelectItem value="web-dev" className="text-white">Web Development</SelectItem>
                  <SelectItem value="mobile" className="text-white">Mobile App</SelectItem>
                  <SelectItem value="blockchain" className="text-white">Blockchain</SelectItem>
                  <SelectItem value="ai-ml" className="text-white">AI/ML</SelectItem>
                  <SelectItem value="design" className="text-white">Design</SelectItem>
                  <SelectItem value="security" className="text-white">Security</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label className="text-gray-300">Difficulty Level</Label>
              <Select value={formData.difficulty} onValueChange={(value) => handleInputChange('difficulty', value)}>
                <SelectTrigger className="bg-gray-800/60 border-gray-600/50 text-white shadow-[0_0_8px_rgba(59,130,246,0.2)]">
                  <SelectValue placeholder="Select difficulty" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-600">
                  <SelectItem value="easy" className="text-white">Easy</SelectItem>
                  <SelectItem value="medium" className="text-white">Medium</SelectItem>
                  <SelectItem value="hard" className="text-white">Hard</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="reward" className="text-gray-300">Reward Amount</Label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  id="reward"
                  type="number"
                  step="0.01"
                  placeholder="0.5"
                  className="pl-10 bg-gray-800/60 border-gray-600/50 text-white placeholder-gray-400 shadow-[0_0_8px_rgba(34,197,94,0.2)]"
                  value={formData.reward}
                  onChange={(e) => handleInputChange('reward', e.target.value)}
                  required
                />
              </div>
            </div>
            
            <div>
              <Label className="text-gray-300">Currency</Label>
              <Select value={formData.currency} onValueChange={(value) => handleInputChange('currency', value)}>
                <SelectTrigger className="bg-gray-800/60 border-gray-600/50 text-white shadow-[0_0_8px_rgba(59,130,246,0.2)]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-600">
                  <SelectItem value="ETH" className="text-white">ETH</SelectItem>
                  <SelectItem value="BTC" className="text-white">BTC</SelectItem>
                  <SelectItem value="USDC" className="text-white">USDC</SelectItem>
                  <SelectItem value="DAI" className="text-white">DAI</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div>
            <Label htmlFor="deadline" className="text-gray-300">Deadline</Label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                id="deadline"
                type="date"
                className="pl-10 bg-gray-800/60 border-gray-600/50 text-white shadow-[0_0_8px_rgba(59,130,246,0.2)]"
                value={formData.deadline}
                onChange={(e) => handleInputChange('deadline', e.target.value)}
                required
              />
            </div>
          </div>
          
          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-[0_0_15px_rgba(147,51,234,0.5)] hover:shadow-[0_0_20px_rgba(147,51,234,0.7)]"
          >
            {isSubmitting ? "Creating Bounty..." : "Create Bounty"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default CreateBountyForm;
