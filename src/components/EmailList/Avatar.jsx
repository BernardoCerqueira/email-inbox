export default function Avatar({ letter }) {
    return (
        <div
            className="
            rounded-full bg-rose-300 dark:bg-rose-600
            w-10 h-10 grid place-content-center
        "
        >
            <span>
                {letter}
            </span>
        </div>
    )
}