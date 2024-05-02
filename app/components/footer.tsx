import Rotator from "./rotator";
import SocialIcons from "./socialIcons";
import { socialIconList } from "./config/socialIconList";

export default function Footer() {
  return (
    <footer className="Footer">
      <section className="Footer-container">
        <div className="Footer-social-container">
          <span className="Footer-copyright">
            © {new Date().getFullYear()} JM Web Development <small>LLC</small>
          </span>
          <SocialIcons icons={socialIconList} />
        </div>
        <div className="Footer-rotator-container">
          Made with
          <Rotator emojis={["☕", "🍕", "🍺", "🍜", "💖"]} />
        </div>
      </section>
    </footer>
  );
}
