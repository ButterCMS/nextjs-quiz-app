import { React } from "react";
import Link from "next/link";


const Quizselection = () => {
  console.log("hello");

  return (
        <div className=" pt-6">
          <h1 className=" text-blue-700 text-center text-3xl font-medium my-6 ">
            Welcome to my Quiz App
          </h1>
          <p className=" text-center mt-12 mb-8 ">
            Looking to test your general knowlege..? Then you are at the right
            place. Try out this fun quiz
          </p>
          <div className=" flex justify-center items-center">
            <div className=" w-[500px] px-8 py-4 shadow-2xl bg-blue-400 text-white flex justify-center items-center flex-col gap-6 ">
              <h1 className=" font-extrabold text-xl ">A Fun Quiz</h1>
              <p>
                A quiz covering diffent areas of general knowlege. Test your
                knowlege and see how much you know as you go along. Answer
                questions on history, geography, science, movies, and more.
              </p>
              <div className="w-full flex justify-end pr-3">
                <button className=" bg-white px-5 py-2 rounded-sm text-black hover:cursor-pointer ">
                  <Link href="/test" >Begin Test</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
  );
};

export default Quizselection;
