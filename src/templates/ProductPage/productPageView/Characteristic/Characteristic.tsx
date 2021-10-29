import { useTypedSelector } from "customHooks/useTypedSelector";
import React, { FC } from "react";
import { RootStateOrAny } from "react-redux";
/* import { CharacteristicType } from "types";
 */
const Characteristic: FC = () => {
  // let { info } = useTypedSelector(
  //   /* <
  //   IProductElementsExtended & IProductElementsWithImg,
  //   IProductElementsExtended & IProductElementsWithImg
  // > */ ({ product: { product } }: RootStateOrAny) => product
  // );
  // на потом
  /*   let characteristics = info.map(
        ({ id, title, description }: CharacteristicType) => (
          <Characteristic key={id} title={title} description={description} />
        )
      ); */
  return (
    <div>
      {/*      <span>{title}</span>
            <span></span>
            <span>{description}</span> */}
    </div>
  );
};

export default Characteristic;
