import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/hooks/context/useAuth";
import { LogOutIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export const UserButton = () => {
  const { auth, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    await logout();
    toast.success("Successfully logged out");
    navigate("/signin");
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className="size-10 hover:opacity-70  transition border border-gray-300">
          <AvatarImage src={auth?.user?.avatar} />
          <AvatarFallback>{auth?.user?.username[0]}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={handleLogout}>
          <LogOutIcon className="size-4 mr-2 h-10" />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
