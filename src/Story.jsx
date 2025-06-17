import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

function Story(){
    const title1ref=useRef(null);
    const subtitleref=useRef(null);
    const visualref=useRef(null);
    const img1ref=useRef(null);
    const img2ref=useRef(null);
useGSAP(() => {
        gsap.to(title1ref.current, {
             delay: 0.7,
                y: -50,
                opacity: 1,
            scrollTrigger:{
                scroller:"body",
                trigger:title1ref.current,
                scrub:2,
                start:"top 90%",
                end:"top 30%"
            }
        })
        gsap.to(subtitleref.current, {
             delay: 0.4,
                y: -50,
                opacity: 1,
            scrollTrigger:{
                scroller:"body",
                trigger:subtitleref.current,
                scrub:2,
                start:"top 90%",
                end:"top 30%"
            }
        })
         gsap.to(visualref.current, {
             delay: 0.7,
                opacity: 1,
            scrollTrigger:{
                scroller:"body",
                trigger:visualref.current,
                scrub:2,
                start:"top 90%",
                end:"top 60%"
            }
        })
        gsap.to(img1ref.current, {
             delay: 0.5,
             scale:1,
            scrollTrigger:{
                scroller:"body",
                trigger:img1ref.current,
                scrub:2,
                start:"top 60%",
                end:"top 20%"
            }
        })
        gsap.to(img2ref.current, {
             delay: 0.5,
             scale:1,
            scrollTrigger:{
                scroller:"body",
                trigger:img2ref.current,
                scrub:2,
                start:"top 60%",
                end:"top 20%"
            }
        })
         gsap.to("#subspan", {
             delay: 0.1,
             y:-50,
             opacity:1,
            scrollTrigger:{
                scroller:"body",
                trigger:"#subspan",
                scrub:2,
                start:"top 90%",
                end:"top 60%"
            }
        })
    }, [])



    return(
        <div className=" w-full flex flex-col max-w-screen h-[120rem] md:h-[89rem] bg-[#1D1D1F]">
            {/* text part */}
            <div className=" m-5 mt-20 md:m-30 flex flex-col gap-20">
            <h1 ref={title1ref} className=" opacity-0 font-semibold text-white/40 text-3xl md:text-4xl lg:text-5xl">Strength Meets Sophistication.</h1>
            <div ref={subtitleref} className=" opacity-0 flex flex-col gap-0.5">
                <h1 className="font-semibold text-white text-3xl md:text-4xl lg:text-5xl">Titanium. </h1>
                <h1 className="font-semibold text-white text-3xl md:text-4xl lg:text-5xl">Meet iPhone.</h1>
            </div>
            </div>

            {/* Visual Part */}
            <div ref={visualref} className=" opacity-0 flex items-center justify-center h-fit">
            <div className="md:h-[40rem] h-[50rem] w-[90%] md:w-[80%] flex  gap-5 md:gap-0  flex-col items-center ">
                {/* video */}
                <div className=" w-full md:w-[80%] h-1/2 flex items-center justify-center ">
                    <video className=" h-full w-full object-cover" src="./Video/rounded-edge-video.mp4" loop autoPlay playsInline muted></video>
                </div>
                {/* images */}
                <div className=" flex flex-col gap-5 items-center justify-center md:flex-row  overflow-hidden h-1/2 w-full md:w-[80%] ">
                    <img ref={img1ref} src="./img/explore1.jpg" className=" scale-105 md:scale-125 md:w-1/2 w-full h-1/2 md:h-full object-cover" alt="" />
                    
                    <img ref={img2ref} src="./img/explore2.jpg" className=" scale-105 md:scale-125 md:w-1/2 w-full h-1/2 md:h-full" alt="" />
                </div>
            </div>
            </div>
            {/* Text part */}

           <div className=" flex items-center justify-center mt-5">
            <div id="subspan" className=" mt-10 opacity-0 flex items-center justify-center flex-col gap-3 w-[80%] md:w-[60%] md:flex-row ">
                <span  className=" font-medium text-white/45">Crafted from aerospace-grade titanium, the <span className=" text-white">iPhone 15 Pro introduces a new era of smartphone design — using the same metal trusted in spacecraft and deep-space missions.</span>  This advanced material delivers exceptional strength, incredible lightness, and an unmatched tactile experience, all in a device that feels effortlessly premium. You'll feel the difference the moment you pick it up.</span>
                <span  className=" font-medium text-white/45">Every element of the iPhone 15 Pro has been meticulously engineered, from its contoured edges that sit perfectly in your palm, to the brushed, textured titanium finish that's as stunning as it is durable. <span className=" text-white"> This isn't just a phone — it's a fusion of cutting-edge technology and timeless design, built to redefine your expectations of what a smartphone should be.</span> </span>
            </div>
            </div>


        </div>
    )
}
export default Story;