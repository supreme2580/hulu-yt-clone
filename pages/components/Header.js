import {
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon
} from "@heroicons/react/outline"
import Image from "next/image"
import HeaderItem from "./HeaderItem"

function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
        <div className="flex flex-grow justify-evenly max-w-2xl">
            <HeaderItem title="HOME" Icons={HomeIcon} />
            <HeaderItem title="TRENDING" Icons={LightningBoltIcon} />
            <HeaderItem title="VERIFIED" Icons={BadgeCheckIcon} />
            <HeaderItem title="COLLECTIONS" Icons={CollectionIcon} />
            <HeaderItem title="SEARCH" Icons={SearchIcon} />
            <HeaderItem title="ACCOUNT" Icons={UserIcon} />
        </div>
        <Image 
            className="object-contain"
            src="https://links.papareact.com/ua6" 
            height={100} width={200}
        />
    </header>
  )
}

export default Header