export default function NavLink(props: { title: string }) {

  return (
    <a className="nav-link" href="#">{props.title}</a>
  )
}
