import React, { useState } from "react";
import { User, Plus, RotateCcw, Link2, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { CollaborationDialog } from "./CollaborationDialog";
import { useUser } from "@/contexts/UserContext";
import { useNavigate } from "react-router-dom";

interface ChatHeaderProps {
  onShowCollaboration: () => void;
}

export function ChatHeader({ onShowCollaboration }: ChatHeaderProps) {
  const { user, logout } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleAddAccount = () => {
    // Simulate add account functionality
    alert("Add Account feature - Coming soon!");
  };

  const handleSwitchAccount = () => {
    // Simulate switch account functionality
    alert("Switch Account feature - Coming soon!");
  };

  return (
    <header className="text-white px-8 py-6 flex items-center justify-center relative shadow-glow border-b border-white/10 animate-fade-in" style={{backgroundColor: '#1B2332'}}>
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.1),transparent_50%)]"></div>
      
      {/* Logo and title - centered */}
      <div 
        className="flex items-center gap-4 z-10 animate-pulse-glow cursor-pointer transition-all duration-300 hover:scale-105"
        onClick={() => navigate("/")}
        title="Go to homepage"
      >
        <div className="relative">
          <img 
            src="/lovable-uploads/1bf84a47-9c08-48e8-b0d1-d11e67d43217.png" 
            alt="AIVA Logo" 
            className="w-10 h-10 object-contain drop-shadow-lg transition-transform duration-300 hover:scale-110"
          />
          <div className="absolute inset-0 bg-white/20 rounded-full blur-xl -z-10"></div>
        </div>
        <h1 className="text-2xl font-bold tracking-wide drop-shadow-lg">AIVA</h1>
      </div>

      {/* Profile menu - absolute positioned */}
      <div className="absolute top-6 right-8 z-20">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 rounded-full backdrop-blur-sm border border-white/20">
              <User className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48 backdrop-blur-sm bg-white/95 border-white/20">
            <DropdownMenuItem onClick={handleAddAccount} className="hover:bg-primary/10">
              <Plus className="mr-2 h-4 w-4" />
              Add Account
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleSwitchAccount} className="hover:bg-primary/10">
              <RotateCcw className="mr-2 h-4 w-4" />
              Switch Account
            </DropdownMenuItem>
            <DropdownMenuItem onClick={onShowCollaboration} className="hover:bg-primary/10">
              <Link2 className="mr-2 h-4 w-4" />
              Collaboration
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout} className="text-destructive hover:bg-destructive/10">
              <LogOut className="mr-2 h-4 w-4" />
              Log Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}