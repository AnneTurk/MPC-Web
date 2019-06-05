import React from "react";
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
        <div>
        <h1>Contact</h1>
        <section>
            <form name="contactForm"> {/*rubric57 */}
                <label>Name:</label><br></br>
                <input type="text" name="name" id="nameinput" placeholder="John Doe" ></input><br></br>
                <label>Email:</label><br></br>
                <input type="email" name="emailaddress" id="emailinput" placeholder="johndoe@email.com"></input><br></br>
                <label>Subject:</label><br></br>
                <select name="subject">
                    <option value=""></option>
                    <option value="compliment">Compliment</option>
                    <option value="complaint">Complaint</option>
                    <option value="missing-order">Missing order</option>
                    <option value="information">General information</option>
                    <option value="question">Question(s)</option>
                    <option value="other">Other</option>
                </select><br></br>
                <label>Message:</label><br></br>
                <textarea name="message" placeholder="Type here de message"></textarea>
                <br></br>
                <br></br>
                <input type="submit" value="Send" className="button" id="sendButton" onClick={validateForm}></input>
            </form>
        </section>
        <section>
            <h1>Contact information</h1>
            <div>
            <h2>WorldWideImporters</h2>
            <p>Evert van de Beekstraat 354</p>
            <p>1118 CZ Schiphol</p>
            <p>The Netherlands</p>
            <div>
                <p>020 500 1500</p>
                <p>info@WWI.nl</p>
            </div>
            </div>
        </section>
        </div>
    );
  };

  export default Contact;