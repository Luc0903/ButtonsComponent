export default function Btn({ classType, children }) {
  return <button className={`btn ${classType}`}>{children}</button>;
}
