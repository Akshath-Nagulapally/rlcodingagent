const GITHUB_REPO = "https://github.com/Akshath-Nagulapally/rlcodingagent";

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden
    >
      <path
        fillRule="evenodd"
        d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
        clipRule="evenodd"
      />
    </svg>
  );
}

const navLinks = [
  { href: "#pipeline", label: "Pipeline" },
  { href: "#formulation", label: "MDP view" },
  { href: "#outputs", label: "Outputs" },
  { href: "#use-cases", label: "Use cases" },
] as const;

const pipelineSteps = [
  {
    step: "01",
    title: "Ingest",
    body: "Snapshot commits, PR threads, CI artifacts, and review graphs with deterministic hashes so every rollout is reproducible.",
  },
  {
    step: "02",
    title: "Structure",
    body: "Lift raw events into (state, action, next-state) tuples: trees, diffs, tool calls, and human decisions become a single timeline.",
  },
  {
    step: "03",
    title: "Reward",
    body: "Compose scalar and vector rewards from tests, coverage deltas, review sentiment, latency, and optional human rankings.",
  },
  {
    step: "04",
    title: "Export",
    body: "Emit JSONL trajectories, pairwise preferences, or Gym-compatible environments wired to your existing RLHF / offline stack.",
  },
] as const;

const mdpPillars = [
  {
    tag: "State",
    title: "Repository + context",
    body: "Working tree, diagnostics, open files, CI state, and conversation snippets—everything an engineer could observe before acting.",
    accent: "from-violet-500/20 to-transparent",
    border: "hover:border-violet-400/25",
  },
  {
    tag: "Action",
    title: "Edits, commands, merges",
    body: "Patches, shell steps, issue comments, and review responses. Actions are grounded in real diffs, not synthetic tokens alone.",
    accent: "from-teal-500/20 to-transparent",
    border: "hover:border-teal-400/25",
  },
  {
    tag: "Signal",
    title: "Outcomes & preferences",
    body: "Merge vs close, green vs red CI, thumbs on reviews, revert events. Multi-objective signals stay explicit in the schema.",
    accent: "from-amber-500/15 to-transparent",
    border: "hover:border-amber-400/20",
  },
] as const;

const outputFormats = [
  {
    name: "Trajectory JSONL",
    detail: "Step-wise logs with metadata for replay and auditing.",
  },
  {
    name: "Preference pairs",
    detail: "DPO / Bradley–Terry style comparisons mined from review threads.",
  },
  {
    name: "Offline RL buffers",
    detail: "HDF5 or Lance columns aligned with FQE-safe pipelines.",
  },
  {
    name: "Env facades",
    detail: "Thin Gym wrappers that call into git + sandboxed runners.",
  },
] as const;

const ecosystem = [
  "PPO / GRPO",
  "DPO & IPO",
  "CQL / IQL",
  "Gymnasium",
  "Human feedback",
] as const;

export default function Home() {
  return (
    <div className="relative min-h-full overflow-x-hidden bg-[#04060a] text-zinc-100">
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[72px_72px] mask-[radial-gradient(ellipse_90%_60%_at_50%_-10%,#000_55%,transparent_100%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -top-48 left-1/2 h-[560px] w-[min(92vw,780px)] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(45,212,191,0.22),transparent)] blur-3xl"
        style={{ animation: "landing-shimmer 14s ease-in-out infinite" }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute top-[38%] right-[-18%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(closest-side,rgba(139,92,246,0.12),transparent)] blur-3xl"
        aria-hidden
      />

      <header className="relative z-20 border-b border-white/[0.07] bg-[#04060a]/70 backdrop-blur-md">
        <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between gap-6 px-6 sm:px-8">
          <a
            href="#top"
            className="group flex items-center gap-2 font-mono text-sm font-medium tracking-tight text-zinc-200"
          >
            <span className="inline-flex size-8 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.04] text-[10px] font-bold text-teal-300 transition-colors group-hover:border-teal-500/30">
              RL
            </span>
            <span>
              rlcoding<span className="text-teal-400">agent</span>
            </span>
          </a>
          <nav
            className="hidden items-center gap-8 text-sm text-zinc-400 lg:flex"
            aria-label="Primary"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="#pipeline"
              className="hidden text-sm text-zinc-400 transition-colors hover:text-white sm:inline lg:hidden"
            >
              Overview
            </a>
            <a
              href={GITHUB_REPO}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/[0.1] bg-white/[0.04] px-3.5 py-2 text-sm font-medium text-zinc-100 transition-colors hover:border-teal-500/35 hover:bg-white/[0.07]"
            >
              <GitHubIcon className="size-4 text-zinc-300" />
              <span className="hidden sm:inline">View on GitHub</span>
              <span className="sm:hidden">GitHub</span>
            </a>
          </div>
        </div>
      </header>

      <main id="top" className="relative z-10">
        <section className="mx-auto max-w-6xl px-6 pb-16 pt-16 sm:px-8 sm:pb-24 sm:pt-20 lg:pt-24">
          <div className="grid gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-16">
            <div>
              <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-500/25 bg-gradient-to-r from-teal-500/10 via-teal-500/5 to-transparent px-4 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-teal-200/90">
                Repositories → RL-ready data
              </p>
              <h1 className="max-w-[22ch] text-[2.35rem] font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl sm:leading-[1.02] lg:text-[3.35rem]">
                Turn GitHub history into{" "}
                <span className="bg-gradient-to-r from-teal-200 via-teal-400 to-cyan-200 bg-clip-text text-transparent">
                  reinforcement learning
                </span>{" "}
                you can actually train on.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400 sm:text-xl">
                Extract long-horizon trajectories from real engineering work:
                commits, diffs, CI, and review loops—structured as states,
                actions, and rewards instead of flattened text dumps.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <a
                  href={GITHUB_REPO}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-teal-400 px-7 text-sm font-semibold text-[#03110e] shadow-[0_0_0_1px_rgba(255,255,255,0.08)_inset,0_18px_48px_-18px_rgba(45,212,191,0.55)] transition hover:bg-teal-300"
                >
                  Read the research tooling
                  <ArrowRightIcon className="size-4" />
                </a>
                <a
                  href="#formulation"
                  className="inline-flex h-12 items-center justify-center rounded-xl border border-white/[0.12] bg-white/[0.02] px-7 text-sm font-medium text-zinc-200 transition hover:border-white/[0.2] hover:bg-white/[0.05]"
                >
                  See the MDP framing
                </a>
              </div>
              <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-white/[0.08] pt-10 sm:max-w-xl">
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                    Horizon
                  </dt>
                  <dd className="mt-1 text-lg font-semibold text-white">
                    PR-scale
                  </dd>
                  <dd className="text-xs text-zinc-500">not single tokens</dd>
                </div>
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                    Grounding
                  </dt>
                  <dd className="mt-1 text-lg font-semibold text-white">
                    Git-native
                  </dd>
                  <dd className="text-xs text-zinc-500">hashes & metadata</dd>
                </div>
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                    Stack fit
                  </dt>
                  <dd className="mt-1 text-lg font-semibold text-white">
                    Offline-first
                  </dd>
                  <dd className="text-xs text-zinc-500">JSONL / HDF5 / Gym</dd>
                </div>
              </dl>
            </div>

            <div
              className="relative rounded-2xl border border-white/[0.09] bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6 shadow-[0_32px_120px_-48px_rgba(0,0,0,0.9)] sm:p-8"
              style={{ animation: "landing-float 9s ease-in-out infinite" }}
              aria-hidden
            >
              <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-teal-400/40 to-transparent" />
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.25em] text-zinc-500">
                Conceptual flow
              </p>
              <div className="mt-8 space-y-5">
                {[
                  { label: "GitHub repo", tone: "text-zinc-200" },
                  { label: "Event graph", tone: "text-violet-200" },
                  { label: "Structured MDP", tone: "text-teal-200" },
                  { label: "RL / RLHF datasets", tone: "text-amber-100/90" },
                ].map((node, i, arr) => (
                  <div key={node.label} className="flex items-center gap-4">
                    <div
                      className={`flex min-h-[3rem] flex-1 items-center rounded-xl border border-white/[0.08] bg-[#050810]/90 px-4 py-3 text-sm font-medium ${node.tone}`}
                    >
                      {node.label}
                    </div>
                    {i < arr.length - 1 && (
                      <div className="hidden w-8 shrink-0 flex-col items-center gap-1 sm:flex">
                        <span className="h-6 w-px bg-gradient-to-b from-white/25 to-white/5" />
                        <span className="text-[10px] text-zinc-600">→</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <p className="mt-8 text-xs leading-relaxed text-zinc-500">
                Each block is a contract in the schema: provenance, actor
                identity (where allowed), and environment version travel with
                every transition.
              </p>
            </div>
          </div>
        </section>

        <section
          className="border-y border-white/[0.06] bg-[#05070d]/90 py-10 backdrop-blur-sm"
          aria-labelledby="ecosystem-heading"
        >
          <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <p
              id="ecosystem-heading"
              className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-zinc-500"
            >
              Plays nicely with
            </p>
            <ul className="flex flex-wrap gap-2 sm:justify-end">
              {ecosystem.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-white/[0.07] bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-zinc-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="pipeline"
          className="scroll-mt-24 py-20 sm:py-28"
          aria-labelledby="pipeline-heading"
        >
          <div className="mx-auto max-w-6xl px-6 sm:px-8">
            <div className="max-w-2xl">
              <h2
                id="pipeline-heading"
                className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-teal-400/90"
              >
                End-to-end pipeline
              </h2>
              <p className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                From messy version control to labeled sequences.
              </p>
              <p className="mt-4 text-base leading-relaxed text-zinc-400 sm:text-lg">
                The goal is not another static snapshot of code—it is a
                replayable decision process: what changed, why it changed, and
                which signals tell you if the change was good.
              </p>
            </div>

            <ol className="relative mt-16 grid gap-5 sm:gap-6 lg:grid-cols-4">
              <div
                className="pointer-events-none absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-teal-500/0 via-teal-500/25 to-violet-500/0 lg:block"
                aria-hidden
              />
              {pipelineSteps.map((item) => (
                <li
                  key={item.step}
                  className="group relative flex flex-col rounded-2xl border border-white/[0.07] bg-gradient-to-b from-white/[0.05] to-transparent p-6 transition duration-300 hover:border-teal-500/25 hover:shadow-[0_0_0_1px_rgba(45,212,191,0.08)]"
                >
                  <span className="font-mono text-[11px] text-zinc-500 transition-colors group-hover:text-teal-400/90">
                    {item.step}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">
                    {item.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          id="formulation"
          className="scroll-mt-24 border-t border-white/[0.06] bg-[#03050a] py-20 sm:py-28"
          aria-labelledby="formulation-heading"
        >
          <div className="mx-auto max-w-6xl px-6 sm:px-8">
            <h2
              id="formulation-heading"
              className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-violet-300/90"
            >
              MDP view
            </h2>
            <p className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              States, actions, and rewards that respect how teams ship.
            </p>
            <p className="mt-4 max-w-2xl text-zinc-400">
              Treating a repository as an environment makes offline evaluation
              honest: you can hold out merges, replay counterfactual patches,
              and attribute credit across long threads instead of a single
              completion.
            </p>
            <ul className="mt-14 grid gap-5 md:grid-cols-3">
              {mdpPillars.map((pillar) => (
                <li
                  key={pillar.tag}
                  className={`relative overflow-hidden rounded-2xl border border-white/[0.07] bg-gradient-to-b ${pillar.accent} to-[#05070f] p-6 transition ${pillar.border}`}
                >
                  <span className="font-mono text-[10px] font-semibold uppercase tracking-widest text-zinc-500">
                    {pillar.tag}
                  </span>
                  <h3 className="mt-3 text-xl font-semibold text-white">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                    {pillar.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="outputs"
          className="scroll-mt-24 py-20 sm:py-28"
          aria-labelledby="outputs-heading"
        >
          <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:items-start lg:gap-20 sm:px-8">
            <div>
              <h2
                id="outputs-heading"
                className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-teal-400/90"
              >
                What you export
              </h2>
              <p className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Artifacts that downstream trainers already expect.
              </p>
              <p className="mt-4 text-zinc-400 leading-relaxed">
                Whether you are fine-tuning with preferences or running full
                rollouts in a sandbox, the interfaces stay boring and
                explicit—so you can swap models without rewriting collectors.
              </p>
            </div>
            <ul className="divide-y divide-white/[0.06] rounded-2xl border border-white/[0.08] bg-white/[0.02]">
              {outputFormats.map((row) => (
                <li
                  key={row.name}
                  className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                >
                  <span className="text-sm font-semibold text-white">
                    {row.name}
                  </span>
                  <span className="text-sm text-zinc-500">{row.detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="use-cases"
          className="scroll-mt-24 border-y border-white/[0.06] bg-[#060910]/80 py-20 backdrop-blur-sm sm:py-28"
          aria-labelledby="use-cases-heading"
        >
          <div className="mx-auto max-w-6xl px-6 sm:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 lg:items-start">
              <div>
                <h2
                  id="use-cases-heading"
                  className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-teal-400/90"
                >
                  Where this matters
                </h2>
                <p className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Close the loop between synthetic coding tasks and production
                  behavior.
                </p>
                <p className="mt-4 text-zinc-400 leading-relaxed">
                  Public and private repos encode planning, tool use, and
                  negotiation with reviewers. Sequentializing that history
                  gives agents supervision that static benchmarks rarely
                  capture.
                </p>
              </div>
              <ul className="space-y-3">
                {[
                  "Coding agents trained on reviewer-approved diffs—not only final files.",
                  "CI repair policies with rewards tied to flaky-test recurrence and wall time.",
                  "Dependency and security upgrades with rollback-aware credit assignment.",
                  "Safety research using reverted commits, incident notes, and hotfix branches.",
                ].map((text) => (
                  <li
                    key={text}
                    className="flex gap-3 rounded-2xl border border-white/[0.06] bg-gradient-to-r from-white/[0.03] to-transparent px-4 py-4 text-sm leading-relaxed text-zinc-300"
                  >
                    <span
                      className="mt-2 size-1.5 shrink-0 rounded-full bg-gradient-to-b from-teal-300 to-teal-600"
                      aria-hidden
                    />
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section
          className="py-20 sm:py-24"
          aria-labelledby="cta-heading"
        >
          <div className="mx-auto max-w-6xl px-6 sm:px-8">
            <div className="relative overflow-hidden rounded-3xl border border-teal-500/20 bg-gradient-to-br from-teal-500/10 via-[#050a0f] to-violet-600/10 px-8 py-12 sm:px-12 sm:py-14">
              <div
                className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-teal-400/20 blur-3xl"
                aria-hidden
              />
              <div className="relative max-w-2xl">
                <h2
                  id="cta-heading"
                  className="text-2xl font-semibold tracking-tight text-white sm:text-3xl"
                >
                  Ship datasets that reviewers can trace back to a commit.
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-zinc-300 sm:text-base">
                  If you are exploring repository-level RL, start from the
                  schema and ingestion assumptions—then iterate on reward design
                  with the same rigor you apply to model architecture.
                </p>
                <a
                  href={GITHUB_REPO}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-teal-200 transition hover:text-white"
                >
                  Open the repository
                  <ArrowRightIcon className="size-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-white/[0.06] bg-[#020308] py-14">
          <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 sm:flex-row sm:items-end sm:justify-between sm:px-8">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-zinc-600">
                rlcodingagent
              </p>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-zinc-500">
                Research-oriented tooling to convert GitHub activity into
                structured RL and preference data—with provenance and replay as
                first-class concerns.
              </p>
            </div>
            <a
              href={GITHUB_REPO}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-zinc-300 transition hover:text-teal-300"
            >
              <GitHubIcon className="size-4" />
              Akshath-Nagulapally / rlcodingagent
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}
