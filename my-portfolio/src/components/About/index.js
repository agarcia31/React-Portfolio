import React, { useState } from "react";
import me from "../../assets/me/me.jpg";

function About() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  const paragraphs = [
    "My name is Andres Garcia, but you can call me Andy. I'm 28 years old, and I love to cook, watch anime, and learn new skills. I used to work in retail until I quit to learn a new skill: coding! I have been coding for 6 months now and have learned different skill sets like React, Tailwind, Node.js, and much more. My goal is to grow with a new company and expand my toolset. I am the one and only Andy.",
    "I started working in retail back in 2014 at Ralphs. I began as a clerk and slowly worked my way up. My first promotion was to combo-clerk, which meant I was both a clerk and a cashier. Shortly after, I was promoted to meat clerk and was introduced to a whole new world. I fell in love with the department, seeing huge slabs of meat being transformed into beautiful cuts for someone's dinner. After 2 and a half years of working as a clerk and learning as much as I could, I was promoted in 2017 to a Seafood Manager. My responsibilities increased along with my knowledge. I learned about product quality, order management, team building, and much more. Within 3 months of my position, I had the top comps in the district, and because of this, I was promoted to a higher-rated store. I went from a store rated C to a FreshFare, which is the best store you can work for. My attention to detail was definitely key to my success. My orders needed to be precise, my cuts had to be perfect to sell, and any slow-selling items had to be sold in a creative way. Overall, my experience was great, but I got an opportunity I couldn't pass up.",
    "After two years working as a Seafood Manager, I reached a standstill in my career. My goal was to become a butcher, but unfortunately, there were no openings, and with so many backup butchers, moving up didn't seem likely. After a conversation with my Meat Manager/Mentor, I found out he was taking an opportunity out of state and would be quitting. After doing some deep thinking, I decided to hit the reset button. The day I decided to quit working at Ralphs, I found a posting at Wholefoods for a full-time Meat and Seafood position, and this is the next part of my journey. After a month, I was awarded Team Member of the month, and after three months, I had an opportunity to apply for a Team Trainer position at the store. I got it, and my journey up the corporate ladder began. My responsibilities were simple - show new members the who, what, where, when, and why of the department - but I wanted to move up quickly, so I added more responsibilities. I started writing orders, working on merchandising displays, leading team focus exercises, and much more. Almost a year later, I was promoted to ATL, Assistant Team Leader.",
    "As an ATL, I was in charge of the department when the Team Leader was not around. Since I was already doing the role of an ATL, my responsibilities didn't change much, but my skills improved. Since I had a budget to keep, my orders had to be on point. I used sales records, shrink records, and much more. Shrink, sales, and comps were all being met, and I am proud to say I trained two team members to become ATLs, showing them the ropes and passing along what I had learned. One day on my lunch break, I stumbled across a video on 'How to Build a Calculator App using JavaScript.' After that, I watched 'How to Build a Battleship Game using JavaScript.' From there, I fell in love with this new field, and I wanted to learn more. After doing some research, I found a bootcamp from UCLA. I applied and got in",
    "As I worked in the mornings and attended class at night, I was definitely stressed out. The job was very demanding, especially since the bootcamp was during the holidays, which were the busy months for me. It got to the point where I wasn't learning and wasn't performing my best at work. This is where I had to make a choice: give up on this course and focus on WholeFoods or quit WholeFoods and take some time to learn a new skill. I chose to learn a new skill. Now, I'm trying to learn as much as I can and find a new company to grow with.",
  ];
  const toggleNames = [
    "About Me",
    "My First Job",
    "My Next Opportunity",
    "New Job",
    "Biggest decision",
  ];
  const jobHistoryList = [
    "Ralph's  03/2014-06/2019",
    "WholeFoods 06/2019-12/2022",
  ];

  return (
    <section className="flex" style={{ background: "#19DC16", fontFamily: "Bitter", fontSize: "24px", color: "#145A32 " }}>
      <div className="w-1/4">
        <div className="profile-img">
          <img className="w-full rounded-lg" style={{ background: "#008000", border: "10px solid #AEB6BF" }} src={me} alt="Myself" />
        </div>
      </div>
      <div className="w-1/6 flex flex-col p-4 rounded-lg" style={{ background: "#008000", border: "10px solid #78909C" }}>
        <h2 className="font-bold mb-2 rounded-lg text-center" style={{ background: "#145A32 ", border: "5px solid #78909C", color: "#A5D6A7"}}>
          Job History
        </h2>
        <ul className="rounded-lg text-center" style={{ background: "#009900", border: "5px solid #78909C" }}>
          {jobHistoryList.map((job, index) => (
            <li key={index}>{job}</li>
          ))}
        </ul>
      </div>
      <div className="flex-1 p-4 text-center rounded-lg" style={{ background: "#008000", border: "10px solid #AEB6BF" }}>
        <div className="">
          <p className=" p-4 font-bold rounded-lg" style={{ background: "#145A32 ", border: "8px solid #AEB6BF", color: "#A5D6A7",fontSize: "66px", textDecoration: "wavy", fontFamily: "Permanent Marker" }}>
            Welcome to my page!
          </p>
          {paragraphs.map((paragraph, index) => (
            <React.Fragment key={index}>
              {expandedIndex === index ? (
                <p
                  className="p-4 border rounded-lg"
                  style={{
                    background: "#00CC00",
                    fontFamily: "Crimson Text",
                    border: "5px solid #AEB6BF",
                  }}
                >
                  {paragraph}
                </p>
              ) : (
                <button
                  className=" p-4  font-bold text-center rounded-lg"
                  onClick={() => handleToggle(index)}
                  style={{
                    background: "#009900",
                    width: "100%",
                    height: "100px",
                    alignItems: "stretch",
                    border: "5px solid #AEB6BF",
                    color: "#A5D6A7"
                  }}
                >
                  {toggleNames[index]}
                </button>
              )}
              {expandedIndex === index && (
                <button
                  className="p-4 font-bold rounded-lg"
                  onClick={() => handleToggle(index)}
                  style={{ width: "100%",  background: "#009900", border: "5px solid #AEB6BF" }}
                >
                  Close
                </button>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;