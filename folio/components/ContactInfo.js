import React from "react";

function ContactInfo() {
  return (
    <div>
      <h3>Well This Is Embarassing...</h3>
      <p>Some good things are coming soon!</p>
      <p>
        In the mean time you can check out my work on GitHub or hit me up on
        LinkedIn!
      </p>
      <a target="_blank" href="https://github.com/CalWal">
        {" "}
        <img src="https://img.icons8.com/metro/26/000000/github.png" />
      </a>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/callum-wallace-1aa279107/"
      >
        {" "}
        <img src="https://img.icons8.com/metro/26/000000/linkedin.png" />
      </a>
    </div>
  );
}

export default ContactInfo;
