import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FooterContent from './Component/FooterContent/FooterContent';
import About from './Component/BodyContent/pages/About/About';
import Contact from './Component/BodyContent/pages/Contact/Contact';
import Home from './Component/BodyContent/pages/Home/Home';
import Resources from './Component/BodyContent/pages/Resources/Resources';
import HeaderContent from './Component/HeaderContent/HeadrContent';

import Login from './Component/HeaderContent/LogIn/LogIn';
import SignUp from './Component/HeaderContent/SignUp/SignUp';

import Sports from './Component/BodyContent/pages/Home/Sports/Sports';
import News from './Component/BodyContent/pages/Home/News/News';
import Announcements from './Component/BodyContent/pages/Home/Announcement/Announcement';
import LiveUpdate from './Component/BodyContent/pages/Home/Live Update/LiveUpdate';


import Hockey from './Component/BodyContent/pages/Home/Sports/Hockey/Hockey';
import Athletics from './Component/BodyContent/pages/Home/Sports/Athletics/Athletics';
import Badminton from './Component/BodyContent/pages/Home/Sports/Badminton/Badminton';
import Baseball from './Component/BodyContent/pages/Home/Sports/Baseball/Baseball';
import Basketball from './Component/BodyContent/pages/Home/Sports/Basketball/Basketball';
import Carrom from './Component/BodyContent/pages/Home/Sports/Carrom/Carrom';
import Chess from './Component/BodyContent/pages/Home/Sports/Chess/Chess';
import Cricket from './Component/BodyContent/pages/Home/Sports/Cricket/Cricket';
import Football from './Component/BodyContent/pages/Home/Sports/Football/Football';
import Karate from './Component/BodyContent/pages/Home/Sports/Karate/Karate';
import Swimming from './Component/BodyContent/pages/Home/Sports/Swimming/Swimming';
import TableTennis from './Component/BodyContent/pages/Home/Sports/TableTennis/TableTennis';
import Taekwondo from './Component/BodyContent/pages/Home/Sports/Taekwondo/Taekwondo';
import Volleyball from './Component/BodyContent/pages/Home/Sports/Volleyball/Volleyball';
import Weightlifting from './Component/BodyContent/pages/Home/Sports/Weightlifting/Weightlifting';



import PDFGuide from './Component/BodyContent/pages/Resources/pages2/PDFGuide/PDFGuide';
import RulesAndRegulations from './Component/BodyContent/pages/Resources/pages2/RulesAndRegulations/RulesAndRegulations';
import Schedules from './Component/BodyContent/pages/Resources/pages2/Schedules/Schedules';
import VideoTutorials from './Component/BodyContent/pages/Resources/pages2/VideoTutorials/VideoTutorials';

function App() {
  const [user, setUser] = useState(null);
  return (
    <Router>
      <div id="wrapper">
      <HeaderContent user={user} setUser={setUser} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/*" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/login" element={<Login setUser={setUser} />} />

          <Route path="/signup" element={<SignUp />} />

          <Route path="/sports/*" element={<Sports />} />
          <Route path="/news" element={<News />} />
          <Route path="/announcement" element={<Announcements />} />
          <Route path="/live-update" element={<LiveUpdate />} />
          
           

          <Route path="/sports/hockey" element={<Hockey />} />
          <Route path="/sports/athletics" element={<Athletics />} />
          <Route path="/sports/badminton" element={<Badminton />} />
          <Route path="/sports/baseball" element={<Baseball />} />
          <Route path="/sports/basketball" element={<Basketball />} />
          <Route path="/sports/carrom" element={<Carrom />} />
          <Route path="/sports/chess" element={<Chess />} />
          <Route path="/sports/cricket" element={<Cricket />} />
          <Route path="/sports/football" element={<Football />} />
          <Route path="/sports/karate" element={<Karate />} />
          <Route path="/sports/swimming" element={<Swimming />} />
          <Route path="/sports/tabletennis" element={<TableTennis />} />
          <Route path="/sports/taekwondo" element={<Taekwondo />} />
          <Route path="/sports/volleyball" element={<Volleyball />} />
          <Route path="/sports/weightlifting" element={<Weightlifting />} />

          <Route path="/pdf-guide" element={<PDFGuide />} />
          <Route path="/rules" element={<RulesAndRegulations />} />
          <Route path="/video-tutorials" element={<VideoTutorials />} />
          <Route path="/schedules" element={<Schedules />} />

          

        </Routes>
        <FooterContent />
      </div>
    </Router>
  );
}

export default App;