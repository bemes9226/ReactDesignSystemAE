import * as React from 'react';
import { SyntheticEvent, useState } from 'react';
import Dropdown from './dropdown/Dropdown';
import Accordion from './accordion/Accordion';

export interface IAppProps {
    children:string;
    style:{};
    onClick:React.MouseEventHandler<HTMLElement>;
}
const content = [
  {
    title: "What is the meaning of a design system?1",
    description: "A Design System is a comprehensive set of standards, documentation, principles, and components that guide the creation of a digital product's user interface (UI)    It acts as a single source of truth for designers, developers, and other stakeholders, ensuring consistency across different parts of a product and even across different products within the same brand. The goal is to accelerate the design and development process, improve user experience, and maintain a coherent visual and functional language.",
  }, {
      title: "What are components?2",
      description: "Components are a crucial part of any design system. They are reusable parts of a UI, like buttons, form fields, or navigation menus, and they're defined both in terms of their appearance and their behavior.",
    },
    {
      title: "What else is part of a design system?3",
      description: "A well-structured design system will also include usage guidelines for each component, detailing when and how it should be used. Besides components, a design system often includes standards for layout, typography, color, iconography, and more.",
    },
];

export default function App (props: IAppProps) {
    const {children,style,onClick}=props;
    const [item,setItem]=useState('');
    const result=[{label:"india",value:"1"},{label:"UAE",value:"2"},{label:"USA",value:"3"}];
  return (
    <div>
      <button className="aegov-btn" style={style?style:{background:"red"}} onClick={onClick} type="button">{children}</button>
      {/* <Dropdown data={result} value={item} onchange={(val:string)=>{setItem(val)}} /> */}
    
    </div>
  );
}
