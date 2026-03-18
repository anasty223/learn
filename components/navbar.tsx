import { Briefcase } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <nav className="border-b border-gray-200 bg-white " >
        <div className="contained mx-auto flex h-16 items-center px-4 justify-between">
        <Link href="/" className="flex gap-2 text-xl font-semibold text-primary items-center space-x-2">
            <Briefcase/>
            Job Tracker
        </Link>
        <div className="flex items-center gap-4">
                 <Link href="/sing-in" >
        <Button variant="ghost" className="text-sm font-medium text-gray-700 hover:text-black">   Log in </Button> 
            </Link>
            <Link href="/sing-in">
             <Button  className="bg-primary text-sm font-medium text-white hover:bg-primary/90">Start for free</Button>
            </Link>
        </div>
      
        </div>
    </nav>
  );
}