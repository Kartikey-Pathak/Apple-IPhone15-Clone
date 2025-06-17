import { Slides } from "../constants/static";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

function VideoCarousel() {
    const vidref = useRef([]);
    useGSAP(() => {
            gsap.to(vidref.current, {
            delay: 2.2,
            y: -100,
            opacity: 1,
            stagger: 0.3,
            scrollTrigger: {
                scroller: "body",
                trigger: vidref.current,
                scrub: 2,
                start: "top 60%",
                end: "top 30%"
            }
        })

    }, [])

    return (
        <div className=" w-full max-w-screen flex items-center justify-center mt-20 md:mt-1">
            <div ref={vidref} className=" opacity-0 flex items-center h-[85vh] md:h-[90vh]  relative   w-[90%] overflow-auto snap-x  hide-scrollbar space-x-3  max-w-screen">

                {Slides.map((item, idx) => (
                    <div  key={idx} className=" min-w-[90%] h-[100%] snap-center">
                        <div className=" h-full w-full overflow-hidden shadow-lg rounded-3xl">
                            {/* text part */}
                            <div className=" m-3 md:m-10 absolute top-5 flex flex-wrap gap-1 w-[15rem]  md:w-[36rem]">
                                {item.texts.map((txt,index)=>(
                                  <h1 key={index} className=" font-semibold text-white text-sm md:text-3xl">{txt}</h1>
                                ))
                                }
                                
                            </div>
                        <video src={item.video} autoPlay loop muted playsInline className="w-full h-full object-cover rounded-3xl"></video>
                        </div>

                    </div>

                ))}


            </div>

        </div>
    )
}
export default VideoCarousel;
