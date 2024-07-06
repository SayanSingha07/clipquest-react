import React, { useState } from 'react';
import { FaFileAlt } from "react-icons/fa";
import { IoDownloadOutline } from "react-icons/io5";
import { IoIosCloseCircle } from "react-icons/io";
import { motion } from "framer-motion";

function Card({ data, referance }) {
    const [description, setDescription] = useState(""); // State for card description

    return (
        <>
            <motion.div 
                drag 
                dragConstraints={referance} 
                whileDrag={{ scale: 1.2 }} 
                dragElastic={0.2} 
                className='relative flex-shrink-0 w-60 h-72 rounded-[20px] bg-slate-50 px-8 py-10 overflow-hidden'
            >
                <FaFileAlt className="text-2xl mb-3" />
                <textarea
                    className='text-xs text-black mt-5 leading-tight font-semibold w-full bg-transparent border-b border-gray-400 outline-none'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Enter description"
                    rows="4"
                />
                <div className='mt-4'>
                    <p className='text-xs text-black leading-tight font-semibold'>{description}</p>
                </div>
                <div className='footer absolute bottom-0 bg-sky-200 w-full h-15 py-4 left-0'>
                    <div className='flex items-center justify-between mb-3 px-5'>
                        <h5>{data.filesize}</h5>
                        <span className='w-7 h-7 bg-slate-200 rounded-full flex items-center justify-center'>
                            {data.close ? <IoIosCloseCircle /> : <IoDownloadOutline />}
                        </span>
                    </div>
                    {data.tag.isOpen && (
                        <div className={`tag w-full py-4 rounded-fill ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
                            <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
                        </div>
                    )}
                </div>
            </motion.div>
        </>
    );
}

export default Card;
