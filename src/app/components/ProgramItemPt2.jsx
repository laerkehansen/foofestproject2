const ProgramItemPt2 = ({ schedule }) => {
  console.log("Schedule received in ProgramItemPt2:", schedule); // Debugging

  return (
    <>
      <ul>
        {schedule.Midgard.mon.map((event, index) => (
          <div key={index}>
            <h2>{event.act}</h2>
            <p>{event.start}</p>
            <p>{event.end}</p>
          </div>
        ))}
      </ul>
    </>
  );
};

export default ProgramItemPt2;

//   const {
//     Midgaard = "Ukendt Scene", // Fallback hvis Midgaard mangler
//     mon = [],
//     tue = [],
//     wed = [],
//     thu = [],
//     fri = [],
//     sat = [],
//     sun = [],
//   } = schedule || {}; // Fallback hvis schedule er null/undefined

{
  /* <h1 className="text-8xl font-Inter">{Midgaard}</h1> */
}
{
  /* <ul>
  {mon.length > 0 ? (
    mon.map((event, index) => (
      <div key={index}>
        <h2>{event.act}</h2>
        <p>{event.start}</p>
        <p>{event.end}</p>
      </div>
    ))
  ) : (
    <p>Ingen aktiviteter mandag.</p>
  )}
</ul> */
}
