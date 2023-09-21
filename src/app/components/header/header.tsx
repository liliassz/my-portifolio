import Image from 'next/image'

import "./header.scss"

export function Header(){
    return(
        <div className="header">
          <div>
            <h1>Hi, guys ! 👋</h1>
            <p>
          I`m <b>Elias Souza</b><br></br>
          I am 18 years old and passionate about system development.
          I live in São Paulo and currently work in <b>web development</b>.
          I am always open to collaborating on interesting and innovative projects.</p>
          </div>
          <Image
            src="/mee2.png"
            alt="Mee"
            width={340}
            height={310}
            priority
          />
        </div>
    )
}