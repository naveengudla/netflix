import { HEADER_LOGO } from "../utils/constants";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 px-6 py-4 bg-gradient-to-b from-black to-transparent w-full z-20 flex justify-between items-center">
      <img className="w-44" src={HEADER_LOGO} alt="Netflix" />
    </div>
  )
}

export default Header