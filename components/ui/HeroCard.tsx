import React from 'react'
import { MotionLink } from '../motion'
import { cn } from '@/utils/cn';

const HeroCard = () => {

    return (
        <div className="mt-10">
            <div >
                <span className="relative group inline-block w-full mx-auto overflow-hidden rounded-xl p-[1px]">
                    <span
                        className={cn(
                            "absolute inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,#71717a_0%,#27272a_50%,#71717a_100%)]",
                            "animate-spin duration-700 rounded-xl group-hover:animate-none",
                        )}
                    />
                    <div
                        className={cn(
                            "flex gap-1 w-full h-[300px] justify-between md:h-[764px] items-center bg-gradient-to-tr from-[#0b515aaf] via-[#09282B] to-[#092326] rounded-xl px-6 py-2 font-medium backdrop-blur-3xl",
                            "hover:backdrop-blur-2xl hover:shadow-lg transition-all duration-200 ease-in-out",
                        )}
                    >

                    </div>
                </span>
            </div>
        </div>
    )
}

export default HeroCard
