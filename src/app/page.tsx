// 'use client';
// import "regenerator-runtime/runtime";
// import Image from "next/image";
// import React, { useState, ChangeEvent } from "react"; 
// import TextArea from "./components/inputs/TextArea";
// import Navbaar from "./components/Navbaar";
// import SpeechRecognitionComponent from "./components/GetSpeech/SpeechRecognition";
// import { IconFileUpload, IconVolume, IconCopy, IconThumbUp,IconThumbDown,IconStar } from "@tabler/icons-react";
// import FileUpload from "./components/inputs/FileUpload";
// import { Text } from "./utils/Text";
// import LinkPaste from "./components/inputs/LinkPaste"
// import SvgDecorations from "./components/svgDecorations";
// import useTranslate from './hooks/useTranslate'
// import LanguageSelector from "./components/inputs/LanguageSelector"
// import CategoryLinks from "./components/categoryList";

// export default function Home() {
//   const [sourceText, setSourceText] = useState<string>("");
//   const [copied, setCopied] = useState<boolean>(false);
//   const [favourite, setFavourite] = useState<boolean>(false);
//   const [languages] = useState<string[]>(["Hindi", "Japanese", "Chinese", "English", "Russian", "Spanish", "Korean", "Arabic", "German"]);
//   const [selectedLanguage, setSelectedLanguage] = useState<string>("Hindi")
//   const targetText = useTranslate(sourceText, selectedLanguage)

//   const handleAudioPlayback = (text: string) => {
//     const utterance = new SpeechSynthesisUtterance(text);
//     window.speechSynthesis.speak(utterance);
//   };

//   const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => { 
//     const file = event.target.files?.[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = () => {
//         const rtfContent = reader.result as string;
//         const text = Text(rtfContent);
//         setSourceText(text);
//       };
//       reader.readAsText(file);
//     }
//   };

//   const handleLinkPaste = (text: string) =>{};

//   const handleCopyToClipboard = ()=>{
//     navigator.clipboard.writeText(targetText);
//     setCopied(true);
//     setTimeout(()=>{
//       setCopied(false);
//     }, 2000);
//   };

//   const handleFavourite = ()=>{
//     setFavourite(!favourite);
//   }

//   return (
//     <div>
//       <Navbaar />
//       <div className="h-full w-full dark:bg-black dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
//         <div className="">
//           <div className="relative overflow-hidden h-screen">
//             <div className="max-w-[80rem] mx-auto px-4 sm:px-6 py-10 sm:py-24 z-10">
//               <div className="text-center">
//                 <h1 className="text-6xl sm:text-6xl font-bold text-neutral-200 z-10">
//                   Fluent<span className="text-purple-600">X</span>
//                 </h1>
//                 <h4 className="text-neutral-300 mt-5 z-10">Understanding Every Word, Including PDFs</h4>
//                 <div className="mt-7 sm:mt-12 mx-auto max-w-3xl relative">
//                   <div className="grid gap-4 md:grid-cols-2 grid-cols-1">
//                     <div className="relative p-3 z-10 flex flex-col space-x-3 border rounded-lg shadow-lg bg-neutral-900 border-purple-700 shadow-gray-900/20">
//                       <TextArea
//                         id="source-language"
//                         placeholder={'Source Language'}
//                         value={sourceText}
//                         onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
//                           setSourceText(e.target.value);
//                         }}
//                       />
//                       <div className="flex flex-row justify-between w-full">
//                         <span className="cursor-pointer flex space-x-2 flex-row mt-2">
//                           <SpeechRecognitionComponent setSourceText={setSourceText} />
//                           <IconVolume size={22} onClick={() => handleAudioPlayback(sourceText)} className="hover:text-neutral-500"/>
//                           <FileUpload handleFileUpload={handleFileUpload} />
//                           <LinkPaste handleLinkPaste = {handleLinkPaste}/>
//                         </span>
//                         <span className="text-sm pr-4 mt-3">
//                           {sourceText.length}/ 5000
//                         </span>
//                       </div>
//                     </div>

//                     <div className="relative p-3 z-10 flex flex-col space-x-3 border rounded-lg shadow-lg bg-neutral-900 border-purple-700 shadow-gray-900/20">
//                      <TextArea id={'target-language'} 
//                      value={targetText} onChange={()=>{}} 
//                      placeholder={"Target Language"}/>
//                      <div className="flex flex-row justify-between w-full">
//                         <span className="cursor-pointer flex space-x-2 items-center flex-row mb-2 p-1">
//                             <LanguageSelector
//                             selectedLanguage= {selectedLanguage}
//                             setSelectedLanguage= {setSelectedLanguage}
//                             languages= {languages}
//                             />
//                             <IconVolume size={22} onClick={() => handleAudioPlayback(targetText)} className="hover:text-neutral-500"/>
//                         </span>
//                         <div className="flex flex-row items-center space-x-2 pr-4 cursor-pointer ">
//                           <IconCopy size={22} onClick={handleCopyToClipboard} className="hover:text-neutral-500"/>
//                           {copied && <span className="text-xs text-green-500">Copied!!</span>}
//                           <IconThumbUp size={22} className="hover:text-neutral-500"/>
//                           <IconThumbDown size={22} className="hover:text-neutral-500"/>
//                           <IconStar size={22} onClick={()=>{}} className = {favourite ? "text-orange-500":""}/>
//                         </div>
//                      </div>
//                     </div>
//                   </div>
//                   <SvgDecorations/>
//                 </div>
//                 <CategoryLinks/>
//               </div>
//             </div>
//           </div>
//         </div>  
//       </div>  
//     </div>
//   );
// }


'use client';
import "regenerator-runtime/runtime";
import Image from "next/image";
import React, { useState, ChangeEvent, useEffect } from "react"; 
import TextArea from "./components/inputs/TextArea";
import Navbaar from "./components/Navbaar";
import SpeechRecognitionComponent from "./components/GetSpeech/SpeechRecognition";
import { IconFileUpload, IconVolume, IconCopy, IconThumbUp, IconThumbDown, IconStar } from "@tabler/icons-react";
import FileUpload from "./components/inputs/FileUpload";
import { Text } from "./utils/Text";
import LinkPaste from "./components/inputs/LinkPaste"
import SvgDecorations from "./components/svgDecorations";
import useTranslate from './hooks/useTranslate'
import LanguageSelector from "./components/inputs/LanguageSelector"
import CategoryLinks from "./components/categoryList";

export default function Home() {
  const [sourceText, setSourceText] = useState<string>("");
  const [copied, setCopied] = useState<boolean>(false);
  const [favourite, setFavourite] = useState<boolean>(false);
  const [languages] = useState<string[]>(["Hindi", "Japanese", "Chinese", "English", "Russian", "Spanish", "Korean", "Arabic", "German"]);
  const [selectedLanguage, setSelectedLanguage] = useState<string>("Hindi")
  const targetText = useTranslate(sourceText, selectedLanguage)

  const handleAudioPlayback = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  };

  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => { 
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const rtfContent = reader.result as string;
        const text = Text(rtfContent);
        setSourceText(text);
      };
      reader.readAsText(file);
    }
  };

  const handleLinkPaste = (text: string) =>{};

  const handleCopyToClipboard = ()=>{
    navigator.clipboard.writeText(targetText);
    setCopied(true);
    setTimeout(()=>{
      setCopied(false);
    }, 2000);
  };

  const handleFavourite = ()=>{
    setFavourite(!favourite);
  }

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div>
      <Navbaar />
      <div className="h-full w-full dark:bg-black dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
        <div className="">
          <div className="relative overflow-hidden h-screen">
            <div className="max-w-[80rem] mx-auto px-4 sm:px-6 py-10 sm:py-24 z-10">
              <div className="text-center">
              <h1 className={`text-4xl sm:text-6xl lg:text-7xl font-bold text-neutral-200 z-10 transform transition-transform duration-700 ${animate? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                  Fluent<span className="text-purple-600">X</span>
                </h1>
                <h4 className={`text-neutral-300 mt-5 z-10 text-lg sm:text-xl lg:text-2xl transform transition-transform duration-700 ${animate ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                  Understanding Every Word, Including PDFs
                </h4>
                <div className="mt-7 sm:mt-12 mx-auto max-w-3xl relative">
                  <div className="grid gap-4 md:grid-cols-2 grid-cols-1">
                    <div className="relative p-3 z-10 flex flex-col space-x-3 border rounded-lg shadow-lg bg-neutral-900 border-purple-700 shadow-gray-900/20">
                      <TextArea
                        id="source-language"
                        placeholder={'Source Language'}
                        value={sourceText}
                        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
                          setSourceText(e.target.value);
                        }}
                      />
                      <div className="flex flex-row justify-between w-full">
                        <span className="cursor-pointer flex space-x-2 flex-row mt-2">
                          <SpeechRecognitionComponent setSourceText={setSourceText} />
                          <IconVolume size={22} onClick={() => handleAudioPlayback(sourceText)} className="hover:text-neutral-500"/>
                          <FileUpload handleFileUpload={handleFileUpload} />
                          <LinkPaste handleLinkPaste={handleLinkPaste}/>
                        </span>
                        <span className="text-sm pr-4 mt-3">
                          {sourceText.length}/ 5000
                        </span>
                      </div>
                    </div>

                    <div className="relative p-3 z-10 flex flex-col space-x-3 border rounded-lg shadow-lg bg-neutral-900 border-purple-700 shadow-gray-900/20">
                     <TextArea id={'target-language'} 
                     value={targetText} onChange={()=>{}} 
                     placeholder={"Target Language"}
                      
                     />
                     <div className="flex flex-row justify-between w-full">
                        <span className="cursor-pointer flex space-x-2 items-center flex-row mb-2 p-1">
                            <LanguageSelector
                            selectedLanguage= {selectedLanguage}
                            setSelectedLanguage= {setSelectedLanguage}
                            languages= {languages}
                            />
                            <IconVolume size={22} onClick={() => handleAudioPlayback(targetText)} className="hover:text-neutral-500"/>
                        </span>
                        <div className="flex flex-row items-center space-x-2 pr-4 cursor-pointer ">
                          <IconCopy size={22} onClick={handleCopyToClipboard} className="hover:text-neutral-500"/>
                          {copied && <span className="text-xs text-green-500">Copied!!</span>}
                          <IconThumbUp size={22} className="hover:text-neutral-500"/>
                          <IconThumbDown size={22} className="hover:text-neutral-500"/>
                          <IconStar size={22} onClick={handleFavourite} className = {favourite ? "text-orange-500":""}/>
                        </div>
                     </div>
                    </div>
                  </div>
                  <SvgDecorations/>
                </div>
                <CategoryLinks/>
              </div>
            </div>
          </div>
        </div>  
      </div>  
    </div>
  );
}
