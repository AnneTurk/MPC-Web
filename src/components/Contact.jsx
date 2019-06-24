import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../styles/contact.css"
import "../index.css"

{/*rubric61 */}
  function validateForm() {
    var newline = "\r\n"
    var name = document.forms["contactForm"]["name"].value;
    var email = document.forms["contactForm"]["emailaddress"].value;
    var subject = document.forms["contactForm"]["subject"].value;
    var message = document.forms["contactForm"]["message"].value;
    var text = "Is this the message you would like to send?"+newline+"name: " + name + newline + "email: " + email + newline + "Subject: "+ subject + newline + "Message: "+ message ;

    if (name == "") {
      alert("Name must be filled out");
      return false;
    }
    if (email == "") {
        alert("Email must be filled out");
        return false;
      }
      if (subject == "") {
        alert("subject must be filled out");
        return false;
      }
      if (message == "") {
        alert("message must be filled out");
        return false;
      }
/*rubric60 */
    else {
        alert(text)
}} 

const Contact = () => {
    return (
        <div className="contact">
        <section className="form col-6">
            <form name="contactForm" id="contactform"> {/*rubric57 */}
            <h1>Contact</h1>
            <br/>
                <label>Name:</label><br/>
                <input type="text" name="name" id="nameinput" placeholder="John Doe" ></input><br/><br/>
                <label>Email:</label><br/>
                <input type="email" name="emailaddress" id="emailinput" placeholder="johndoe@email.com"></input><br/><br/>
                <label>Subject:</label><br/>
                <select name="subject">
                    <option value=""></option>
                    <option value="compliment">Compliment</option>
                    <option value="complaint">Complaint</option>
                    <option value="missing-order">Missing order</option>
                    <option value="information">General information</option>
                    <option value="question">Question(s)</option>
                    <option value="other">Other</option>
                </select><br/><br/>
                <label>Message:</label><br/>
                <textarea name="message" placeholder="Type here de message"></textarea>
                <br/>
                <br/>
                <input type="submit" value="Send" className="button" id="sendButton" onClick={validateForm}></input>
            </form>
        </section>
        <section className="info col-6"> 
            <div>
            <h1>Contact information</h1><br/>
            <h2>WorldWideImporters</h2><br />
            <p>&nbsp;&nbsp;&nbsp;Evert van de Beekstraat 354</p>
            <p>&nbsp;&nbsp;&nbsp;1118 CZ Schiphol</p>
            <p>&nbsp;&nbsp;&nbsp;The Netherlands</p>
            <div>
              <p>&nbsp;<FontAwesomeIcon icon="phone"/>&nbsp;<label>020 500 1500</label></p>
              <p>&nbsp;<FontAwesomeIcon icon="at"/>&nbsp;<label>info@WWI.nl</label></p>
            </div>
            </div>
        </section>
        </div>
    );
  };

  export default Contact;