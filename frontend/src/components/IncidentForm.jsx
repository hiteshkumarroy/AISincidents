import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  TextField, 
  Button, 
  Paper, 
  Typography, 
  Box, 
  FormControl, 
  InputLabel, 
  Select, 
  MenuItem 
} from '@mui/material';
import { createIncident } from '../services/api';

const IncidentForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    severity: 'Medium'
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createIncident(formData);
      navigate('/');
    } catch (error) {
      console.error('Error creating incident:', error);
    }
  };

  return (
    <Paper elevation={3} sx={{ padding: 3, margin: 2 }}>
      <Typography variant="h5" gutterBottom>Report New Incident</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          margin="normal"
          label="Title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        
        <TextField
          fullWidth
          margin="normal"
          label="Description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          multiline
          rows={4}
          required
        />
        
        <FormControl fullWidth margin="normal" required>
          <InputLabel>Severity</InputLabel>
          <Select
            name="severity"
            value={formData.severity}
            onChange={handleChange}
            label="Severity"
          >
            <MenuItem value="Low">Low</MenuItem>
            <MenuItem value="Medium">Medium</MenuItem>
            <MenuItem value="High">High</MenuItem>
          </Select>
        </FormControl>
        
        <Box mt={3} display="flex" justifyContent="flex-end">
          <Button 
            variant="contained" 
            color="primary" 
            type="submit"
            sx={{ mr: 2 }}
          >
            Submit
          </Button>
          <Button 
            variant="outlined" 
            onClick={() => navigate('/')}
          >
            Cancel
          </Button>
        </Box>
      </form>
    </Paper>
  );
};

export default IncidentForm;