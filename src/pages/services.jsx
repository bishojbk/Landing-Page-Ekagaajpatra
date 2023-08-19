import React from "react";

const services = () => {
  return (
    <section className="services">
      <div className="container">
        <table>
          <tr>
            <th>Department</th>
            <th>Contents</th>
            <th>Price</th>
          </tr>
          <p>Inland Revenue Department (आन्तरिक राजस्व विभाग)</p>
          <tr>
            <td>1. Tax Clearance Certificate</td>
            <td>Tutorial,PDF Form</td>
            <td>NPR. 500</td>
          </tr>
          <tr>
            <td>2. Rent Agreement</td>
            <td>PDF</td>
            <td>NPR. 2500</td>
          </tr>
        </table>
      </div>
    </section>
  );
};

export default services;
