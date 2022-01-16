import { Content, formatContent } from "../../models/content";

export default {
  sendEmail: async (content: Content, note?: string) => {
    const text = `${note}
${content.url}`;
    const body = {
      to: "alexisloiselle97@gmail.com",
      from: "jellyfin@cacou.tk",
      subject: `Request: ${formatContent(content)}`,
      text,
      html: text,
    };

    const response = await fetch("https://emby.cacou.tk/request", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await response.text();
  },
};
