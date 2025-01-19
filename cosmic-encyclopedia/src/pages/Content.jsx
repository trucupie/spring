export default function Content({ data }) {
  return (
    <main>
      <h1>{data.title}</h1>
      <p>{data.content}</p>
    </main>
  );
}
