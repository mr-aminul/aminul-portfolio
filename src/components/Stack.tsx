import { TechBadge } from "@/components/TechBadge";
import { stack } from "@/data/site";

const groups = [
  { label: "Languages", items: stack.languages },
  { label: "Frontend", items: stack.frontend },
  { label: "Backend", items: stack.backend },
  { label: "Data", items: stack.data },
  { label: "Cloud", items: stack.cloud },
  { label: "Platforms", items: stack.platforms },
  { label: "AI & automation", items: stack.automation },
  { label: "Design", items: stack.design },
] as const;

export function Stack() {
  return (
    <section
      id="stack"
      aria-label="Skills and tools"
      className="section border-t border-border px-5 md:px-6"
    >
      <div className="reveal mx-auto max-w-[720px]">
        <h2 className="section-title">Skills & Tools</h2>

        <div className="space-y-7">
          {groups.map((group) => (
            <div key={group.label}>
              <p className="section-label">{group.label}</p>
              <ul className="mt-2 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item}>
                    <TechBadge label={item} size="md" />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
