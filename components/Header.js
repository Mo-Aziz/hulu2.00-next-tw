import Image from "next/image"
import HeaderItem from "./HeaderItem";

import{BadgeCheckIcon,
CollectionIcon,
HomeIcon,
LightningBoltIcon,
SearchIcon,
UserIcon} from"@heroicons/react/outline";

 

function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
        <div className="flex flex-grow justify-evenly max-w-2xl mt-14">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
        <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon}/>
        <HeaderItem title="COLLECTION" Icon={CollectionIcon}/>
        <HeaderItem title="SEARCH" Icon={SearchIcon}/>
        <HeaderItem title="ACCOUNT" Icon={UserIcon}/>
        </div>

        <Image
          className="object-contain mt-0 pt-0 "
          src="http://www.hulu.com/static/hitch/s3/attachments/cktuo6pxqmxfp1v7c1norzsop-hulu-padding.png"
          height={300}
          width={300}
          alt="logo"
        />
    </header>
  )
}

export default Header