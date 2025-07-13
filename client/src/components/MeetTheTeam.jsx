import useFadeInOnScroll from '../hooks/useFadeInOnScroll';

const team = [
  {
    name: 'Ahad',
    image: '/images/ahad2.jpg',
    role: 'Co-Founder & Lead Detailer',
    phone: '416-896-1143',
    email: 'ahadabdul631@gmail.com',
  },
  {
    name: 'Umair',
    image: '/images/umair2.jpg',
    role: 'Co-Founder & Operations',
    phone: '416-895-2827',
    email: 'mo07sidd@gmail.com',
  },
  {
    name: 'Junaid',
    image: '/images/junaid.jpg',
    role: 'Lead Web Developer & Head of Marketing',
    phone: '905-744-7188',
    email: 'junnu.mohammed@gmail.com',
  },
];

const MeetTheTeam = () => {
  const [ref, isVisible] = useFadeInOnScroll();

  return (
    <section
      id="team"
      ref={ref}
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
    >
      <h2>Meet the Team</h2>
      <div className="team-wrapper">
        {team.map((member, i) => (
          <div className="team-card" key={i}>
            <div className="team-img-wrapper">
              <img src={member.image} alt={member.name} />
              <div className="overlay">
                <p>📞 {member.phone}</p>
                <p>✉️ {member.email}</p>
              </div>
            </div>
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MeetTheTeam;
