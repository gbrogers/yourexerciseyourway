export default function Tracking() {
  return <h2>Welcome to the Tracking Page!!</h2>;
}
export const getStaticProps = async () => {
  const todos = await fetch("/api/login").then((response) => response.json());

  return {
    props: { todos },
  };
};
