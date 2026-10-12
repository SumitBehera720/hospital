export default function StoryChapterIndicator({ chapters, index }) {
  const chapter = chapters[index];
  return (
    <div className="story-chapter">
      <p className="story-chapter__count" aria-hidden="true">
        {index + 1} of {chapters.length}
      </p>
      {/* Keyed so the text fades when the chapter changes in either direction. */}
      <div key={chapter.id} className="story-chapter__text" aria-live="polite">
        <h2 className="story-chapter__title">{chapter.title}</h2>
        <p className="story-chapter__caption">{chapter.caption}</p>
      </div>
    </div>
  );
}
