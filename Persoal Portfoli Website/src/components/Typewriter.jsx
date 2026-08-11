import { useEffect, useState } from 'react';

const TYPE_MS = 90;
const DELETE_MS = 45;
const HOLD_MS = 1400;

export default function Typewriter({ words }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];

    if (!deleting && text === word) {
      const hold = setTimeout(() => setDeleting(true), HOLD_MS);
      return () => clearTimeout(hold);
    }

    if (deleting && text === '') {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
      return undefined;
    }

    const tick = setTimeout(
      () =>
        setText((current) =>
          deleting ? word.slice(0, current.length - 1) : word.slice(0, current.length + 1)
        ),
      deleting ? DELETE_MS : TYPE_MS
    );
    return () => clearTimeout(tick);
  }, [text, deleting, index, words]);

  return (
    <span>
      <span className="gradient-text">{text}</span>
      <span className="cursor" aria-hidden="true" />
    </span>
  );
}
