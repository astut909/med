'use client'
import React from "react"
import Link from "next/link"
import courseData from "../data/music_courses.json"
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { div } from "motion/react-client";

interface Course {
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean,

}

function FeaturedCourses() {
    const featuredCourses = courseData.courses.filter((course: Course) => course.isFeatured)


    return (
        <div className="py-29 bg-gray-900 h-full w-screen">
            <div>
                <div className="text-center">
                    <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED COURSES</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Learn With the Best</p>
                </div>
                <div className="mt-10  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full overflow-x-hidden flex-wrap" >
                    {featuredCourses.map((courses: Course) => (
                        <div key={courses.id} className="flex flex-row overflow-x-hidden flex-wrap">
                            <CardContainer className="inter-var">
                                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[20vw] sm:w-[30rem] h-auto rounded-30xl p-6 border  ">
                                    <CardItem
                                        translateZ="50"
                                        className="text-xl flex items-center font-bold  text-neutral-600 dark:text-white"
                                    >
                                        Make things float in air
                                    </CardItem>
                                    
                                    <CardItem translateZ="100" className="w-full mt-4">
                                        <img
                                            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                            height="1000"
                                            width="1000"
                                            className="h-60 w-auto object-cover rounded-xl group-hover/card:shadow-xl"
                                            alt="thumbnail"
                                        />
                                        <button className="border-white px-2">
                                            <Link href={`/courses/${courses.slug}`} className=" text-amber-400">
                                            Learn More
                                             </Link>
                                        </button>
                                    </CardItem>

                                </CardBody>
                            </CardContainer>
                        </div>
                    ))}
                </div>
                <div className="mt-20 text-center">
                    <Link href={"/courses"}
                        className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
                    >
                        View All courses
                    </Link>
                </div>
            </div>

        </div>
    );
}

export default FeaturedCourses;