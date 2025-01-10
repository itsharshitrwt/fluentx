'use client'
import Image from "next/image";
import React , {useState, ChangeEvent} from "react"; 
import TextArea from "./components/inputs/TextArea";
import Navbaar from "./components/Navbaar"
export default function Home() {
  const [sourceText, setSourceText] = useState<string>("");
  return (
    <div >
      <Navbaar/>
      <div className="h-full w-full dark:bg-black dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
      <div className="">
        <div className="relative overflow-hidden h-screen">
             <div className="max-w-[80rem] mx-auto px-4 sm:px-6 py-10 sm:py-24 z-10">
                <div className="text-center">
                    <h1 className="text-6xl sm:text-6xl font-bold text-neutral-200 z-10">Fluent<span className="text-purple-600">X</span></h1>
                    <h4 className="text-neutral-300 mt-5 z-10">Understanding Every Word, Including PDFs</h4>
                    <div className="mt-7 sm:mt-12 mx-auto max-w-3xl relative">
                      <div className="grid gap-4 md:grid-cols-2 grid-cols-1">
                        <div className="relative z-10 felx flex-col space-x-3 border rounded-lg shadow-lg bg-neutral-900 border-purple-700 shadow-gray-900/20">
                          <TextArea
                          id="source-language"
                          placeholder={'Source Language'}
                          value={sourceText}
                          onChange={(e: ChangeEvent<HTMLTextAreaElement>)=>{
                            setSourceText(e.target.value);
                          }}
                          />
                          <div className="flex flex-row justify-between w-full">
                            <span className="cursor-pointer flex space-x-2 flex-row">
                              
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
             </div>
        </div>
      </div>
        
    </div>  
       
    </div>
  );
}


