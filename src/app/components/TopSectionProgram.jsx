const TopSectionProgram = () => {
  return (
    <section className="grid grid-cols-[0.1fr_1fr_0.1fr] py-10 pt-24">
      <h1 className="text-8xl italic font-Inter font-extrabold col-start-2 col-end-3">
        FOO PROGRAM
      </h1>
      <form action="" className="col-start-2">
        <fieldset className="flex gap-4">
          <legend className="hidden">Ugedag</legend>
          <p>
            <label htmlFor="1">Mandag</label>
            <input type="checkbox" name="Mandag" id="1" value="mon" />
          </p>
          <p>
            <label htmlFor="2">Tirsdag</label>
            <input type="checkbox" name="Tirsdag" id="2" value="tue" />
          </p>
          <p>
            <label htmlFor="3">Onsdag</label>
            <input type="checkbox" name="Onsdag" id="3" value="wed" />
          </p>
          <p>
            <label htmlFor="4">Torsdag</label>
            <input type="checkbox" name="Torsdag" id="4" value="thu" />
          </p>
          <p>
            <label htmlFor="5">Fredag</label>
            <input type="checkbox" name="Fredag" id="5" value="fri" />
          </p>
          <p>
            <label htmlFor="6">lørdag</label>
            <input type="checkbox" name="Lørdag" id="6" value="sat" />
          </p>
          <p>
            <label htmlFor="7">Søndag</label>
            <input type="checkbox" name="Søndag" id="7" value="sun" />
          </p>
        </fieldset>
      </form>
    </section>
  );
};

export default TopSectionProgram;
