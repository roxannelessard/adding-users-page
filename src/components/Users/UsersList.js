import { Card } from '..UI/Card'
import classes from "./UsersList.module.css";

export const UsersList = (props) => {
  return (
    <Card>
      <ul className={classes.users}>
        {props.users.map((user) => (
          <li>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};
