const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="">
        <div className="mx-auto max-w-screen-xl w-full">
        {children}
      </div>
    </main>
  );
};

export default LandingLayout;
