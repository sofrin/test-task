import { clsx, type ClassValue } from 'clsx';
import { useEffect } from 'react';
import { useRevalidator } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
type Comment = {
	by: string;
	id: number;
	kids: number[];
	parent: number;
	text: string;
	time: Date;
	type: string;
};
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
const time = new Intl.RelativeTimeFormat('en', {
	numeric: 'auto',
	style: 'long',
});
export function formatDate(date: Date) {
	return time.format(
		-1 * Math.round((Date.now() - date.getTime()) / 86400000),
		'day',
	);
}

export const pluralize = (
	count: number,
	singular: string,
	plural: string,
	zero?: string,
) => (count === 0 ? zero : count === 1 ? singular : plural);

export async function getCommentData(id: number) {
	const res = fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
	try {
		const res1 = await res;
		return (await res1.json()) as Comment;
	} catch (err) {
		return console.log(err);
	}
}
export function useLivePageData() {
	const revalidator = useRevalidator();

	useEffect(() => {
		if (revalidator.state === 'idle') {
			revalidator.revalidate();
		}
		const interval = setInterval(() => {
			revalidator.revalidate();
		}, 60 * 1000);
		return () => clearInterval(interval);
	}, [revalidator]);
}
