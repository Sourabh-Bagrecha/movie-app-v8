import Image from "next/image";
import HeaderIcon from "./HeaderIcon";
import { HomeIcon, UserIcon, PhoneIcon, InformationCircleIcon } from '@heroicons/react/solid'


export default function Header()
{
  return (
    <div className="bg-gray-600 text-gray-200 flex flex-col items-center">
      <div className="flex">
        <HeaderIcon Icon={HomeIcon} title="HOME"/>
        <HeaderIcon Icon={UserIcon} title="ACOUNT"/>
        <HeaderIcon Icon={PhoneIcon} title="CONTACT"/>
        <HeaderIcon Icon={InformationCircleIcon} title="ABOUT"/>
      </div>
      <Image
      src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg"
     width={100}
     height={100}
     />
      
    </div>

  )


}