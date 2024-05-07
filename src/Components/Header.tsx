import Logo from './Logo'
import Navbar from './Navbar'

export default function Header() {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
            <Logo></Logo>
            <Navbar></Navbar>

        </div>
    )
}
