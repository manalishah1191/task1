import React from "react";
import { useState } from "react";

const Home = () => {
  const data = [
    {
      state: "maharastra",
      population: "11 CR",
      nation: "India",
      city1: "Mumbai",
      city2: "Pune",
      city3: "Nagpur",
    },
    {
      state: "uttar pradesh",
      population: "9 CR",
      nation: "India",
      city1: "Agra",
      city2: "Kanpur",
      city3: "Lacknow",
    },
    {
      state: "Karnataka",
      population: "15 CR",
      nation: "India",
      city1: "Vijapur",
      city2: "Benglore",
      city3: "Nipani",
    },
  ];
  const data1 = [
    {
      state: "Henan",
      population: "11 CR",
      nation: "China",
      city1: "Hong Kong",
      city2: "Macau",
      city3: "Beijing",
    },
    {
      state: "Zejiyang",
      population: "9 CR",
      nation: "China",
      city1: "Chongqing",
      city2: "Shanghai",
      city3: "Tianjin",
    },
    {
      state: "Sichuan",
      population: "15 CR",
      nation: "China",
      city1: "Anqing",
      city2: "Bengbu",
      city3: "Bozhou",
    },
  ];
  const [search, Setsearch] = useState(data);

  return (
    <>
      <div className="container container1">
        <div className="row">
          <div className="col">Logo</div>
        </div>
      </div>
      <div className="container mt-4">
        <div className="row">
          <div className="col-3">
            <h5>Select Country</h5>
            <input
              type="radio"
              name="country"
              onClick={() => Setsearch(data)}
            />{" "}
            <label>India</label>
            <div>
              <input
                type="radio"
                name="country"
                onClick={() => Setsearch(data1)}
              />{" "}
              <label>China</label>
            </div>
            <h5>Select State</h5>
            <input type="radio" name="state" /> <label>Maharashtra</label>
            <div>
              <input type="radio" name="state" /> <label>Uttar Pradesh</label>
            </div>
            <div>
              <input type="radio" name="state" /> <label>Karnataka</label>
            </div>
            <h5>Select City</h5>
            <input type="radio" name="city" /> <label>Mumbai</label>
            <div>
              <input type="radio" name="city" /> <label>Pune</label>
            </div>
            <div>
              <input type="radio" name="city" /> <label>Nagpur</label>
            </div>
          </div>
          <div className="col-9 text-center">
            <h5>Country Data</h5>
            {search.map((item) => {
              return (
                <div className="text-center shadow">
                  <h6>{item.state} Total Population</h6>
                  <h6>{item.population}</h6>

                  <button
                    type="button"
                    class="btn"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    View City
                  </button>

                  <div
                    class="modal fade"
                    id="exampleModal"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">
                            City Name
                          </h5>

                          <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div class="modal-body">
                          <p>{item.city1}</p>
                          <p>{item.city2}</p>
                          <p>{item.city3}</p>
                        </div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                          <button type="button" class="btn btn-primary">
                            Save changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
