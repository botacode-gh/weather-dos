import "./Form.css";

export default function Form({ title, children, onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onAddActivity(data);
    event.target.reset();
  }
  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>{title}</h2>
      {children}
      <button type="submit">Add activity</button>
    </form>
  );
}
