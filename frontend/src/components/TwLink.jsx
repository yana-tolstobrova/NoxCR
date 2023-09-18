export function TwLink(props) {
    return (
        <a className="text-black-500 hover:bg-gray-700 hover:text-white px-8 py-2 rounded-md text-sm font-medium cursor-pointer" href={props.href}>{props.children}</a>
    )
}
