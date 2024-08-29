import Styles from "./UserInput.module.css";

export function UserInput() {
  const { inputGroup, userInput } = Styles;

  return (
    <section className={userInput}>
      <div className={inputGroup}>
        <div>
          <label>Initial Investment</label>
          <input type="number" required />
        </div>
        <div>
          <label>Annual Investment</label>
          <input type="number" required />
        </div>
      </div>
      <div className={inputGroup}>
        <div>
          <label>Expected Return</label>
          <input type="number" required />
        </div>
        <div>
          <label>Duration</label>
          <input type="number" required />
        </div>
      </div>
    </section>
  );
}
