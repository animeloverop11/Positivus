import { Link } from "react-router-dom"
export const Hero = () => {
    const imgSrc = [
        {
           src: "/Amazon.png",
           alt: "amazon image"
        },{
           src: "/Dribble.png",
           alt: "dribble image"
  
        },{
           src: "/HubSpot.png",
           alt: "hubspot image"
  
        },{
           src: "/Notion.png",
           alt: "notion image"
  
        },{
           src: "/Netflix.png",
           alt: "netflix image"
  
        },{
           src: "/Zoom.png",
           alt: "zoom image"
  
        }
     ]
    return (
        <div>
        <div className="w-full flex max-md:flex-col justifiy-between">
            <div className="w-1/2 flex flex-col gap-4 2xl:gap-8">


                <h1 className="max-md:text-4xl text-6xl 2xl:text-[110px] font-medium w-[531px] 2xl:w-[950px]">Navigating the digital landscape for success</h1>
                <p className="max-md:text-md text-xl 2xl:text-4xl font-normal max-md:w-[300px] w-[498px] 2xl:w-[900px] h-auto  "> Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>

                <Link to="" className="max-md:w-[180px] w-[264px] 2xl:w-[370px] max-md:h-[40px] h-[68px] 2xl:h-[90px] bg-[#191A23] text-white 2xl:text-2xl max-md:rounded-lg rounded-2xl font-normal flex items-center justify-center">Book a consultation</Link>

            </div>

            <div className="max-md:w-11/12 w-1/2">
                <img src="/Illustration.png" alt="Hero Image" className="w-full h-full" />
            </div>

        </div>
        
            <div  className="flex justify-between">
                {imgSrc.map((image, index) => (
                    <img src={image.src} alt={image.alt} key={index}/>

                ))}
                </div>
        </div>
            
    )
}