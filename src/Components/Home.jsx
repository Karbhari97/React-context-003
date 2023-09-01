import React from "react";

function Home() {
  
  return (
    <div>
      <h2
        style={{
          fontWeight: "bolder",
          fontSize: "50px",
          textAlign: "center",
          paddingTop: "100px",
        }}
      >
        Get The <span style={{ color: "Blue" }}>right job</span>
        <br />
        you deserve
      </h2>
      <p style={{ textAlign: "center", margin: "40px" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. aliquid aliquam
        doloribus sit beatae maxime.
      </p>

      <div style={{width:"20%",margin:"0px auto",textAlign:"center"}} >
        <nav class="navbar">
          <div class="container" >
            <form class="d-flex">
              <input id="box"
                class="form-control me-2"
                type="search"
                placeholder="Search job"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit" id="search" >
                Search_Job
              </button>
            </form>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Home;
