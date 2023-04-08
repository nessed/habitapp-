import { useEffect, useState } from "react";

export default function Hello({ text }) {
  return <div>{text}</div>;
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/hello");
  const data = await res.json();

  return {
    props: {
      text: data.text,
    },
  };
}