import { useActions } from "customHooks/useActions";
import { useTypedSelector } from "customHooks/useTypedSelector";
import { useState } from "react";
import AuthenticationForm from "../AuthenticationForm/AuthenticationForm";
import { copyForm } from "../utilities/copiedForm";
import { UserDto } from "../utilities/userDto";
import { loginFormObj } from "./LoginForm";

const LoginContainer = () => {
  const [loginForm, setLoginForm] = useState(loginFormObj);
  const { login } = useActions();
  const cart = useTypedSelector(({ cart: { cart } }) => cart);
  const wishList = useTypedSelector(({ wishList: { wishList } }) => wishList);

  const userDto = new UserDto(loginForm);

  const loginUser = (e: Event) => {
    e.preventDefault();
    const stringCart = cart.map((cartItem) => JSON.stringify(cartItem));
    const stringWishList = wishList.map((wishListItem) =>
      JSON.stringify(wishListItem)
    );
    login(userDto, stringCart, stringWishList);
  };

  const setValue = (key: keyof typeof loginForm, value: string) => {
    setLoginForm(copyForm(loginForm, key, value));
  };

  return (
    <>
      <AuthenticationForm
        form={loginForm}
        clicked={loginUser}
        changed={setValue}
        authTitle={"Войти"}
      />{" "}
    </>
  );
};

export default LoginContainer;
