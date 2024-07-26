import * as React from 'react';
import Blockquote from '../component/Blockquote';

interface IServiceProps {
}

const Service: React.FunctionComponent<IServiceProps> = (props) => {
    const result={
        content:"The confidence of our wise leadership serves as motivation for more sincere and sustained action directed to serve our cherished homeland, which reflects a renewed incentive to continue with progress and advancement under the wise leadership of His Highness Sheikh Mohamed bin Zayed Al Nahyan, UAE President, and His Highness Sheikh Mohammed bin Rashid Al Maktoum, Vice President and Prime Minister of the UAE and Ruler of Dubai and their Highnesses, Members of the Supreme Council and Rulers of the Emirates.",
        author:"AbdulRahman Bin Mohammed Al Owais",
        cite:"Minister of Health & Prevention",
        style:"quote-colored",
        quote:false
    }
    
  return (
      <>
      <h3>Service Page</h3>
      <Blockquote author={result.author} quoto={result.quote} content={result.content} cite={result.cite} style={result.style}/>
      </>
  );
};

export default Service;
