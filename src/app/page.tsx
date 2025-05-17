"use client";

import React, { useRef } from "react";

import NextImage from "next/image";
import Link from "next/link";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import useImageLoaded from "@/hooks/useImageLoaded";
import Button from "@/components/Button";
import Newsletter from "@/components/Newsletter";

const getMoreFromLarnovaData = [
  {
    icon: "/images/ai-integration.png",
    title: "Customized AI Models",
    description:
      "We offer finetuned AI models for custom business usecase, enabling companies implement smarter features",
  },
  {
    icon: "/images/affordable.png",
    title: "Flexible Payment Structure",
    description:
      "Our training programs uses a monthly payment system with a 2-3 months upfront payment depending on training duration.",
  },
  {
    icon: "/images/online-support.png",
    title: "Free IT Consultation",
    description:
      "Scaling your software requires efficient system design. We offer software architecture and DevOps consultation, free for new clients!",
  },
  {
    icon: "/images/credit-card.png",
    title: "Affordable Services",
    description:
      "We are partnered with DigiCreeb to enable companies accelerate their software production at low cost",
  },
];

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isImageLoaded] = useImageLoaded(
    "/images/home-bg-wb.png",
    containerRef
  );

  return (
    <div>
      <Navigation />
      <section
        ref={containerRef}
        className={`${
          isImageLoaded ? "slide" : ""
        } relative w-full bg-fixed bg-cover h-screen overflow-hidden`}
      >
        <div className="flex flex-col gap-4 justify-end h-full w-full absolute top-0 font-bold bg-gradient-to-b from-[#000000f5] to-[#0000000c] p-8">
          <p
            className={`text-center text-white text-5xl lg:text-9xl opacity-0 ${
              isImageLoaded ? "fadeIn" : ""
            }`}
          >
            <span className="text-5xl lg:text-9xl font-extralight mr-0.5">
              be
            </span>
            Delusional
          </p>
          <p
            className={`text-center text-white text-lg lg:text-2xl opacity-0 font-light ${
              isImageLoaded ? "fadeIn" : ""
            }`}
          >
            Scroll to Explore
            <span className="grid place-items-center border-2 border-white w-7 h-11 pt-1 mt-2 mx-auto rounded-full">
              <span className="block bg-white w-1.5 h-4 mx-auto rounded-full animate-bounce"></span>
            </span>
          </p>
        </div>
      </section>
      <section className="w-11/12 lg:w-6/12 mt-14 lg:mt-28 mx-auto mb-16">
        <h3
          className="text-4xl lg:text-6xl font-bold text-right lg:text-center bg-[url('/text-bg-v2.png')] bg-cover bg-clip-text text-transparent
        "
        >
          Who we are
        </h3>
        <p className="mt-2 lg:text-xl lg:text-center">
          We&apos;re a team of{" "}
          <span className="font-semibold">audacious visionaries</span>—some
          might call us <span className="font-semibold">self-delusionists</span>
          —on a mission to invent{" "}
          <span className="font-semibold">zero-to-one </span>
          software products that will put us on the
          <span className="font-semibold"> global map</span>.
        </p>
      </section>
      <section className="relative w-11/12 mx-auto mt-16 rounded-3xl lg:rounded-4xl overflow-hidden h-[calc(100vh-160px)] lg:h-[calc(100vh-50px)]">
        <video
          src="/who-we-are.mp4"
          autoPlay
          muted
          controls={false}
          loop
          className="h-full w-full object-cover"
        ></video>
        <div className="absolute flex flex-col justify-end top-0 h-full w-full bg-gradient-to-b from-[#00000007] to-[#000000]">
          <h4 className="text-center text-white font-medium text-xl mb-2">
            Larnova Lab
          </h4>
          <h3 className="text-white text-4xl lg:leading-12 text-center mb-2 lg:mb-2 mx-auto w-4/5 lg:w-5/6 font-bold">
            Imagination, Intelligence and Innovation
          </h3>
          <p className="text-white mb-3 lg:mb-4 text-lg lg:text-xl text-center w-4/5 mx-auto lg:w-4/5 font-medium">
            A ship in harbor is safe, but that is not what ships are built for.
          </p>
          <button className="bg-[url('/text-bg-v2.png')] bg-cover bg-top text-white text-base w-fit lg:text-lg px-6 lg:px-10 py-2 mx-auto mb-10 lg:mb-14 rounded-sm font-bold hover:text-white/60 cursor-pointer transition-all">
            See Our Projects
          </button>
        </div>
      </section>
      <section className="flex flex-col-reverse lg:flex-row lg:gap-[4.1667%] w-11/12 mx-auto mt-[calc(1/24*100%)]">
        <ImageWithOverlay
          image="/images/home-lab-bg.png"
          brand="Larnova Lab"
          title="AURA (AI Unified Retail Assistant)"
          description="AURA is an AI shopping assistant that uses LLM to provide personalized experience."
          buttonText="Visit Larnova Lab"
        />
        <div className="mt-[4.1667%] lg:hidden"></div>
        <ImageWithOverlay
          image="/images/home-stem-bg.png"
          brand="Larnova STEM"
          title="AI for SMEs"
          description="Turn everyday business data into smart, profitable decisions using Google Sheets and ChatGPT."
          buttonText="Learn More"
          link="https://www.udemy.com/course/google-sheets-chatgpt-for-smes-make-profitable-decisions"
          newTab={true}
        />
      </section>
      <section className="bg-gray-100 mt-28 pt-16 lg:pt-24">
        <div className="mx-auto overflow-hidden">
          <h4 className="text-3xl mb-7 lg:text-5xl mx-auto lg:w-full font-medium lg:mb-14 text-center bg-gradient-to-r from-gray-400 to-black bg-clip-text text-transparent">
            Why buy from Larnova
          </h4>
          <div className=" md:w-full lg:mx-auto lg:w-[1350px] text-black/85 md:px-1.5">
            <div className="flex md:mx-0 gap-x-3 md:gap-x-1.5 mx-3 md:gap-y-3 md:flex-wrap lg:flex-nowrap justify-evenly w-full overflow-x-scroll md:overflow-x-clip pb-3 md:pb-0 mobile">
              {getMoreFromLarnovaData.map(
                ({ icon, title, description }, index) => (
                  <React.Fragment key={index}>
                    <IconWithTitleAndDescription
                      icon={icon}
                      title={title}
                      description={description}
                    />
                    {index === getMoreFromLarnovaData.length - 1 && (
                      <div className="md:hidden mr-3"></div>
                    )}
                  </React.Fragment>
                )
              )}
            </div>
          </div>
          <Link href="#">
            <button className="block mt-8 lg:mt-14 bg-[url('/text-bg-v2.png')] bg-cover bg-top text-white text-base w-fit lg:text-lg px-6 lg:px-10 py-2 mx-auto mb-10 lg:mb-24 rounded-sm font-bold hover:text-white/60 cursor-pointer transition-all">
              Learn More
            </button>
          </Link>
        </div>
      </section>
      <section className="mt-28 mb-52 lg:mb-72">
        <h4 className="text-3xl mb-7 lg:text-5xl mx-auto lg:w-full font-medium lg:mb-14 text-center bg-gradient-to-r from-gray-400 to-black bg-clip-text text-transparent">
          The latest from Larnova
        </h4>
        <div className="h-[calc(100vh-20vh)] md:h-[calc(100vh-30vh)] lg:h-[calc(100vh-45vh)] w-full flex flex-col lg:flex-row gap-y-20 px-4">
          <ImageWithTitle
            image="/images/1-day-AI-training.jpg"
            title="1-Day Free AI Training for Schools"
            tag="Ongoing"
          />
          <ImageWithTitle
            image="/images/fullstack-developer-training.jpg"
            title="Fullstack Developer Bootcamp with MicroManna"
            tag="Not Started"
          />
        </div>
      </section>
      <Newsletter />
      <Footer />
    </div>
  );
}

function ImageWithTitle({
  image,
  title,
  tag,
}: {
  image: string;
  title: string;
  tag?: string;
}) {
  return (
    <div className="basis-full md:basis-3/6 md:px-3 lg:px-4 ">
      <div className="relative w-full h-full overflow-hidden rounded-4xl lg:rounded-3xl">
        <NextImage src={image} alt="latest" fill objectFit="cover" />
        <span className="absolute block right-5 top-4 text-white bg-black/40 border border-white px-3 py-1.5 rounded-full text-xs">
          {tag}
        </span>
      </div>
      <h5 className="text-xl lg:text-3xl text-semibold mt-3 lg:mt-8 mb-2 opacity-90">
        {title}
      </h5>
    </div>
  );
}

function IconWithTitleAndDescription({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white rounded-4xl py-10 px-8 basis-[320px] md:basis-[48%] lg:basis-[24%] shrink-0 ">
      <div className="opacity-85">
        <div className="relative h-14 w-14">
          <NextImage src={icon} alt="custom" fill objectFit="cover" />
        </div>
        <h3 className="text-3xl font-medium mt-8">{title}</h3>
        <p className="mt-3">{description}</p>
      </div>
    </div>
  );
}

function ImageWithOverlay({
  image,
  brand,
  title,
  description,
  buttonText,
  link,
  newTab,
}: {
  image: string;
  brand: string;
  title: string;
  description: string;
  buttonText: string;
  link?: string;
  newTab?: boolean;
}) {
  return (
    <div className="relative w-full lg:w-6/12 mx-auto rounded-3xl lg:rounded-4xl overflow-hidden h-[calc(100vh-160px)] lg:h-screen">
      <NextImage src={image} alt={title} fill objectFit="cover" />
      <div className="absolute flex flex-col justify-end top-0 h-full w-full bg-gradient-to-b from-[#00000007] to-[#000000]">
        <h4 className="text-center text-white font-medium text-xl mb-2">
          {brand}
        </h4>
        <h3 className="text-white text-4xl lg:leading-12 text-center mb-2 lg:mb-2 mx-auto w-4/5 lg:w-5/6 font-bold">
          {title}
        </h3>
        <p className="text-white mb-3 lg:mb-4 text-lg lg:text-xl text-center w-11/12 mx-auto lg:w-5/6 font-medium">
          {description}
        </p>
        <div className="mb-10 lg:mb-14 w-8/12 lg:w-5/12 mx-auto">
          <Button newTab={newTab} link={link} buttonText={buttonText} />
        </div>
      </div>
    </div>
  );
}
