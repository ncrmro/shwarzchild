import * as React from "react";

interface Route {
    name: string;
    href: string;
}

interface PageProps {
    routes?: Array<Route>;
}

export default class Navbar extends React.Component<PageProps, {}> {
    public static defaultProps: Partial<PageProps> = {
        routes: [
            {
                name: "Home",
                href: "default.asp",
            },
            {
                name: "Contact",
                href: "contact.asp",
            },
            {
                name: "About",
                href: "about.asp",
            }
        ]
    };

    private renderRoute(route: Route): any {
        return <li key={route.name} >
            <a href={route.href} >{route.name}</a>
        </li>
    }

    public render(): JSX.Element {
        return <ul>
            {this.props.routes.map(route => this.renderRoute(route))}
        </ul>;
    }
}