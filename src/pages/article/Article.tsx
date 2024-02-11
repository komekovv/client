import { carbon, droughts, volcan } from "@/assets/images";
import ArticleCard from "@/components/ArticleCard/ArticleCard";


const Article = () => {
  return (
    <div className="grid min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center my-5">Articles</h1>
        <div className="flex">
          <div className="flex-2 mr-4">
            <a href="/carbon">
              <ArticleCard 
                image={carbon} 
                title="How can we store carbon dioxide from the atmosphere in minerals?" 
                date="February 11, 2024" 
                content="Climate change is a pressing issue that affects every corner of our planet. From rising temperatures to extreme weather events, the impacts of climate change are becoming increasingly evident." 
                author="Creators"
              />
            </a>
            <a href="/droughts">
              <ArticleCard 
                image={droughts} 
                title="How can we prepare for droughts?" 
                date="February 11, 2024" 
                content="Did you know that the sea level is rising and that weather patterns are changing worldwide? Because of human activities, there is extra carbon dioxide in the atmosphere. That’s why the Earth has gotten warmer. What can we do about it?" 
                author="Creators"
              />
            </a>
            <a href="/volcano">
              <ArticleCard 
                image={volcan} 
                title="How can the eruption of a volcano affect the ocean everywhere on Earth?" 
                date="February 11, 2024" 
                content="Did you know that a volcanic eruption can affect the entire world? When the Hunga Tonga-Hunga Ha’apai volcano erupted on January 15, 2022, it affected the ocean everywhere. That’s because it created an atmospheric wave that disturbed the ocean. It also generated a tsunami." 
                author="Creators"
              />
            </a>
          </div>
          {/* <div className="flex-1">
            <div className="w-full">vvs</div>
          </div> */}
        </div>
      </div> 
    </div>
  );
};

export default Article;

