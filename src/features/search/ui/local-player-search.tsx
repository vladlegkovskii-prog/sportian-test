import React from 'react';
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useSearch } from '../model/search-context.tsx';

function LocalPlayerSearch() {
  const { value, onChange } = useSearch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <TextField
      fullWidth
      variant="outlined"
      placeholder="Local player search..."
      value={value}
      onChange={handleChange}
      size="small"
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: 'text.secondary', fontSize: 20 }} />
            </InputAdornment>
          ),
        },
      }}
      sx={{
        '& .MuiOutlinedInput-root': {
          bgcolor: 'background.default',
          borderRadius: (theme) => `${theme.shape.borderRadius}px`,
          '& fieldset': {
            borderColor: 'divider',
          },
          '&:hover fieldset': {
            borderColor: 'secondary.main',
          },
          '&.Mui-focused fieldset': {
            borderColor: 'primary.main',
          },
        },
      }}
    />
  );
}

LocalPlayerSearch.displayName = 'LocalPlayerSearch';
export { LocalPlayerSearch };
