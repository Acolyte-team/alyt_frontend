import { PiCoinsDuotone } from "react-icons/pi";
import { FaPlus } from "react-icons/fa6";
import { MdOutlineLogout } from "react-icons/md";

const CreatePost = ({
    open,
    setOpen
})=> {
  return (
    <div
        className='w-full h-[500px] rounded-xl p-4 bg-[#1D2939] flex flex-col justify-between items-between'
    >
        
        <div>
            <div
                className="rounded-xl bg-[#101828] p-4 mb-4"
            >
                <div
                    className="flex flex-row justify-start items-center mb-2"
                >
                    <PiCoinsDuotone className="font-bold text-lg text-[#EAECF0] mr-4" />
                    <p
                        className="font-bold text-lg text-[#EAECF0]"
                    >
                        200
                    </p>
                </div>

                <p
                    className="font-normal text-xs text-[#98A2B3]"
                >
                    ~US$1000.00
                </p>
            </div>

            <p
                className="font-bold text-2xl mb-4"
            >
                What's happening around you today?
            </p>

            <button
                onClick={() => setOpen(!open)}
                className='flex flex-row justify-center items-center w-full h-[52px] bg-[#475467] py-2 px-4 rounded-xl text-white font-bold text-lg'
            >
                Create a post <FaPlus className="ml-2" />
            </button>
        </div>

        <div>

            <button
                className='flex flex-row justify-center items-center w-full h-[52px] bg-transparent py-2 px-4 rounded-xl text-white font-bold text-lg mb-4'
            >
                <MdOutlineLogout className="mr-2" /> Logout
            </button>

            <p
                className="font-normal textsm text-center"
            >
                By connecting your wallet, you agree to our Terms of Service and Privacy Policy
            </p>

        </div>


    </div>
  )
}

export default CreatePost