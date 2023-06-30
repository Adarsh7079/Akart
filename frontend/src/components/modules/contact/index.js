import "./Contact.css";
import MetaData from "../../layout/MetaData";
import AppWrap from "../../hoc/AppWrap";
import { HiGlobe, HiMail, HiPhone } from "react-icons/hi";

const Index = () => {
  return (
    <div className="app__top-margin">
      <MetaData title="Contact Us - AshuLab Shop" />

      <div className="flex-container">
        <div className="app__flex-card">
          <h1
            style={{
              textAlign: "center",
            }}
          >
            Contact Us
          </h1>

          <div className="contact-container">
            <div className="custom-item-tile">
              <div className="leading">
                <HiMail
                  style={{
                    width: "2rem",
                    height: "2rem",
                  }}
                />
              </div>

              <div className="trailing">
                <a
                  href="mailto:adarshk8271@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                 adarshk8271@gmail.com
                </a>
              </div>
            </div>

            <div className="custom-item-tile">
              <div className="leading">
                <HiPhone
                  style={{
                    width: "2rem",
                    height: "2rem",
                  }}
                />
              </div>

              <div className="trailing">
                <a href="tel:+91 7079429676" target="_blank" rel="noreferrer">
                  +91 7079429676
                </a>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppWrap(Index);
