// const ProgramItemPt2 = ({ schedule }) => {
//   console.log("Schedule received in ProgramItemPt2:", schedule); // Debugging

// Brug Object.entries() til at iterere gennem hver scene i schedule
// const filteredSchedule = Object.entries(schedule).reduce(
//   (acc, [scene, days]) => {
// For hver scene, iterer gennem dagene og filtrer events
// const daysWithFilteredEvents = Object.entries(days).map(
//   ([day, events]) => {
//     return {
//       day,
//       events: events.filter(
//         (event) =>
//           !event.act.toLowerCase().includes("break") &&
//           !event.start.toLowerCase().includes("break") &&
//           !event.end.toLowerCase().includes("break")
//       ),
//     };
//   }
// );

// Tilføj den filtrerede liste af dage for scenen til accumulator
//     acc[scene] = daysWithFilteredEvents;
//     return acc;
//   },
//   {}
// );

//   return (
//     <>
//       <ul className="grid grid-cols-[0.1fr_1fr_2fr_0.1fr] gap-2">
//         {Object.entries(filteredSchedule).map(([scene, days]) => (
//           <div
//             key={scene}
//             className="grid grid-cols-[0.5fr_2fr] col-start-2 border-black col-end-4 border-b-2 py-8 gap-4"
//           >
//             <h2 className="font-Inter text-5xl italic font-extrabold">
//               {scene}
//             </h2>
//             {days.map(({ day, events }) => (
//               <div key={day} className="flex gap-4 col-start-2">
//                 <h3 className="text-2xl">{day}</h3>
//                 <ul className="w-full grid gap-2">
//                   {events.map((event, index) => (
//                     <li
//                       key={index}
//                       className="flex gap-4 justify-between border-2 border-black p-4"
//                     >
//                       <h4 className="font-Inter text-2xl italic font-extrabold">
//                         {event.act}
//                       </h4>
//                       <div className="flex gap-2 items-center">
//                         <p>{event.start}</p>
//                         <p>{event.end}</p>
//                       </div>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         ))}
//       </ul>
//     </>
//   );
// };

// export default ProgramItemPt2;
