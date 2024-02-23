import { Cog } from 'lucide-react'
import React from 'react'

interface FeatureCardProps {
    icons: JSX.Element;
    title: String;
    subTitle: String;
 
}

const FeatureCard = ({icons, title, subTitle} : FeatureCardProps) => {


    return (
        <div className="">
            
                <div className='card bg-gradient-to-t from-[#0b515aaf] via-[#09282B] text-md to-[#092326] rounded-xl  h-full w-full card-container p-6'>
                    
                        <div className='w-[52px] h-[52px] md:w-[60px] md:h-[60px] rounded-xl bg-[#092326] border border-[#566466] card-container flex items-center justify-center color-red'>
                            {icons}
                        </div>
                        <div className='py-6'>
                            <h2 className='text-left text-lg font-bold opacity-60 lg:text-2xl'>{title}</h2>
                        </div>
                        <div className=''>
                            <p className='text-left text-sm opacity-50 font-medium lg:text-lg'>
                                {subTitle}
                            </p>
                        </div>


                </div>
        </div>
    )
}

export default FeatureCard
