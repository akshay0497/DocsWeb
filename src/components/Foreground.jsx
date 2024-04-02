import React, { useRef } from "react";
import Card from "./Card";

const Foreground = () => {

  const ref = useRef(null)

  const data = [
    {
      id: 9870,
      desc: "Courage to continue matters more than success or failure.",
      authorName:"Winston Churchill",
      filesize: "201kb",
      close: false,
      tagdetails: { id: 1, isOpen:false, tagTitle:"Download now...", tagColor:"green" },
    },
    {
      id: 9871,
      desc: "Doubts today shouldn’t limit tomorrow’s possibilities.",
      authorName:"Franklin D. Roosevelt",
      filesize: "102kb",
      close: true,
      tagdetails: { id: 1, isOpen:true, tagTitle:"Upload", tagColor:"green" },
    },
    {
      id: 9872,
      authorName:"Steve Jobs",
      desc: "Great work comes from loving what you do.",
      filesize: "0.9mb",
      close: false,
      tagdetails: { id: 1, isOpen:true, tagTitle:"Download now...", tagColor:"blue" },
    },
    {
      id: 9873,
      authorName:"Bill Gates",
      desc: "Success can be misleading; it can lure intelligent individuals into a false sense of invincibility.",
      filesize: "0.9mb",
      close: true,
      tagdetails: { id: 1, isOpen:false, tagTitle:"Upload", tagColor:"green" },
    },
  ];
  return (
    <div ref={ref} className="fixed top-0 left-0  z-[3] w-full h-full flex gap-10 flex-wrap p-5 bg-zinc-700/60 ">
      {data.map((item, index)=>(
      <Card data={item} reference ={ref}/>
      ))}
    </div>
  );
};

export default Foreground;
