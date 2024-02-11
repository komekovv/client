interface ArticleProps {
    title:string,
    date: string,
    author: string,
    image: string,
    content:string
}

const ArticleCard = ({ title, date, author, image, content }: ArticleProps) => {
  return (
    <div className=" flex bg-white rounded-lg overflow-hidden shadow-lg mt-5">
      <img src={image} alt={title} className="w-[25%] h-40 object-cover object-center" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-600 text-sm mb-2">Published on {date} by {author}</p>
        <p className="text-gray-700 text-base">{content}</p>
      </div>
    </div>
  );
};

export default ArticleCard;
