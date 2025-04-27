import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IncidentList from './components/IncidentList';
import IncidentForm from './components/IncidentForm';
import IncidentDetail from './components/IncidentDetail';
import { Container } from '@mui/material';

function App() {
  return (
    <Router>
      <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
        <Routes>
          <Route path="/" element={<IncidentList />} />
          <Route path="/new" element={<IncidentForm />} />
          <Route path="/:id" element={<IncidentDetail />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;