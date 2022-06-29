// Librerías
import Head from "next/head";

// Relative Imports
import MainLayout from "../src/Layout";

export default function Home() {
  return (
    <MainLayout
      title={"Volta Pets - Home"}
      description={"Página principal de Volta Pets"}
    >
      <h1 className="text-3xl font-bold underline">Hello World!</h1>
    </MainLayout>
  );
}
