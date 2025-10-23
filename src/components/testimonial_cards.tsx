'use client'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import React from "react";
import { Boxes } from "./ui/background-boxes";
import { cn } from "@/lib/utils";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";



const musicSchoolTestimonials = [
    {
        quote:
            'Joining the music school transformed my understanding of music and helped me to truly discover my own sound. The instructors are world-class!',
        name: 'Alex Johnson',
        title: 'Guitar Student',
    },
    {
        quote:
            "The community and support at this school are unmatched. I've grown not just as a pianist, but also as a performer, thanks to their comprehensive approach.",
        name: 'Samantha Lee',
        title: 'Piano Student',
    },
    {
        quote:
            "This school offered me the tools and confidence to take my singing to the next level. I'm endlessly grateful for the personalized coaching.",
        name: 'Michael Chen',
        title: 'Vocal Student',
    },
    {
        quote:
            'As a violinist, finding the right mentor can be challenging, but this school matched me with a teacher who truly understands my goals and challenges.',
        name: 'Emily Taylor',
        title: 'Violin Student',
    },
    {
        quote:
            'The production courses here opened my eyes to the intricacies of music production. Highly recommend for any aspiring producers!',
        name: 'Chris Morales',
        title: 'Music Production Student',
    },
];

function MusicSchoolTestimonials() {
    return (
        <div className="h-full relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
            <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />



            <div className="h-screen w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
                <div className="h-[40rem] flex items-center text-[5vw]justify-center">
                    <TextHoverEffect text="Hear our Harmony: Voices of success" />
                </div>
                <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
                    <div className="w-full max-w-6xl">
                        <InfiniteMovingCards
                            items={musicSchoolTestimonials}
                            direction="right"
                            speed="fast"
                        />
                    </div>
                </div>
            </div>
            <Boxes />
        </div>
    )
}

export default MusicSchoolTestimonials