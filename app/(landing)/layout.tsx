import Footer from "@/components/footer";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="">
      <div className="mx-auto max-w-screen-xl bg-inherit  w-full">
        {children}
      </div>
    </main>
  );
};

export default LandingLayout;
