import React, { ReactNode } from "react";
interface ObjCls{
  parent:[] |null;
  child:[] |null;
  subchild:[];
  svgchild:[];
}
interface IBannerProps {
  note: string;
  action: string;
  style?: string;
  styleColor?:string;
  cls?:string;
}

const Banner: React.FunctionComponent<IBannerProps> = ({ note, action, style,styleColor,cls }) => {
console.log('ss',cls)
  return (
    <>
      <div >
        <div className="container">
          <div className={`text-camel-50 banner-content flex flex-wrap md:flex-nowrap items-center md:justify-center gap-3 ${styleColor? styleColor:''}`}>
            {note}
            <a href="#" className={`banner-link aegov-link link-underline `}>
              {action}
              <svg
                className="w-5 h-5 rtl:-scale-x-100"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
              >
                <rect width="256" height="256" fill="none"></rect>
                <polyline
                  points="96 48 176 128 96 208"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></polyline>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
