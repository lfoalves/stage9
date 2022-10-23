import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { New } from '../pages/New';
import { NotFound } from '../pages/NotFound';
import { Profile } from '../pages/Profile';

export function AppRoutes() {
  return(
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/new' element={<New />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}