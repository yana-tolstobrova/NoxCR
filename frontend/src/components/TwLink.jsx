import { Link } from "react-router-dom";

const Anchor = (props) => <a {...props} />

export function TwLink({ as, children, ...rest }) {
    const Comp = as === 'anchor' ? Anchor : Link;
    return (
        <Comp className="text-black-500 px-8 py-2 text-lg rounded-md text-sm font-semibold cursor-pointer ml-4 hover:font-bold hover:underline"style={{ color: '#55285A' }} {...rest}>{children}</Comp>
    )
}
