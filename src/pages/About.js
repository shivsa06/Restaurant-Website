import React from "react";
import Layout from "../components/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem"
          },
          "& p": {
            textAlign: "justify"
          },
          "@media (max-width: 600px)": {
            mt: 0,
            "&h4": {
              fontSize: "1.5rem"
            }
          }
        }}
      >
        <Typography variant="h4">Welcome to My Restaurant</Typography>
        <p>
          Welcome to My Restaurant, a culinary haven where passion for food
          meets the art of dining. Situated in the heart of Hyderabad, we take
          pride in offering a gastronomic experience like no other. Founded in
          2023, My Restaurant was born out of a shared love for exquisite
          cuisine and a desire to create a welcoming space for food enthusiasts.
          What began as a small family-owned eatery has evolved into a renowned
          dining destination that captures the essence of cuisine. At [Your
          Restaurant's Name], we believe in the power of food to connect people,
          evoke emotions, and create memories. Our culinary philosophy revolves
          around sourcing the finest, locally-sourced ingredients to craft
          dishes that tantalize the taste buds and ignite the senses. Each plate
          that leaves our kitchen is a work of art, a labor of love, and a
          testament to our commitment to quality.
        </p>
        <br></br>
        <p>
          Step into our inviting restaurant and embark on a culinary journey
          like no other. Our elegant ambiance, attentive staff, and carefully
          curated menu ensure that every visit is an unforgettable experience.
          Whether you're celebrating a special occasion, enjoying a romantic
          dinner for two, or simply savoring a meal with friends and family, My
          Restaurant provides the perfect backdrop for every moment. Our team of
          passionate chefs, sommeliers, and hospitality professionals is
          dedicated to exceeding your expectations. They bring their creativity,
          expertise, and attention to detail to every dish and interaction,
          ensuring that you feel like a cherished guest from the moment you walk
          through our doors. We are proud to be a part of the vibrant [Your
          Location] community and are committed to giving back. We support local
          initiatives, source our ingredients from nearby farms and suppliers,
          and strive to minimize our environmental footprint.
        </p>
      </Box>
    </Layout>
  );
};

export default About;
