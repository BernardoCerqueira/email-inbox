import Avatar from "./Avatar";
import Logo from "./Logo";
import SearchForm from "./SearchForm";
import SwitchTheme from "./SwitchTheme";

export default function Header(){
    return(
        <header
            className="
                px-4 md:px-7 xl:px-10 h-16 lg:h-20
                flex items-center justify-between
                gap-6 md:gap-16 xl:gap-16
                bg-gray-100 dark:bg-gray-800
            "
        >
            <Logo/>
            <SearchForm/>
            <SwitchTheme/>
            <Avatar/>
        </header>
    )
}