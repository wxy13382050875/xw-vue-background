import defaultSettings from '@/settings'

const title = defaultSettings.title || '官渡区“政治生态”信息系统'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
