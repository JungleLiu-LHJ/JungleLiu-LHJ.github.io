import rss from '@astrojs/rss';
import { getPublishedPosts } from '../lib/posts';
export async function GET(context) {
  const posts = await getPublishedPosts();
  return rss({ title: 'Your Name · Backend Engineer', description: 'Writing about backend engineering, databases, distributed systems, and AI agents.', site: context.site, items: posts.map((post) => ({ title: post.data.title, description: post.data.description, pubDate: post.data.date, link: `/blog/${post.id}/` })) });
}
