import { execSyncCmd, getNetworkConfig } from '@/lib'

export const connectVpc = async (projectId: string, appName: string) => {
  try {
    const networkConfig = getNetworkConfig(projectId, appName)
    const shCmd = [
      'gcloud',
      'services',
      'vpc-peerings',
      'connect',
      '--service',
      'servicenetworking.googleapis.com',
      '--ranges',
      networkConfig.ipRangeName,
      '--network',
      networkConfig.networkName,
      '--project',
      projectId,
    ]
    execSyncCmd(shCmd)
  } catch (error) {
    throw new Error(`connectVpc: ${error}`)
  }
}
