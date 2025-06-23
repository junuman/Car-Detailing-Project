const Gallery = () => {
  const jobs = [
    { before: '/images/jeepbefore.jpg', after: '/images/jeepafter.jpg' },
    { before: '/images/teslabefore.jpg', after: '/images/teslaafter.jpg' },
  ];

  return (
    <section id="gallery">
      <h2>Our Work</h2>
      <div className="gallery">
        {jobs.map((job, i) => (
          <div key={i} className="job-pair">
            <div className="job-image">
              <img src={job.before} alt={`Before ${i}`} />
              <p>Before</p>
            </div>
            <div className="job-image">
              <img src={job.after} alt={`After ${i}`} />
              <p>After</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
