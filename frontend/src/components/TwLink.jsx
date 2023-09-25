import { Link } from "react-router-dom";

const Anchor = (props) => <a {...props} />

export function TwLink({ as, children, ...rest }) {
    const Comp = as === 'anchor' ? Anchor : Link;
    return (
        <Comp className="text-black-500 hover:bg-gray-700 hover:text-white px-8 py-2 rounded-md text-sm font-medium cursor-pointer" {...rest}>{children}</Comp>
    )
}
