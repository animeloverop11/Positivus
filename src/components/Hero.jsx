import { Link } from "react-router-dom"
export const Hero = () => {
    return (
        <div className="w-full flex justifiy-between">
            <div className="w-1/2 flex flex-col gap-4 2xl:gap-8">


                <h1 className="text-6xl 2xl:text-[110px] font-medium w-[531px] 2xl:w-[950px]">Navigating the digital landscape for success</h1>
                <p className="text-xl 2xl:text-4xl font-normal w-[498px] 2xl:w-[900px] h-auto  "> Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>

                <Link to="" className="w-[264px] 2xl:w-[370px] h-[68px] 2xl:h-[90px] bg-[#191A23] text-white 2xl:text-2xl rounded-2xl font-normal flex items-center justify-center">Book a consultation</Link>

            </div>

            <div className="w-1/2">
                <img src="/Illustration.png" alt="Hero Image" className="w-full h-full" />
            </div>

        </div>

    )
}