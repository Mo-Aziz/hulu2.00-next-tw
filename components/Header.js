import Image from "next/image"
import HeaderItem from "./HeaderItem"

 

function Header() {
  return (
    <header>
        <div>
        <HeaderItem/>
        </div>

        <Image
          className="object-contain mt-2"
          src="http://www.hulu.com/static/hitch/s3/attachments/cktuo6pxqmxfp1v7c1norzsop-hulu-padding.png"
          height={300}
          width={300}
          alt="logo"
        />
    </header>
  )
}

export default Header