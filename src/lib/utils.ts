import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
const time = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });
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
