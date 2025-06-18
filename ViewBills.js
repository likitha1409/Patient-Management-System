import React from 'react';

const ViewBills = () => {
  return (
    <div className="table-container">
      <h1>📄 Bills</h1>
      <table>
        <thead>
          <tr>
            <th>Patient</th>
            <th>Service</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Raj</td>
            <td>Consultation</td>
            <td>₹500</td>
          </tr>
          <tr>
            <td>Sita</td>
            <td>X-Ray</td>
            <td>₹800</td>
          </tr>
        </tbody>
      </table>
      <p className="total">Total: ₹1300</p>
    </div>
  );
};

export default ViewBills;
