import React, { useState } from "react";
import "./styles.css";
function CoinInfo({ heading, desc, descInKo }) {
  const [inEng, setInEng] = useState(false);
  let shortDesc;
  let longDesc;

  if(inEng){
   shortDesc = desc.slice(0, 350) + "<p style='color:var(--grey)'> Read More...</P>";
  longDesc = desc + "<p style='color:var(--grey)'> Read Less</p>";
  }else{
   shortDesc = descInKo.slice(0, 350) + "<p style='color:var(--grey)'> Read More...</P>";
 longDesc = descInKo + "<p style='color:var(--grey)'> Read Less</p>";
  }
  

  const [flag, setFlag] = useState(false);
  

  const handleLanguage = () => {
    setInEng(!inEng);
  }

  return (
    <div className="grey-wrapper">
      <div onClick={handleLanguage}>
        {inEng ? (
          <h1 className="coin-info-heading">{heading}/(Eng) </h1>
        ) : (
          <h1 className="coin-info-heading">{heading}/(Korea) </h1>
        )}
      </div>

      {desc.length > 350 ? (
        <p
          onClick={() => setFlag(!flag)}
          className="coin-info-desc"
          dangerouslySetInnerHTML={{ __html: !flag ? shortDesc : longDesc }}
        />
      ) : (
        <p dangerouslySetInnerHTML={{ __html: desc }} />
      )}
    </div>
  );
}

export default CoinInfo;
