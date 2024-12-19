const Footer = () => {
  return (
    <section className="bg-black p-8 text-background md:grid gap-10 md:grid-cols-[0.1fr_1fr_1fr_1fr_0.1fr] md:grid-rows-[auto_1fr] max-sm:flex max-sm:flex-col py-14">
      <h1 className="uppercase text-green italic font-Inter font-bold sm:text-xl text-4xl sm:leading-[0.7] lg:leading-[0.7] lg:text-3xl col-start-2">
        foo <br /> fest
      </h1>
      <div className="flex md:row-start-2 sm:col-start-2 sm:col-end-5 justify-between max-sm:flex-col max-sm:gap-8">
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
