import Image from "next/image";
import ComplaintsPage from "../complaints/page";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      Hello World
      <UserButton/>
    </div>
  );
}
