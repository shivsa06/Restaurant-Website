import React from 'react'
import Layout from '../components/Layout'
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const Contact = () => {
  return (
    <Layout>
      <Box sx={{my: 5, ml: 10, '&h4': {fontWeight: 'bold', mb: 2}}}>
        <Typography variant='h4'>
          Contact My Restaurant
        </Typography>
        <p>lorem ipsumEnim duis anim amet tempor. Eu voluptate aliquip sit nisi et minim laborum magna incididunt nostrud. Sit ex irure Lorem est sunt.</p>
      </Box>
      <Box sx={{m: 3, width: '600px', ml: 10, '@media (max-width: 600px)': {
        width: '300px'
      }}}>
        <TableContainer component={Paper}>
          <Table aria-label='contact table'>
            <TableHead>
              <TableRow>
                <TableCell sx={{bgcolor: 'black', color: 'white'}} align='center'>Contact Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{color:'red', pt: 1 }}></SupportAgentIcon>
                  1800-12-4634 (tollfree)
                </TableCell>
              </TableRow>
              <TableRow>
              <TableCell>
                  <EmailIcon sx={{color:'skyblue', pt: 1}}></EmailIcon>
                  help@myrestaurant.com
                </TableCell>
              </TableRow>
              <TableRow>
              <TableCell>
                  <PhoneIcon sx={{color:'green', pt: 1}}></PhoneIcon>
                  +91 94587 13763
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  )
}

export default Contact
