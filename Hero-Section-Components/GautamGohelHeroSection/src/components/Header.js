
const Header = () => {
  return (
    <div className="absolute w-full h-[4rem] py-4 " >
        <ul className="flex items-center justify-center space-x-10 w-full px-6" >
            <li className="text-[#98EC65] font-bold text-[1.1rem] cursor-pointer hover:animate-pulse ">Home</li>
            <li className="text-[#fff] font-bold text-[1.1rem] cursor-pointer hover:animate-pulse ">About</li>
            <li className="text-[#fff] font-bold text-[1.1rem] cursor-pointer hover:animate-pulse ">Contact us</li>
        </ul>
    </div>
  )
}

export default Header