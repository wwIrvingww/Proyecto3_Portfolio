"use client"
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'


const Main = () => {
  return (
    <section>
            <div className='grid grid-cols-1 lg:grid-cols-12'>
                <div className='col-span-7 place-self-center text-center sm:text-left'>
                    <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'> 
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 from'>
                            Hi, I'm {""}
                        </span>
                        <TypeAnimation
                            sequence={[
                                'IRVING',
                                10000,
                                'Fronted',
                                10000,
                                'UX/UI',
                                10000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            />
                    </h1>
                    <p className='text-[#3876BF] text-base sm:text-lg mb-6 lf:text-xl'>
                        I'm a developer who likes to build things for the web.
                    </p>
                    <div>
                        <button className='px-1 py-1 w-full sm:w-fit rounded-full hover:bg-slate-800 text-[#192957] mt-3'>
                            <span className='block bg-[#3776be] hover:bg-[#E1AA74] rounded-full px-5 py-2'>Say Hi</span>
                        </button>
                        <button className='px-1 py-1 w-full sm:w-fit rounded-full  hover:bg-slate-800 text-[#192957] mt-3'>
                            <span className='block bg-[#3776be] hover:bg-[#E1AA74] rounded-full px-5 py-2'>Download CV</span>
                        </button>

                    </div>
                </div>
            <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
                <div className='rounded-full bg-[#181818] w-[350px] h-[350px] lg:w-[400px] lg:h[400px] relative'>
                    <Image
                        src='/images/irving.png'
                        alt='Irving image (me)' 
                        className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                        width={300}
                        height={300}
                    />
                </div>
            </div>
        </div>
    </section>

  )
}

export default Main
