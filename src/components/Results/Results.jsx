import { calculateInvestmentResults } from "../../util/investment.js";

export function Results({ input }) {
  calculateInvestmentResults(input);

  return (
    <>
      <p>Results...</p>
    </>
  );
}
