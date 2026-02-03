# GitHub Copilot instructions for this repository 🔧

## Purpose
This repo is a personal collection of network rules and helper scripts used with OpenClash and Quantumult X. The goal of agent contributions is to keep lists consistent, validate formats, and add or update rules and small scripts without changing the repository structure.

## Project layout (quick tour) 📁
- `openclash/` — YAML rule files for OpenClash (e.g., `zhilianliebiao.yaml`, `zijianliebiao.yaml`).
- `Quantumult X/File/` — scripted rewrites for Quantumult X (`caiyun.js`).
- `Quantumult X/filter/` — rule lists for Quantumult X (`*.list`).
- Root `README.md` — short project description.

## Key formats & examples (must preserve exact syntax) ⚠️
- OpenClash YAML: keep the top-level `payload:` array and items like:
  - `- DOMAIN-SUFFIX,example.com`
  - `- IP-CIDR,66.94.0.0/19`
  Comments use `#`.

- Quantumult X lists: each line is a rule like:
  - `HOST-SUFFIX,zaobao.com.sg,PROXY`
  - `DOMAIN,gateway.icloud.com,PROXY`
  Files include comment lines beginning with `#`.

- JS scripts: standard JS with metadata header comments (author, hostmatch sections). Keep the header intact when editing.

## Conventions & constraints ✅
- Preserve file encodings (UTF-8) and line endings (CRLF on Windows is fine).
- Keep comment language and formatting; do not remove attribution headers in third-party scripts.
- When editing rule files, maintain the existing ordering and grouping semantics (e.g., keep `payload:` items together).
- Do not change the rule format (switching types or altering prefix vocabulary) as these are consumed by external tools.

## Workflows & expectations 🚦
- There are no automated builds or tests. Changes are manual and validated by the user in their router/client tooling.
- For any rule additions, include a short comment explaining the justification/source (one-line comment above the rule).
- Make small, focused commits with descriptive messages (in Chinese or English) and update `README.md` if the change affects repository intent.

## Integration points & deployment 🔗
- Files are intended to be imported into OpenClash / Quantumult X via raw file URLs or local copy-paste in the relevant apps.
- Be careful when editing IP/CIDR and SRC-IP-CIDR entries — a wrong prefix can misroute traffic.

## What an agent should do (actionable tasks) ✨
- Add/remove individual rules while preserving format and comments.
- Normalize spacing and fix obvious syntax issues (missing commas, wrong prefixes) with one-line commit messages describing the fix.
- Flag unclear entries (add a `# TODO: clarify` comment) instead of guessing intent.

## When not to modify ❌
- Don’t reformat whole files or re-order rules unless the user requests it.
- Don’t remove author headers or license/attribution comments in `caiyun.js` or other third-party snippets.

---

If any parts are unclear or you want more specific rules for commit messages, testing steps, or automated validations, tell me what you'd like changed and I will iterate. ✅