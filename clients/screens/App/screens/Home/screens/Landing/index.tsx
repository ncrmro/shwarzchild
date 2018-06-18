import * as React from "react";

interface PageProps {
    title?: string;
}
export default class Landing extends React.Component<PageProps, {}> {
    public static defaultProps: Partial<PageProps> = {
        title: "Hello World!"
    };

    public render(): JSX.Element {
        return <div>
            {this.props.title}
        </div>;
    }
}