import { SectionTitle } from "../sectionTitle/section-title"
import "./information.scss"

export function Info(){
    return(
        <div className="infos">
        <SectionTitle text="Languages"/>
        <div className="educational-info">
          <span><b>🇺🇸</b> English - Intermediate-advanced</span>
          <span><b>🇧🇷</b> Portuguese - Native Speaker</span>
          <span><b>🇪🇸</b> Spanhol - Basic</span>
        </div>
        <SectionTitle text="Education"/>
        <div className="educational-info">
          <span>👨‍🎓 Computer Science - Udemy 〡1º Semester. </span>
          <span>🎓 Web Development Front-end - RocketSeat </span>
          <span>🎓 Web Development Back-end - Cod3r </span>
        </div>
      </div>
    )
}