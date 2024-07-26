import * as React from 'react';
import Banner from '../component/Banner';
import Tabs from '../component/tabs/Tabs';
import SecurityTab from './TabsPages/SecurityTab';

interface IAppProps {
}

const Product: React.FunctionComponent<IAppProps> = (props) => {
    const result={
        note:"Upgrading your account to be used with UAE Pass is now active.",
        action:"Connect your account to UAE PASS",
        style:"bg-camel-600",
        styleColor:"text-camel-50"
    }
   const tabs=[
      { name: "Security", link: "#", content: <SecurityTab /> },
      { name: "Laws & Regulations", link: "#", content: <h4>Laws & Regulations Content</h4> },
      { name: "Open Data", link: "#", content: "Open Data" },
    ];
  return (
    <div>
  <Banner note={result.note} action={result.action} style={result.style} styleColor={result.styleColor}/>
  <Tabs tabs={tabs}/>
  </div>
  );
};

export default Product;
