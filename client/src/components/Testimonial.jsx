import React from 'react'
import { assets } from '../assets/assets.js'

const Testimonial = () => {
    const dummyTestimonialData = [
        {
            image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
            name: 'John Doe',
            title: 'Marketing Director, TechCorp',
            content: 'ContentAI has revolutionized our content workflow. The quality of the articles is outstanding, and it saves us hours of work every week.',
            rating: 4,
        },
        {
            image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
            name: 'Jane Smith',
            title: 'Content Creator, TechCorp',
            content: 'ContentAI has made our content creation process effortless. The AI tools have helped us produce high-quality content faster than ever before.',
            rating: 5,
        },
        {
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop",
            name: 'David Lee',
            title: 'Content Writer, TechCorp',
            content: 'ContentAI has transformed our content creation process. The AI tools have helped us produce high-quality content faster than ever before.',
            rating: 4,
        },
    ]

    return (
        <div className='w-full px-6 sm:px-10 lg:px-12 xl:px-24 my-16 sm:my-24'>
            
            {/* Section Header */}
            <div className='text-center max-w-2xl mx-auto'>
                <h2 className='text-slate-800 text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight'>
                    Loved by Creators
                </h2>
                <p className='text-gray-500 text-sm sm:text-base mt-3 max-w-lg mx-auto leading-relaxed'>
                    Don't just take our word for it. Here's what our users are saying.
                </p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-10 sm:mt-14 max-w-7xl mx-auto justify-items-center'>
                {dummyTestimonialData.map((testimonial, index) => (
                    <div 
                        key={index} 
                        className='group relative w-full max-w-95 p-6 sm:p-7 rounded-2xl bg-white shadow-sm hover:shadow-xl border border-gray-100 hover:border-gray-200 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col justify-between'
                    >
                        <div>
                           
                            <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                   <img key={i} src={i <testimonial.rating ? assets.star_icon : assets.star_dull_icon}/>
                                        
                                ))}
                            </div>

                            <p className='text-gray-600 text-xs sm:text-sm my-4 leading-relaxed'>
                                "{testimonial.content}"
                            </p>
                        </div>

                        {/* Author Info */}
                        <div>
                            <hr className='mb-4 border-gray-100' />
                            <div className='flex items-center gap-3'>
                                <img src={testimonial.image} className='w-11 h-11 object-cover rounded-full shadow-sm' alt={testimonial.name} />
                                <div className='text-sm'>
                                    <h3 className='font-semibold text-gray-900'>{testimonial.name}</h3>
                                    <p className='text-xs text-gray-500'>{testimonial.title}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Testimonial;