import { useGSAP } from "@gsap/react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import heroVideo from "/Video/hero.mp4"; // large video
import smallHeroVideo from "/Video/smallHero.mp4"; // small video
function Hero() {
    const titleref = useRef(null);
    const vidref = useRef(null);
    const [hero, sethero] = useState(smallHeroVideo);
    const btnref = useRef(null);

    useGSAP(() => {
        gsap.to(titleref.current, {
            opacity: 1,
            delay: 1.5,
        })
    }, [])

    // Animation for the video
    useGSAP(() => {
        gsap.from(vidref.current, {
            opacity: 0,
            duration: 0.5,
            delay: 0.3
        })
    }, [])

 // Animation for the Button and Static Text
    useGSAP(() => {
        gsap.to(btnref.current, {
            opacity: 1,
            delay: 1.5,
            y:-40
        })
    }, [])

    useEffect(() => {
        const handlesize = () => {
            if (window.innerWidth > 500) {
                sethero(heroVideo)
            } else {
                sethero(smallHeroVideo)
            }
        };
        handlesize(); // Run once on mount
        window.addEventListener("resize", handlesize); // Update on resize
        return () => window.removeEventListener("resize", handlesize);


    }, [])

    return (
        <div className=" flex justify-center items-center flex-col">
        <div className=" flex flex-col justify-center items-center w-[90%] h-fit">
            <h1 ref={titleref} className=" mt-1 text-white/60 text-2xl md:text-4xl font-semibold opacity-0">iPhone 15 Pro</h1>
            {/* video part */}
            <div className="flex items-center justify-center mt-5">
                <video ref={vidref} src={hero} autoPlay playsInline muted></video>
            </div>
        </div>
        {/* Button and static text */}
         <div ref={btnref} className=" flex justify-center items-center flex-col gap-3 opacity-0 mt-3" >
            <div className="bg-[#0071E3] h-10 w-20 rounded-4xl flex items-center justify-center hover:brightness-110 transition cursor-pointer">
                 <h1 className=" text-white font-semibold">Buy</h1>
            </div>
            {/* text */}
            <div>
                <h2 className=" text-white font-semibold">From $199/month or $999</h2>
            </div>
         </div>

        </div>
    )
}
export default Hero;