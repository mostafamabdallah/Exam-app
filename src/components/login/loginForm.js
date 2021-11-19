import React from "react";
import { useNavigate } from "react-router-dom";
import $ from "jquery";

const LoginForm = (props) => {
  const navigate = useNavigate();
    return (
      <div
        className="row align-items-center justify-content-center"
        style={{ height: "100vh" }}
      >
        <div className="col-6">
          <form>
            <div className="form-group">
              <label htmlFor="exampleInputName1">Name</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputName1"
                required
                aria-describedby="NameHelp"
                placeholder="Enter your full name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                required
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                required
                placeholder="Password"
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={(event)=>{
                navigate('/exam')
              }
              }
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    )
};

export default LoginForm;
