import React from "react";
import "../index.css"

const Contact = () => {
    return (
        <div>
        <h1>Contact</h1>
        <section>
            <form> {/*rubric57 */}
                <label>Name:</label><br></br>
                <input type="text" name="name" placeholder="John Doe"></input><br></br>
                <label>Email:</label><br></br>
                <input type="text" name="email" placeholder="johndoe@email.com"></input><br></br>
                <label>Subject:</label><br></br>
                <select name="subject">
                    <option value="compliment">Compliment</option>
                    <option value="complaint">Complaint</option>
                    <option value="missing-order">Missing order</option>
                    <option value="information">General information</option>
                    <option value="question">Question(s)</option>
                </select><br></br>
                <label>Message:</label><br></br>
                <input type="text" name="message" placeholder="Type here de message"></input>
                <br></br>
                <br></br>
                <input type="submit" value="Send" className="button"></input>
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