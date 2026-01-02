import "./SocialMedia.css";

export default function SocialMedia() {
    return (
        <div>
            <a
                href="https://github.com/rootrc/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <   i className="fab fa-github"></i>
            </a>
            <a
                href="https://www.linkedin.com/in/ian-wang-362b34305/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className="fab fa-linkedin-in"></i>
            </a>
            <a
                href={`mailto:ianwang5190@gmail.com`}
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className="fas fa-envelope"></i>
            </a>
        </div>
    );
}