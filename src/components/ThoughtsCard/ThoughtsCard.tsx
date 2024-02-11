
interface Thought {
  text: string;
  studentName: string;
  className?: string
}

const ThoughtCard = ({ text, studentName, className }:Thought) => {
  return (
    <div className={`max-w-md mx-auto bg-white  rounded-xl shadow-md overflow-hidden md:max-w-2xl ${className}`}>
      <div className="md:flex">
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{studentName}</div>
          <p className="mt-2 text-gray-600">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default ThoughtCard;
