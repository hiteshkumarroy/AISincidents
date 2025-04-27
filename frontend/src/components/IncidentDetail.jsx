import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Paper, 
  Typography, 
  Button, 
  Box, 
  Chip,
  Divider
} from '@mui/material';
import { Delete, ArrowBack } from '@mui/icons-material';
import { getIncident, deleteIncident } from '../services/api';

const IncidentDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [incident, setIncident] = useState(null);

  useEffect(() => {
    const fetchIncident = async () => {
      try {
        const response = await getIncident(id);
        setIncident(response.data);
      } catch (error) {
        console.error('Error fetching incident:', error);
        navigate('/');
      }
    };
    fetchIncident();
  }, [id, navigate]);

  const handleDelete = async () => {
    try {
      await deleteIncident(id);
      navigate('/');
    } catch (error) {
      console.error('Error deleting incident:', error);
    }
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'High': return 'error';
      case 'Medium': return 'warning';
      case 'Low': return 'success';
      default: return 'default';
    }
  };

  if (!incident) return <div>Loading...</div>;

  return (
    <Paper elevation={3} sx={{ padding: 3, margin: 2 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Button 
          startIcon={<ArrowBack />}
          onClick={() => navigate('/')}
        >
          Back to List
        </Button>
        <Button 
          color="error"
          startIcon={<Delete />}
          onClick={handleDelete}
        >
          Delete Incident
        </Button>
      </Box>
      
      <Typography variant="h4" gutterBottom>{incident.title}</Typography>
      
      <Box mb={3}>
        <Chip 
          label={incident.severity} 
          color={getSeverityColor(incident.severity)}
          sx={{ mr: 2 }}
        />
        <Typography variant="body2" color="text.secondary" display="inline">
          Reported at: {new Date(incident.reported_at).toLocaleString()}
        </Typography>
      </Box>
      
      <Divider sx={{ my: 2 }} />
      
      <Typography variant="body1" paragraph>
        {incident.description}
      </Typography>
    </Paper>
  );
};

export default IncidentDetail;