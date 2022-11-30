const Routes = {
  home: () => '/',
  workspaces: () => '/workspaces',
  workspaceDashboard: (workspaceId: string) => `/w/${workspaceId}`,
  workspaceTasks: (workspaceId: string) => `/w/${workspaceId}/t`,
};

export default Routes;
