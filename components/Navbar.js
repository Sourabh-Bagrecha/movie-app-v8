import requests from "../src/app/utils/requests"; 
import { useRouter } from "next/navigation";

export default function Navbar()
{
  const router = useRouter()
  return (
    <div className="flex justify-center bg-gray-500 text-gray-200 select-none text-xl lg:text-2xl">
      {Object.entries(requests).map(([key, { title, url }]) => (
    <h2 onClick={()=>(router.push(`?genre=${key}`))} className="m-6 cursor-pointer hover:text-black active:text-yellow-300" key={key}>{title}</h2>
    ))}
    </div>
  );
}