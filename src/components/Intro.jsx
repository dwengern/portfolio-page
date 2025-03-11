import React from 'react';

function Intro() {
    return (
        <div className='flex items-center justify-center flex-col text-center pt-20 pb-6'>
            <h1 className='text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold'>Nicholas Dwenger</h1>
            <p className='text-base md:text-xl mb-3 font-medium'>Software Engineer & Web Developer</p>
            <p className='text-sm max-w-xl mb-6 font-bold'>
                I'm an aspiring full-stack developer and student at the University of Indianapolis.
                My goal is to make a difference in the digital world by building applications and 
                websites that are meaningful and innovative.
                All coding projects are built from the ground up, from designing, planning, and solving real
                world problems with my code.
                <br />
                I will be looking for employment starting in May and I hope to join a company where
                I can put my skills and dedication to use.  I'm a hardworking person with a love for growing
                and trying to be better each and every day. Feel free to visit my {' '}
                <a 
                    href="https://www.linkedin.com/in/nicholasdwenger/"
                    target='_blank'
                    className='text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600'
                    rel='nonreferrer noopener'
                >
                    LinkedIn Profile
                </a> {' '} 
                profile to see
                more information about me.
            </p>
        </div>
    )
}

export default Intro;