"use client";

import { useState, useEffect } from "react";
import { getSchedule } from "../lib/api";
import TopSectionProgram from "./TopSectionProgram";
import ProgramItemPt2 from "./ProgramItemPt2";

const Programlist = ({ schedule }) => {
  console.log("ProgramList schedule:", schedule);
  return (
    <>
      <TopSectionProgram />
      <section className="grid grid-cols-[0.1fr_1fr_0.1fr]">
        <div className="col-start-2">
          <ProgramItemPt2 schedule={schedule} />
        </div>
      </section>
    </>
  );
};

export default Programlist;
