import React, { useEffect, useState } from "react";
import Request from "../request";

const PlansAvailable = () => {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    const fetchPlansData = async () => {
      try {
        const { data } = await Request.plan({});
        setPlans(data);
      } catch (error) {
        console.error("Error fetching plans data:", error);
      }
    };

    fetchPlansData();
  }, []);

  const buyPlan = (plan) => {
    console.log("Buying plan:", plan);
  };

  return (
    <div style={{paddingLeft: "4rem", display: "flex", flexWrap: "wrap" }}>
      {plans.map((plan) => (
        <div
          key={plan.planid}
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "16px",
            margin: "16px",
            minWidth: "200px",
            maxWidth: "300px",
          }}
        >
          <h2>{plan.planname}</h2>
          <div>$ {plan.amount}</div>
          <div>
            <h4>Courses includes:Hindi,English,Maths </h4>
            <ul>
              <li>
                {plan.planvalidity} {plan.planterm} Plan Validity
              </li>
            </ul>
          </div>
          <button onClick={() => buyPlan(plan)}>Buy</button>
        </div>
      ))}
    </div>
  );
};

export default PlansAvailable;
