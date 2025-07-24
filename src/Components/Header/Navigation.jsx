import { useNavigate } from "react-router-dom";

function Navigation() {
  const navigate = useNavigate();
  return (
    <div className="flex-row flex items-center justify-between space-x-7 text-[1vw] ml-130 ">
      <button onClick={() => navigate("/")}>Home </button>
      <button onClick={() => navigate("/destination")}> Destination</button>
      <button onClick={() => navigate("/experience")}>Experience</button>
      <button onClick={() => navigate("/about")}>About Us</button>
      <button onClick={() => navigate("/contact")}>Contact</button>
    </div>
  );
}
export default Navigation;