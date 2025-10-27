'use client'
import {courses} from '@/data/music_courses.json'
import {
    DraggableCardBody,
    DraggableCardContainer,
} from "@/components/ui/draggable-card";
import Footer from '@/components/footer';

function Page() {
    // console.log(courses)
    return (
        <div className='bg-black'>
            <div className='h-screen '>
                <h1 className='text-white text-[12vw] flex justify-center mt-12'>
                    All courses is ({courses.length})
                </h1>
                <div className=''>

                    <DraggableCardContainer className="relative flex w-screen items-center justify-center overflow-clip">
                        <p className="absolute  uppercase top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800">
                            musics is life
                        </p>

                        {courses.map((course) => (
                            <DraggableCardBody key = {course.id}>
    
                                <img
                                    src={course.image}
                                    alt={course.title}
                                    className="pointer-events-none relative z-10 h-80 w-80 object-cover"
                                />
                                <h3 className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">
                                    {course.title}
                                </h3>
                            </DraggableCardBody>

                        ))}
                    </DraggableCardContainer>


                </div>
            </div>
                        <Footer/>
        </div>
    )
}

export default Page
