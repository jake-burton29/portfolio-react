import React from "react";
import { Container } from "react-bootstrap";
import background from "../assets/aboutImage.jpg";
export default function Home() {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "98vh",
        minWidth: "100vw",
        paddingTop: "3vh",
      }}
    >
      <Container
        style={{
          padding: "1vh",
          marginLeft: "1vh",
          maxWidth: "50vw",
          backgroundColor: "black",
          color: "white",
          opacity: ".55",
        }}
      >
        <h1>Developer, Adeventurer, Brother</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel est
          tenetur fugit explicabo consequuntur, molestias a. Hic optio quia iure
          quam, sunt, est debitis veniam ab laboriosam, reprehenderit earum.
          Unde!
        </p>
      </Container>
    </div>
  );
}
