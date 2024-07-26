import * as React from "react";
import { useState } from "react";
import Dropdown from "../../component/dropdown/Dropdown";

interface ISecurityTabProps {}

const SecurityTab: React.FunctionComponent<ISecurityTabProps> = (props) => {
  const result = [
    { label: "india", value: "1" },
    { label: "UAE", value: "2" },
    { label: "USA", value: "3" },
  ];
  const [item, setItem] = useState("");
  return (
    <>
      <h3>Security Tab</h3>

      {item && (
        <div>
          Selected Value:<h4>{item}</h4>
        </div>
      )}
      <Dropdown
        data={result}
        value={item}
        onchange={(val: string) => {
          setItem(val);
        }}
      />
    </>
  );
};

export default SecurityTab;
