import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);


function Game(){
    const chipref=useRef(null)
    const railref=useRef(null)
    const chipinforef=useRef(null)

    useGSAP(() => {
        gsap.to(chipref.current, {
                delay: 0.7,
                opacity: 1,
                scale:0.7,
            scrollTrigger:{
                scroller:"body",
                trigger:chipref.current,
                scrub:2,
                start:"top 70%",
                end:"top 10%"
            }
        });
         gsap.to(railref.current, {
                delay: 0.7,
                opacity: 1,
                ease:"back.inOut",
                y:-50,
            scrollTrigger:{
                scroller:"body",
                trigger:railref.current,
                scrub:2,
                start:"top 90%",
                end:"top 75%"
            }
        });
        gsap.to(chipinforef.current, {
                delay: 0.4,
                opacity: 1,
                ease:"bounce.inOut",
                y:-30,
            scrollTrigger:{
                scroller:"body",
                trigger:chipinforef.current,
                scrub:2,
                start:"top 80%",
                end:"top 55%",
                
            }
        });
    });

    return(
        <div className="w-full flex flex-col items-center justify-center max-w-screen h-[85rem] md:h-[95rem] bg-black">
            {/* image */}
            <div className=" flex justify-center items-center md:mt-10">
            <div ref={chipref} className=" opacity-0 flex justify-center items-center size-[100%]">
                <img src="./src/assets/chip.jpeg" className="h-full w-full object-cover" alt="" />
            </div>
            </div>
              
              {/* texts */}
            <div className=" flex items-center justify-center flex-col gap-10"> 
            <h1 className=" text-center font-semibold text-3xl md:text-4xl lg:text-5xl text-white">The Most Powerful Chip Ever in an iPhone.</h1>
            <h2 className=" text-center font-semibold text-xl  text-white/50">Built for extreme speed. Engineered for unmatched efficiency and performance.</h2>
            </div>

            {/* Gameplay Part */}
            <div className=" mt-20 w-[99%] h-[10rem] md:w-[80%] md:h-[30rem] flex items-center justify-center relative">
                <img src="./src/assets/frame.png" className="z-20 w-full h-full object-contain" alt="" />
                <video src="./src/assets/frame.mp4" autoPlay loop muted   playsInline className="  h-[25vh] w-[52vh] md:w-[95%] md:h-[36vw] lg:h-[36vw] xl:h-[28vw] lg:w-[78vw] xl:w-[62vw] object-cover rounded-[2rem] z-10 absolute"></video>
            </div>
            <span ref={railref} className=" opacity-0 text-center text-white/50 mt-15">Honkai:Star rail</span>

            {/* text part */}
            <div ref={chipinforef} className=" opacity-0 flex justify-center flex-col md:flex-row md:gap-2 gap-0 h-72 mt-10 w-[90%] md:w-[70%] items-center text-center mt-5">
                <div className=" flex items-center justify-center text-center h-1/2 md:w-1/2">
                <span className=" text-white/50">The all-new A17 Pro chip introduces Apple's first-ever Pro-class GPU with 6 cores, pushing the limits of mobile graphics. Built with a 3nm architecture, it delivers lightning-fast performance, real-time ray tracing, and unmatched energy efficiency—making console-level gaming and complex tasks effortless on your iPhone.</span>
                </div>
                <div className="md:w-1/2 h-1/2 items-center flex flex-col justify-center text-center mt-15 md:mt-10">
                    <span className=" text-white/50">Look</span>
                    <h1 className=" text-white font-semibold text-3xl md:text-4xl lg:text-5xl">A17 Pro.</h1>
                    <h1 className=" text-white font-semibold text-3xl md:text-4xl lg:text-5xl">Game-Changing Power.</h1>
                </div>
            </div>

        </div>
    )
}
export default Game;