import { useTheme } from '../../contexts/theme.context';
import { SideBarContainer } from '../../containers/SideBarContainer/SideBarContainer';
import style from './HomePage.module.css';
import MembersContainer from '../../containers/MembersContainer/MembersContainer';
export const HomePage=()=>{
    const {isDarkMode, toggleTheme}=useTheme();
    return(
        <div className={isDarkMode?["dark-mode"]:["light-mode"]}>
        {/* <SideBarContainer/> */}
        <MembersContainer/>
        </div>
    )
};

export default HomePage;