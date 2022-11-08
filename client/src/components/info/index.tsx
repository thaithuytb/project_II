import "./info.css";
import A from "../../assets/a.jpg";

export default function Info() {
  return (
    <div className="info">
      <div className="info__title">
        <div>
          Các thông số đo được từ việc quan trắc chất lượng nước ở khu vục A
        </div>
        <img alt="" src={A} />
      </div>
      <div className="info__content">
        <div>- Độ Ph: 3 </div>
        <div>- DO: 3</div>
        <div>- Độ mặn: 3</div>
        <div>- Nitrate: 3</div>
        <div>- Ammonia:</div>
        <div>- Nhiệt độ: 3</div>
      </div>
    </div>
  );
}
