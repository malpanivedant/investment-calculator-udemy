export default function UserInput({ handleInputChange, userInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            onChange={() =>
              handleInputChange("initialInvestment", event.target.value)
            }
            value={userInput.initialInvestment}
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            onChange={() =>
              handleInputChange("annualInvestment", event.target.value)
            }
            value={userInput.annualInvestment}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Returns</label>
          <input
            type="number"
            required
            onChange={() =>
              handleInputChange("expectedReturn", event.target.value)
            }
            value={userInput.expectedReturn}
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            onChange={() => handleInputChange("duration", event.target.value)}
            value={userInput.duration}
          />
        </p>
      </div>
    </section>
  );
}
