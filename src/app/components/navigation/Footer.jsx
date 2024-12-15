const Footer = () => {
  return (
    <section className="bg-black p-8 text-background grid gap-10 grid-cols-[0.1fr_1fr_1fr_1fr_0.1fr] grid-rows-[auto_1fr] py-14">
      <h1 className="uppercase text-green italic font-Inter font-bold sm:text-xl text-4xl sm:leading-[0.7] lg:leading-[0.7] lg:text-3xl col-start-2">
        foo <br /> fest
      </h1>
      <div className="flex row-start-2 col-start-2 col-end-5 justify-between">
        <div>
          <ul>
            <li>Guldbergsgade 5, 2300</li>
            <li>København K</li>
            <li>+45 84 84 84 84</li>
            <li>Info@foofest.dk</li>
          </ul>
        </div>
        <div className=" flex gap-16 lowercase">
          <div>
            <ul>
              <li>ABOUT</li>
              <li>PROGRAM</li>
              <li>TICKETS</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>FAQ</li>
              <li>TERMS & CONDITIONS</li>
              <li>PRIVACY POLICY</li>
              <li>COOKIE POLICY</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
