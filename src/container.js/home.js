import React from "react";

const Home = () => {
  return (
    <div style={{ paddingLeft: "4rem", textAlign: "left" }}>
      <h1>Application Requirements</h1>
      <ul>
        <li>
          <strong>BACKEND</strong>
          <ul>
            <li>Create an API for the creation of courses with parameters (title, description, bannerImg, price, discountPercentage).</li>
            <li>Courses have a banner image uploaded through the API (bannerImg).</li>
            <li>Create three dummy courses via the API: Hindi Class, English Class, Maths Class.</li>
            <li>REGISTER API - for user registration.</li>
            <li>LOGIN API - for user login.</li>
            <li>
              DUMMY PAYMENT GATEWAY — INSTAMOJO — PAYMENT API
              <ul>
                <li>
                  If a user pays for any course and the payment is successful, the course will be shown in their dashboard and will expire in 30 days, with a countdown displayed in the dashboard.
                </li>
                <li>When a user successfully purchases any course, the details of the purchase are sent to their email.</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <strong>FRONTEND</strong>
          <ul>
            <li>Create your own design in the frontend and implement all the functionality.</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Home;
