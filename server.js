const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve static frontend files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Backend API: Serve configuration and map zone data
app.get('/api/config', (req, res) => {
  res.json({
    HOME: { lat: 12.9716, lon: 80.2209 },
    DEAD_ZONE: { lat: 12.9755, lon: 80.2255, radiusM: 900 },
    DETECTION_RANGE: 5000,
    DISASTERS: {
      fire: { label: 'Wildfire', icon: '🔥', color: '#c0392b', priority: 0 },
      flood: { label: 'Flooding', icon: '🌊', color: '#3498db', priority: 1 },
      quake: { label: 'Earthquake', icon: '🌍', color: '#f1c40f', priority: 1 },
      storm: { label: 'Cyclone', icon: '🌪️', color: '#7f8c8d', priority: 2 },
      chemical: { label: 'Chemical Leak', icon: '☢️', color: '#27ae60', priority: 0 },
      bio: { label: 'Biohazard', icon: '☣️', color: '#8e44ad', priority: 0 },
      gas: { label: 'Gas Leak', icon: '💨', color: '#f39c12', priority: 1 },
      structural: { label: 'Collapse', icon: '🏚️', color: '#d35400', priority: 1 }
    },
    EVENT_TYPES: {
      person: { label: 'PERSON_DETECTED', icon: '🧍', priority: 0 },
      fire: { label: 'FIRE_DETECTED', icon: '🔥', priority: 0 },
      vehicle: { label: 'VEHICLE_DETECTED', icon: '🚙', priority: 2 },
      animal: { label: 'ANIMAL_DETECTED', icon: '🦌', priority: 2 }
    },
    DRONE_COLORS: [
      { name: 'Blue',   hex: '#3498db' },
      { name: 'Red',    hex: '#e74c3c' },
      { name: 'Green',  hex: '#2ecc71' },
      { name: 'Purple', hex: '#9b59b6' },
      { name: 'Orange', hex: '#e67e22' },
      { name: 'Yellow', hex: '#f1c40f' },
      { name: 'Teal',   hex: '#1abc9c' },
      { name: 'Pink',   hex: '#e84393' }
    ]
  });
});

app.listen(PORT, () => {
  console.log(`Mission Control Backend running on http://localhost:${PORT}`);
});
