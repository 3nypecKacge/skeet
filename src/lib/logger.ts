import chalk from 'chalk'

export module Logger {
  export const successHex = chalk.hex('#39A845')
  export const warningHex = chalk.hex('#FFD02E')
  export const errorHex = chalk.hex('#B5332E')
  export const syncHex = chalk.hex('#3073B7')
  export const greyHex = chalk.hex('#BEBDBD')
  export const indigoHex = chalk.hex('#3950A0')
  export const pinkHex = chalk.hex('#D8A1C4')

  export const normal = (text: string) => {
    console.log(chalk.white(text))
  }

  export const success = (text: string) => {
    console.log(successHex(text))
  }

  export const warning = (text: string) => {
    console.log(warningHex(text))
  }

  export const error = (text: string) => {
    console.log(errorHex(text))
  }

  export const errorString = (text: string) => {
    return errorHex(text)
  }

  export const sync = (text: string) => {
    console.log(syncHex(text))
  }

  export const grey = (text: string) => {
    console.log(greyHex(text))
  }

  export const successCheck = (text: string) => {
    const check = successHex('✔')
    const plainText = chalk.white(text)
    const textLog = `${check} ${plainText} 🎉`
    console.log(textLog)
  }

  export const skeetAA = () => {
    const row1SKEE = Logger.syncHex('   _____ __ __ ____________')
    const row1T = Logger.errorHex('______')
    const row2SKEE = Logger.syncHex('  / ___// //_// ____/ ____/')
    const row2T = Logger.errorHex('_  __/')
    const row3SKEE = Logger.syncHex('  \\__ \\/ ,<  / __/ / __/ ')
    const row3T = Logger.errorHex('  / / ')
    const row4SKEE = Logger.syncHex(' ___/ / /| |/ /___/ /___ ')
    const row4T = Logger.errorHex(' / /    ')
    const row5SKEE = Logger.syncHex('/____/_/ |_/_____/_____/')
    const row5T = Logger.errorHex(' /_/    🛠️🛠️')
    console.log(`${row1SKEE}${row1T}`)
    console.log(`${row2SKEE}${row2T}`)
    console.log(`${row3SKEE}${row3T}`)
    console.log(`${row4SKEE}${row4T}`)
    console.log(`${row5SKEE}${row5T}`)
  }

  export const welcomText = (appName: string) => {
    const title = warningHex(
      '\n⚡⚡⚡ Buidl TypeScript Fullstack App Fast ⚡⚡⚡'
    )
    const text = `
$ cd ${appName}
$ skeet s
Go To : http://127.0.0.1:4000/`
    console.log(title)
    console.log(greyHex(text))
  }

  export const cmText = () => {
    const text = `
    💃🤝🕺 We Support OpenSource Software Comunities 💃🤝🕺
  Why?  - OpenSouce Software Comunities should be deserved more 💎
  How?  - Incentivize for OpenSource Software Developments 💰
  What? - Solve/Create GitHub Issues as always 🛠️
  Epics Alpha: https://alpha.epics.dev/en/how-it-works/
  `
    console.log(successHex(text))
  }

  export const projectIdNotExistsError = (projectId: string) => {
    try {
      Logger.warning('⚠️ Project ID with that name does not exist ⚠️\n')
      Logger.normal(
        `Please check the project ID from Google Cloud. \n\nex) \`skeet-app\` might be \`skeet-app-123456\`.`
      )
      throw new Error(`Project ID ${projectId} does not exist`)
    } catch (error) {
      throw new Error(`projectIdNotExistsLog: ${error}`)
    }
  }

  export const dnsSetupLog = () => {
    Logger.warning(
      `⚠️ Copy nameServer's addresses above and paste them to your DNS settings ⚠️`
    )
    Logger.warning(
      '\n\n👷 https will be ready in about an hour after your DNS settings 👷\n\n'
    )
    Logger.successCheck(`Load Balancer has been created successfully`)
  }

  export const confirmIfFirebaseSetupLog = (projectId: string) => {
    Logger.warning(
      `\n⚠️ Please make sure if you create Firestore & FirebaseAuth ⚠️\n`
    )
    Logger.normal(`Click the link to check 👇`)
    Logger.normal(
      `Firestore: https://console.firebase.google.com/project/${projectId}/firestore`
    )
    Logger.normal(
      `FirebaseAuth: https://console.firebase.google.com/project/${projectId}/authentication\n`
    )
    Logger.normal(
      `Login Setup:\n\n$ gh auth login\n$ gcloud auth application-default login\n$ gcloud auth login\n$ fireabse login\n`
    )
    Logger.normal(`📗 Doc: https://skeet.dev/doc/backend/initial-deploy/\n`)
  }
}
