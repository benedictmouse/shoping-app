import React from 'react';
import "../styles/ourteam.css";
import ben from "../images/nerd1.jpeg"
import ben2 from "../images/nerd2.jpeg"
import ben3 from "../images/nerd3.jpeg"

const OurTeam = () => {
  const teamMembers = [
    {
      name: "Alice Johnson",
      role: "CEO",
      img: ben,
      description: "Alice is the visionary leader of our company, guiding us towards success with her innovative strategies.",
    },
    {
      name: "Bob Smith",
      role: "CTO",
      img: ben2, 
      description: "Bob oversees our technology department, ensuring we stay ahead of the curve with cutting-edge solutions.",
    },
    {
      name: "Carol Lee",
      role: "Marketing Manager",
      img: ben3, 
      description: "Carol leads our marketing efforts, crafting compelling campaigns that resonate with our audience.",
    },
  ];

  return (
    <section className="our-team">
      <h1>Meet Our Team</h1>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.img} alt={member.name} className="team-member-img" />
            <div className="team-member-info">
              <h2>{member.name}</h2>
              <h3>{member.role}</h3>
              <p>{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
