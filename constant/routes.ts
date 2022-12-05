const Routes = {
  home: () => '/',
  workspaces: () => '/workspaces',
  workspaceDashboard: (workspaceId: string) => `/w/${workspaceId}`,
  workspaceTasks: (workspaceId: string) => `/w/${workspaceId}/t`,
  workspaceMembers: (workspaceId: string) => `/w/${workspaceId}/m`,
};

export default Routes;
