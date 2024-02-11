import { CalendarDays, LucideMapPin, Watch } from "lucide-react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

interface Event {
  title: string;
  date: string;
  time: string;
  place: string;
  image: string;
}

const EventsCard = ({ title, date, time, place, image }: Event) => {

  const navigate = useNavigate()

  return (
    <div className=" bg-stone-800 rounded-3xl overflow-hidden shadow-md flex flex-col md:flex-row md:items-center p-4">
      <img className="w-full md:w-[16%] rounded-3xl" src={image} alt={title} />
      <div className=" p-4 flex-1">
        <h2 className="text-md font-bold text-white mb-2">{title}</h2>
      
        <div className="flex flex-wrap gap-10 mb-4">
          
          <p className="flex gap-2 text-white/70">
            <CalendarDays width={16}/>
            {date}
          </p>
          <p className="flex gap-2 text-white/70">
            <Watch width={16}/>
            {time}
          </p>
          <p className="flex gap-2 text-white/70">
            <LucideMapPin width={16}/>
            {place}
          </p>
        </div>

      </div>
      <Button variant={'secondary'} onClick={() => navigate('/user')}>
        Attend 
      </Button>
    </div>
  );
};

export default EventsCard;
