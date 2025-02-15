import React, { useEffect } from "react";

const Stats = () => {
  const stats = { projects: 120, clients: 140, years: 8 };

  useEffect(() => {
    animateNumbers("projects-count", stats.projects, 2000);
    animateNumbers("clients-count", stats.clients, 2000);
    animateNumbers("experience-years", stats.years, 2000);
  }, []);

  const animateNumbers = (id, endValue, duration) => {
    let startValue = 0;
    const increment = endValue / (duration / 10);
    const element = document.getElementById(id);

    const updateNumber = () => {
      startValue += increment;
      if (startValue >= endValue) {
        element.textContent = endValue;
      } else {
        element.textContent = Math.floor(startValue);
        requestAnimationFrame(updateNumber);
      }
    };
    updateNumber();
  };

  return (
    <section className="row text-center mb-5">
      <div className="col-md-4">
        <h2 id="projects-count" className="text-warning">0</h2>
        <progress className="w-75" max="100" value="60"></progress>
        <p>Completed Projects</p>
      </div>
      <div className="col-md-4">
        <h2 id="clients-count" className="text-warning">0</h2>
        <progress className="w-75" max="100" value="70"></progress>
        <p>Satisfied Clients</p>
      </div>
      <div className="col-md-4">
        <h2 id="experience-years" className="text-warning">0</h2>
        <progress className="w-75" max="100" value="80"></progress>
        <p>Years of Experience</p>
        
      </div>
    </section>
  );
};

export default Stats;