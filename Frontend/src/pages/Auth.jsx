export const Auth = ({ children }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f0f4f8] px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        {children}
      </div>
    </div>
  );
};
