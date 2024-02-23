import React from 'react'

interface HeroProps {
    children: React.ReactNode;
}

interface HeroElementProps {
    children: React.ReactNode;
}

export const HeroTitle = ({ children }: HeroElementProps) => {
    return (
    <>
    <h1 className='text-7xl font-bold mt-6 bg-clip-text text-transparent bg-gradient-to-tr from-[#C2E3E4] to-neutral-600 bg-opacity-50'>{children}</h1>
    </>
    )
}

export const HeroSubtitle = ({children}: HeroElementProps) => {
    return (
        <p className='text-xl mb-12 font-medium text-center bg-clip-text text-transparent bg-gradient-to-tr from-[#C2E3E4] to-neutral-600 bg-opacity-50'>{children}</p>
    )
}

export const Herotext = ({children}: HeroElementProps) => {
    return (
        <p className='text-lg mb-12 mt-4 font-normal text-center bg-clip-text text-transparent bg-[#C2E3E4]'>{children}</p>
    )
}

export const Hero = ({ children }: HeroProps) => {
    return (
        <div className='text-center'>
            {children}
        </div>
    )
}

