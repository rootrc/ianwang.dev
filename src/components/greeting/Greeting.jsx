import "./Greeting.css";
import SocialMedia from "../socialMedia/SocialMedia.jsx";

export default function Greeting() {
    return (
        <div>
            <h1>Hi I'm Ian</h1>
            <ul>
                <li>
                    <p></p> Bachelor of Computer Engineering @
                    <a href="https://uwaterloo.ca/" target="_blank" rel="noopener noreferrer">
                        <span>
                            <img alt="" src="/public/uwaterloo.jpg"/>
                            <span>UWaterloo</span>
                        </span>
                    </a>
                </li>

            </ul>
            <SocialMedia />
        </div>
    );
}