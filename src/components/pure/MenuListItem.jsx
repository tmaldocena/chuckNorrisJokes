import { List, ListItem, ListItemIcon, ListItemText} from "@mui/material";
import { Home, Settings, Task } from '@mui/icons-material';
import { useHistory } from "react-router-dom";

const getIcon = (icon) => {
    switch (icon) {
        case 'HOME':
            return(<Home></Home>);
            break;
        case 'TASKS':
            return(<Task></Task>);
            break;
        case 'SETTINGS':
            return(<Settings></Settings>)
        default:
            return(<Home></Home>);
            break;
    }
}

const MenuListItem = ( { list } ) => {

    const history = useHistory();
    const navigateTo = (path) => {
        history.push(path);
    }

    return (
        <List>
            {list.map(({text, path, icon}, index) =>
                (
                    <ListItem key={index} button onClick={() => navigateTo(path)}>
                        <ListItemIcon>
                            {getIcon(icon)}
                        </ListItemIcon>
                        <ListItemText primary={text}></ListItemText>
                    </ListItem>
                )
            )}
        </List>
    );
}

export default MenuListItem;
