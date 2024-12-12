'use client';

import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import NextLink from 'next/link';
import ProTip from '@/components/ProTip';
import Copyright from '@/components/Copyright';

interface Data {data: Array<Object> }
export default function Home() {
  const [data, setData] = React.useState<Object>()
  React.useEffect(()=> {
      fetch('https://api.scripture.api.bible/v1/bibles',{
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'api-key': `${process.env.NEXT_PUBLIC_API_KEY}`
        }
      }).then(res => res.json()).then(setData)
    
},[])
console.log(data);

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Material UI - Next.js App Router example in TypeScript
        </Typography>
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          {data?data?.data[0]?.name: "Loading..."}
        </Typography>
        <Link href="/about" color="secondary" component={NextLink}>
          Go to the about page
        </Link>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
