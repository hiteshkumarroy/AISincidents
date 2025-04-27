import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  List, 
  ListItem, 
  ListItemText, 
  Typography, 
  Paper, 
  Button,
  Chip,
  Box
} from '@mui/material';
import { Delete, Add, Visibility } from '@mui/icons-material';
import { getIncidents, deleteIncident } from '../services/api';

const IncidentList = () => {
  const [incidents, setIncidents] = useState([]);

  useEffect(() => {
    fetchIncidents();
  }, []);

  const fetchIncidents = async () => {
    try {
      const response = await getIncidents();
      setIncidents(response.data);
    } catch (error) {
      console.error('Error fetching incidents:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteIncident(id);
      fetchIncidents();
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

  return (
    <Paper elevation={3} sx={{ padding: 3, margin: 2 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h4">AI Safety Incidents</Typography>
        <Button 
          variant="contained" 
          color="primary" 
          startIcon={<Add />}
          component={Link}
          to="/new"
        >
          New Incident
        </Button>
      </Box>
      
      <List>
        {incidents.map((incident) => (
          <ListItem 
            key={incident._id} 
            secondaryAction={
              <>
                <Button 
                  component={Link} 
                  to={`/${incident._id}`}
                  startIcon={<Visibility />}
                  sx={{ mr: 1 }}
                >
                  View
                </Button>
                <Button 
                  color="error"
                  startIcon={<Delete />}
                  onClick={() => handleDelete(incident._id)}
                >
                  Delete
                </Button>
              </>
            }
          >
            <ListItemText
              primary={incident.title}
              secondary={
                <>
                  <Typography component="span" display="block">
                    {new Date(incident.reported_at).toLocaleString()}
                  </Typography>
                  <Chip 
                    label={incident.severity} 
                    size="small" 
                    color={getSeverityColor(incident.severity)}
                    sx={{ mt: 1 }}
                  />
                </>
              }
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default IncidentList;