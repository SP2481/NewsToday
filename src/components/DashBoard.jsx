import CenterDash from "./Dash/CenterDash";
import LeftDash from "./Dash/LeftDash";

function DashBoard({ sendcategory }) {
  return (
    <>
      <div className="flex lg:gap-12 justify-center mt-4 ">
        <LeftDash />
        <CenterDash category={sendcategory} />
      </div>
    </>
  );
}

export default DashBoard;
