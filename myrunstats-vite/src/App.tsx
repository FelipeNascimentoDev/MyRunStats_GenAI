// import { useState } from "react"

function Home() {

  // const [variable, setVariable] =  useState([
  //   {  something: ""
  //   }
  // ]);

  return (
    <>
      <body className="w-screen h-screen m-0 mx-auto bg-[rgb(51,51,51)] text-white">
        
      <div className="text-center">
        <h1 className="text-[rgb(150,150,150)] font-semibold text-4xl my-10">
          Welcome to My Run Stats
        </h1>
          <h2 className="text-xl text-[rgb(50,255,170)] font-normal bg-black rounded-s py-5 px-10">
            Speed up the analysis of your treadmill running data. <br />
            Focus on your training while we handle the rest.
          </h2>
      </div>

      <section>
      <div>
        <input type="file" id="fileUpload" className="my-10 mx-auto block"/>
      </div>
      </section>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-10">
          <p className=" font-mono block text-5xl content-center text-center">
            Made with ❤️ <br />
            From a runner <br />
            to runners.
          </p>
          <p className="font-light block text-lg">
            As a passionate treadmill runner myself, I understand the challenges of tracking
            and analyzing running performance. That's why I created My Run Stats (MRS) –
            to help you feel the impact of every treadmill run. With just a simple photo
            you can track and analyze your treadmill running performance over time.
            Get insights, individualized graphics and feedback to help you improve on your running.
          </p>
        </div>
      </section>

    </body>
    </>
  )
}

export default Home
