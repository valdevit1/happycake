import React from "react";

const About = () => {
  return (
    <div className="mb-3">
      <h5>Cuentanos, ¿en que te podemos ayudar?</h5>
      <label htmlFor="exampleFormControlInput1" className="form-label">
        Email adress
      </label>
      <input
        type="email"
        className="form-control"
        id="exampleFormContolInput"
        placeholder="tienda@happycake.com"
      />

      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Descripcion
        </label>
        <input
          type="texto"
          className="form-control"
          id="exampleFormContolInput"
          placeholder="Descripcion"
        />
        <div className="mb-3">
          <button type="button" class="btn btn-danger">
            Danger
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
