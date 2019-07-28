export default {
  block: {defaultGitUrl: 'https://g.hz.netease.com/overmind/umi-block'},
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
