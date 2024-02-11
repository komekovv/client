import { ChevronDown } from "lucide-react"
import { Button } from "./components/ui/button"
import Card from "./components/card/Card"
import ThoughtCard from "./components/ThoughtsCard/ThoughtsCard"
import EventsCard from "./components/UpcomingCard/EventsCard"
import { communityCount, courseCards, coursesTabs, eventCards, thoughtCards } from "./constants"
import { img, sdg, un, undp } from "./assets/images"
import { useNavigate } from "react-router-dom"


const IndexPage = () => {

 const navigate = useNavigate()
  
  return (
    <div className="container mx-auto py-5">
      <div className="flex py-5 justify-between items-center flex-col-reverse md:flex-row gap-5 md:gap-0">
        <div className="flex flex-col gap-8 md:w-[600px]">
          <h1 className="font-bold text-3xl">Climate Action Starts With Education</h1>
          <p>
            We are the first generation to feel the impact of climate change 
            and the last generation that can do something about it.
          </p>
        
          <div className="flex gap-6">
            <Button className=" bg-emerald-500 px-8 hover:bg-emerald-600">Start Learning</Button>
          </div>
        </div>
        <div className="flex-1 flex-center min-w-[350px]">
          <img src={img} alt="students" className="w-full" />
        </div>
      </div>

      <div className=" flex flex-col gap-10 p-5 bg-stone-900 rounded-3xl mt-10">
        <h1 className="text-white text-3xl font-bold">Join Our <span className="text-yellow-600">Community</span> Of Learners!</h1>
        <p className="text-white/60">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          Distinctio eaque suscipit repellendus 
          quaerat hic, consequatur assumenda harum odit natus aliquid!
        </p>
        <div className="grid grid-cols-2 gap-4 md:gap-0 md:grid-cols-4">
          {communityCount.map(count => (
            <div key={count.count}>
              <h1 className="text-3xl text-white font-bold">{count.count}</h1>
              <span className="text-white/60">{count.courses}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex flex-col gap-10 mt-10">
        <h1 className="text-3xl text-center font-bold">What You Want To <span className=" text-emerald-500">Learn</span> Today?</h1>

        <div className="grid grid-cols-4 md:grid-cols-5 gap-4 justify-between">
          {coursesTabs.map(course => (
            <Button key={course.name} variant={'outline'} className=" dark:bg-black dark:border-white truncate px-2">{course.name}</Button>
          ))}
        </div>

        <div className="flex flex-col items-center gap-5 md:flex-row justify-between ">
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
        <div className="flex justify-center w-full">
          <Button variant={'outline'} className="flex gap-2 dark:bg-black dark:border-white" onClick={ () => navigate('/courses')}>
            <span>More</span>
            <ChevronDown />
          </Button>
        </div>
      </div>

      <div className=" py-10 mt-10">
        <h1 className="text-3xl text-center font-bold">Thoughts From Students</h1>
        <div className="flex flex-col justify-center gap-10 py-5">
          
          {thoughtCards.map(card => (
            <ThoughtCard 
            key={card.id}
            text={card.text} 
            studentName={card.studentName}
            className={card.className}
            />
          ))}
        </div>
      </div>

      <div className=" flex flex-col gap-5 p-5 bg-stone-900 rounded-3xl mt-10">
        <h1 className="text-white text-2xl font-bold p-10">Upcoming <span className=" text-yellow-600">Trainings</span></h1>
        {eventCards.map(card => (
          <EventsCard key={card.id} title={card.title} date={card.date} time={card.time} place={card.place} image={card.image}/>
        ))}
      </div>

      <div className="mt-10">
        <h1 className="text-2xl font-semibold text-center">Our Networks</h1>
        <div className="flex flex-wrap justify-between mt-5">
          <div className="w-1/3 md:w-1/6 p-4">
            <div className="aspect-w-1 aspect-h-1">
              <img src={un} alt="UN" className="object-cover" />
            </div>
          </div>
          <div className="w-1/3 md:w-1/6 p-4 ">
            <div className="aspect-w-1 aspect-h-1">
              <img src={undp} alt="UNDP" className="object-cover h-44" />
            </div>
          </div>
          <div className="w-1/3 md:w-1/6 p-4">
            <div className="aspect-w-1 aspect-h-1">
              <img src={sdg} alt="SDG" className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IndexPage