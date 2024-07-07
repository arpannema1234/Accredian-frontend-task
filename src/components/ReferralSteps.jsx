import "./ReferralSteps.css";

const ReferralSteps = () => {
  return (
    <section className="referral-steps">
      <div className="container2">
        <h2>How Do I Refer?</h2>
        <div className="steps">
          <div className="step">
            <span>1</span>
            <p>Submit referral details via your unique link.</p>
          </div>
          <div className="step">
            <span>2</span>
            <p>Earn rewards once your referral joins a program.</p>
          </div>
          <div className="step">
            <span>3</span>
            <p>Claim your rewards and refer more.</p>
          </div>
        </div>
        <button className="learn-more-btn">Learn More</button>
      </div>
    </section>
  );
};

export default ReferralSteps;
