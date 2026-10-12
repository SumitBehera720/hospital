import { useState } from 'react';
import { ArrowRight, Clock, Calendar, X } from 'lucide-react';
import { BLOG_POSTS } from '../data/healthcareData.js';

export default function BlogSection() {
  const [activeArticle, setActiveArticle] = useState(null);

  return (
    <section id="blog" className="siza-section">
      <div className="siza-container">
        <div style={{ textAlign: 'center', maxWidth: '48rem', margin: '0 auto' }}>
          <span className="siza-eyebrow">Health Insights</span>
          <h2 className="siza-heading">Latest from Our Clinical Blog</h2>
          <p className="siza-lead">
            Expert medical tips, patient guides, and clinical insights on home healthcare, IV infusions, and post-hospital recovery in India.
          </p>
          <span className="siza-divider" />
        </div>

        <div className="siza-blog-grid">
          {BLOG_POSTS.map((post) => (
            <article key={post.id} className="siza-blog-card">
              <div className="siza-blog-card__media">
                <img src={post.image} alt={post.title} loading="lazy" />
                <span className="siza-blog-card__badge">{post.category}</span>
              </div>

              <div className="siza-blog-card__body">
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.6rem', fontSize: '0.785rem', color: 'var(--siza-text-muted)' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                    <Calendar size={13} />
                    <span>{post.date}</span>
                  </span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                    <Clock size={13} />
                    <span>{post.readTime}</span>
                  </span>
                </div>

                <h3 className="siza-blog-card__title">{post.title}</h3>
                <p className="siza-blog-card__excerpt">{post.excerpt}</p>

                <button
                  type="button"
                  className="siza-blog-card__link"
                  onClick={() => setActiveArticle(post)}
                >
                  <span>Read full guide</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Article Reader Modal */}
      {activeArticle && (
        <div className="siza-modal-backdrop" onClick={() => setActiveArticle(null)}>
          <div className="siza-modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="siza-modal-close"
              onClick={() => setActiveArticle(null)}
              aria-label="Close article modal"
            >
              <X size={20} />
            </button>

            <div style={{ aspectRatio: '16/9', borderRadius: '8px', overflow: 'hidden', marginBottom: '1.25rem' }}>
              <img
                src={activeArticle.image}
                alt={activeArticle.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            <span className="siza-eyebrow">{activeArticle.category} · {activeArticle.readTime}</span>
            <h3 className="siza-heading" style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>
              {activeArticle.title}
            </h3>

            <div style={{ fontSize: '0.95rem', lineHeight: '1.75', color: 'var(--siza-text)' }}>
              <p style={{ marginBottom: '1rem' }}>{activeArticle.content}</p>
              <p style={{ color: 'var(--siza-text-muted)' }}>
                Have questions regarding home clinical management for you or a loved one? Contact SiZa Healthcare's 24/7 medical desk to speak with a physician.
              </p>
            </div>

            <div style={{ marginTop: '1.75rem', borderTop: '1px solid var(--siza-border)', paddingTop: '1.25rem' }}>
              <button
                type="button"
                className="siza-btn-primary"
                onClick={() => setActiveArticle(null)}
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
