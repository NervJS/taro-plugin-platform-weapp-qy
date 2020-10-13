import Taro from '@tarojs/taro'

declare module '@tarojs/taro' {
  namespace qy {
    function canIUse (api: string): boolean
    function login (options: any): void
    function checkSession (options: any): void
    function getEnterpriseUserInfo (options: any): void
    function getAvatar (options: any): void
    function getQrCode (options: any): void
    function selectEnterpriseContact (options: any): void
    function selectExternalContact (options: any): void
    function openUserProfile (options: any): void
    function openEnterpriseChat (options: any): void
    function getCurExternalContact (options: any): void
    function shareToExternalContact (options: any): void
    function getCurExternalChat (options: any): void
    function sendChatMessage (options: any): void
    function shareToExternalChat (options: any): void
    function getContext (options: any): void
    function getNFCReaderState (options: any): void
    function startNFCReader (options: any): void
    function stopNFCReader (options: any): void
  }
}
