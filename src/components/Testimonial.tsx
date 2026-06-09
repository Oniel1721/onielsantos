export default function Testimonial({
  body,
  name,
  position,
}: {
  body: string;
  name: string;
  position: string;
}) {
  return (
    <article className="testimonial">
      <q className="testimonial-body">{body}</q>
      <footer className="testimonial-footer">
        <cite className="testimonial-cite">
          {name} - <span>{position}</span>
        </cite>
      </footer>
    </article>
  );
}
