import Menu from './menu';

export default function Contact() {
    return (
        <div className="container">
            <h3>Contact</h3>
            <Menu className="text-dark" items={[
                { text: "Follow on Twitter" },
                { text: "Like on Facebook" },
                { text: "Email me" }
            ]} />
        </div>
    )
}