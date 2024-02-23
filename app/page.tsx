import { MotionLink } from "@/components/motion";
import { cn } from "@/utils/cn";
import { Cog, ListTodo, Sparkles, Users } from "lucide-react";
import Link from "next/link";
import React from "react";
import Container from "@/components/ui/Container";
import { Hero, HeroSubtitle, HeroTitle, Herotext } from "@/components/ui/Hero";
import HeroCard from "@/components/ui/HeroCard";
import FeatureCard from "@/components/ui/FeatureCard";





const Home = () => {
  const initial = { opacity: 0, translateY: 20 };
  const animate = { opacity: 1, translateY: 0 };

  return (
    <Container>
      <div className="glow"></div>

      <div className="mt-32">
        <div className="flex justify-center items-center">
          <MotionLink initial={initial} animate={animate} href="/blogs">
            <span className="relative group inline-block w-fit mx-auto overflow-hidden rounded-full p-[1px]">
              <span
                className={cn(
                  "absolute inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,#71717a_0%,#27272a_50%,#71717a_100%)]",
                  "animate-spin duration-700 rounded-full group-hover:animate-none",
                )}
              />
              <div
                className={cn(
                  "flex gap-1 h-full group w-full items-center justify-center rounded-full bg-zinc-900 px-3 py-1 text-xs text-zinc-200 backdrop-blur-3xl",
                  "hover:backdrop-blur-2xl hover:shadow-lg transition-all duration-200 ease-in-out",
                )}
              >
                <Sparkles className="mr-1 h-3 w-3" />
                <p className=" font-medium">Follow along on Twitter</p>
              </div>
            </span>
          </MotionLink></div>
      </div>
      <Hero>



        <HeroTitle>
          Effortless Task Management
        </HeroTitle>
        <HeroSubtitle>
          Introducing Drag-and-Drop Functionality
        </HeroSubtitle>
        <div className="flex items-center justify-center gap-5">
          <Link href="/">
            <div className='h-full w-full rounded-full bg-gradient-to-tr from-[#ffffff8a] to-[#ffffff00] p-[1px]'>
              <div className='bg-gradient-to-tr from-[#0b515aaf] via-[#09282B] text-md to-[#092326] rounded-full px-6 py-2'>
                Get Started
              </div>
            </div>
          </Link>
          <Link href="/" className="text-md font-semibold hover:underline">Github</Link>

        </div>

        <HeroCard />
        <div className="mt-32">
          <Hero>
            <HeroTitle>
              Key Features <br /> Simplify Your Workflow
            </HeroTitle>
          </Hero>
          <div className="grid  md:grid-cols-3 gap-6 mt-10">
            <FeatureCard icons={<Cog className=" opacity-50" />} title={"Intuitive Drag-and-Drop Interface"} subTitle={"Effortlessly organize tasks by simply dragging and dropping them where you need them."} />
            <FeatureCard icons={<ListTodo className=" opacity-50" />} title={"Customizable Task Categories"} subTitle={"Create personalized categories to organize tasks according to your specific workflow or project requirements."}/>
            <FeatureCard icons={<Users className=" opacity-50" />} title={"Real-Time Collaboration"} subTitle={"Collaborate with team members in real-time, making task assignment."}/>
          </div>

          <div className="mt-32">
            <Hero>
              <HeroTitle>
                Proudly Open Source
              </HeroTitle>
              <Herotext>
                <span className="font-bold">task.io</span> is open source and crafted using open source tools. <br /> You can access the code on <Link href="/" className="font-medium hover: underline text-white">GitHub</Link>.
              </Herotext>
            </Hero>
          </div>



        </div>

      </Hero>
    </Container>

  );
}

export default Home;