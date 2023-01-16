import { atom } from "recoil";

export const ListState = atom({
    key: "LIST_STATE",
    default: [
        [
          "硬碟(1TB)",
          "2.5吋硬碟(1TB)",
          "SATA SSD(1TB)",
          "SATA SSD 架子",
          "顯示卡 GT1030",
          "M.2 SSD(500GB)",
          "PCIE 2埠 RS232擴充卡",
        ],
        [
          "滑鼠",
          "滑鼠墊",
          "鍵盤",
          "短鍵盤",
          "數字鍵盤",
          "無線滑鼠",
          "無線鍵盤滑鼠",
          "喇叭",
          "麥克風",
          "USB網卡",
          "耳麥",
          "讀卡機",
          "無限USB網卡",
          "視訊鏡頭",
          "USB HUB 4 Ports",
          "USB 音效卡",
        ],
        [
          "USB公 轉 USB母(3M)",
          "USB公 轉 Mini 5P公(1.8M)",
          "USB公 轉 Micro B公(1.8M)",
          "USB公 轉 RS232(COM)",
          "HDMI公 轉 VGA母",
          "DP公 轉 HDMI母",
          "DVI公 轉 VGA母",
          "Lightning公 轉 HDMI",
        ],
        ["VGA線(5M)", "HDMI線(2M)", "HDMI線(5M)", "HDMI線(10M)"],
        [
          "M404/M402 黑白印表機",
          "M479 彩色事務機",
          "M454 彩色印表機",
          "M454 彩色印表機",
        ],
        [
          "USB HUB 7 Ports",
          "USB 充電頭 雙出",
          "USB 高速印表機伺服器",
          "IPod 保護套",
          "4 Ports 網路HUB",
        ],
      ]
})
export const InventoryClassificationState = atom({
    key: "INVENTORYCLASSIFICATION_STATE",
    default: [
        "電腦硬體",
        "電腦周邊",
        "轉接器材",
        "線材",
        "印表機",
        "其他",
      ]
})
export const userState = atom({
  key: "USERNAME_STATE",
  default: ""
})