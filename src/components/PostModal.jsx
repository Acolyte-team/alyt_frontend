import { IoClose } from "react-icons/io5";
import { RiVerifiedBadgeFill } from "react-icons/ri";

const PostModal = ({
    open,
    setOpen
}) => {
  return (
    <div
    className="w-full h-screen fixed bg-black/50 flex justify-center items-center"
>

    <div
        className="bg-[#101828] w-5/12 rounded-xl p-4"
    >

        <div
            className="border-b border-[#344054] flex flex-row justify-between items-center h-[80px] mb-4"
        >
            <p
                className="text-2xl font-bold text-white"
            >
                Create post
            </p>

            <IoClose 
                className="text-white font-medium ml-8 text-xl" 
                onClick={() => setOpen(!open)}
            />
        </div>

        <div
            className="flex flex-row items-enter my-4"
        >
            <img 
                src='assets/user.png'
                className="mr-4"
            />

            <p
                className="flex flex-row items-center"
            >
                Noyi24_7
                <RiVerifiedBadgeFill 
                    className="text-[#D6594B] ml-2 cursor-pointer" 
                />
            </p>
        </div>

        <form>

            <div
                className="flex flex-col mb-4 w-full"
            >
                <textarea 
                    placeholder="What is happening around you today ?"
                    rows={5}
                    className="outline-none bg-[#1D2939] rounded-lg border-2 border-[#344054] p-2"
                />
            </div>

            <button
                className='w-full h-[52px] bg-slate-500/50 py-2 px-4 rounded-xl text-white font-semibold text-lg'
            >
                Post
            </button>

        </form>

    </div>


</div>
  )
}

export default PostModal