import "./ReferralBenefits.css";

const ReferralBenefits = ({ handleOpen }) => {
  return (
    <section className="referral-benefits">
      <div className="container2">
        <h2>What Are The Referral Benefits?</h2>
        <table>
          <thead>
            <tr>
              <th>Program</th>
              <th>Referrer Reward</th>
              <th>Referee Reward</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Professional Certificate in Product Management</td>
              <td>₹7,500</td>
              <td>₹5,000</td>
            </tr>
          </tbody>
        </table>
        <button className="refer-now-btn" onClick={handleOpen}>
          Refer Now
        </button>
      </div>
    </section>
  );
};

export default ReferralBenefits;
