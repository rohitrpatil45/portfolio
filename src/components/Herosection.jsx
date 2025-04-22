import React, { useEffect, useState } from "react";
import "../components/herosection.css";

function Herosection() {

  const words = ['Javascript','Nodejs','React' ,"Frontend" ,"backend",]
  const [correntWord , setCurrentWord] = useState(words[0])
  const [index , setindex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setindex((prevalue) => (prevalue + 1) % words.length)
      setCurrentWord(words[index])
      // console.log(correntWord)
      
    }, 2000);
    return () => {
      clearInterval(interval)
      
    };
  }, [words]);
  return (
    <>
      <div className="heromainsection">
        <div className="mainleft">
          <span className="hey-here-text">hey here</span>
          <div className="main-heading-container">
            <span className="iam-span">
              I ‘m <span className="rohit-span">Rohit Patil</span>
            </span>
          </div>
          <div className="web-app-developer">
            <span className="iamdev-container">
              I am a Web App Developer in
              <span className="changing-text-container"> {correntWord}</span>
            </span>
          </div>
        </div>
        <div className="mainright">
          f
        </div>
      </div>
    </>
  );
}

export default Herosection;
