---
name: figma-mcp-unavailable-in-subagent
description: RESOLVED 2026-07-13 — was a stale tool-name mismatch in this agent's own frontmatter, not a real platform limitation. Always re-probe.
metadata:
  type: project
---

Previously (through 2026-06-18) calls to `get_design_context`/`get_screenshot` failed with "No such tool available" using names like `mcp__claude.ai_Figma__*` / `mcp__figma__*`.

**Root cause found 2026-07-13:** the `tools:` frontmatter in `.claude/agents/figma-implementer.md` (and `qa-reporter.md`, `token-checker.md`) listed the wrong MCP tool prefix (`mcp__figma__*`) — the actual server exposes them as `mcp__plugin_figma_figma__*`. Because the allowed-tools list didn't match any real tool name, the subagent was never bound to the Figma tools at all, no matter what the runtime otherwise supported. This was NOT a platform-level subagent restriction — it was a typo in this repo's own agent config.

**Why the old memory was wrong:** the failure was reproducible every time (hence looked like a hard platform limit), but the actual cause was static config, so fixing the frontmatter fixes it permanently — it doesn't need re-probing per session once the prefix is confirmed correct.

**How to apply:** The three agent config files now use `mcp__plugin_figma_figma__*`. If `get_design_context`/`get_screenshot`/`get_metadata`/`get_variable_defs` ever error again with "no such tool", check `tools:` in this agent's own frontmatter file FIRST (compare against the actual deferred-tool names surfaced in the system reminder) before concluding the platform blocks subagent access. Do not re-add a blanket "Figma MCP is unavailable" memory without checking the frontmatter.
