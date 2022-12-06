import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import HelpIcon from '@mui/icons-material/Help';
import DataObjectIcon from '@mui/icons-material/DataObject';
import SettingsIcon from '@mui/icons-material/Settings';
export const navData = [
    {
        id: 0,
        icon: <HomeIcon/>,
        text: "Home",
        link: "/"
    },
    {
        id: 1,
        icon: <InfoIcon/>,
        text: "Info",
        link: "info"
    },
    {
        id: 2,
        icon: <HelpIcon/>,
        text: "How it Works",
        link: "help"
    },
    {
        id: 3,
        icon: <DataObjectIcon/>,
        text: "Dataset",
        link: "dataset"
    }
]