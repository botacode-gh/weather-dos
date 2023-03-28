import "./Conditions.css";

export default function Conditions({ emojiLabel, emoji, temperature }) {
  return (
    <div className="conditions">
      <span role="img" aria-label={`${emojiLabel} weather emoji`}>
        {emoji}
      </span>
      <span>{temperature}°C</span>
    </div>
  );
}
