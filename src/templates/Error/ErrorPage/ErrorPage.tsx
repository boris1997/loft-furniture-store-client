import { FC, useEffect } from "react";
import { useActions } from "customHooks/useActions";
import WithSection from "components/Section/WithSection/WithSection";
import { IError } from "templates/Error/types";
import errorClasses from "./ErrorPage.module.scss";
import { Link } from "react-router-dom";

const ErrorPage: FC<IError> = ({ status, message, children }) => {
  return (
    <WithSection>
      <div className={errorClasses.error}>
        <h2>Упс! Что-то пошло не так </h2>
        <p>
          {status} {message}. <Link to="/"> Вернуться на главную</Link>
        </p>

        <div className={errorClasses.content}>{children}</div>
      </div>
    </WithSection>
  );
};

export default ErrorPage;
