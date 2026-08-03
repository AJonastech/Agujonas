import { useEffect, useState } from "react";
import styles from "./github.module.scss";

const USERNAME = "AJonastech";

// Deterministic fallback grid (53 weeks x 7 days) so the section always
// renders something on-brand even if the API is unreachable.
function buildFallback() {
  let seed = 424242;
  const rand = () => {
    seed = (seed * 1103515245 + 12345) & 0x7fffffff;
    return seed / 0x7fffffff;
  };
  const weeks = [];
  let total = 0;
  for (let w = 0; w < 53; w++) {
    const days = [];
    for (let d = 0; d < 7; d++) {
      const r = rand();
      const level = r > 0.82 ? 4 : r > 0.66 ? 3 : r > 0.45 ? 2 : r > 0.2 ? 1 : 0;
      total += level;
      days.push({ level });
    }
    weeks.push(days);
  }
  return { weeks, total: total * 3, live: false };
}

// Map an API contribution count to a 0-4 intensity level.
function levelFor(count) {
  if (count <= 0) return 0;
  if (count < 3) return 1;
  if (count < 6) return 2;
  if (count < 10) return 3;
  return 4;
}

const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

export const GithubContributions = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    let active = true;
    // Public, key-less contributions API. If it fails, fall back gracefully.
    fetch(`https://github-contributions-api.jogruber.de/v4/${USERNAME}?y=last`)
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((json) => {
        if (!active || !json?.contributions) throw new Error("no data");
        // Group flat day list into weeks of 7 for the grid.
        const days = json.contributions.map((c) => ({
          level: levelFor(c.count),
          date: c.date,
        }));
        const weeks = [];
        for (let i = 0; i < days.length; i += 7) {
          weeks.push(days.slice(i, i + 7));
        }
        const total = Object.values(json.total || {}).reduce(
          (a, b) => a + b,
          0
        );
        if (active) setData({ weeks, total, live: true });
      })
      .catch(() => {
        if (active) setData(buildFallback());
      });
    return () => {
      active = false;
    };
  }, []);

  const grid = data || buildFallback();

  return (
    <div className={styles.wrap}>
      <div className={styles.scroll}>
        <div className={styles.grid}>
          {grid.weeks.map((week, wi) => (
            <div key={wi} className={styles.week}>
              {week.map((day, di) => (
                <span
                  key={di}
                  className={styles.cell}
                  data-level={day.level}
                  title={day.date || ""}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.footer}>
        <span className={styles.total}>
          {grid.total} contributions in the last year
          {data && !data.live ? " (sample)" : ""}
        </span>
        <span className={styles.legend}>
          Less
          <span className={styles.cell} data-level={0} />
          <span className={styles.cell} data-level={1} />
          <span className={styles.cell} data-level={2} />
          <span className={styles.cell} data-level={3} />
          <span className={styles.cell} data-level={4} />
          More
        </span>
      </div>
    </div>
  );
};
