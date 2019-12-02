// There are no typings for this library, and they are not really needed for now
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import CMS from 'netlify-cms-app'
import ToolPreview from './previews/ToolPreview'

// Register Previews
CMS.registerPreviewTemplate('tool', ToolPreview)
