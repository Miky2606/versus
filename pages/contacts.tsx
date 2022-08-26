import Head from "next/head";

const Contacts = (props: any): JSX.Element => {
  console.log(props);

  return (
    <div>
      <Head>
        <title>Contacts</title>
      </Head>

      <h1>{props.pokemon.name}</h1>
    </div>
  );
};

export default Contacts;

export async function getStaticProps(props: any) {
  const data = await fetch("http://localhost:3000/api/hello");
  const user = await data.json();
  return {
    props: {
      pokemon: user,
    },
  };
}
