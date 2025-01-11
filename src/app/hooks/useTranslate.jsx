import { useEffect, useState } from "react";
import Groq from "groq-sdk"; 

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY, 
});

const useTranslate = (sourceText, selectedLanguage) => {
  const [targetText, setTargetText] = useState("");

  useEffect(() => {
    const handleTranslate = async (sourceText) => {
      try {
        const response = await groq.chat.completions.create({
          model: "llama3-70b-8192", 
          messages: [
            {
              role: "user",
              content: `You will be provided with a sentence. This sentence: 
              ${sourceText}. Your tasks are to:
              - Detect what language the sentence is in
              - Translate the sentence into ${selectedLanguage}
              Do not return anything other than the translated sentence.`,
            },
          ],
        });

        const data = response.choices[0].message.content;
        setTargetText(data);
      } catch (error) {
        console.error("Error translating text:", error);
      }
    };

    if (sourceText.trim()) {
      const timeoutId = setTimeout(() => {
        handleTranslate(sourceText);
      }, 500); 

      return () => clearTimeout(timeoutId);
    }
  }, [sourceText, selectedLanguage]);

  return targetText;
};

export default useTranslate;
