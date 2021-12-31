import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import React from 'react';
export default function setting() {
  return <div className='pl-32'>
    
    setting page
    
    <Stack direction="row" spacing={1}>
      <Chip label="Chip Filled" />
      <Chip label="Chip Outlined" variant="outlined" />
    </Stack>
    </div>;
}
