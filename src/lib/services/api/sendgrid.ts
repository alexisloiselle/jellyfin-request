import type { Content } from '../../models/content';
import { formatContent } from '../../models/content';

const url = 'https://emby.cacou.tk/request';
const to = 'alexisloiselle97@gmail.com';
const from = 'jellyfin@cacou.tk';

export default {
	sendEmail: async (content: Content, note?: string): Promise<string> => {
		const text = `
<i style="font-size: 20px;">
  ${note}
</i>
<br/>
<span style="font-size: 10px;">
  ${content.url}
</span>
`;
		const body = {
			to,
			from,
			subject: `Request: ${formatContent(content)}`,
			text,
			html: text
		};

		const response = await fetch(url, {
			method: 'POST',
			body: JSON.stringify(body),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		return await response.text();
	}
};
