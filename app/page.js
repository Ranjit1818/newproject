import Image from "next/image";

export default function Home() {
  return (
    <>
     <div className="flex justify-center text-white h-[44vh] flex-col gap-4 items-center">
      <div className="font-bold text-5xl flex gap-1 justify-center items-center ">
        Buy Me a Chai <span><img src="/cup.gif" width={75}alt=""/></span></div>
      <p>
        A Crowdfunding platform for cretors. Get funded by your fans and follwers. Start Now!
      </p>
      <div>
      <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Now</button>
      <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read mode</button>
      </div>
      
     </div>
     <div className="bg-white h-1 opacity-10">
      </div>
      <div className="text-white container mx-auto">
        <h1 className="text-2xl font-bold text-center my-8">Your Fans Can buy you chai</h1>
        <div className="flex gap-5 justify-around">
        <div className="item space-y-1 flex flex-col items-center justify-center">
          <img className=" bg-slate-400 rounded-full p-2" src="/table.png" width={68} alt="" />
          <p className="font-bold">Your fans wants to help</p>
          <p className="text-center">Your fans are available for you to help you</p>
        </div>
        <div className="item space-y-1 flex flex-col items-center justify-center">
          <img className=" bg-slate-400 rounded-full p-2" src="/bitcoin.gif" width={68} alt="" />
          <p className="font-bold">Your fans wants to help</p>
          <p className="text-center">Your fans are available for you to help you</p>
        </div>
        <div className="item space-y-1 flex flex-col items-center justify-center">
          <img className=" bg-slate-400 rounded-full py-2 p" src="/dollercoin1.gif" width={58} alt="" />
          <p className="font-bold">Your fans wants to help</p>
          <p className="text-center">Your fans are available for you to help you</p>
        </div>
      </div>
      </div>

      
      
      
      
     </>
  );
}
