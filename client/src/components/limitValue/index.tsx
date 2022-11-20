import "./limit_value.css";

export default function LimitValue() {
  return (
    <div className="limit__value">
      <div>
        <span>A1 </span>
        <span className="limit__value-first" />{" "}
        <span className="limit__value-last a1" />
      </div>
      <div>
        <span>A2 </span>
        <span className="limit__value-first" />{" "}
        <span className="limit__value-last a2" />
      </div>
      <div>
        <span>B1 </span>
        <span className="limit__value-first" />{" "}
        <span className="limit__value-last b1" />
      </div>
      <div>
        <span>B2 </span>
        <span className="limit__value-first" />{" "}
        <span className="limit__value-last b2" />
      </div>
    </div>
  );
}
