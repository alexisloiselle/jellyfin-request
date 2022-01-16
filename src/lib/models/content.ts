export type Content = {
	release_date: string;
	title: string;
	url: string;
};

export const formatContent = (content: Content): string =>
	content ? `${content.title} (${new Date(content.release_date).getFullYear()})` : '';
