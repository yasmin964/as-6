// _error.tsx
const Error = ({ statusCode }) => {
  return (
    <div>
      <h1>Error {statusCode}</h1>
      <p>Something went wrong!</p>
    </div>
  );
};
Error.getInitialProps = ({ res, err }) => {
  const statusCode = res?.statusCode ?? err?.statusCode ?? 404;
  return { statusCode };
};
export default Error;
//# sourceMappingURL=_error.jsx.map
