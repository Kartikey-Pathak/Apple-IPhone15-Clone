import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import VideoCarousel from "./components/VideoCarousel";

gsap.registerPlugin(ScrollTrigger);
function Highlight() {
    useGSAP(() => {
        gsap.to(".links", {
             delay: 0.7,
                y: -30,
                opacity: 1,
                stagger: 0.3,
            scrollTrigger:{
                scroller:"body",
                trigger:".links",
                scrub:2,
                start:"top 90%",
                end:"top 50%"
            }

        })

    }, [])
    return (
        <div className=" w-full flex flex-col max-w-screen h-[50rem] md:h-[60rem] bg-[#1D1D1F]">
            {/* text */}
            <div className=" m-5 mt-20 md:m-30 flex flex-col gap-5 md:flex-row md:justify-between">
                <h1 className=" opacity-0 links text-3xl md:text-4xl lg:text-5xl text-white font-semibold">Get the highlights.</h1>
                <h3 className=" opacity-0 links text-blue-400">Watch the film <i className="fa-regular fa-circle-play text-blue-400"></i></h3>
            </div>

            {/* The Video part */}

            <VideoCarousel/>
        </div>
    )
}
export default Highlight;
