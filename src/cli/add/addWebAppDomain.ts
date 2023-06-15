import { createRecord } from '@/cli'
import { importConfig } from '@/index'
import fs from 'fs'
import { SKEET_CONFIG_PATH, getNetworkConfig } from '@/lib/getSkeetConfig'
import { Logger } from '@/lib/logger'
import { getFunctions } from '@/lib/getDirs'

export const addWebAppDomain = async (appDomain: string, ip: string) => {
  try {
    const skeetConfig = await importConfig()
    const { zoneName } = await getNetworkConfig(
      skeetConfig.app.projectId,
      skeetConfig.app.name
    )
    await createRecord(skeetConfig.app.projectId, zoneName, appDomain, ip)
    await addAppDomainToSkeetConfig(appDomain)
    const functions = await getFunctions()
    for (const func of functions) {
      await addAppNameToSkeetOptions(skeetConfig.app.name, func)
    }
  } catch (error) {
    throw new Error(`addWebAppDomain: ${error}`)
  }
}

const addAppDomainToSkeetConfig = async (appDomain: string) => {
  try {
    const appJson = fs.readFileSync(SKEET_CONFIG_PATH)
    const newAppJson = JSON.parse(String(appJson))
    newAppJson.app.appDomain = appDomain
    fs.writeFileSync(SKEET_CONFIG_PATH, JSON.stringify(newAppJson, null, 2))
    Logger.successCheck(`Successfully Updated ${SKEET_CONFIG_PATH}`)
  } catch (error) {
    throw new Error(`addAppDomainToSkeetConfig: ${error}`)
  }
}

const addAppNameToSkeetOptions = async (
  appName: string,
  functionName: string
) => {
  try {
    const filePath = `./functions/${functionName}/skeetOptions.json`
    const jsonFile = fs.readFileSync(filePath)
    const skeetOptions = JSON.parse(String(jsonFile))
    skeetOptions.name = appName
    fs.writeFileSync(filePath, JSON.stringify(skeetOptions, null, 2))
  } catch (error) {
    throw new Error(`addAppNameToSkeetOptions: ${error}`)
  }
}
