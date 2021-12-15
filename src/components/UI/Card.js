import classes from'./Card.module.css' // because it is a css module

export const Card = (props) => {
  return (
    // `${classes.card} ${props.className}`is to accept classes from Card.module.css and also classes coming from props (AddUser.module)
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};
