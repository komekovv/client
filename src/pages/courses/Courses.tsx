import Card from "@/components/card/Card"
import { courseCardsMore } from "@/constants"

const Courses = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-semibold">Courses</h1>
       <div className="flex flex-col items-center gap-5 md:flex-row justify-between flex-wrap ">
          {courseCardsMore.map(card => (
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
    </div>
  )
}

export default Courses