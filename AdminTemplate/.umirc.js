export default {
  block: {defaultGitUrl: 'https://github.com/xuezhouappdev/umi-block'},
  plugins: [
    ['umi-plugin-block-dev', {
    }],
    ['umi-plugin-react', {
      dva: true,
      locale: true,
      antd: true,
    }]
  ],
}
