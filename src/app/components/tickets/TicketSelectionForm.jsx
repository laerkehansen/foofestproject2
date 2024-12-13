"use client";
import { useForm } from "react-hook-form";

const TicketSelectionForm = () => {
  const { register } = useForm;
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="grid grid-cols-2 justify-items-center items-center">
      <form>
        {/*  */}
        <h2> vælg biletter type og antal </h2>
        <div className="grid grid-cols-2">
          <label> altal vip 1299,-</label>
          <div className="grid grid-cols-3 gap-2">
            <button className="bg-slate-300">+</button>
            <input type="number" placeholder="0" className="w-14"></input>
            <button className="bg-slate-300">-</button>
          </div>
        </div>

        <div className="grid grid-cols-2">
          <label> antal normla 799,- </label>
          <div className="grid grid-cols-3 gap-2">
            <button className="bg-slate-300">+</button>
            <input type="number" placeholder="0" className="w-14"></input>
            <button className="bg-slate-300">-</button>
          </div>
        </div>

        <button type="submit" className="bg-lime-500">
          okay{" "}
        </button>
      </form>
    </div>
  );
};

export default TicketSelectionForm;
