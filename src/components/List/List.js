export default function List({ activities, headline }) {
  return (
    <ul>
      <h2>{headline}</h2>
      <aside>You should do some:</aside>
      {activities.map((activity) => (
        <li key={activity.id}>
          <p>{activity.name}</p>
        </li>
      ))}
    </ul>
  );
}
