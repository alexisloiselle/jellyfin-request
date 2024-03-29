import type { Content } from '../../models/content';
import type { Kind } from '../../models/kind';

const baseURL = 'https://api.themoviedb.org/3';
const tmdbBaseUrl = 'https://www.themoviedb.org';
const moviePath = '/search/movie';
const tvPath = '/search/tv';
const apiKey = '9ab6f25b30a4f1cdd2fb6bd1df059754';

export default {
	query: async (kind: Kind, input: string): Promise<Content[]> => {
		try {
			const isMovie = kind === 'Movie';
			let url = isMovie ? moviePath : tvPath;
			url = `${baseURL}${url}?api_key=${apiKey}&query=${input}`;

			const response = await fetch(url);
			const json = await response.json();

			return json.results.slice(0, 5).map((c) => ({
				title: isMovie ? c.title : c.name,
				release_date: isMovie ? c.release_date : c.first_air_date,
				url: `${tmdbBaseUrl}/${isMovie ? 'movie' : 'tv'}/${c.id}`
			}));
		} catch (e) {
			console.log(e);
		}
	}
};
