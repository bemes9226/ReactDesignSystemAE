import * as React from "react";
import {tabOptions} from './tabsInteface';
interface ITabsProps {
  tabs:tabOptions[];
}

const Tabs: React.FunctionComponent<ITabsProps> = ({tabs}) => {
    const [tabOpen,setTabOpen]=React.useState(tabs[0].name);
  return (
    <div className="mx-4">
      <div className="aegov-tab">
        <ul
          className="tab-items gap-4 md:gap-6 lg:gap-7 xl:gap-8 max-xl:overflow-auto"
          data-tabs-toggle="#SampleLayout-Tabs-01"
          role="tablist"
        >
            {tabs.map(item=>
          <li role="presentation" key={item.name}>
            <a
              href={item.link}
              onClick={()=>setTabOpen(item.name)}
              data-tabs-target="#body-item1-sample-01"
              role="tab"
              id="tab-item1-sample-01"
              aria-controls="body-item1-sample-01"
              className={`tab-link whitespace-nowrap ${item.name === tabOpen ? 'tabs-bgborder':''}`}
            >
              {item.name}
            </a>
          </li>
          )}
         </ul>
      </div>
      <div id="SampleLayout-Tabs-01" className="py-4 flex">
          {tabs.map(item=>           
        <div className={`tab-content  ${item.name === tabOpen ? 'block ':'hidden'}`} role="tabpanel" id="body-item1-sample-01">
          <p>{item.content}</p>
        </div>
         )}
      </div>
    </div>
  );
};

export default Tabs;
