// Builds the two upload files from the same skills:
//   dist/cco-openai-plugin.zip      the OpenAI plugin (Plugin Directory, "With MCP"): plugin.json, mcp.json, skills/, assets/
//   dist/cco-gtm-playbook-skill.zip the Claude app skill: app-skill/SKILL.md + every skill body as steps/<name>.md
// Run: node scripts/build.mjs   (needs bsdtar: tar.exe on Windows 10+, the default tar on macOS)
import { cpSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync, existsSync } from "node:fs"
import { join } from "node:path"
import { execFileSync } from "node:child_process"

const root = new URL("..", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1")
const build = join(root, "build")
const dist = join(root, "dist")
const tar = process.platform === "win32" ? "C:\\Windows\\System32\\tar.exe" : "tar"
rmSync(build, { recursive: true, force: true })
mkdirSync(dist, { recursive: true })

const skills = readdirSync(join(root, "skills")).filter((d) => existsSync(join(root, "skills", d, "SKILL.md")))

// the two manifests must carry the same version
const version = JSON.parse(readFileSync(join(root, "plugin.json"), "utf8")).version
const claudeVersion = JSON.parse(readFileSync(join(root, ".claude-plugin", "plugin.json"), "utf8")).version
if (!version || !claudeVersion) throw new Error("both manifests need a version")

function zip(dir, top, out) {
  rmSync(out, { force: true })
  execFileSync(tar, ["-a", "-c", "-f", out, "-C", dir, top], { stdio: "inherit" })
}

// 1. OpenAI plugin: one top-level folder, nothing beside it
const oai = join(build, "openai", "cco")
mkdirSync(oai, { recursive: true })
for (const f of ["plugin.json", "mcp.json", "LICENSE"]) cpSync(join(root, f), join(oai, f))
cpSync(join(root, "assets"), join(oai, "assets"), { recursive: true })
for (const s of skills) cpSync(join(root, "skills", s), join(oai, "skills", s), { recursive: true })
zip(join(build, "openai"), "cco", join(dist, "cco-openai-plugin.zip"))

// 2. Claude app skill: the bodies without their front matter
const app = join(build, "app", "cco-gtm-playbook")
mkdirSync(join(app, "steps"), { recursive: true })
cpSync(join(root, "app-skill", "SKILL.md"), join(app, "SKILL.md"))
for (const s of skills.filter((s) => s !== "start-here")) {
  const body = readFileSync(join(root, "skills", s, "SKILL.md"), "utf8").replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n+/, "")
  writeFileSync(join(app, "steps", `${s}.md`), body)
}
zip(join(build, "app"), "cco-gtm-playbook", join(dist, "cco-gtm-playbook-skill.zip"))

rmSync(build, { recursive: true, force: true })
console.log(`built ${version}: dist/cco-openai-plugin.zip (${skills.length} skills), dist/cco-gtm-playbook-skill.zip`)
