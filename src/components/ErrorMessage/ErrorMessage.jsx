import css from './ErrorMessage.module.css'

function ErrorMessage(){
    return(
        <p className={css.error}>Whoops, something went wrong! Please try reloading this page!</p>
    )
}

export default ErrorMessage;