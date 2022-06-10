import React from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
import award from "../../assets/1.png";
import big from "../../assets/2.png";
import machine from "../../assets/3.png";
const Header = () => {
  return (
    <>
      <div className="header">
        <header>
          <img src={logo} alt="kj" />
        </header>
        <div className="head_part">
          <img src={award} alt="gg" className="award" />
          <div className="content_part">
            <h3>
              C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
              the 4th time.
            </h3>
            <div className="li_part">
              <ul>
                <li>
                  C.R.I.'s energy efficient products are well recognized by
                  various Government Institutions, as trustworthy products for
                  various projects across the globe to save energy.
                </li>
                <li>
                  C.R.I. is the highest contributor in the country for the
                  projects of EESL (Energy Efficiency Services Limited) to
                  replace the old inefficient pumps with 5 Star rated energy
                  efficient smart pumps with IoT enabled control panel.{" "}
                </li>
                <img src={big} alt="khj" />
              </ul>
              <p>
                Government of India has awarded the
                <b>"National Energy Conservation Award 2018"</b>. Mr. G.
                Selvaraj, Joint Managing Director of C.R.I. Group received the
                award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri.
                Raj Kumar Singh, Honorable Minister of State.
              </p>
            </div>
          </div>
        </div>
        <div className="footer_part">
          <h4>
            INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
            RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
            POWER FOR THE NATION.
          </h4>
          <img src={machine} alt="dd" className="machine" />
          <p>
            Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
            Solar Systems - Motors
          </p>
          <hr className="hr" />
          <h5>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h5>

          <h4 className="power">
            <small> CHEMICALS & PROCESS</small>
            <small>POWER </small>
            <small> WATER & WASTE WATER </small>
            <small>OILS & GAS</small>
            <small> SUGARS & DISTILLERIES</small>
            <small>PAPER & PULP</small>
            <small>MARINE & DEFENCE</small>
            <small>METAL & MINING</small>
            <small> FOOD & BEVERAGE</small> <br />
            <small>PETROCHEMICAL & REFINERIES</small>
            <small>SOLAR BUILDING HVAC FIRE</small>
            <small>FIGHTING</small>
            <small>AGRICULTURE & RESIDENTIAL</small>
          </h4>
        </div>
        <div className="icon_div">
          <div className="icon_content">
            <i className="fa fa-whatsapp"></i>
            <small>tell from 18002001234</small>
          </div>
          <div className="icon_content">
            <i className="fa fa-facebook"></i>
            <small>www.facebook.com/cripumps</small>
          </div>
          <div className="icon_content">
            <i className="fa fa-globe"></i>
            <small>www.crigroups.com</small>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
