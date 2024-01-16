function Button({ children, type }) {
    const styles = {
        submit: "border-1 px-2 py-1 md:px-4 md:py-2 rounded-full font-semibold bg-green-700 text-slate-50 italic hover:scale-110 duration-100 hover:bg-green-600 text-sm md:text-base",
        delete: "p-1 font-semibold text-red-600 italic hover:scale-150 duration-100 text-sm md:text-base"
    }

    return (
        <button className={styles[type]}>
            {children}
        </button>
    )
}

export default Button
