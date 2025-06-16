import { useRouter } from "next/navigation";


export default function HomePage() {
  const router = useRouter();
  return (
    <>
   

     <div className=" relative min-h-screen font-sans antialiased flex flex-col">
      {/* Navigation Bar */}
      <nav className=" absolute bg-white/30 backdrop-blur-2xl   w-full  shadow-sm py-4 px-6  md:px-12  flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          {/* Using a simple circle for the logo as per image abstract */}
          <div className="w-6 h-6 bg-blue-600 rounded-full"></div>
          <span className="text-xl font-bold text-gray-800">Quickdraw</span>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center space-x-4">
          <button
           onClick={() => {
            router.push("/signin");
          }}
          className="text-gray-700 hover:text-blue-600 font-medium">Sign In</button>
          <button
          onClick={()=>{
            router.push("/signup")
          }}
          
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 ease-in-out">
            Sign Up
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-grow flex items-center justify-center p-4 bg-gradient-to-br from-pink-100 to-blue-200">
        <div className="relative w-full max-w-7xl h-[80vh] bg-white shadow-xl rounded-2xl p-8 md:p-12 overflow-hidden">
       
          <div className="absolute inset-0 z-0 bg-gradient-to-bl from-gray-800 to-slate-900  rounded-2xl "></div>
          <div className="absolute inset-0 z-0 bg-cover  bg-center opacity-60" style={{ backgroundImage: `url('https://cdn.dribbble.com/userupload/37233324/file/original-aa964cf46c4e643fbd1ac37b33fad039.jpg?resize=1905x1072&vertical=center)` }}></div>

          {/* Content Wrapper */}
          <div className="relative z-10 flex flex-col items-center text-center py-10 md:py-20 px-4">
            <h1 className="text-3xl md:text-7xl font-extrabold text-white mb-4 ">
              Unleash Your Creativity with <br className="hidden md:block"/> <span className="text-orange-500">Quickdraw</span> 
            </h1>
            <p className="text-base md:text-xl text-white max-w-2xl mb-8 mt-10">
              Quickdraw is a collaborative drawing platform that lets you sketch, diagram, and brainstorm ideas in real-time with others. It`&apos;`s intuitive, fun, and perfect for teams and individuals alike.
            </p>
            <button className="bg-[#ff6a30] text-black text-lg px-8 py-3 rounded-md hover:bg-[#eb7a2f] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 ease-in-out">
              Start Drawing Now
            </button>
          </div>
        </div>
      </main>
    </div>
    </>
  );
}
