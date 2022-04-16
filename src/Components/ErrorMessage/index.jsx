import React from "react";
import styles from "./index.module.scss"
const ErrorMessage = ({message}) => {
    return (
        <div className={styles["error-message"]}>
            {message}
        </div>
    );
};
export default ErrorMessage
