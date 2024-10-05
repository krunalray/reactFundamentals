import React, { useState } from "react";

export default function ListShow({list}) {
  return (
    <div>
      {list.length > 0 &&
        list.map((item) => {
          return <li key={item}>{item}</li>;
        })}
    </div>
  );
}
