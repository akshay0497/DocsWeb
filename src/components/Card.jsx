import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"


const Card = ({data, reference}) => {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1}} dragElastic={0.2} 
    dragTransition={{bounceStiffness:600, bounceDamping:30}}
    className="relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-200/50 px-8 py-10 overflow-hidden">
      <FaRegFileAlt />
      <p className="text-sm mt-5 font-medium leading-tight">
       {data.desc}
      </p>
      <div className="text-end">
      <p className="italic text-sm mt-5 font-medium leading-tight">
       -{data.authorName}
      </p>
      </div>
      <div className="footer absolute bottom-0 w-full left-0">
        <div className="flex items-center justify-between py-3 mb-5 px-8">
          <h5>{data.filesize}</h5>
          <span className="w-7 h-7 bg-zinc-400 rounded-full flex items-center justify-center">
          {data.close ? <IoClose color="#fff"/>:
            <LuDownload color="white" size=".8em" />
          }
          </span>
        </div>


{
  data?.tagdetails?.isOpen && 
  (      <div className={`tag w-full py-4 ${data?.tagdetails?.tagColor === "blue" ? "bg-blue-600":"bg-green-600"} flex items-center justify-center`}>
          <h3 className="text-sm font-semibold text-white">{data?.tagdetails?.tagTitle} </h3>
        </div>)
}
      </div>

    </motion.div>
  );
};

export default Card;
