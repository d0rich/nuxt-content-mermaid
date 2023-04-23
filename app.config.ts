interface MermaidConfig {
  enabled?: boolean
  color?: 'default' | '@nuxtjs/color-mode'
}

declare module 'nuxt/schema' {
  interface AppConfigInput {
    contentMermaid?: MermaidConfig
  }
}

export default defineAppConfig({
  contentMermaid: {
    enabled: true,
    color: 'default'
  }
})
