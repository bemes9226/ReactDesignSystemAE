import * as React from 'react';
import logo from '../../assets/icons/download.png'
import Accordion from '../component/accordion/Accordion';

interface IAboutProps {
}

const About: React.FunctionComponent<IAboutProps> = (props) => {
    const result={
        mainTitle:"The UAE Hackathon",
        linkTitle:"View details",
         imgSrc:logo,
        paraContent:"This initiative will create an opportunity for hundreds of young people to use open data as a tool for innovation and to boost economic growth. Youth will be able to analyse data and come up with solutions that will advance the UAE towards a prosperous and happy future"
    }
    const content = [
        {
          title: "What is the meaning of a design system?",
          description:
            "A Design System is a comprehensive set of standards, documentation, principles, and components that guide the creation of a digital product's user interface (UI)    It acts as a single source of truth for designers, developers, and other stakeholders, ensuring consistency across different parts of a product and even across different products within the same brand. The goal is to accelerate the design and development process, improve user experience, and maintain a coherent visual and functional language.",
        },
        {
          title: "What are components?",
          description:
            "Components are a crucial part of any design system. They are reusable parts of a UI, like buttons, form fields, or navigation menus, and they're defined both in terms of their appearance and their behavior.",
        },
        {
          title: "What else is part of a design system?",
          description:
            "A well-structured design system will also include usage guidelines for each component, detailing when and how it should be used. Besides components, a design system often includes standards for layout, typography, color, iconography, and more.",
        },
      ];
  return (
      <>
      <h5>About Page</h5>
      <Accordion content={content} />
      </>
  );
};

export default About;
