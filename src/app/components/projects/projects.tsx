import { SectionTitle } from "../sectionTitle/section-title"
import "./projects.scss"

export function Projects(){
    return(
        <div className="">
        <SectionTitle text="Languages"/>
        <div className="educational-info">
          <span><b>🇺🇸</b> English - <b>Intermediate-advanced</b></span>
          <span><b>🇧🇷</b> Portuguese - <b>Native Speaker</b></span>
          <span><b>🇪🇸</b> Spanhol - <b>Basic</b></span>
        </div>
        <SectionTitle text="Education"/>
        <div className="educational-info">
          <span>👨‍🎓 Computer Science - <b>Udemy</b> 〡<b>1º Semester.</b> </span>
          <span>🎓 Web Development Front-end - <b>RocketSeat</b> </span>
          <span>🎓 Web Development Back-end - <b>Cod3r</b> </span>
        </div>
      </div>
    )
}