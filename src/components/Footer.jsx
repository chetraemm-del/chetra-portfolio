import { FaFacebookF, FaGithub, FaTelegramPlane } from "react-icons/fa";

const socialLinks = [
	{
		label: "Facebook",
		href: "https://www.facebook.com/share/1DyhY3Mpx5/",
		icon: FaFacebookF,
	},
	{
		label: "Telegram",
		href: "https://t.me/chhuychhuychhuychhuychhuychhuych",
		icon: FaTelegramPlane,
	},
	{
		label: "GitHub",
		href: "https://github.com/chetraemm-del",
		icon: FaGithub,
	},
];

function Footer() {
	return (
		<footer className="border-t border-gray-200 bg-white px-6 py-8 sm:px-10 md:px-16">
			<div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
				<div className="text-center sm:text-left">
					<p className="bungee-tint-regular text-xl">Chetra</p>
					<p className="roboto-condensed mt-1 text-sm text-gray-500">
						Building clean and meaningful web experiences.
					</p>
				</div>

				<div className="flex items-center gap-3">
					{socialLinks.map(({ label, href, icon: Icon }) => (
						<a
							key={label}
							href={href}
							target="_blank"
							rel="noreferrer"
							aria-label={label}
							className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-700 transition-all duration-300 hover:-translate-y-1 hover:border-black hover:bg-black hover:text-white"
						>
							<Icon aria-hidden="true" />
						</a>
					))}
				</div>
			</div>

			<p className="roboto-condensed mx-auto mt-7 max-w-6xl border-t border-gray-100 pt-5 text-center text-xs text-gray-400">
				© {new Date().getFullYear()} Chetra. All rights reserved.
			</p>
		</footer>
	);
}

export default Footer;
