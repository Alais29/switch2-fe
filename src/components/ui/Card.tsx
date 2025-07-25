import { Badge } from "./Badge";

export const Card = () => {
  return (
    <div className="p-7 max-w-[450px] m-3 bg-white rounded-[18px] overflow-auto shadow-[0px_4px_14px_0px_#00000040]">
      <img className="" src="/images/console-box.webp" alt="" />
      <div className="text-gray-sw flex flex-col gap-2.5">
        <h3>Consola Nintendo Switch 2</h3>
        <Badge />
        <span className="text-4xl">$654.000</span>
        <span>
          Tienda: <a href="">WePlay</a>
        </span>
      </div>
    </div>
  );
};
