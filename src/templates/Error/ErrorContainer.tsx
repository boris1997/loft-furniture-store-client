import React, { FC, useEffect } from "react";
import notFoundVideo from "assets/video/notFound/notFound.mp4";
import Video from "components/Video/Video";
import { useActions } from "customHooks/useActions";
import { IError } from "./types";
import ErrorPage from "./ErrorPage/ErrorPage";

const ErrorContainer: FC<IError> = ({ status, message, data }) => {
  const { resetError } = useActions();

  useEffect(() => {
    if (data) {
      resetError();
    }
  }, [data]);
  const errorContent = (
    <Video autoPlay loop muted src={notFoundVideo} type="video/mp4" />
  );

  return (
    <>
      {/* <WithSection>
          {status}
          {message}
          <video autoPlay loop muted>
            <source src={notFoundVideo} type="video/mp4" />
          </video>
        </WithSection> */}
      <ErrorPage status={status} message={message}>
        {errorContent}
      </ErrorPage>
    </>
  );
};

export default ErrorContainer;
