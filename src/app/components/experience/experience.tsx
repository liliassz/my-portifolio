import Image from "next/image"
import { SectionTitle } from "../sectionTitle/section-title"

import "./experience.scss"
import { Skill } from "../skill/skill"

export function Experience(){
    return(
        <div className="experience">
          <SectionTitle text="Experience"/>
          <p>+3 years of experience as a Software Developer, working as a freelancer, and actively contributing to the community.</p>
          <div className="experience-time">
            <Skill image="/react.png" measure={1} years="1 years"/>
            <Skill image="/ts.png" measure={1} years="1 years"/>
            <Skill image="/js.png" measure={2} years="2 years"/>
            <Skill image="/java.png" measure={3} years="3 year"/>
          </div>
        </div>
    )
}