type ColorType = 'default' | '@nuxtjs/color-mode'

interface MermaidConfig {
  enabled?: boolean
  color?: ColorType
  spinnerComponent?: string
}

declare module 'nuxt/schema' {
  interface AppConfigInput {
    contentMermaid?: MermaidConfig
  }
}

export default defineAppConfig({
  contentMermaid: {
    enabled: true,
    color: 'default' as ColorType,
    spinnerComponent: 'DAnimationSpinner'
  }
})
