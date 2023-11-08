import React from "react";
import Head from "next/head";
import { Container } from "react-bootstrap";

export default function blog() {
  return (
    <div>
      <Head>
        <title>Blogs Next App</title>
        <meta
          name="description"
          content="Meta description for the Blogs page"
        />
        <link rel="icon" href="/images/editflight-icon.png" />
      </Head>
      <main>
        <Container className="p-5 mb-3">
          <h1 className="p-5 mt-5 text-center">Blog Page Here </h1>
          <h2 className="text-center">Contact me</h2>
          <p className="text-center"> okorobright13@gmail.com</p>
        </Container>
      </main>
    </div>
  );
}
