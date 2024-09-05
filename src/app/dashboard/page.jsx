"use client";

import { useState } from "react";
import AuxBar from "@/components/AuxBar";
import CreatePost from "@/components/CreatePost";
import Header from "@/components/Header";
import PostCard from "@/components/PostCard";
import PostModal from "../components/PostModal";

export default function Page() {
    const [open, setOpen] = useState<boolean>(false);
    return(
        <div className="w-full h-screen">
            {open &&(
                <PostModal
                    open={open}
                    setOpen={setOpen}
                />
            )}
            <Header accessGranted={true} />

            <div
                className="px-8 flex flex-row justify-between"
            >
                <div
                    className="w-3/12"
                >
                    <CreatePost 
                        open={open}
                        setOpen={setOpen}
                    />
                </div>

                <div
                    className="w-5/12"
                >
                    <PostCard />
                </div>

                <div
                    className="w-3/12"
                >
                    <AuxBar />
                </div>
            </div>
        </div>
    )
}