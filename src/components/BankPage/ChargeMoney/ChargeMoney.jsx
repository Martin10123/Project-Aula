import { photoUser } from "../../../images";

export const ChargeMoney = () => {
  return (
    <section className="chargeMoney__container">
      <div className="chargeMoney__content">
        <div className="chargeMoney__image">
          <img src={photoUser} alt="" />
          <p>Martin Elias</p>
        </div>
      </div>
    </section>
  );
};
