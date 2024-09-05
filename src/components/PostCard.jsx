import { RiVerifiedBadgeFill } from "react-icons/ri";
import { FaHeart } from "react-icons/fa";
import { FaComment } from "react-icons/fa";
import { PiCoinsDuotone } from "react-icons/pi";
import { ImForward } from "react-icons/im";
import { CiMenuKebab } from "react-icons/ci";

const PostCard = () => {
  return (
    <div
        className='w-full rounded-xl bg-[#1D2939] p-8'
    >
        <div
            className='flex flex-row justify-start items-center mb-8'
        >
            <img 
                src='assets/Images/ user.png'
                className="mr-4"
            />

            <div>
                <p
                    className="flex flex-row items-center text-[#1D2939] text-xs font-normal mb-2"
                >
                    Kash 
                    <RiVerifiedBadgeFill className="text-[#D6594B] ml-2" />
                </p>

                <p
                    className="font-normal text-[#98A2B3] text-xs"
                >
                    20min ago
                </p>
            </div>
        </div>

        <div className="mb-8">
            <p className="font-normal text-base text-white mb-4">
                Hey all! We’ve designed an amazing Web3 social media platform built on swisstronik’s layer 2 platform.
            </p>

            <p
                className="text-[#D6594B] font-normal text-base"
            >
                @noyi @noyi @noyi @noyi @noyi @noyi @noyi
            </p>
        </div>

        <div className="flex flex-row justify-between">
            <div className="flex flex-row items-center">
                <p
                    className="mr-2 flex flex-row justify-center items-center bg-[#475467] text-xs text-white rounded-2xl w-[35px] h-[35px]"
                >
                    <FaHeart className="text-white mr-2" />
                    3
                </p>

                <p
                    className="mr-2 flex flex-row justify-center items-center bg-[#475467] text-xs text-white rounded-2xl w-[35px] h-[35px]"
                >
                    <FaComment className="text-white mr-2" />
                    3
                </p>

                <p
                    className="mr-2 flex flex-row justify-center items-center bg-[#475467] text-xs text-white rounded-2xl w-[35px] h-[35px]"
                >
                    <PiCoinsDuotone className="text-white mr-2" />
                    3
                </p>

                <p
                    className="mr-2 flex flex-row justify-center items-center bg-[#475467] text-xs text-white rounded-2xl w-[35px] h-[35px]"
                >
                <ImForward />
                </p>
            </div>

            <p
                className="flex flex-row justify-center items-center bg-[#475467] text-xs text-white rounded-2xl w-[35px] h-[35px]"
            >
                <CiMenuKebab />
            </p>
        </div>
    </div>
  )
}

export default PostCard