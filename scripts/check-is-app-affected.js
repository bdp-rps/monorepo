const childProcess = require('child_process')
const path = require('path')

// https://vercel.com/support/articles/how-do-i-use-the-ignored-build-step-field-on-vercel
const ABORT_BUILD_CODE = 0
const CONTINUE_BUILD_CODE = 1

const IMPORTANT_ROOT_FILES = [
  'package.json',
  'pnpm-lock.yaml',
  'pnpm-workspace.yaml',
  'turbo.json',
  'scripts/check-is-app-affected.js',
]

const run = ({ appDirectoryName }) => {
  // get all file names changed in last commit
  const fileNameList = childProcess
    .execSync('git diff --name-only HEAD~1')
    .toString()
    .trim()
    .split('\n')

  // check if any files in the app, or in any shared packages have changed
  const shouldBuild = fileNameList.some(
    (file) =>
      file.startsWith(`apps/${appDirectoryName}`) ||
      file.startsWith('packages/') ||
      IMPORTANT_ROOT_FILES.some((importantRootFile) => {
        return file.startsWith(importantRootFile)
      })
  )

  if (shouldBuild) {
    return
  }

  return new Error('Changes not found')
}

const result = run({
  appDirectoryName: process.argv[2] || path.basename(path.resolve()),
})
if (result instanceof Error) {
  // eslint-disable-next-line no-console
  console.error(result.message)
  process.exit(ABORT_BUILD_CODE)
} else {
  process.exit(CONTINUE_BUILD_CODE)
}
