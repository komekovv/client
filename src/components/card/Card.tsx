import { BookOpenIcon, Hourglass } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface CardProps {
    image: string,
    title: string,
    name: string,
    buttonText: string,
    lessonCount: string,
    courseHour: string,
}

const Card = ({ image, title, buttonText, name, courseHour, lessonCount }: CardProps) => {

  const navigate = useNavigate()

  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white mx-auto md:my-8">
      <img src={image} alt={name} className="w-full h-44" />
      <div className="md:px-6 py-4">
        <p className=" text-zinc-400 dark:text-black">{title}</p>
        <div className="font-bold text-xl mb-2 dark:text-black">{name}</div>
        <div className="flex gap-5 text-zinc-400 dark:text-black">
            <p className="flex items-center gap-1">
                <BookOpenIcon width={16}/>
                <span className="text-xs">{lessonCount} lessons</span>
            </p>
            <p className="flex items-center gap-1">
                <Hourglass width={16}/>
                <span className="text-xs">{courseHour}</span>
            </p>
        </div>
      </div>
      <div className="px-6 py-2">
        <button 
          className=" bg-emerald-500 text-white font-bold py-2 px-4 rounded" 
          onClick={() => navigate('/user')}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Card;
