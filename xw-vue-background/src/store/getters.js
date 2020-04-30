const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  user: state => state.user.User,
  roles: state => state.user.roles,
  config: state => state.user.Config,
  permission: state => state.permission
}
export default getters
