import { Link } from "react-router"

function TopMenu() {

  return (
    <>
    <header className="flex justify-between items-center bg-white p-4">
      <div className="mx-2 md:mx-6">
          <Link to="/"><img className="h-9 w-9" src="../speed_favicon.png" alt="Speed Icon"/></Link>
      </div>

      <nav>
        <ul className="flex text-black font-bold content-center">
          <li className="mx-3 hover:text-[rgb(50,255,170)]">
            <Link className="p-2" to="/myruns">my_runs</Link>
          </li>
          <li className="mx-3 hover:text-[rgb(50,255,170)]">
            <Link className="p-2" to="/progress-tracker">analysis</Link>
          </li>
          <li className="mx-3 hover:text-[rgb(50,255,170)]">
            <Link className="p-2" to="https://github.com/FelipeNascimentoDev/MyRunStats_GenAI" target="_blank">about</Link>
          </li>
        </ul>
      </nav>
      
    </header>
    </>
  )
}

export default TopMenu