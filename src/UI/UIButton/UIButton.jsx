import classes from "./UIButton.module.css";

const UiButton = ({addClassName, children, ...props}) => {
    return (
        <button {...props} className={`${classes.uiButton} ${addClassName}`}>
            {children}
        </button>
    );
};

export default UiButton;