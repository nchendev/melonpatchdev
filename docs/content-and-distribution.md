# Content and Distribution Guidelines

Internal reference for how MelonPatch approaches content creation, cross-posting, and online presence.

## Content Strategy

### Blog (melonpatch.dev/blog)

The blog is the canonical home for all long-form content. Every piece of written content should originate here first.

**When to post:**
- Product updates (features, launches, milestones)
- Meaningful team updates
- Design or technical decisions worth sharing
- Lessons learned during development

**When NOT to post:**
- Don't post on a schedule just to have activity. Filler content hurts more than silence.
- Don't write "SEO content" that exists only to rank. Write for humans who care about what we're building.

**Voice:**
- Excited but straightforward. Not corporate, not tryhard-casual.
- Avoid em dashes. Avoid emojis in written content.
- Short paragraphs. Say what you mean, then stop.

### Why canonical content lives on our domain

Search engines and LLMs index and attribute content to the domain it lives on. If the full post lives on LinkedIn or Medium, those platforms get the SEO value, not us. Our site is our home base. Everything else is distribution.

## Cross-Posting and Social

### The pattern

1. Publish the full post on melonpatch.dev/blog
2. Share a teaser or condensed version on social platforms with a link back
3. If reposting full text elsewhere (like a LinkedIn article), publish it 1-2 days after the original and include "Originally published at melonpatch.dev" at the top

### Platform-specific notes

**Twitter/X**
- Best channel for indie dev and early adopter audiences.
- Good for: product updates, dev logs, building in public, short takes.
- Keep tweets concise. Link to blog for the full story.
- Engage with the indie dev and language learning communities genuinely, not as a brand account broadcasting into the void.

**LinkedIn**
- Better for professional audiences and B2B. Secondary priority for a consumer iOS app.
- LinkedIn articles (full reposts) are fine occasionally but always link back to the canonical version.
- Short-form LinkedIn posts with a link to the blog post work well for reach.

**Reddit / Hacker News**
- Higher leverage than social media for a startup. One genuine Show HN or relevant subreddit discussion drives more meaningful traffic than months of tweeting.
- Never spam. Only post when there's something genuinely worth sharing (launch, interesting technical decision, open-source contribution).
- Engage in comments. Reddit and HN users can smell a drive-by promotion.
- Relevant subreddits: r/languagelearning, r/learnprogramming, r/indiedev, r/swift, r/iOSProgramming.

**Discord**
- We have a Discord linked from the site. A small, engaged community is more valuable than a large passive following on any other platform.
- Use Discord for direct user feedback, beta testing, and building relationships with early users.

**Medium / Substack**
- Avoid as primary platforms. They build someone else's audience, not ours.
- If we ever cross-post to Medium, always set the canonical URL to our blog.

## SEO and LLM Discoverability

### What we've already done (good foundation)

- Structured data (JSON-LD) for Organization, SoftwareApplication, and FAQPage
- `llms.txt` for LLM-specific discoverability
- Semantic HTML with sr-only machine-readable descriptions
- OpenGraph and Twitter Card meta tags on every page
- Sitemap and robots.txt (explicitly allowing AI crawlers)
- Static HTML with fast load times (no client-side rendering)

### What actually moves the needle

Ranked by impact:

1. **Ship the product.** An App Store listing that links back to the site is worth more than any on-page optimization. App Store pages get crawled, linked to, and cited by LLMs constantly.
2. **Write real content.** Blog posts that demonstrate genuine expertise in our space (language learning, AI-assisted reading, ebook tech). LLMs and search engines both prioritize substantive, original content.
3. **Get backlinks from real places.** Product Hunt, Indie Hackers, HN Show, language learning communities. One organic mention from someone who found the product useful outweighs months of on-page SEO.
4. **Internal linking.** As we add pages, cross-link between them naturally (blog posts link to product pages, product pages link to relevant blog posts).
5. **Page speed and mobile UX.** We're in good shape with static HTML and built Tailwind. Test on real devices periodically.

### What NOT to waste time on

- Keyword stuffing or writing content "for SEO"
- Buying backlinks or submitting to link directories
- Obsessing over meta tag wording beyond the basics
- Adding more structured data schemas beyond what we have
- "Optimizing for LLMs" with tricks. LLMs pull from the same web content search engines do. Good content is good content.

## Summary

Write good things on our site. Share them where people are. Don't overthink it. Focus on making a product worth talking about.
