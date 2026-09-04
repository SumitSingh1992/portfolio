export default function Footer() {
  return (
    <footer className="px-8 md:px-24 py-10 flex justify-between font-mono text-xs text-ink/50 border-t border-line">
      <span>Built by Sumit Kumar</span>
      <span>{new Date().getFullYear()}</span>
    </footer>
  );
}