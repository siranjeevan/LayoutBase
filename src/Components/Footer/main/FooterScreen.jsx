import FooterLogo from "../FooterLogo";
import FooterSiteName from "../FooterSiteName";
import CompanyIntro from "../CompanyIntro";

function FooterScreen() {
  return (
    <div className=" flex flex-row items-center text-[1vw] w-420 h-70 bg-[#d7b6ff]  fixed bottom-2 left-1/2 transform -translate-x-1/2 rounded-[3vw] shadow-lg text-white font-semibold">
      
      <div>

        <div className="flex flex-row mt-0 ml-10">
          <FooterLogo />
          <FooterSiteName />
        </div>

        <div className="flex flex-column w-100 text-[0.8vw] ml-20  text-black mt-5">
          <CompanyIntro />
        </div>

      </div>


    </div>
  );
}
export default FooterScreen;
