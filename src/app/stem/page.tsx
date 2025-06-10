import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import Button from "@/components/Button";
import Newsletter from "@/components/Newsletter";

export const metadata: Metadata = {
  title: "Larnova STEM",
  description:
    "We cannot solve our problems with the same thinking we used when we created them. - Albert Einstein",
  icons: "/logo-metadata.png",
  openGraph: {
    title: "Larnova STEM",
    description:
      "We cannot solve our problems with the same thinking we used when we created them. - Albert Einstein",
    images:
      "https://larnova.ng/_next/image?url=%2Fimages%2Fstem-bg.png&w=640&q=75",
  },
};

export default function Stem() {
  return (
    <div>
      <Navigation />
      <section className="relative w-full h-[calc(100vh-57px)]">
        <video
          src="/udemy-promo-video.mp4"
          autoPlay
          muted
          controls={false}
          loop
          className="h-full w-full object-cover"
        ></video>
        <div className="absolute flex flex-col justify-center pb-16 lg:pl-6 lg:pt-[calc(100vh-85vh)] top-0 h-full w-full bg-gradient-to-b lg:bg-gradient-to-l from-[#00000007] to-[#000000] lg:from-[#000000ab] lg:to-[#000000ab]">
          <h3 className="text-white text-4xl lg:text-6xl ml-4 mb-2 lg:mb-2 w-9/12 lg:w-6/12 font-bold">
            AI Entrepreneurship Program
          </h3>
          <p className="text-white mb-3 lg:mb-4 text-xl lg:text-2xl ml-4 w-9/12 lg:w-6/12 font-light">
            This training is designed for businees minded individuals who want
            to make smarter, profitable, business decisions and eliminate
            guesswork from their business strategy.{" "}
          </p>
          <div className="fixed lg:static bottom-7 z-20 w-full lg:w-3/12">
            <div className="w-11/12 mx-auto">
              <div className="block lg:hidden">
                <Button
                  buttonText="Get Discount"
                  link="mailto:contact@larnova.ng?subject=Get available Larnova STEM discount"
                  newTab={false}
                />
              </div>
              <div className="hidden lg:block">
                <Button
                  buttonText="Get Discount"
                  link="/contact"
                  newTab={false}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex justify-center lg:justify-between items-center py-3 lg:py-0 border-b border-gray-200 sticky top-[60px] lg:top-[78px] bg-white z-10">
        <Link href="/1-Day-Free-AI Training.pdf" download={true}>
          <div className="flex items-center gap-3 text-lg lg:text-2xl w-fit lg:text-left lg:pl-10 lg:pr-0 pt-1 font-bold opacity-75">
            <p>1-Day Free AI Training for Schools</p>
            <div className="relative w-7 h-7 lg:w-9 lg:h-9">
              <Image
                src="/download.png"
                alt="download"
                fill
                object-fit="contain"
              />
            </div>
          </div>
        </Link>
        <div className="hidden lg:block w-4/12">
          <Link href="/contact">
            <button className="block bg-[url('/text-bg-v2.png')] bg-cover bg-top text-white text-base lg:text-lg w-full py-4 mx-auto font-bold hover:text-white/60 cursor-pointer transition-all">
              Get Discount
            </button>
          </Link>
        </div>
      </section>
      <section className="border-b border-gray-200">
        <div className="flex flex-col lg:flex-row items-end">
          <div className=" border-b lg:border-b-0 lg:border-r border-gray-200 pt-10 px-5 pb-10 lg:p-10 basis-[35%]">
            <h3 className="text-xl mb-5 opacity-70">
              Why SMEs Need to Use{" "}
              <span className="bg-[url('/text-bg-v2.png')] bg-center bg-cover bg-clip-text text-transparent font-bold">
                AI Tools
              </span>{" "}
            </h3>
            <h4 className="text-2xl lg:text-5xl mb-5">
              Small Business, <span className="font-bold">Smart Moves</span>
            </h4>
            <p className="text-[15px]">
              Small and medium-sized enterprises (SMEs) face the daily pressure
              of doing more with less—limited budgets, lean teams, and fierce
              competition. That&apos;s where AI tools like ChatGPT come in.
              These tools can supercharge productivity, automate repetitive
              tasks, and help businesses punch above their weight—without hiring
              extra hands.
            </p>
          </div>
          <div className="flex flex-wrap pt-10 pl-4 lg:p-10 basis-10/12">
            <ThreeStructure
              imageUrl="/images/save-time.png"
              title="Save Time"
              description="From drafting emails to writing product descriptions or answering
        customer inquiries, ChatGPT can automate routine tasks so your team can
        focus on higher-value work."
            />
            <ThreeStructure
              imageUrl="/images/reduction.png"
              title="Cut Costs"
              description="Instead of hiring multiple specialists, SMEs can use ChatGPT for
                content creation, marketing ideas, customer
                support, and even simple data analysis—saving thousands."
            />
            <ThreeStructure
              imageUrl="/images/sales-marketing.png"
              title="Boost Marketing"
              description="Need social media captions, ad copy, or website text? ChatGPT
                generates tailored, on-brand content in seconds, helping you
                stay visible and relevant online."
            />
            <ThreeStructure
              imageUrl="/images/decision-making.png"
              title="Make Smarter Decisions"
              description="AI can help summarize reports, analyze trends, and even suggest
                strategic moves based on your business data—giving you a
                competitive edge without needing a data scientist."
            />
          </div>
        </div>
      </section>
      <section id="ai-mobile-app-bootcamp" className="pt-36 mb-32">
        <div className="w-11/12 mx-auto bg-gray-100 rounded-3xl p-6 lg:p-10 mb-20">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="basis-6/12">
              <h2 className="text-lg opacity-65">
                Become a Silicon-Valley Level Developer
              </h2>
              <h3 className="text-2xl lg:text-4xl font-semibold mt-3 lg:mt-6">
                AI Mobile App Development Bootcamp
              </h3>
              <p className="mt-5 lg:mt-9 opacity-65">
                Create powerful cross-platform apps with React Native using AI
                Models: regression, random forest, and recommendation engine.
              </p>
              <p className="mt-2 lg:mt-5 opacity-65">
                In just 4 months, build React Native apps that predict, decide,
                and recommend—using real AI/ML. Gain practical skills,
                portfolio-ready projects, and the confidence to build
                intelligent, high-impact mobile apps. <br />
                <span className="font-bold">
                  Note* Sessions will be recorded and available after classes
                  and e-Certifcates will be awarded
                </span>
              </p>
              <p className="mt-5 opacity-65 font-bold">
                Enroll in our 4-month training program.
              </p>
              <p className="mt-5 opacity-65 font-bold">
                Start Date: 4th August, 2025.
              </p>
              <p className="mt-5 opacity-65 font-bold">
                Location: Virtual (Google Meet)
              </p>
              <p className="mt-5 opacity-65 font-bold">Cost: N350,000</p>
              <Link
                href="/AI MOBILE APP BOOTCAMP CURRICULUM.pdf"
                download={true}
              >
                <div className="text-lg mt-7 font-bold bg-[url('/text-bg-v2.png')] bg-right bg-cover bg-clip-text text-transparent">
                  Download Curriculum
                </div>
              </Link>
            </div>
            <div className="relative w-72 h-72 lg:w-96 lg:h-96 mr-0 lg:mr-20 mt-10 mb-7 lg:mt-0 lg:mb-0">
              <Image
                src="/images/fullstack-dev.png"
                alt="fullstack-dev"
                fill
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      </section>
      <Newsletter />
      <Footer />
    </div>
  );
}
function ThreeStructure({
  title,
  description,
  imageUrl,
}: {
  title: string;
  description: string;
  imageUrl: string;
}) {
  return (
    <div className="px-3 shrink-0 basis-2/4 lg:basis-1/4 mb-10 lg:mb-0">
      <div className="relative w-14 h-14 mb-2">
        <Image src={imageUrl} alt={title} fill objectFit="contain" />
      </div>
      <h3 className="font-bold mb-5">{title}</h3>
      <p className="text-[15px]">{description}</p>
    </div>
  );
}
