import { execSyncCmd, getNetworkConfig } from '@/lib'

export const updateSecurityPolicyRule = (
  projectId: string,
  securityPolicyName: string,
  priority: string = '1000',
  options: { [key: string]: string } = {},
) => {
  const shCmd = [
    'gcloud',
    'compute',
    'security-policies',
    'rules',
    'update',
    priority,
    '--security-policy',
    securityPolicyName,
    '--project',
    projectId,
  ]
  if (Object.keys(options).length !== 0) {
    for (const [key, value] of Object.entries(options)) {
      shCmd.push(`--${key}=${value}`)
    }
  }
  execSyncCmd(shCmd)
}
