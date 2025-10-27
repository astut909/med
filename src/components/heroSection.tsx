'use-client'
import Link from "next/link";
import { Button } from "./ui/moving-border";
import { Spotlight } from "./ui/Spotlight";
import { div } from "motion/react-client";
function HeroSection() {
    return (
        <div className="h-screen w-screen">
            <Spotlight
                className="top-40 left-0 md:-top-20 md:left-60"
                fill="white" />
            <div className='w-full top-[8vw] text-white h-auto  md:[40rem] mx-auto py-10 md:py-0 rounded-md relative overflow-hidden flex flex-col items-center justify-center'>


                <div className='p-4 relative z-10 w-full text-center'>
                    <h1 className="mt- md:mt-0 text-4xl md:text-7xl  font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
                    >Master the Art of Music</h1>
                    <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto"

                    >Mastering the art of music is a journey that blends passion,
                        discipline, and creativity into a lifelong pursuit of expression.
                        It begins with understanding the fundamentals — rhythm, melody, harmony,
                        and dynamics — but true mastery goes far beyond technical skill. Collaboration with other
                        musicians fosters growth, while performing in front of audiences builds confidence and stage presence.
                        Over time, music transforms from a skill into a language of the soul, capable of inspiring, healing,
                        and uniting people across boundaries. To master the art of music is not just to play perfectly, but
                        to understand its power to move hearts and change minds. It is a continuous process of learning,
                        feeling, and sharing — a balance between technical precision and emotional depth that defines the
                        essence of true artistry</p>
                    <div className='mt-2'>
                        <Button
                            borderRadius="1.75rem"
                            className="bg-white dark:bg-slate-900 text-black rounded-full dark:text-white border-neutral-200 dark:border-slate-800"
                        >
                            <Link href={'/courses'}>Explore Courses</Link>
                        </Button>
                    </div>
                </div>
                

            </div>
        </div>
    )
}

export default HeroSection
