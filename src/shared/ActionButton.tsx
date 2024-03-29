import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "@/shared/types";

type Props = {
    children: React.ReactNode;
    setSelctedPage: (value: SelectedPage) => void;
}

export const ActionButton = ({children, setSelctedPage}: Props) => {
  return (
    <AnchorLink
    className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 text-white"
    onClick={() => setSelctedPage(SelectedPage.ContactUs) }
    href={`#${SelectedPage.ContactUs}`}
    >{children}</AnchorLink>
  )
}