import React from "react";
import "antd/dist/antd.css";
import "./ListSideBarMenu.css";
import { Radio, Checkbox } from "antd";

const ListSideBarMenu = (props) => {

  return (
    <div className={`side ${!props.hideNav ? "side-fix" : ""}`}>
      <h2 className="title">{props.mainCategory}</h2>
      <div className="side-title">
        <div>
          <h2 className="name">{props.category_name}</h2>
        </div>
        <div>
          <h2 className="Sort-by">Sort by</h2>
        </div>
        <div className="radio-group-t">
          <Radio.Group size="large" name="radiogroup" defaultValue={1}>
            <Radio value={1}>New In</Radio>
            <Radio value={2}>Discount(Hirgh first)</Radio>
            <Radio value={3}>Discount(Low first)</Radio>
            <Radio value={4}>Price(Hirgh first)</Radio>
            <Radio value={5}>Price(Low first)</Radio>
          </Radio.Group>
        </div>
        <div className="checkbox">
          <Checkbox onChange={props.onChange}>
            <span>SALES</span>
          </Checkbox>
        </div>
      </div>
    </div>
  );
};

export default ListSideBarMenu;
