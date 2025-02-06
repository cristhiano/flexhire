"use client";

import { useState } from "react";
import { submitForm } from "@/app/actions/currentUser";
import { Box, TextField, Button } from '@mui/material';

export default function LoginForm() {
  const [apiKey, setApiKey] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const response = await submitForm(new FormData(e.currentTarget));
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        p: 2,
        border: 1,
        borderRadius: 1,
        borderColor: 'grey.400',
      }}
    >
      <TextField
        label="Flexhire API key"
        variant="outlined"
        fullWidth
        margin="normal"
        value={apiKey}
        onChange={(e) => setApiKey(e.target.value)}
        InputProps={{
          sx: {
            p: 1,
            borderRadius: 1,
          },
        }}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{ mt: 2 }}
      >
        Submit
      </Button>
    </Box>
  );
}
