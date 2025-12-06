function TopMenu() {

  return (
    <>
    <header className="flex justify-between items-center bg-white p-4">
      <div className="scrolling-container">
        <a href="https://github.com/FelipeNascimentoDev/MyRunStats_GenAI" target="_blank" rel="noopener noreferrer">
          <img className="h-9 w-9" src="../speed_favicon.png" alt="Speed Icon"/>
        </a>
      </div>

      <nav>
        <ul className="flex text-black font-bold content-center">
          <li className="mx-3 hover:text-[rgb(50,255,170)]">
            <a className="p-2" href="/">progress-tracker</a>
          </li>
          <li className="mx-3 hover:text-[rgb(50,255,170)]">
            <a className="p-2" href="/">about</a>
          </li>
        </ul>
      </nav>
      
    </header>
    </>
  )
}

export default TopMenu