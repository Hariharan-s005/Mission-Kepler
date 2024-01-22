import { useTheme } from '../../contexts/theme.context'
import { sideBarContainerConstants } from '../../constants/sideBarContainerConstants'
import style from './SideBarContainer.module.css'
export const SideBarContainer=()=>{
   const {isDarkMode,toggleTheme}=useTheme();
   return(
    <div className={style["side-bar-container"]}>
     <div className={style["logo-container"]}><span>{sideBarContainerConstants.LOGO_PART_ONE}</span>   <span>{sideBarContainerConstants.LOGO_PART_TWO}</span> </div>

     <div className={style["filter-container"]}>
     <h3 className={style["filter-heading"]}>{sideBarContainerConstants.FILTER_TITLE}</h3>
     </div>
     <div className={style["side-bar-buttons-container"]}>
      <button>{sideBarContainerConstants.VIEW_MEMBERS_BUTTON}</button>
      <button onClick={toggleTheme}>{isDarkMode?`${sideBarContainerConstants.MODE_TOGGLE_LIGHT}`:  `${sideBarContainerConstants.MODE_TOGGLE_DARK}`}</button>
     </div>
    </div>
   )
}