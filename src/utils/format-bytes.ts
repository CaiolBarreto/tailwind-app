export function formatBytes(bytes: number) {
  const units = ['B', 'KB', 'MB', 'GB']
  let unitIndex = 0

  while (bytes >= 1024 && unitIndex < units.length - 1) {
    bytes /= 1024
    unitIndex++
  }

  return `${bytes.toFixed(1)}${units[unitIndex]}`
}
