import articlesData from './articles.json';

/**
 * Get all articles sorted by date (newest first)
 */
export function getAllArticles() {
  return articlesData.sort((a, b) => new Date(b.date) - new Date(a.date));
}

/**
 * Get article by slug
 */
export function getArticleBySlug(slug) {
  return articlesData.find(article => article.slug === slug);
}

/**
 * Get latest articles (limit)
 */
export function getLatestArticles(limit = 3) {
  return getAllArticles().slice(0, limit);
}

/**
 * Format date for display
 */
export function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
}

