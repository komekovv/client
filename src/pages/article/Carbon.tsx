import { carbon } from "@/assets/images"
import { FilePlus } from "lucide-react"


const Carbon = () => {
  return (
    <div>  
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">How can we store carbon dioxide from the atmosphere in minerals?</h1>
          <div className="mb-6 text-gray-600 text-sm text-center">Published on February 11, 2024 by Creators</div>
          <img src={carbon} alt="carbon" className="w-full rounded-lg mb-6" />
          <div className="prose max-w-none">
            <p>
                Did you know that the sea level is rising and that weather patterns are changing worldwide? 
                Because of human activities, there is extra carbon dioxide in the atmosphere. That’s 
                why the Earth has gotten warmer. What can we do about it? We can take the carbon dioxide 
                out of the atmosphere and store it. Current technologies transform it into a liquid and 
                pump it back into the ground. Unfortunately, this way of doing things can be expensive 
                and difficult to manage. That’s why we created a different method of collecting carbon 
                dioxide from the atmosphere. Our process uses the natural ability of ocean water to
                absorb carbon dioxide from the atmosphere. Then it forms minerals that we can store 
                or use. Our observations proved that our process successfully removes carbon dioxide
                from the atmosphere. Our analysis also showed that our method is more energy efficient
                and environmentally friendly than current technologies.
            </p>
          </div>
        </div>
        <div className="flex gap-5 px-10 border-b">
            <FilePlus width={'30'}/>
            <a href="https://www.sciencejournalforkids.org/wp-content/uploads/2022/01/drought_article.pdf" className="font-semibold">Download Article</a>
        </div>
    </div>
  )
}

export default Carbon