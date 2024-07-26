import * as React from 'react';
import { ReactNode } from 'react';
interface ICardProps {
    imgSrc?:string;
    mainTitle:string;
    paraContent:string;
    svgContent?:ReactNode;
    linkTitle:string;
    classData?:string;
}

const Card: React.FunctionComponent<ICardProps> = ({imgSrc,mainTitle,linkTitle,paraContent,svgContent,classData}) => {
  
  return (
<div className={`aegov-card card-bordered card-glow !shadow-primary-500/30 ${classData?classData:""}`}>
	{imgSrc?<img src={imgSrc} className="w-full h-auto rounded-xl"/>:svgContent}
	<h5>{mainTitle}</h5>
	<p className="line-clamp-4">{paraContent}</p>
	<div className="block">
		<a href="#" className="aegov-link" title="Some link text related description">
		{linkTitle}
			<svg className="link-icon rtl:-scale-x-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none" /><line x1="40" y1="128" x2="216" y2="128" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /><polyline points="144 56 216 128 144 200" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /></svg>
		</a>
	</div>
</div>
  );
};

export default Card;
