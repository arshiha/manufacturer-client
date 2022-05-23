import React from "react";

const Footer = () => {
  return (
    <footer className="footer p-10 text-neutral-content bg-slate-900 rounded mt-36">
      <div>
        <span className="footer-title">Services</span>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </div>
      <div>
        <span className="footer-title">HELP</span>
        <a className="link link-hover">Bootstrap Templates</a>
        <a className="link link-hover">Website Templates</a>
        <a className="link link-hover">Support Forum</a>
        <a className="link link-hover">Contact us</a>
      </div>
      <div>
        <p className="mt-20">
          Copyright © 2022 - All right reserved by Arshiha Bristy
        </p>
      </div>
    </footer>
  );
};

export default Footer;
