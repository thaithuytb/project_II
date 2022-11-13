import "./conversation.css";

export default function Conversation() {
  return (
    <div className="conversation">
      Thảo luận
      <p>
        <span style={{ color: "red" }}>Admin:</span>
        Hãy để lại ý kiến một cách khách quan và chính xác nhất mọi người nhé
        !!!
      </p>
      <p>
        <span>Thai:</span>
        Đúng ghê, hôm mấy mình thấy nước nóng quá
      </p>
      <form>
        <input type="text" placeholder="typing ..." />
      </form>
    </div>
  );
}
