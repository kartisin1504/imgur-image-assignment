import { useRouteError } from "react-router-dom";
const Error = () => {
  const error = useRouteError();
  let title='an error';
  let message='error message';
  if (error!== undefined && error.status === 500) {
    title = "could not fetch event";
    message = error.data.message;
  }
  if (error.status === 404) {
    title = "resource not found";
    message = error.data.message;
  }

  return (
    <>
      <h1>{title}</h1>
      <p>{message}</p>
    </>
  );
};
export default Error;
