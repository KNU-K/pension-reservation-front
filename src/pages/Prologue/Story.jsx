import React from "react";
import { useMediaQuery } from "@mui/material";
import Navbar from "../../components/Navbar";
import Details from "../../components/Details";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const Story = () => {
    // 화면 너비에 따라 `isMobile`을 true/false로 설정
    const isMobile = useMediaQuery("(max-width: 768px)");
    return (
        <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
            {/* Header 또는 Navbar */}
            {!isMobile ? <Header /> : <Navbar />}

            {/* Main Content */}
            <Container maxWidth="lg" style={{ marginTop: "16px", flex: 1, display: "flex" }}>
                <Grid style={!isMobile ? { marginTop: "220px" } : { marginTop: "30px" }} container spacing={3}>
                    {/* Sidebar */}
                    {!isMobile && (
                        <Grid item xs={12} sm={3} style={{ padding: "16px" }}>
                            <Sidebar />
                        </Grid>
                    )}

                    {/* Content */}
                    <Grid item xs={12} sm={9} style={{ padding: "16px" }}>
                        <Box style={{ height: "100%" }}>
                            <Details></Details>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Story;
