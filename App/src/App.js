import { useState } from "react";
import { Route, Routes, NavLink } from "react-router-dom";
import { Settings } from "./Components/Settings";
import { MainHeader } from "./Layout/MainHeader";
import { AddMediaPage } from "./Pages/AddMediaPage";
import { FriendsPage } from "./Pages/FriendsPage";
import { HomePage } from "./Pages/HomePage";
import { MyListsPage } from "./Pages/MyListsPage";
import { BrowseMedia } from "./Pages/BrowseMedia";

function App() {
  const [settingsIsShown, setSettingsIsShown] = useState(false);
  const [role, setRole] = useState("Default");

  const showSettingsHandler = () => {
    setSettingsIsShown(true);
  };

  const hideSettingsHandler = () => {
    setSettingsIsShown(false);
  };

  return (
    <div>
      <MainHeader showSettingsHandler={showSettingsHandler} role={role} />

      {settingsIsShown && (
        <Settings
          hideSettingsHandler={hideSettingsHandler}
          role={role}
          setRole={setRole}
        />
      )}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/friends" element={<FriendsPage />} />
        <Route path="/mylists" element={<MyListsPage />} />
        <Route path="/addMedia" element={<AddMediaPage />} />
        <Route path="/browseMedia" element={<BrowseMedia />} />
      </Routes>
      <p>{role}</p>
    </div>
  );
}

export default App;
