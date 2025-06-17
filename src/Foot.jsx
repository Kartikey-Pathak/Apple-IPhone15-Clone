import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

function Foot(){
const endref=useRef(null);
    useGSAP(()=>{
         gsap.to(endref.current, {
                delay: 0.7,
                opacity: 1,
                ease:"bounce.inOut",
                y:-60,
            scrollTrigger:{
                scroller:"body",
                trigger:endref.current,
                scrub:2,
                start:"top 90%",
                end:"top 85%",
                
            }
        });
    })

    return(
        <div className="w-full flex flex-col  justify-start max-w-screen  h-[18rem] relative bg-black">
            {/* texts */}
            <div ref={endref} className=" flex items-start flex-col justify-start md:m-30 md:ml-60 py-1  md:py-5"> 
                <span className=" border-b-2 py-3.5 text-white/50">More ways to shop: <span className="text-blue-500 underline">Find an Apple Store</span> or <span className="text-blue-500 underline">other retailer</span> near you. Or call <span className=" text-blue-500 underline">000800 040 1966.</span></span>
                
                <span className="py-3.5 md:py-0 flex items-center justify-center  text-white/50">Copyright © 2025 Apple Inc. All rights reserved. </span>
                <div>
                    <span className="ml-1 text-white/60"><span className=" text-white/80 font-semibold mr-2">Privacy Policy</span> | <span className=" ml-1"></span><span className=" text-white/80 font-semibold mr-2">Terms of Use</span>|<span className=" ml-1"></span><span className="  text-white/80 font-semibold mr-2">Sales Policy </span>|<span className=" ml-1"></span><span className="  text-white/80 font-semibold mr-2">Legal</span>|<span className=" ml-1"></span><span className="  text-white/80 font-semibold mr-2">Site Map</span></span>
                </div>
            </div>
            <span className=" absolute right-2 bottom-2 text-white/70 font-semibold">India</span>
        </div>
    )
}
export default Foot;