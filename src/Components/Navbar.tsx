import NavLink from "./NavLink";

export default function Navbar() {
    return (
        <>
            <div style={{ gap: "5px", display: "flex" }}>
                <NavLink title="Home"></NavLink>
                <NavLink title="Features"></NavLink>
                <NavLink title="Contact"></NavLink>
            </div>
        </>
    )
}
