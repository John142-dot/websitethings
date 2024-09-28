import styles from "../styles/InstructionsComponent.module.css";
import { useRouter } from "next/router";

export default function InstructionsComponent() {
	const router = useRouter();
	return (
		<div className={styles.container}>
			<header className={styles.header_container}>
				<h1>
					lel<span>-ele-le</span>
				</h1>
				<p>
					zonkey's website
					<span>/e/idk</span>
				</p>
			</header>

			<div className={styles.buttons_container}>
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://discord.gg/qbtukq7rHY"
				>
					<div className={styles.button}>
						<p>Discord</p>
					</div>
				</a>
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://github.com/John142-dot"
				>
					<div className={styles.button}>
						<p>Github</p>
					</div>
				</a>
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://r.mtdv.me/articles/fkaPFkkzDi"
				>
					<div className={styles.button}>
						<img
							src="/path-to-your-image.png"
							width="20px"
							height="20px"
							alt="cool site icon"
						/>
						<p>cool site</p>
					</div>
				</a>
			</div>
			<div className={styles.footer}>
				<a
					href="https://r.mtdv.me/articles/fkaPFkkzDi"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						id="badge-button"
						style={{ width: "240px", height: "53px" }}
						src="/path-to-your-image.png"
						alt="idk too"
					/>
				</a>
				<div className={styles.icons_container}>
					<div>
						<a
							href="https://github.com/John142-dot"
							target="_blank"
							rel="noopener noreferrer"
						>
							Leave a star on Github
						</a>
					</div>
					<div>
						<a
							href="https://twitter.com/"
							target="_blank"
							rel="noopener noreferrer"
						>
							NO TWITTER!!
						</a>
					</div>
				</div>
			</div>
		</div>
	);
			}
