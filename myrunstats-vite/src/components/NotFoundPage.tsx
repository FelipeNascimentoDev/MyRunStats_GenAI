import { Link } from "react-router-dom" // Import Link from react-router-dom to enable navigation

function NotFoundPage() {
  return (
    <div className="bg-[rgb(51,51,51)] text-white text-center h-screen flex flex-col items-center justify-center gap-14">
        <h1 className="text-4xl md:text-6xl font-bold mx-4">
           <u className="decoration-[rgb(128,20,20)]">Error404</u> | You ran off the track!
        </h1>
        <div className="text-4xl grid grid-cols-2 mx-4">
            <p> 🚧 </p>
            <p className="animate-bounce"> 🏃🏻‍♂️ </p>
        </div>
        <Link to="/" className="bg-[rgb(50,255,170)] text-black font-semibold px-6 py-3 rounded hover:shadow-[0_0_25px_5px_rgb(0,255,150)] transition-shadow duration-300">
        {/* Use "<Link>" instead of "<a>" because it enables client-side navigation WITHOUT FULL PAGE RELOAD.
        It uses only JavaScript to update the URL and render the new component/page. */}
        Take me back!
        </Link>
    </div>
  )
}

export default NotFoundPage