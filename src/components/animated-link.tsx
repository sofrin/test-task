import { flushSync } from 'react-dom';
import { useNavigate } from 'react-router-dom';
type Props = {
	to: string;
	children: React.ReactNode;
};
export function AnimatedLink({ to, children }: Props) {
	const navigate = useNavigate();
	return (
		<a
			href={to}
			onClick={(ev) => {
				ev.preventDefault();
				if (document.startViewTransition) {
					document.startViewTransition(() => {
						flushSync(() => {
							navigate(to);
						});
					});
				} else {
					navigate(to);
				}
			}}
		>
			{children}
		</a>
	);
}
