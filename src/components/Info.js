import profilepic from "../images/me.jpg";
import email from "../images/email.svg";
import linkedin from "../images/linkedin.svg";

function Info() {
  return (
    <div className="info">
      <img className="profilepic" src={profilepic} alt="profilepic"></img>
      <h2>Xavier Valois-Smith</h2>
      <p>Frontend Developer</p>
      <a href="https://xaviervaloissmith.com" target="_blank" rel="noreferrer">
        www.xaviervaloissmith.com
      </a>
      <div className="buttons">
      <a href="mailto:contact@xaviervaloissmith.com" target="_blank" rel="noreferrer"><button className="button-1">
          <img src={email} alt="Back" /> Email  
        </button></a>
        <a href="https://www.linkedin.com/in/xavier-vs/" target="_blank" rel="noreferrer"><button className="button-2">
          <img src={linkedin} alt="Back" />
          LinkedIn
        </button></a>
      </div>
    </div>
  );
}

export default Info;
