import "./List.css";

export default function List({ activities, headline }) {
  return (
    <ul className="activities">
      <h2>{headline}</h2>
      <aside>You should:</aside>
      {activities.map((activity) => (
        <li key={activity.id} className="activity">
          <p>{activity.name}</p>
        </li>
      ))}
    </ul>
  );
}
