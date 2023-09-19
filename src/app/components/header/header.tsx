import Image from 'next/image'

import "./header.scss"

export function Header(){
    return(
        <div className="header">
          <div>
            <h1>Hi, i´m Elias ! 👋</h1>
            <h2>Software Engineer</h2>
          </div>
          <Image
            src="/meee.jpg"
            alt="Mee"
            width={325}
            height={310}
            priority
          />
        </div>
    )
}