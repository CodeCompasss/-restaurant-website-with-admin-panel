"use client";

import Link from "next/link";
import Carousel from "./carousel";
import { useRouter } from "next/navigation";

const slides = [
  "./images/foodimg-1.jpeg",
  "./images/foodimg-2.jpeg",
  "./images/foodimg-3.jpeg",
  "./images/foodimg-4.jpeg",
  "./images/4.jpeg",
  "./images/1.jpeg",
  "./images/2.jpeg",
  "./images/3.jpeg",
  "./images/5.jpeg",
  "./images/6.jpeg",
  "./images/7.jpeg",
];

const mainsection = () => {
  const router = useRouter();

  return (
    <div className=" md:w-full bg-white relative flex flex-col md:flex-row md:justify-around items-center justify-end h-[600px] md:h-full ">
      <div className=" w-full md:w-[50%]  flex flex-col px-10 md:px-20 z-30">
        <div className="md:pt-32 pt-16 w-full lg:w-[600px] md:w-[300px] text-wrap">
          <b className="sm:text-[30px] font-poppins text-[37px] lg:text-[58px] md:text-[48px]  tracking-[0.01em] leading-[120%] text-white md:text-black ">
            Don't wanna Make you Have A Bad day
          </b>
        </div>
        <div className="tracking-[0.01em] leading-[130%] sm:text-[16px]  text-[14px] lg:text-[22px] md:text-[20px] w-full lg:w-[600px] md:w-[300px] text-wrap pt-6 md:text-[#797979] text-gray-200">
          Our job is delivering a delicious food with fast , free delivery and
          easy.
        </div>
        <div className=" flex felx-col md:flex-row gap-4  h-[40px] mt-4">
          <button onClick={() => { router.push("./menu") }} className="lg:w-[120px]
          md:w-[100px] w-[120px] p-2 rounded-3xl  text-white bg-[#f39945] hover:opacity-90">
            Menu
          </button>
          <div className="p-2  rounded-3xl md:text-[#EC994B] text-white border-[#f39945] border    ">
          <button
            onClick={() => window.open("https://maps.app.goo.gl/VFrpYxKiSfWgq7479", "_blank")}
            className="flex flex-row w-[120px] gap-2 "
>
              <svg
                className="w-6 h-6 md:text-[#f39945] text-white "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                />
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z"
                />
              </svg>
              Google map
            </button>
          </div>
        </div>
        <div className="flex flex-row  md:justify-start py-8 gap-10">
          <Link href="/">
            <svg
              className="w-8 h-8 text-[#EA6D27]  hover:text-[#2761b8]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
          <Link href="/">
            <svg
              className="w-8 h-8 text-[#EA6D27]  hover:text-[#cd2f8b] "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
          <Link href="/">
            <svg
              className="w-8 h-8 text-[#EA6D27]  hover:text-[#2b6be3]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
      <div className="absolute top-0 md:relative  md:w-[400px] md:rounded-tl-3xl md:rounded-br-3xl md:rounded-md  overflow-hidden">
        <Carousel>
          {slides.map((s) => (
            <img src={s} className="object-cover w-full h-[600px] " />
          ))}
        </Carousel>

      </div>
      <div className="md:hidden block  bg-gradient-to-t from-gray-900 to-transparent absolute inset-0 z-20  rounded-md h-full"></div>
    </div>
  );
};
export default mainsection;
