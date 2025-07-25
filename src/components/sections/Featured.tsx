import { Card } from "../ui/Card";

export const Featured = () => {
  return (
    <section className="max-w-[1440px] w-full flex flex-col items-center">
      <h2 className="text-3xl mb-[32px]">Ofertas Destacadas</h2>
      <div className="flex w-full justify-around">
        <Card/>
        <Card/>
      </div>
    </section>
  );
};
