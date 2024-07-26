import * as React from 'react';
import { useState, ReactNode } from "react";
type contentOption = {
  title: string;
  description: ReactNode ;
};
interface IAccordionProps {
  content: contentOption[];
}

const Accordion: React.FunctionComponent<IAccordionProps> = ({ content }) => {
  const [activeId, setActiveId] = useState(null);
  const toggleAccordion = (index: number) => {
    if (activeId === index) {
      setActiveId(null);
    } else {
      setActiveId(index);
    }
  };
  return (
    <div>
      {content.map((item, i) => (
        <div
          className="aegov-accordion [&_.accordion-active_svg]:rotate-180 m-9"
          id="accordion-collapse"
          data-accordion="collapse"
        >
          <div className="accordion-item">
            <div
              className="accordion-title"
              id="aegov-accordion-head-1"
              onClick={() => toggleAccordion(i)}
            >
              <button
                type="button"
                data-accordion-target="#aegov-accordion-body-1"
                aria-expanded="true"
                aria-controls="aegov-accordion-body-1"
              >
                <span>{item.title}</span>
                {activeId === i ? (
                  <svg
                    data-accordion-icon
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                  >
                    <rect width="256" height="256" fill="none" />
                    <polyline
                      points="208 96 128 176 48 96"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="16"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      fill="none"
                      strokeLinejoin="round"
                      d="m4.5 15.75 7.5-7.5 7.5 7.5"
                    />
                  </svg>
                )}
              </button>
            </div>
            <div
              className={
                activeId === i
                  ? "accordion-content block"
                  : "accordion-content hidden"
              }
              id="aegov-accordion-body-1"
              aria-labelledby="aegov-accordion-head-1"
            >
              <div className="accordion-content-body">{item.description}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
