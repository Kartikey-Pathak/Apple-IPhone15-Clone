import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import Model from './components/Model';
import { useGSAP } from '@gsap/react';  
import gsap from 'gsap';       
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from 'react';
gsap.registerPlugin(ScrollTrigger);
function ModelView() {
    const headingref=useRef(null);
    const modelref=useRef(null);

    useGSAP(()=>{
        gsap.to(headingref.current,{
             opacity:1,
             delay:0.3,
             y:20,
             scrollTrigger:{
                scroller:"body",
                trigger:headingref.current,
                scrub:2,
                start:"top 70%",
                end:"top 50%"
            }
        })
        gsap.to(modelref.current,{
             opacity:1,
             delay:0.3,
             y:-40,
             scrollTrigger:{
                scroller:"body",
                trigger:modelref.current,
                scrub:2,
                start:"top 70%",
                end:"top 50%"
            }
        })

    },[])

    return (
        <div className="w-full flex flex-col max-w-screen h-[48rem] md:h-[50rem] bg-black">
            <div ref={headingref} className="m-15 opacity-0">
                <h1 className=" text-3xl md:text-4xl lg:text-5xl font-semibold text-white/70">Take A Look</h1>
            </div>

            <div className=' flex items-center justify-center'>
                <div ref={modelref} className=' opacity-0 flex flex-col items-center  h-[38rem] w-[40%]  min-w-[15rem] '>
                    <Model/>
                    <span className="text-white">iPhone 15 Pro in Gray Titanium</span>
                </div>
            </div>

        </div>
    )
}
export default ModelView;