import { Routes, Route } from 'react-router-dom';

import DashboardPage from './pages/DashboardPage';
import StatisticsPage from './pages/StatisticsPage';
import HistoryPage from './pages/HistoryPage';
import ProfilePage from './pages/ProfilePage';
import AchievementsPage from './pages/AchievementsPage';


function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/progress" element={<StatisticsPage />} />
      <Route path="/history" element={<HistoryPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/achievements" element={<AchievementsPage />} />
    </Routes>
  );
}

export default App;
