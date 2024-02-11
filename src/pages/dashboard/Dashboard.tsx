import { banner } from "@/assets/images"
import Card from "@/components/card/Card"

import { courseCards, courseTabs } from "@/constants"
import { useState } from "react"

const Dashboard = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  return (
    <div className="container">
      <div>
        <img src={banner} alt="banner" className="w-full rounded-md" />
      </div>

      <div className="mt-4">
        <h1 className="text-3xl font-semibold text-emerald-600">All Courses</h1>
      </div>
      <div className="mt-4">
        <ul className="flex items-center gap-8">
          {courseTabs.map((tabs, idx) => (
            <li 
              key={idx} 
              className={`${activeIndex === idx ? 'border-b-2 border-black font-medium text-black' : 'text-black/50'} cursor-pointer transition `}
              onClick={() => setActiveIndex(idx)}
              >
                {tabs.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
        {courseCards.map(card => (
           <Card 
              key={card.id}
              title={card.title} 
              name={card.name}
              image={card.image} 
              buttonText={card.buttonText}
              lessonCount={card.lessonsCount}
              courseHour={card.courseHour}
            />
        ))}
      </div>

      <div className="mt-4">
        <h1 className="text-3xl font-semibold text-emerald-600">Upcoming Classes</h1>
        <p>Next 24 Hours Upcoming Classes</p>
      </div>
      
    </div>
  )
}

export default Dashboard