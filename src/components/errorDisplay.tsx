export const ErrorDisplay = ({ message }: { message: string }) => (
  <div className="flex justify-center items-center min-h-screen font-mono text-red-600">
    <p>Error: {message}</p>
  </div>
);
