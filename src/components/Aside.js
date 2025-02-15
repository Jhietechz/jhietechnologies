import React from "react";

const Aside = () => {
  return (
    <aside className="bg-secondary text-white p-3" style={{ width: "20%",position:"fixed",float:"left",minHeight:"100em" }}>
      <div className="profile text-center">
        <div
          className="profilePic rounded-circle mx-auto"
          style={{
            backgroundImage: `url('/images/profile1.jpg')`,
            height: "200px",
            width: "200px",
            backgroundSize: "cover",
          }}
        >

        </div>
        <div class="spinner-grow" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
        <h3 className="mt-3 about">EMMANUEL KIBET</h3>
        <h4>WEB DESIGNER</h4>
      </div>
      <p className="mt-4 about">
        Hi, I'm Emmanuel Yegon, a passionate <b>Frontend Developer</b> with expertise in building modern web applications.
      </p>
      <p>Lorem ipsum dolor sit amet consectetur.</p>
      {/* <div class="spinner-border text-info" role="status">
  <span class="visually-hidden">Loading...</span>
</div> */}
      <div className="contact text-center block gap-3 text-info-emphasis">
        <ul className="list-inline">
          <li className="list-inline-item">
            <i className="fa fa-twitter "></i>
          </li>
          <li className="list-inline-item">
            <i className="fa fa-facebook"></i>
          </li>
          <li className="list-inline-item">
            <i className="fa fa-instagram "></i>
          </li>
          <li className="list-inline-item">
            <i className="fa fa-linkedin "></i>
          </li>
        </ul>
      </div>
      {/* <button class="btn btn-primary" type="button" disabled>
  <span class="spinner-grow spinner-grow-sm" aria-hidden="true"></span>
  <span role="status">Loading...</span>
</button> */}
    </aside>
  );
};

export default Aside;