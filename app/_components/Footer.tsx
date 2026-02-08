import React from "react";

import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  LinkedInIcon,
} from "./icons/Icons";
function Footer() {
  const date = new Date().getFullYear();

  return (
    <div className="container  text-white lg:pt-25 pb-5 flex flex-col gap-6 max-lg:px-4 pt-8">
      <div className="text-base flex  lg:gap-16 lg:flex-row flex-col gap-8 ">
        {/*first div*/}
        <div className="space-y-4">
          <h3 className="lg:text-3xl text-xl">Logo goes here</h3>
          <h4>
            Powering modern commerce —{" "}
            <span className="block">
              online, offline, and everything in between.
            </span>
          </h4>
          <h4 className="text-lg">Follow us on</h4>
          <div className="flex gap-4 cursor-pointer">
            <div className="w-8 h-8 bg-white rounded-full py-1.5 px-2 ">
              <FacebookIcon className=" h-full w-full   " />
            </div>
            <div className="w-8 h-8 bg-white rounded-full">
              <InstagramIcon className=" h-full w-full   p-1.5 px-2 " />
            </div>
            <div className="w-8 h-8 bg-white rounded-full">
              <TwitterIcon className=" h-full w-full   py-1.5 px-2  " />
            </div>
            <div className="w-8 h-8 bg-white rounded-full">
              <LinkedInIcon className=" h-full w-full   py-1.5 px-2 " />
            </div>
          </div>
        </div>
        <div className="lg:flex lg:justify-between  flex-1 lg:px-4 grid grid-cols-2 gap-8">
          {/*second div*/}
          <div className="font-light text-base space-y-1">
            <h2 className="font-semibold text-lg">Product</h2>
            <h5>Features</h5>
            <h5>Pricing</h5>
            <h5>Integrations</h5>
            <h5>Dashboard Preview</h5>
            <h5>POS Sync</h5>
            <h5>Shipping Tools</h5>
          </div>
          {/*third div*/}
          <div className="font-light text-base space-y-1">
            <h2 className="font-semibold text-lg">Resources</h2>
            <h5>Help Center</h5>
            <h5>Getting Started Guide</h5>
            <h5>Blog</h5>
            <h5>API Documentation</h5>
            <h5>Release Notes</h5>
            <h5>Tutorials</h5>
          </div>
          {/*fourth div*/}
          <div className="font-light text-base space-y-1">
            <h2 className="font-semibold text-lg">Company</h2>
            <h5>About Us</h5>
            <h5>Careers</h5>
            <h5>Contact</h5>
            <h5>Partners</h5>
            <h5>Press Kit</h5>
          </div>
          {/*fifth div*/}
          <div className="font-light text-base space-y-1">
            <h2 className="font-semibold text-lg">Support</h2>
            <h5>FAQs</h5>
            <h5>Community Forum</h5>
            <h5>Report an Issue</h5>
            <h5>Request a Feature</h5>
            <h5>Live Chat</h5>
          </div>
        </div>
      </div>
      <hr className="border-[#2A318D] border font-light" />
      <div className="flex justify-between lg:flex-row flex-col max-lg:text-sm max-lg:items-center lg:gap-6 gap-4 lg:py-8">
        <h4>&copy; {date} Yhhit Solutions. All rights reserved.</h4>

        <div className="flex flex-wrap gap-5 max-lg:justify-center ">
          <h6>Privacy Policy</h6>
          <h6>Terms & Conditions</h6>
          <h6>Cookie Policy</h6>

          <h6 className="max-lg:w-full text-center">Data Protection</h6>
        </div>
      </div>
    </div>
  );
}

export default Footer;
