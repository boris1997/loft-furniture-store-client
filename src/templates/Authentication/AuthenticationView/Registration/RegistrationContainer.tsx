import { useActions } from "customHooks/useActions";
import { useTypedSelector } from "customHooks/useTypedSelector";
import { useState } from "react";
import AuthenticationForm from "../AuthenticationForm/AuthenticationForm";
import { copyForm } from "../utilities/copiedForm";
import { UserDto } from "../utilities/userDto";
import { registrationFormObj } from "./RegistrationForm";

const RegistrationContainer = () => {
  const [registrationForm, setRegistrationForm] = useState(registrationFormObj);
  const { registrate } = useActions();
  const cart = useTypedSelector(({ cart: { cart } }) => cart);
  const wishList = useTypedSelector(({ wishList: { wishList } }) => wishList);

  const userDto = new UserDto(registrationForm);

  const registrateUser = (e: Event) => {
    e.preventDefault();
    const stringCart = cart.map((cartItem) => JSON.stringify(cartItem));
    const stringWishList = wishList.map((wishListItem) =>
      JSON.stringify(wishListItem)
    );
    registrate(userDto, stringCart, stringWishList);
  };

  const setValue = (key: keyof typeof registrationForm, value: string) => {
    setRegistrationForm(copyForm(registrationForm, key, value));
  };

  return (
    <>
      <AuthenticationForm
        form={registrationForm}
        clicked={registrateUser}
        changed={setValue}
        authTitle={"зарегистрироваться"}
      />{" "}
    </>
  );
};

export default RegistrationContainer;
