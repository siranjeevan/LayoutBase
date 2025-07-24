import FooterLogo from "../FooterLogo";
import FooterSiteName from "../FooterSiteName";
import CompanyIntro from "../CompanyIntro";
import CompanyLinks from "../CompanyLinks";
import HelperLink from "../HelpLinks";
import NewsletterSubscribe from "../NewsletterSubscribe";
import SocialLinks from "../SocialLinks";

function FooterScreen() {
  return (
    <>
      <div className="  items-center text-[1vw] w-420 h-70 bg-[#d7b6ff]  fixed bottom-2 left-1/2 transform -translate-x-1/2 rounded-[3vw] shadow-lg text-white font-semibold">
        <div className="flex flex-row mt-10">
          <div className="ml-30">
            <div className="flex flex-row mt-0 ml-10">
              <FooterLogo />
              <FooterSiteName />
            </div>

            <div className="flex flex-column w-100 text-[0.9vw] ml-20  text-black mt-5">
              <CompanyIntro />
            </div>
          </div>

          <div className="flex flex-column ml-30 mt-5">
            <CompanyLinks />
          </div>
          <div className="flex flex-column ml-30 mt-5">
            <HelperLink />
          </div>

          <div className="flex flex-col ml-30 mt-5 ">
            <NewsletterSubscribe />
          </div>
        </div>
        <hr className="-mt-7 w-[95%] text-white ml-5" />

        <div className="flex flex-row">
          <p className="text-left text-black mt-2 text-[0.8vw] ml-30">
            © 2023 Hope³. All rights reserved.
          </p>
          <div className="ml-auto mr-30 mt-2">
            <SocialLinks />
          </div>
        </div>
      </div>
    </>
  );
}
export default FooterScreen;
