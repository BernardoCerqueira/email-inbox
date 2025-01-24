import emails from "../../emails.json"
import EmailListItem from "./EmailListItem"

export default function EmailList({setOpenEmail}){
    const orderedEmails = emails.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))

    return(
        <div className="relative overflow-y-scroll grow">
            {orderedEmails.map(email => (
                <EmailListItem
                    key={email.id}
                    email={email}
                    onClick={() => setOpenEmail(email)}
                />
            ))}
        </div>
    )
}