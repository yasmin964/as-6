// _error.tsx

import { NextPageContext } from 'next';

interface ErrorProps {
  statusCode: number;
}

const Error = ({ statusCode }: ErrorProps) => {
  return (
    <div>
      <h1>Error {statusCode}</h1>
      <p>Something went wrong!</p>
    </div>
  );
};

Error.getInitialProps = ({ res, err }: NextPageContext): ErrorProps => {
  const statusCode = res?.statusCode ?? err?.statusCode ?? 404;
  return { statusCode };
};
export default Error;
