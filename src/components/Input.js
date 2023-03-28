import "./Input.css";

export default function Input({
  name,
  label,
  type = "text",
  placeholder = null,
}) {
  return (
    <div className="input-container">
      <label htmlFor={`${name}Input`}>{label}</label>
      <input
        type={type}
        name={name}
        id={`${name}Input`}
        placeholder={placeholder}
      />
    </div>
  );
}
