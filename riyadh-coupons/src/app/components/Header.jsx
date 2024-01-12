import Star from "./Star";

const Header = () => {
  const YELLOW_COLOR = "#FBC500"
  const BLUE_COLOR = "#021EDD"
  return (
    <header>
      <nav className="flex items-center justify-end gap-6 py-7">
        <h1 className="text-blue-800 text-6xl font-['29LTZaridSlab-Bold']">كوبون الرياض</h1>
        <div className={`w-20 h-20 bg-[#021EDD] rounded-[50%] flex justify-center items-center`}>
          <Star width={"53px"} color={YELLOW_COLOR} />
        </div>
      </nav>
      <div className={`flex justify-center items-center bg-[#FBC500] w-full max-h-[32rem] h-[50svh] rounded-3xl`}>
        <Star width={'190px'} color={BLUE_COLOR} />
      </div>
    </header>
  );
};

export default Header;
