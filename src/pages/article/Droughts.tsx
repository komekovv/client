import { droughts } from "@/assets/images"
import { FilePlus } from "lucide-react"


const Droughts = () => {
  return (
    <div>  
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">How can we prepare for droughts?</h1>
          <div className="mb-6 text-gray-600 text-sm text-center">Published on February 11, 2024 by Creators</div>
          <img src={droughts} alt="droughts" className="w-full rounded-lg mb-6" />
          <div className="prose max-w-none">
            <p>
                Droughts are common in many parts of the world. Yet climate change has made 
                them more severe and difficult to predict. This makes it harder for water 
                suppliers to plan for the future. Currently, they use data from past droughts 
                to make these decisions. But we think it’s important to consider future changes as well. 
                We analyzed drought projections for Texas – a large state in the USA with both wet 
                and dry regions. They show that the conditions there will be even drier and hotter 
                in the future. Water planning needs to adapt to these changes and take future climate
                change into account. Climate models would be very helpful for that.
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

export default Droughts