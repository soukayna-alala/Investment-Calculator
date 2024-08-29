import Styles from "./Header.module.css";
export function Header() {
  const { coins } = Styles;
  return (
    <header>
      <img className={coins} src="/coin-investment.png" />
      <h1>Investment Calculator</h1>
    </header>
  );
}
