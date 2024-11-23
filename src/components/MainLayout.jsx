import { Outlet } from 'react-router-dom';
import Navs from './Navs';
import AppTitle from './AppTitle';
function MainLayout() {
  return (
    <div>
      <AppTitle
        title="Box Office"
        subtitle="All Your Favourite movies at your  fingertips!"
      />
      <Navs />

      <Outlet />
    </div>
  );
}

export default MainLayout;
