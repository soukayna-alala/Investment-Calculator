import Styles from "./UserInput.module.css";

export function UserInput({ onChange, userInput }) {
  const { inputGroup, userInputStyle } = Styles;

  return (
    <section className={userInputStyle}>
      <div className={inputGroup}>
        <div>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(event) =>
              onChange("initialInvestment", event.target.value)
            }
          />
        </div>
        <div>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(event) =>
              onChange("annualInvestment", event.target.value)
            }
          />
        </div>
      </div>
      <div className={inputGroup}>
        <div>
          <label>Expected Return</label>
          <input
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(event) => onChange("expectedReturn", event.target.value)}
          />
        </div>
        <div>
          <label>Duration</label>
          <input
            type="number"
            required
            value={userInput.duration}
            onChange={(event) => onChange("duration", event.target.value)}
          />
        </div>
      </div>
    </section>
  );
}
