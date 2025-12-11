import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react';

function Home() {

  const fileInputRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; // Get the first selected file, like a photo

    if (file) {
      const reader = new FileReader();
      reader.onload = () => { 
        const base64Image = reader.result as string; 
        navigate('/progress-tracker', { state: { imageData: base64Image } });
      }
      reader.readAsDataURL(file); // Read the file as a base64-encoded string and trigger 'onload' function
    }
  }


  // Trigger the file input click event and '?' check for nullability
  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <>
      <body className="h-screen m-0 mx-auto bg-[rgb(51,51,51)] text-white">
 
      <section className="text-center">
        <h1 className="text-[rgb(150,150,150)] font-semibold text-4xl my-10">
          Welcome, runner!
        </h1>
      
        <h2 className="text-xl text-[rgb(50,255,170)] font-normal bg-black rounded-s py-5 px-10 m-10">
            Speed up the analysis of your treadmill running data. <br />
            Focus on your training while we handle the rest.
        </h2>
      </section>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10 mx-12">
          <input type="file" id="fileInput" ref={fileInputRef} className="hidden"
          onChange={(e) => {
            handleFileUpload(e as React.ChangeEvent<HTMLInputElement>);
          }}
          />
          <button onClick={handleButtonClick} className="
            bg-[rgb(50,255,170)] text-[rgb(51,51,51)]
            font-serif font-bold text-3xl flex justify-center items-center
            py-4 px-6              <!-- mobile phone screens --> 
            sm:mx-6 sm:my-2        <!-- small screens -->
            md:mx-16 md:my-10      <!-- medium screens -->
            lg:mx-20 lg:my-4       <!-- large screens -->
            rounded-lg
            transform transition-transform duration-200
            hover:scale-105
          ">
            +add photo
          </button>
          <p className="font-light block text-lg">
            Upload a clear photo of your treadmill display showing key
            metrics such as distance, time, pace, and calories burned.
            Our advanced AI algorithms will analyze the data and provide
            you with detailed insights and progress tracking to help
            you improve your running performance over time.
          </p>
        </div>
      </section>

      <div className="bg-black my-0 mx-10 py-1"></div>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-4 p-10">
          <p className=" font-mono block text-4xl md:text-5xl content-center text-center">
            Made with ❤️ <br />
            From a runner <br />
            to runners.
          </p>
          <p className="font-light block text-lg">
            As a passionate treadmill runner myself, I understand the challenges of tracking
            and analyzing running performance overtime. That's why I created My Run Stats (MRS) –
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
