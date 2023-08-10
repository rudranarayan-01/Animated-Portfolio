
import React, {useRef,useState} from "react";
import "./Contact.css"
import emailjs from "@emailjs/browser";
import { useContext } from "react";
import { themeContext } from "../../Context";


const Contact = () => {

      // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

    const form = useRef();
    const [done, setDone] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_2lft361', 'template_80nm0y9', form.current, 'e8RajqzHeYJjXlpLh')
          .then((result) => {
              console.log(result.text);
              alert("Message sent")
              setDone(true)
              form.reset()
          }, (error) => {
              console.log(error.text);
          });
      };

  return (
    <div className="contact-form">
        <div className="w-left">
            <div className="awesome">
                <span style={{color: darkMode?'white': ''}} >Get in touch</span>
                <span>Contact me</span>
                <div className="blur s-blur1"style={{ background: "#ABF1FF94" }}></div>
            </div>
        </div>

        {/* right side form */}
        <div className="c-right">
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" required name="user_name" className="user"  placeholder="Name"/>
                <input type="email" required name="user_email" className="user" placeholder="Email"/>
                <textarea name="message" required className="user" placeholder="Message"/>
                <input type="submit" value="Send" className="button"/>
                <span>{done && "Thanks for Contacting me"}</span>
                <div className="blur c-blur1" style={{ background: "var(--purple)" }}></div>
            </form>
        </div>

    </div>
  )
}

export default Contact