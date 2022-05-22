import React from "react";

const Footer = () => {
  return (
    <footer class="footer p-10 text-neutral-content bg-slate-900 rounded mt-36">
      <div>
        <span class="footer-title">Services</span>
        <a class="link link-hover">Branding</a>
        <a class="link link-hover">Design</a>
        <a class="link link-hover">Marketing</a>
        <a class="link link-hover">Advertisement</a>
      </div>
      <div>
        <span class="footer-title">Company</span>
        <a class="link link-hover">About us</a>
        <a class="link link-hover">Contact</a>
        <a class="link link-hover">Jobs</a>
        <a class="link link-hover">Press kit</a>
      </div>
      <div>
        <span class="footer-title">HELP</span>
        <a class="link link-hover">Bootstrap Templates</a>
        <a class="link link-hover">Website Templates</a>
        <a class="link link-hover">Support Forum</a>
        <a class="link link-hover">Contact us</a>
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
