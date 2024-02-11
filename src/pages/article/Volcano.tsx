import { volcan } from "@/assets/images"
import {  FilePlus } from "lucide-react"

const Volcano = () => {
  return (
    <div>  
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
            How can the eruption of a volcano affect the ocean everywhere on Earth?
          </h1>
          <div className="mb-6 text-gray-600 text-sm text-center">Published on February 11, 2024 by Creators</div>
          <img src={volcan} alt="volcano" className="w-full rounded-lg mb-6" />
          <div className="prose max-w-none">
            <p>
              Did you know that a volcanic eruption can affect the entire world? When 
              the Hunga Tonga-Hunga Ha’apai volcano erupted on January 15, 2022, it 
              affected the ocean everywhere. That’s because it created an atmospheric 
              wave that disturbed the ocean. It also generated a tsunami. We analyzed 
              weather station and tidal gauge data to learn more about the effects of 
              the Hunga Tonga-Hunga Ha’apai volcanic eruption on Mexico. We learned 
              that the atmospheric wave moved across the world many times. We also 
              learned that the tsunami reached heights of up to 2 meters (6.5 feet) 
              along the Pacific coast of Mexico. Our analysis of the tsunami warning 
              system in Mexico showed that most people were not informed to stay away 
              from the ocean. Based on our analysis, we recommend making changes to 
              tsunami warning systems.
            </p>
          </div>
          <div className="flex gap-5 px-10 border-b">
            <FilePlus width={'30'}/>
            <a href="https://www.sciencejournalforkids.org/wp-content/uploads/2022/01/drought_article.pdf" className="font-semibold">Download Article</a>
          </div>
        </div>
    </div>
  )
}

export default Volcano