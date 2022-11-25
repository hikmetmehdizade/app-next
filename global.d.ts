declare global {
  interface Window {
    breadcrumbsState: import('./components/common/breadcrumb/Breadcrumb').BreadcrumbItem[];
  }
}
