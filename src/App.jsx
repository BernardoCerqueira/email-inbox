import { useState } from "react";
import Header from "./components/Header";
import Container from "./components/Container";
import SideBar from "./components/Sidebar";
import Bottombar from "./components/Bottombar";
import EmailList from "./components/EmailList";
import EmailContent from "./components/EmailContent";

export default function App() {
  const [openEmail, setOpenEmail] = useState(null)

  return (
    <>
      <Header />
      <Container>
        <div className="flex flex-col md:flex-row gap-2 xl:gap-4 h-full">
          <SideBar />
          <EmailList setOpenEmail={setOpenEmail}/>
          {openEmail && <EmailContent email={openEmail} setOpenEmail={setOpenEmail}/>}
          <Bottombar/>
        </div>
      </Container>
    </>
  )
}