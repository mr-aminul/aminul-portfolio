"use client";

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="btn-ghost !px-3 !py-2 text-sm"
    >
      Print
    </button>
  );
}
