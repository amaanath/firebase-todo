import { List, ListItem } from '@material-ui/core'
import './Todo.css'

const Todo = ({todo}) => {
    return (
        <div>
        <List>
            <ListItem>{todo}</ListItem>
        </List>
        </div>
    )
}

export default Todo
