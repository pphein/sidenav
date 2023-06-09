import HomeIcon from '@mui/icons-material/Home';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import BarChartIcon from '@mui/icons-material/BarChart';
import SettingsIcon from '@mui/icons-material/Settings';
import { ContactMail, PermIdentity } from '@mui/icons-material';
 
export const navData = [
    {
        id: 0,
        icon: <HomeIcon/>,
        text: "Home",
        link: "/",
        navData: [
            {
                id: 0,
                icon: <PermIdentity />,
                text: "About us",
                'link': '/about-us'
            },
            {
                id: 1,
                icon: <ContactMail />,
                text: "Contact us",
                'link': '/about-us'
            }
        ]
    },
    {
        id: 1,
        icon: <TravelExploreIcon/>,
        text: "Explore",
        link: "explore"
    },
    {
        id: 2,
        icon: <BarChartIcon/>,
        text: "Statistics",
        link: "statistics"
    },
    {
        id: 3,
        icon: <SettingsIcon/>,
        text: "Settings",
        link: "settings"
    }
]