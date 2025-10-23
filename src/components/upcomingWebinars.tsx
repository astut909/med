import React from 'react'
import { CardSpotlight } from "@/components/ui/card-spotlight";

import Link from 'next/link';
import { title } from 'process';

function UpcomingWebinars() {
    const featuredWebinars = [
        {
            title: 'Understanding Music Theory',
            description:
                'Dive deep into the fundamentals of music theory and enhance your musical skills.',
            slug: 'understanding-music-theory',
            isFeatured: true,
        },
        {
            title: 'The Art of Songwriting',
            description:
                'Learn the craft of songwriting from experienced musicians and songwriters.',
            slug: 'the-art-of-songwriting',
            isFeatured: true,
        },
        {
            title: 'Mastering Your Instrument',
            description:
                'Advanced techniques to master your musical instrument of choice.',
            slug: 'mastering-your-instrument',
            isFeatured: true,
        },
        {
            title: 'Music Production Essentials',
            description:
                'Get started with music production with this comprehensive overview.',
            slug: 'music-production-essentials',
            isFeatured: true,
        },
        // Added two more webinars
        {
            title: 'Live Performance Techniques',
            description:
                'Enhance your live performance skills with expert tips and strategies.',
            slug: 'live-performance-techniques',
            isFeatured: true,
        },
        {
            title: 'Digital Music Marketing',
            description:
                'Learn how to promote your music effectively in the digital age.',
            slug: 'digital-music-marketing',
            isFeatured: true,
        },
    ];

    return (
        <>
            <div>
                <div className="text-center">
                    <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED WEBINARS</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance Your Musical Journey</p>
                </div>

            </div>
            <div className='flex className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8'>
                {featuredWebinars.map((webinar, index) => (
                    <CardSpotlight key={webinar.slug} className="h-96 w-96">
                        <div className="p-6 h-full flex flex-col justify-between">
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">
                                    {webinar.title}
                                </h3>
                                <p className="text-neutral-300">
                                    {webinar.description}
                                </p>
                            </div>
                            <Link
                                href={`/webinars/${webinar.slug}`}
                                className="inline-flex items-center text-sm font-medium text-teal-500 hover:text-teal-400"
                            >
                                Learn more →
                            </Link>
                        </div>
                    </CardSpotlight>
                ))}
            </div>

            <div>
                <div className="mt-10 text-center">
                    <Link href={"/"}
                        className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
                    >
                        View All webinars
                    </Link>
                </div>
            </div>
        </>
    )
}

export default UpcomingWebinars;
