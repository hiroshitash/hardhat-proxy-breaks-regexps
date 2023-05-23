import { default as hre } from 'hardhat'
import { HardhatEthersHelpers } from '@nomiclabs/hardhat-ethers/src/types'
import { ethers as ethersLib } from 'ethers'

import "./type-extensions"


type HardhatRuntimeEnvironment = typeof hre & {
  ethers: typeof ethersLib & HardhatEthersHelpers
}
const ethers = (<HardhatRuntimeEnvironment>hre).ethers

// Hardhat ethers provider no worky
const provider = ethers.provider

// Regular ethers provider worky
// const provider = new ethersLib.providers.AlchemyProvider(
//   ethers.provider.network,
//   'wEsKScvVDMT5I71vL4oqc7zrTcnAOPa-'
// )

;(async (hre) => {
  try {
    const reg: RegExp = (<HardhatRuntimeEnvironment>hre).userConfig.regExpField as RegExp

    console.log("reg.test('abc')", reg.test('abc'))
    console.log("reg.test('abbc')", reg.test('abbc'))
    console.log("reg.test('ac')", reg.test('ac'))

  } catch (error) {
    console.log(`Error: ${(<Error>error).message}`)
  }
})(hre)
