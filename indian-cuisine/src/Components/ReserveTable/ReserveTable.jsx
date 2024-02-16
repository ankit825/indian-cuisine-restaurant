import React from "react";
import "./ReserveTable.css";
import Title from "../../Common/Title/Title";

const ReserveTable = () => {
  return (
    <div>
      <div
        className="bg-table"
        style={{ backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
      >
        <div class="container table-form">
          <div class="text">Reservation</div>
          <h1
            style={{
              textAlign: "center",
              fontFamily: "restaurant",
              fontSize: "45px",
            }}
          >
            Book Table
          </h1>
          <form action="#">
            <div class="form-row">
              <div class="input-data">
                <input type="text" required />
                <div class="underline"></div>
                <label for="">First Name</label>
              </div>
              <div class="input-data">
                <input type="text" required />
                <div class="underline"></div>
                <label for="">Last Name</label>
              </div>
              <div class="input-data">
                <input type="text" required />
                <div class="underline"></div>
                <label for="">Contact Number</label>
              </div>
            </div>
            <div class="form-row">
              <div class="input-data">
                <input type="text" required />
                <div class="underline"></div>
                <label for="">Email Address</label>
              </div>
              <div class="input-data">
                <input type="text" required />
                <div class="underline"></div>
                <label for="">Person</label>
              </div>
              <div class="input-data">
                <input type="text" required />
                <div class="underline"></div>
                <label for="">Time</label>
              </div>
            </div>
            <div class="form-row">
              <div class="input-data">
                <input type="text" required />
                <div class="underline"></div>
                <label for="">Restaurant</label>
              </div>
            </div>
            <div class="form-row">
              <div class="input-data textarea">
                <textarea rows="8" cols="80" required></textarea>
                <br />
                <div class="underline"></div>
                <label for="">Write your message</label>
                <br />
                <div class="form-row submit-btn">
                  <div class="input-data">
                    <div class="inner"></div>
                    <input type="submit" value="submit" />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReserveTable;
