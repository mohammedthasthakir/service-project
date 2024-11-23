const customComponents = {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none', // Disable uppercase text
          fontWeight: 500,
          borderRadius: 8,
          padding: '6px 16px',
        },
        containedPrimary: {
          backgroundColor: '#1976d2',
          '&:hover': {
            backgroundColor: '#115293',
          },
        },
      },
    },
  };
  
  export default customComponents;
  