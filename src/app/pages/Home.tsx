import * as React from 'react';
import Banner from "../component/Banner";
import Card from "../component/Card";
// import logo from "../../assets/icons/download.png";
// import learn from "../../assets/icons/download.png";
interface IAppProps {}

const Home: React.FunctionComponent<IAppProps> = (props) => {
  const banner = {
    note: "Upgrading your account to be used with UAE Pass is now active.",
    action: "Connect your account to UAE PASS",
  };
  const card = {
    mainTitle: "The UAE Hackathon",
    linkTitle: "View details",
    imgSrc: '',
    paraContent:
      "This initiative will create an opportunity for hundreds of young people to use open data as a tool for innovation and to boost economic growth. Youth will be able to analyse data and come up with solutions that will advance the UAE towards a prosperous and happy future",
    classData: "m-4",
  };
  const cardDetail = {
    mainTitle: "The UAE Hackathon",
    linkTitle: "View details",
    imgSrc: '',
    paraContent:
      "This initiative will create an opportunity for hundreds of young people to use open data as a tool for innovation and to boost economic growth. Youth will be able to analyse data and come up with solutions that will advance the UAE towards a prosperous and happy future",
    classData: "m-4",
  };

  return (
    <div>
      <Banner note={banner.note} action={banner.action} cls="aegov-banner banner-top bg-camel-600 border-camel-500"/>
      <div className="flex flex-container mt-2">
        <Card
          imgSrc={card.imgSrc}
          linkTitle={card.linkTitle}
          mainTitle={card.mainTitle}
          paraContent={card.paraContent}
          classData={card.classData}
        />
        <Card
          imgSrc={cardDetail.imgSrc}
          linkTitle={cardDetail.linkTitle}
          mainTitle={cardDetail.mainTitle}
          paraContent={cardDetail.paraContent}
          classData={card.classData}
        />
      </div>
    </div>
  );
};

export default Home;
