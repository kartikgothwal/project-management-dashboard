import { ProfilePicture } from "@/asset";
import Image from "next/image";
import Link from "next/link";
import { FaRegBell } from "react-icons/fa";
import { MdExpandMore } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center px-3">
      <div className="text-2xl font-bold">HOURS</div>
      <div className="flex space-x-6">
        <Link href="/dashboard" className="hover:text-gray-400 hover:underline">
          Dashboard
        </Link>
        <Link href="/projects" className="hover:text-gray-400 hover:underline">
          Projects
        </Link>
        <Link href="/team" className="hover:text-gray-400 hover:underline">
          Team
        </Link>
        <Link href="/clients" className="hover:text-gray-400 hover:underline">
          Clients
        </Link>
        <Link href="/reports" className="hover:text-gray-400 hover:underline">
          Reports
        </Link>
      </div>
      <div className="flex items-center">
        <FaRegBell className="mr-9"/>
        <Image
          width={100}
          height={100}
          src={ProfilePicture}
          alt="User Avatar"
          className="w-8 h-8 rounded-full"
        />
        <span className="ml-2">Mario</span>
        <MdExpandMore className="mx-2 w-4 h-4"/>
      </div>
    </nav>
  );
};

export default Navbar;
