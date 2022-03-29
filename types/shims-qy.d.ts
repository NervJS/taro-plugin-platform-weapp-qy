import Taro from '@tarojs/taro'

declare module '@tarojs/taro' {
  interface qy {
    canIUse (api: string): boolean
    login (options: any): void
    checkSession (options: any): void
    getEnterpriseUserInfo (options: any): void
    getAvatar (options: any): void
    getQrCode (options: any): void
    selectEnterpriseContact (options: any): void
    selectExternalContact (options: any): void
    openUserProfile (options: any): void
    openEnterpriseChat (options: any): void
    getCurExternalContact (options: any): void
    shareToExternalContact (options: any): void
    getCurExternalChat (options: any): void
    sendChatMessage (options: any): void
    shareToExternalChat (options: any): void
    getContext (options: any): void
    getNFCReaderState (options: any): void
    startNFCReader (options: any): void
    stopNFCReader (options: any): void
  }
  interface TaroStatic {
    qy: qy
  }
}
