import * as React from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Link from "../../src/components/link/Link";
// import ProfileCollection from "../../src/components/profile/ProfileCollection";
// import profileJson from "./../../public/data/profile.json";

export default function About() {
  return (
    <Container maxWidth="sm">
      <Grid container justifyContent="center">
        <Grid item>
          <Button variant="contained" component={Link} noLinkStyle href="/">
            🏠 Home
          </Button>
        </Grid>
      </Grid>
      {/* <ProfileCollection items = {profileJson.nfts} /> */}
      
    </Container>
  );
}
