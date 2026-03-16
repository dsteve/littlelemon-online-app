import "@/index.css";

import unfold from "@assets/triangle-down.svg";
import fold from "@assets/triangle-up.svg";

import React, { useState, createContext, useContext } from "react";

const AccordionGroupContext = createContext();

export function AccordionGroup({ children }) {

  /*  TO BE REENGINEERED
  // Set of Accordion elements in the accordion group.
  // The set is initially empty and each new Accordion element needs to register to the group to get an ID.
  const [group, SetGroup] = useState([]);


  const register = () => {
    const newID = group.length;
    SetGroup([...group, newID])
    return newID;
  };

  const stateUpdate = (id, state) => {
    // This is a callback function to collect the ID and state of any <Accordion> child which was opened or closed
    // and force any currently opened  <Accordion> child to close.
    if (state === "opened") {
        1;
      }
  };
*/
  return (
    <AccordionGroupContext.Provider
      value={{ register: null, stateUpdate: null }}
    >
      {children}
    </AccordionGroupContext.Provider>
  );
}

export function Accordion({
  initialState,
  extension,
  children,
}) {
  const [id, setId] = useState(null);
  const [state, setState] = useState(initialState);

  // If this accordion is part of a group of accordions ...
  const {register=null, stateUpdate=null}  = useContext(AccordionGroupContext);
  if (register) {
    if (!id) setId(register());
  }

  const handleClick = () => {
    state === "closed" ? setState("opened") : setState("closed");
    if (stateUpdate) stateUpdate(id, state);
  };

  return (
    <div className="grid">
      <div className="flex justify-between">
        {children}
        <div className="aspect-square w-15 p-2">
          <button type="button" onClick={handleClick}>
            {state === "closed" ? (
              <img
                src={unfold}
                alt="unfold"
                className="w-full h-full object-cover object-center"
              />
            ) : (
              <img
                src={fold}
                alt="fold"
                className="w-full h-full object-cover object-center"
              />
            )}
          </button>
        </div>
      </div>
      <div className="bg-primary-green border-5  border-[#D9D9D9]">
        {state == "opened" && extension}
      </div>
    </div>
  );
}
