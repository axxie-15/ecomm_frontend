import React from 'react';
import { Box, Container, Grid, Typography, Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <Box 
      sx={{ 
        bgcolor: 'grey.900', 
        color: 'white', 
        py: 6, 
        mt: 'auto', 
        width: '100%'  // Ensures the footer stretches across the bottom of the page
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Company Information */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2">
              We provide the finest quality bedsheets, made from the softest materials, to ensure your comfort and style in every bedroom.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Link href="/shop" color="inherit" variant="body2" display="block" gutterBottom>
              Shop
            </Link>
            <Link href="/about" color="inherit" variant="body2" display="block" gutterBottom>
              About Us
            </Link>
            <Link href="/contact" color="inherit" variant="body2" display="block" gutterBottom>
              Contact Us
            </Link>
            <Link href="/blog" color="inherit" variant="body2" display="block" gutterBottom>
              Blog
            </Link>
          </Grid>

          {/* Customer Service */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>
              Customer Service
            </Typography>
            <Link href="/faq" color="inherit" variant="body2" display="block" gutterBottom>
              FAQ
            </Link>
            <Link href="/shipping" color="inherit" variant="body2" display="block" gutterBottom>
              Shipping & Returns
            </Link>
            <Link href="/privacy-policy" color="inherit" variant="body2" display="block" gutterBottom>
              Privacy Policy
            </Link>
            <Link href="/terms-conditions" color="inherit" variant="body2" display="block" gutterBottom>
              Terms & Conditions
            </Link>
          </Grid>

          {/* Social Media */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Link href="https://www.facebook.com" target="_blank" color="inherit">
                <FacebookIcon />
              </Link>
              <Link href="https://www.instagram.com" target="_blank" color="inherit">
                <InstagramIcon />
              </Link>
              <Link href="https://www.twitter.com" target="_blank" color="inherit">
                <TwitterIcon />
              </Link>
              <Link href="https://www.linkedin.com" target="_blank" color="inherit">
                <LinkedInIcon />
              </Link>
            </Box>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} Bedsheet Store. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
